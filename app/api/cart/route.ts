import { NextResponse } from "next/server"
// Update the path below if your prisma client is located elsewhere, e.g. '../../lib/prisma'


// In-memory cart storage (resets on server restart)
let cart: any[] = [];

// GET /api/cart - Get the cart items
export async function GET() {
  return NextResponse.json(cart)
}

// POST /api/cart - Add item to cart
export async function POST(request: Request) {
  try {
    const { productId, quantity, name, price, image_url } = await request.json()

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
    return NextResponse.json(
      { error: "Failed to add item to cart" },
      { status: 500 }
    )
  }
}

// DELETE /api/cart - Clear cart
export async function DELETE() {
  cart = []
  return NextResponse.json({ message: "Cart cleared" })
}
