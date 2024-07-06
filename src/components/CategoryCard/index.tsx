import React from 'react';
import { Category } from '../../interfaces/Category';
import './styles.css';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <>
        {/* <a className='category-link' href="">
            <div className="category-card">
                <img src={category.image} alt={category.name} className="category-image" />
                <h2 className="category-name">{category.name}</h2>
                <a className='mais-images-container'>Mais Imagens</a>
            </div>
        </a> */}
            <div className="category-card">
                <div className="image-info">
                    <h2 className="category-name">{category.name}</h2>
                    <a href="/" className="mais-images-container">Mais Imagens</a>
                </div>
                <img src={category.image} alt="Image" className="img-fluid" />
            </div>
    </>
  );
};
