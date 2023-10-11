import express from 'express'
import DramaListController from '../controllers/dramaList.js'

const router = express.Router()

router.get('/', DramaListController.getDramaList)

router.get('/:category', DramaListController.getDramaListByCategory)

export default router
