import React from 'react'
import './CategoryCard.css'

export const CategoryCard = ({props})  => {
    let { title, backImage, frontImage } = props
    return (
        <article> 
            <img src={backImage} alt={title} />
            <div className='category-title'>{title}</div>
            <img className='remove-bg' src={frontImage} alt={title} />
        </article>
    )
}
