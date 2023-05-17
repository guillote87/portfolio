import React from 'react'
import './CategoryCard.css'
import { Link } from 'react-router-dom';


export const CategoryCard = ({ props }) => {
    let { title, category, backImage, frontImage } = props

    return (
        <Link to={`/portfolio/${category}`}>
            <article>
                <img src={backImage} alt={title} />
                <div className='category-title'>{title}</div>
                <img className='remove-bg' src={frontImage} alt={title} />
            </article>
        </Link>
    )
}
