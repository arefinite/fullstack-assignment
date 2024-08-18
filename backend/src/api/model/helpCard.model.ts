import { model,Schema } from 'mongoose'
import { IHelpCard } from '../interface/helpCard.interface'

const helpCardSchema = new Schema<IHelpCard>({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  link: { type: String, required: true },
})

export const HelpCard = model('HelpCard', helpCardSchema)
