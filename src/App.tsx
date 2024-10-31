import React, { useState } from 'react';
import { ChefHat } from 'lucide-react';
import { FoodItem } from './types';
import { menuItems, chefs } from './data/menuData';
import MenuCard from './components/MenuCard';
import Cart from './components/Cart';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ChefCard from './components/ChefCard';

function App() {
  const [cartItems, setCartItems] = useState<FoodItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Sweets'];

  const filteredItems =
    selectedCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  const addToCart = (item: MenuItem) => {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemCount={cartItems.length} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Menu</h2>
              <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />

              <div className="grid grid-cols-1 gap-6">
                {filteredItems.map((item) => (
                  <MenuCard
                    key={item.id}
                    item={item}
                    onAddToCart={addToCart}
                    isInCart={cartItems.some(
                      (cartItem) => cartItem.id === item.id
                    )}
                  />
                ))}
              </div>
            </section>
               <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Home Chefs</h2>
            <div className="flex items-center space-x-2">
              <ChefHat className="w-6 h-6 text-orange-500" />
              <span className="text-gray-600">Expert Home Cooks</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {chefs.map((chef) => (
              <ChefCard key={chef.id} chef={chef} />
            ))}
          </div>
          </div>
          <div className="md:w-1/3">
            <Cart
              items={cartItems}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeFromCart}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
