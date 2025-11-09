import axios from "axios";
import { useState, useEffect } from "react";
// Assuming interfaces/index exports Review and ReviewSectionProps
import { Review, ReviewSectionProps } from "@/interfaces/index"; 

// Use the defined props interface
const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  // 1. Explicitly type the state array as an array of Review objects
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  // Preemptive: Add a type-safe error state
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true); // Ensure loading is reset if the ID changes
      setError(null);
      try {
        // Axios response data is automatically typed if configured, 
        // but TypeScript relies on us typing the state for safety
        const response = await axios.get<Review[]>(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        // 2. Setting a string error message is now type-safe
        setError("Failed to load reviews. Please try again."); 
      } finally {
        setLoading(false);
      }
    };

    if (propertyId) { // Only fetch if propertyId is provided
      fetchReviews();
    }
  }, [propertyId]);

  if (loading) {
    return <p>Loading reviews...</p>;
  }
  
  // Display error message if fetching failed
  if (error) {
    return <p className="text-red-600">Error: {error}</p>;
  }

  // Handle case where no reviews were returned
  if (reviews.length === 0) {
    return <p>No reviews available yet.</p>;
  }

  return (
    <div className="review-section">
      <h2>Reviews ({reviews.length})</h2>
      {reviews.map((review) => (
        // Accessing review.id and review.comment is now type-safe
        <div key={review.id} className="review-card">
          <p className="review-comment">{review.comment}</p>
          <p className="review-author"> {review.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;