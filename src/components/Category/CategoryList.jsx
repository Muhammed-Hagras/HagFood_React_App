import React from 'react'
import { Link } from 'react-router-dom';
import "./Category.scss"

export default function CategoryList({categories}) {
  return (
    <div className='section-wrapper bg-whitesmoke'>
      <div className="container">
        <div className="sc-title">Categories</div>
        <div className='sc-category grid'>
          {categories.map(cat=>{
            const {idCategory: id, strCategory: title ,strCategoryThumb: thumbnail} = cat;

            return (
              <Link to={`/meal/category/${title}`} className="category-itm align-center justify-center " key={id}>
                <div className="category-itm-img h-100 w-100 flex align-center justify-center">
                  <img src={thumbnail} alt={title}/>
                  <div className="category-itm-title bg-orange">
                    <h3 className='text-white fs-11 fw-6 ls-1 text-uppercase'>{title}</h3>
                  </div>
                </div>

              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
