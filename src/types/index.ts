
export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  imageUrl: string;
  isNew?: boolean;
  discount?: string;
  description?: string;
  location?: string;
  minOrderPrice?: number;
  topPicks?: Product[];
}

export interface Product {
  id: string;
  name: string;
  price: string;
  restaurant: string;
  imageUrl: string;
  description: string;
  category: string;
  rating?: number;
  bestseller?: boolean;
  discountPercent?: number;
  oldPrice?: string;
  isNew?: boolean;
  isFavorite?: boolean;
}

export interface UserReward {
  id: string;
  name: string;
  points: number;
  description: string;
  imageUrl: string;
  expiryDate?: string;
  isRedeemed?: boolean;
  type: 'discount' | 'freeItem' | 'delivery' | 'exclusive';
}

export interface RewardTier {
  id: string;
  name: string;
  pointsRequired: number;
  benefits: string[];
  icon: string;
}

export interface UserPoints {
  total: number;
  history: PointTransaction[];
  tier: RewardTier;
}

export interface PointTransaction {
  id: string;
  date: string;
  points: number;
  type: 'earned' | 'redeemed';
  description: string;
}
