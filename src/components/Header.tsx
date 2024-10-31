import React from 'react';
import { ChefHat, ShoppingBasket } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="ml-2 text-xl font-bold text-gray-900">HomeMade</span>
          </div>
          
          <div className="flex items-center">
            <div className="relative">
              <ShoppingBasket className="h-6 w-6 text-gray-600" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;