// backend/server.js
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// IMPORTANT: these env names must match the .env above
const CASHFREE_APP_ID = process.env.CASHFREE_APP_ID;
const CASHFREE_SECRET_KEY = process.env.CASHFREE_SECRET_KEY;

if (!CASHFREE_APP_ID || !CASHFREE_SECRET_KEY) {
  console.error("❌ Missing CASHFREE_APP_ID or CASHFREE_SECRET_KEY in .env");
  // don't exit — but any request will fail with a descriptive message
}

// Base URL for sandbox Cashfree
const CASHFREE_BASE = "https://sandbox.cashfree.com/pg";

// Helper to call Cashfree create order
async function createCashfreeOrder(payload) {
  const url = `${CASHFREE_BASE}/orders`;
  const resp = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-version": "2022-09-01",
      "x-client-id": CASHFREE_APP_ID,
      "x-client-secret": CASHFREE_SECRET_KEY,
    },
    body: JSON.stringify(payload),
    timeout: 20000,
  });

  const data = await resp.json();
  return { status: resp.status, data };
}

app.get("/", (req, res) => {
  res.json({ success: true, message: "Cashfree backend running" });
});

// Create order
app.post("/create-order", async (req, res) => {
  try {
    const { amount, customer_id, customer_phone, customer_name } = req.body;

    if (!amount || !customer_id || !customer_phone || !customer_name) {
      return res.status(400).json({ success: false, error: "Missing required fields" });
    }

    const payload = {
      order_amount: amount,
      order_currency: "INR",
      order_meta: {
        // Cashfree will redirect after payment — frontend page receives order_id
        return_url: "http://localhost:5173/payment-status?order_id={order_id}",
      },
      customer_details: {
        customer_id,
        customer_phone,
        customer_name,
      },
    };

    const { status, data } = await createCashfreeOrder(payload);
    console.log("CASHFREE ORDER RESPONSE:", data);

    // If Cashfree returned non-200, forward error
    if (status >= 400) {
      return res.status(502).json({ success: false, error: data || "Cashfree error" });
    }

    // Return the whole order object under "order" for frontend to use.
    return res.json({ success: true, order: data });
  } catch (err) {
    console.error("CREATE ORDER ERROR:", err);
    return res.status(500).json({ success: false, error: err.message || "Server error" });
  }
});

// Verify order (fetch order details from Cashfree)
app.get("/verify", async (req, res) => {
  try {
    const { order_id } = req.query;
    if (!order_id) return res.status(400).json({ success: false, error: "Missing order_id" });

    const url = `${CASHFREE_BASE}/orders/${order_id}`;
    const r = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-version": "2022-09-01",
        "x-client-id": CASHFREE_APP_ID,
        "x-client-secret": CASHFREE_SECRET_KEY,
      },
    });

    const data = await r.json();
    return res.json({ success: true, order: data });
  } catch (err) {
    console.error("VERIFY ERROR:", err);
    return res.status(500).json({ success: false, error: err.message || "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
