import { useGetAllCards } from '@/services/queries'
import CardItem from './CardItem'

const Cards = () => {
  const { data: cards, isPending, isError, error } = useGetAllCards()

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>{error.message}</div>

  return (
    <main className='my-8 max-w-5xl mx-auto grid grid-cols-2 gap-6'>
      {cards?.toReversed().map(card => (
        <CardItem key={card._id} card={card} />
      ))}
    </main>
  )
}
export default Cards
