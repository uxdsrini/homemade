import React from 'react';
import { Star } from 'lucide-react';
import { Chef } from '../types';

interface ChefCardProps {
  chef: Chef;
}

const ChefCard: React.FC<ChefCardProps> = ({ chef }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
      <img
        src={chef.image}
        alt={chef.name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium text-gray-900">{chef.name}</h3>
        <p className="text-sm text-gray-500">{chef.speciality}</p>
        <div className="flex items-center mt-1">
          <Star className="h-4 w-4 text-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">{chef.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;