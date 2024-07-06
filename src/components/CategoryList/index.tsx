import React from 'react';
import { Category } from '../../interfaces/Category';
import './styles.css';
import { CategoryCard } from '../CategoryCard';

interface CategoryListProps {
  categories: Category[];
}

export const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {

  return (
    <div className="category-list">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
    </div>
  );
};
