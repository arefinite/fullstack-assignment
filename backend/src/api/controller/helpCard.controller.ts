import { NextFunction, Request, Response } from 'express'
import { helpCardValidationSchema } from '../validator/helpCard.validator'
import { HelpCard } from '../model/helpCard.model'
import asyncHandler from 'express-async-handler'
import createHttpError from 'http-errors'

// @desc get all help cards
// @route GET /api/v1/cards
// @access Public
export const getAllCards = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    //get all help cards
    const helpCards = await HelpCard.find()
    //check if help cards are found and error handling
    if (!helpCards) return next(createHttpError(404, 'Help cards not found'))
    //send response
    res.status(200).json({ helpCards })
  }
)

// @desc get single help card
// @route GET /api/v1/cards/:title
// @access Public
export const getSingleCard = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    //get title from request params
    const { title } = req.params
    //get help card by title
    const helpCard = await HelpCard.findOne({ title })
    //check if help card is found and error handling
    if (!helpCard) return next(createHttpError(404, 'Help card not found'))
    //send response
    res.status(200).json({ helpCard })
  }
)

// @desc create help card
// @route POST /api/v1/cards
// @access Public
export const createCard = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    //validate request body
    const { title, description } = helpCardValidationSchema.parse(req.body)
    //check if title already exists
    const titleExists = await HelpCard.findOne({ title })
    //check if title already exists and error handling
    if (titleExists) return next(createHttpError(400, 'Title already exists'))
    //create new help card
    const newHelpCard = await HelpCard.create({ title, description })
    //check if help card is created and error handling
    if (!newHelpCard) return next(createHttpError(400, 'Help card not created'))
    //send response
    res.status(201).json({ message: 'Help card created successfully' })
  }
)

// @desc update help card
// @route PATCH /api/v1/cards/:title
// @access Public
export const updateCard = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    //get title from request params
    const { title: paramTitle } = req.params
    //validate request body
    const { title, description } = helpCardValidationSchema.parse(req.body)
    //get help card by title
    const helpCard = await HelpCard.findOne({ title: paramTitle })
    //check if help card is found and error handling
    if (!helpCard) return next(createHttpError(404, 'Help card not found'))
    // check i title is already taken
    const titleExists = await HelpCard.findOne({ title })
    // check if title already exists and error handling
    if (titleExists) return next(createHttpError(400, 'Title already exists'))
    //update help card
    const updateHelpCard = await HelpCard.findOneAndUpdate(
      { title: paramTitle },
      { title, description },
      { new: true }
    )
    //check if help card is updated and error handling
    if (!updateHelpCard)
      return next(createHttpError(400, 'Help card not updated'))
    //send response
    res.status(200).json({ message: 'Help card updated successfully' })
  }
)

// @desc delete help card
// @route DELETE /api/v1/cards/:title
// @access Public
export const deleteCard = asyncHandler(async (req: Request, res: Response) => {
  //get title from request params
  const { title } = req.params
  //delete help card
  await HelpCard.findOneAndDelete({ title })
  //send response
  res.status(200).json({ message: 'Help card deleted successfully' })
})
