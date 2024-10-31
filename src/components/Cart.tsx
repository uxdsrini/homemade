import React from 'react';
import { Trash2 } from 'lucide-react';
import { FoodItem } from '../types';

interface CartProps {
  items: FoodItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemoveItem }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        <p className="text-gray-500 text-center py-8">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center space-x-4 py-4 border-b">
            <img 
              src={item.image} 
              alt={item.name}
              className="h-16 w-16 object-cover rounded"
            />
            
            <div className="flex-1">
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-600">${item.price}</p>
              
              <div className="mt-2 flex items-center space-x-2">
                <button
                  onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                  className="text-gray-500 hover:text-gray-700"
                >
                  -
                </button>
                <span className="px-2 py-1 bg-gray-100 rounded">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  +
                </button>
              </div>
            </div>
            
            <button
              onClick={() => onRemoveItem(item.id)}
              className="text-gray-400 hover:text-red-500"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between text-lg font-semibold">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
        
        <button className="mt-4 w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;