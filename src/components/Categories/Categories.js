import React,{useState,useEffect} from 'react'
import './Categories.css'
import { CategoryCard } from '../CategoryCard/CategoryCard'

export const Categories = () => {
const [categories, setCategories] = useState([])

useEffect(() => {
    fetch('./data/categories.json')
        .then(response => response.json())
        .then(data => {
            // Aquí puedes trabajar con el contenido del archivo JSON
            setCategories(data)
        })
        .catch(error => {
            console.error('Error al leer el archivo JSON:', error);
        });

}, [])

    return (
        <section className="categories-container" id="portfolio">
            <h2 className="categories-title">Portfolio</h2>
            <div className="categories">
                {categories.map((cat) => (
                    <CategoryCard  props={cat} />
                ))}


            </div>

        </section>
    )
}
