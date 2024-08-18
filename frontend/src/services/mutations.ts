import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCard, deleteCard, updateCard } from './api'
import {
  CreateCardFormValues,
  UpdateCardFormValues,
} from '@/validators/FormSchema'

//create help card mutation
export const useCreateCard = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateCardFormValues) => createCard(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['cards'] })
      console.log('success')
    },
    onError: () => {
      console.log('error')
    },
  })
}

//update help card mutation
export const useUpdateCard = (title: string) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: UpdateCardFormValues) => updateCard(title, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['cards'] })
      console.log('success')
    },
    onError: () => {
      console.log('error')
    },
  })
}

//delete help card mutation
export const useDeleteCard = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (title: string) => deleteCard(title),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['cards'] })
      console.log('success')
    },
    onError: () => {
      console.log('error')
    },
  })
}
