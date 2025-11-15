// src/pages/PaymentStatus.tsx
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const PaymentStatus: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order_id");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!orderId) {
      setError("No order_id in query string.");
      return;
    }

    const fetchStatus = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:4000/verify?order_id=${encodeURIComponent(orderId)}`);
        const json = await res.json();
        if (!res.ok) {
          setError(JSON.stringify(json));
        } else {
          setOrder(json.order || json);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch order");
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, [orderId]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Payment Status</h1>

      {!orderId && <p className="text-red-600">No order id provided.</p>}

      {loading && <p>Loading order details…</p>}

      {error && <pre className="bg-red-50 border p-4 rounded text-red-700">{error}</pre>}

      {order && (
        <div className="bg-white shadow rounded p-4">
          <p><strong>Order ID:</strong> {order.order_id || order.data?.order_id}</p>
          <p><strong>Status:</strong> {order.order_status}</p>
          <p><strong>Amount:</strong> {order.order_amount} {order.order_currency}</p>

          <pre className="mt-4 overflow-auto text-sm bg-gray-50 p-3 rounded">
            {JSON.stringify(order, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default PaymentStatus;
