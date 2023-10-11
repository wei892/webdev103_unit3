import { pool } from '../config/database.js'

const getDramaList = async (req, res) => {
    try {
        const selectQuery = 'SELECT * FROM dramalist'
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows)
    }
    catch (error){
        res.status(400).json({error : error.message});
    }
    
}

const getDramaListByCategory = async (req, res) => {
    try{
        const category = req.params.category
        console.log(category)
        const selectQuery = `SELECT * FROM dramalist WHERE category LIKE "${category}"`
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows)
    }
    catch (error){
        res.status(409).json({error: error.message})
    }
}

export default {
    getDramaList,
    getDramaListByCategory,
};