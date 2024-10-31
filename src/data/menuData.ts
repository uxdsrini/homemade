import { MenuItem, Chef } from '../types';

export const chefs: Chef[] = [
  {
    id: 1,
    name: "Maria Romano",
    rating: 4.9,
    speciality: "Italian Cuisine",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Priya Sharma",
    rating: 4.8,
    speciality: "Indian Cuisine",
    image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    rating: 4.7,
    speciality: "American Comfort Food",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
  }
];

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Classic French Toast",
    chef: "Sarah Johnson",
    price: 12.99,
    rating: 4.8,
    prepTime: "20 mins",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=800&q=80",
    description: "Thick-cut brioche bread dipped in vanilla custard, grilled to perfection."
  },
  {
    id: 2,
    name: "Grandma's Special Lasagna",
    chef: "Maria Romano",
    price: 18.99,
    rating: 4.8,
    prepTime: "45 mins",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?auto=format&fit=crop&w=800&q=80",
    description: "Homemade lasagna with layers of fresh pasta, rich meat sauce, and three types of cheese."
  },
  {
    id: 3,
    name: "Authentic Butter Chicken",
    chef: "Priya Sharma",
    price: 16.99,
    rating: 4.9,
    prepTime: "40 mins",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=800&q=80",
    description: "Tender chicken in a rich, creamy tomato sauce with aromatic spices."
  },
  {
    id: 4,
    name: "Samosa Platter",
    chef: "Priya Sharma",
    price: 8.99,
    rating: 4.7,
    prepTime: "30 mins",
    category: "Snacks",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    description: "Crispy pastries filled with spiced potatoes and peas, served with mint chutney."
  },
  {
    id: 5,
    name: "Tiramisu",
    chef: "Maria Romano",
    price: 9.99,
    rating: 4.9,
    prepTime: "15 mins",
    category: "Sweets",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80",
    description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream."
  }
];