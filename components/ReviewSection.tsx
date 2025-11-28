// ReviewSection.tsx
import React from 'react';
import StarRating from './StarRating';

interface Review {
  rating: number; // Rating out of 5
  comment: string; // Review comment
  reviewer?: string; // Optional reviewer name
}

interface ReviewSectionProps {
  reviews?: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  if (!reviews || reviews.length === 0) return null;

  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  return (
    <div className="mb-2">
      <StarRating rating={averageRating} />
      <span className="text-gray-500 text-sm ml-2">({reviews.length} reviews)</span>
    </div>
  );
};

export default ReviewSection;
