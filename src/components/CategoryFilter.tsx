import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSelectCategory('All')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${selectedCategory === 'All'
            ? 'bg-orange-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
            ${selectedCategory === category
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;