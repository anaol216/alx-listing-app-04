// Define project-wide TypeScript interfaces

export interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

export interface Address {
  state: string;
  city: string;
  country: string;
}

// Recommended: Use numbers for counts
export interface Offers {
  bed: number;
  shower: number;
  occupants: number;
}

export interface PropertyProps {
  id: string;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount?: string;
  description?: string;
  reviews?: Review[];
}


export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}

// interfaces/index.ts (Example structure)
export interface Review {
  id: string; // Necessary for the map key
  name: string;
  avatar: string;
  rating: number;
  comment: string; // Necessary for the map display
}
// Define the component props
export interface ReviewSectionProps {
  propertyId: string;
}