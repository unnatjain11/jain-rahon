import { NextRequest,NextResponse } from "next/server";
import Razorpay from "razorpay",

// Update the path below if your prisma client is located elsewhere, e.g. '../../lib/prisma'

const razorpay = new Razorpay({
key_id: process.env.RAZORPAY_KEY_ID!,
key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// In-memory cart storage (resets on server restart)
let cart: any[] = [];

// GET /api/cart - Get the cart items
export async function GET() {
  return NextResponse.json(cart)
}

// POST /api/cart - Add item to cart or create Razorpay order
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { productId, quantity, name, price, image_url, createOrder } = body

    // If createOrder flag is set, create a Razorpay order
    if (createOrder) {
      const order = await razorpay.orders.create({
        amount: 100 * 100, // Amount in paise
        currency: "INR",
        receipt: "receipt_" + Math.random().toString(36).substring(7),
      })
      return NextResponse.json({ orderId: order.id }, { status: 200 })
    }

    // Otherwise, add item to cart
    if (!productId || !quantity) {
      return NextResponse.json(
        { error: "Product ID and quantity are required" },
        { status: 400 }
      )
    }

    // Add item to cart
    cart.push({ productId, quantity, name, price, image_url })
    return NextResponse.json({ message: "Item added to cart" })
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    )
  }
}

// DELETE /api/cart - Clear cart
export async function DELETE() {
  cart = []
  return NextResponse.json({ message: "Cart cleared" })
}



