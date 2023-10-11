import React, { useState, useEffect } from 'react'
import './Gifts.css'
import Card from '../components/Card'


const Dramas = (props) => {

    const [dramas, setDramas] = useState([])

    useEffect(() => {
        setDramas(props.data)
    }, [props])
    
    return (
        <div className="Gifts">
            <main>
            {
                dramas && dramas.length > 0 ?
                dramas.map((drama) => 
                    
                   <Card id={drama.id} 
                         image={drama.image} 
                         title={drama.title} 
                         category={drama.category} 
                         rating={drama.rating} 
                         yearReleased={drama.yearReleased} />

                ) : <h3 className="noResults">{'No Gifts Yet 😞'}</h3>
            }
            </main>
        </div>  
    )
}

export default Dramas