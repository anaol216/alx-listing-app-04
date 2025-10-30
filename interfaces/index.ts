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

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  id?: string;
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount?: string;
}

// export interface PropertyProps {
  
//   name: string;
//   address: {
//     state: string;
//     city: string;
//     country: string;
//   };
//   rating: number;
//   category: string[];
//   price: number;
//   offers: {
//     bed: string;
//     shower: string;
//     occupants: string;
//   };
//   image: string;
//   discount?: string;
//   description?: string;
//   id?: string;
//   reviews?: {
//     name: string;
//     avatar: string;
//     rating: number;
//     comment: string;
//   }[];
// }

export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export interface LayoutProps {
  children: React.ReactNode;
}


