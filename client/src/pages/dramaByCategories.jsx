import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom'
// import './GiftDetails.css'
import './Gifts.css'
import Card from '../components/Card';

const Categories = (categoryType) => {

    const [dramas, setDramas] = useState([])
    let genre = (categoryType.categoryType)
    console.log(genre)

    useEffect(() => {
        const fetchDramaByCategory = async () => {
            const response = await fetch(`http://localhost:3001/dramaList/"${genre}"`)
            const data = await response.json()
            setDramas(data)
        }
        fetchDramaByCategory()
        console.log(dramas)
    }, [categoryType]);

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

                ) : <h3 className="noResults">{`No Drama in ${genre} Yet 😞`}</h3>
            }
            </main>
        </div> 
    )
}

export default Categories