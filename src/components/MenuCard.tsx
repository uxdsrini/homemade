import React from 'react';
import { Star, Clock, Heart } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
  isInCart: boolean;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onAddToCart, isInCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <img 
            src={item.image} 
            alt={item.name}
            className="h-48 w-full object-cover md:h-full"
          />
        </div>
        
        <div className="p-6 md:w-2/3">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-600">by {item.chef}</p>
            </div>
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
          </div>
          
          <p className="mt-2 text-gray-600">{item.description}</p>
          
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="ml-1 text-sm text-gray-600">{item.rating}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-gray-400" />
              <span className="ml-1 text-sm text-gray-600">{item.prepTime}</span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900">${item.price}</span>
            <button
              onClick={() => onAddToCart(item)}
              disabled={isInCart}
              className={`px-4 py-2 rounded-full ${
                isInCart 
                  ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              } transition-colors duration-300`}
            >
              {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;