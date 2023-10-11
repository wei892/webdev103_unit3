import {pool} from './database.js'
import './dotenv.js'
import dramaData from '../data/dramaList.js'

const createDramaTable = async () =>{
    const createTableQuery = `
        DROP TABLE IF EXISTS dramalist;

        CREATE TABLE IF NOT EXISTS dramalist (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            category TEXT NOT NULL,
            rating TEXT NOT NULL,
            description TEXT NOT NULL,
            image TEXT NOT NULL,
            yearreleased INTEGER NOT NULL,
            numberepisode INTEGER NOT NULL
        )
    `

    try {
        const res = await pool.query(createTableQuery)
        console.log('🎉 dramaList table created successfully')
    }
    catch (err) {
        console.error('⚠️ error creating dramaList table', err)
    }

}

const seedDramaListTable = async () => {
    await createDramaTable();

    dramaData.forEach(drama => {
        const insertQuery = {
            text: 'INSERT INTO dramalist (title, category, rating, description, image, yearreleased, numberepisode) VALUES ($1, $2, $3, $4, $5, $6, $7)'
        }

        const values = [
            drama.title,
            drama.category,
            drama.rating,
            drama.description,
            drama.image,
            drama.yearReleased,
            drama.numberEpisode
        ]

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting drama', err)
                return
            }

            console.log(`✅ ${drama.title} added successfully`)
        })

    })
  
}

seedDramaListTable();


