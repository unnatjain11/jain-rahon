// lib/review-actions.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;


export async function getReviewsForProduct(productId: string) {
  try {
    return await prisma.review.findMany({
      where: { productId },
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error('Failed to fetch reviews:', error)
    return []
  }
}
