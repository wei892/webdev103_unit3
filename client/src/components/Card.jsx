import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => { 
    
    const [drama, setDramas] = useState({id: 0, title: "", category: "", rating: "", image: "", yearReleased: ""})

// image={drama.image} 
// name={drama.title} 
// category={drama.category} 
// rating={drama.rating} 
// yearReleased={drama.yearReleased}

    useEffect(() => {
        setDramas({id: props.id, title: props.title, category: props.category, rating: props.rating, image: props.image,
        yearReleased: props.yearreleased});
    }, [props]);

    return (
        <div className="card">
            <div className='top-container' style={{ backgroundImage:`url(${drama.image})`}}></div>
            <div className='bottom-container'>
                <h3>{drama.title}</h3>
                <p>{'Price: ' + drama.rating}</p>
                <p>{drama.category}</p>
            </div>
        </div>
    )
}

export default Card