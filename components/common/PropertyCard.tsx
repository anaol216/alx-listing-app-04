import React from "react";
import { PropertyProps } from "@/interfaces";

interface CardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<CardProps> = ({ property }) => {
  const { 
    id,
    name, 
    address, 
    rating, 
    price, 
    image, 
    discount,
    offers 
  } = property;


  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
            -{discount}%
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-2">
          {address.city}, {address.state}, {address.country}
        </p>
        
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 mr-1">⭐</span>
          <span className="text-sm font-medium text-gray-700">{rating}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-gray-900">
            ${price.toLocaleString()}
            <span className="text-sm font-normal text-gray-600">/night</span>
          </div>
          <div className="text-xs text-gray-500">
            {offers.bed} bed • {offers.shower} bath • {offers.occupants} guests
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
