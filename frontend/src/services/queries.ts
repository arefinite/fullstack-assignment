import { useQuery } from '@tanstack/react-query'
import { getAllCards, getSingleCard } from './api'

// get all help cards query
export const useGetAllCards = () => {
  return useQuery({
    queryKey: ['cards'],
    queryFn: getAllCards,
  })
}

// get single help card query
export const useGetSingleCard = (title: string) => {
  return useQuery({
    queryKey: ['card', title],
    queryFn: () => getSingleCard(title),
  })
}
