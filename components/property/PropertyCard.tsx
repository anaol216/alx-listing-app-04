import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PropertyProps } from "@/interfaces";  // Import your interface (adjust path if needed)

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // Construct location from address object
  const location = `${property.address.city}, ${property.address.country}`;
  
  // Calculate discounted price if discount exists
  const originalPrice = property.price;
  const discountPercent = property.discount ? parseInt(property.discount) : 0;
  const discountedPrice = discountPercent > 0 
    ? Math.round(originalPrice * (1 - discountPercent / 100))
    : originalPrice;
  
  // Simple star rating (use a library like react-rating-stars for production)
  const fullStars = Math.floor(property.rating);
  const hasHalfStar = property.rating % 1 >= 0.5;
  const stars = "★".repeat(fullStars) + (hasHalfStar ? "½" : "☆".repeat(5 - fullStars));

  return (
    <Link href={`/property/${property.id}`} className="block">  {/* Link wraps the whole card */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer">
        {/* Image Section */}
        <div className="relative h-48 w-full">
          <Image
            src={property.image || "/placeholder-property.jpg"}  // Fallback if no image
            alt={property.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={false}  // Lazy load for grid
          />
          {/* Discount Badge */}
          {discountPercent > 0 && (
            <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Details Section */}
        <div className="p-4">
          {/* Title & Rating */}
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-900 truncate pr-2 flex-1">
              {property.name}
            </h3>
            <span className="text-sm text-yellow-500 whitespace-nowrap">
              {stars} ({property.rating})
            </span>
          </div>

          {/* Location */}
          <p className="text-sm text-gray-600 mb-3">📍 {location}</p>

          {/* Categories (show up to 3) */}
          <div className="flex flex-wrap gap-1 mb-3">
            {property.category.slice(0, 3).map((category) => (
              <span key={category} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                {category}
              </span>
            ))}
            {property.category.length > 3 && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                +{property.category.length - 3} more
              </span>
            )}
          </div>

          {/* Price */}
          <div className="mb-3">
            <p className="text-lg font-bold text-blue-600">
              ${discountedPrice.toLocaleString()}
              {discountPercent > 0 && (
                <span className="text-sm text-gray-500 font-normal line-through ml-1">
                  ${originalPrice.toLocaleString()}
                </span>
              )}
            </p>
          </div>

          {/* Offers Summary */}
          <p className="text-sm text-gray-600 mb-4">
            🛏️ {property.offers.bed} beds | 🚿 {property.offers.shower} baths | 
            👥 {property.offers.occupants} guests
          </p>

          {/* View Details Link (visual prompt) */}
          <div className="text-right">
            <span className="text-sm text-blue-500 hover:underline">View Details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;