import { Router } from 'express'
import {
  createCard,
  deleteCard,
  getAllCards,
  getSingleCard,
  updateCard,
} from '../controller/helpCard.controller'

export const helpCardRouter = Router()

helpCardRouter
  .route('/:title')
  .get(getSingleCard)
  .patch(updateCard)
  .delete(deleteCard)
helpCardRouter.route('/').get(getAllCards).post(createCard)
