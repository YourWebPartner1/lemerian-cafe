import { useState } from "react";

export default function CashfreePayment({ amount }) {
  const [loading, setLoading] = useState(false);

  const createOrder = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch("http://localhost:4000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          customer_id: "USER_001",
          customer_phone: "9999999999",
          customer_name: "Cafe User",
        }),
      });

      const data = await res.json();
      const sessionId = data?.order?.payment_session_id;

      console.log("SESSION:", sessionId);

      if (!sessionId) {
        alert("No payment session ID found");
        setLoading(false);
        return;
      }

      // ✅ Correct V3 SDK Usage
      Cashfree.init();

      await Cashfree.checkout({
        paymentSessionId: sessionId,
        redirectTarget: "_self",
      });

    } catch (error) {
      console.error("ERROR:", error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <button
      onClick={createOrder}
      disabled={loading}
      className="bg-black text-white px-4 py-2 rounded-lg"
    >
      {loading ? "Processing…" : "Pay Now"}
    </button>
  );
}
