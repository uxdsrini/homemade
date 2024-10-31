export interface MenuItem {
  id: number;
  name: string;
  chef: string;
  price: number;
  rating: number;
  prepTime: string;
  image: string;
  description: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snacks' | 'Sweets';
}

export interface FoodItem extends MenuItem {
  quantity: number;
}

export interface Chef {
  id: number;
  name: string;
  rating: number;
  speciality: string;
  image: string;
}