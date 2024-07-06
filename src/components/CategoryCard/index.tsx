import React from 'react';
import { Category } from '../../interfaces/Category';
import './styles.css';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <>
        <a className='category-link' href="">
            <div className="category-card">
                <img src={category.image} alt={category.name} className="category-image" />
            </div>
        </a>
    </>
  );
};
