import { useGetAllCards } from '@/services/queries'
import CardItem from './CardItem'
import CardsSkeleton from './CardsSkeleton'

interface CardsProps {
  searchQuery: string
}

const Cards = ({ searchQuery }: CardsProps) => {
  const { data: cards, isPending, isError, error } = useGetAllCards()

  if (isPending) return <CardsSkeleton />
  if (isError)
    return <div className='max-w-5xl mx-auto my-8'>{error.message}</div>

  const filteredCards = cards?.filter(card =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className='my-8 container md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
      {filteredCards?.length > 0 ? (
        filteredCards
          ?.toReversed()
          .map(card => <CardItem key={card._id} card={card} />)
      ) : (
        <p>No card under this title. Please try something else.</p>
      )}
    </main>
  )
}

export default Cards
