import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createCard, deleteCard, updateCard } from './api'
import {
  CreateCardFormValues,
  UpdateCardFormValues,
} from '@/validators/FormSchema'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'

//create help card mutation
export const useCreateCard = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: CreateCardFormValues) => createCard(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['cards'] })
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || 'An error occurred')
      } else {
        toast.error('An unexpected error occurred')
      }
    }
  })
}

//update help card mutation
export const useUpdateCard = (title: string) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: UpdateCardFormValues) => updateCard(title, data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['cards'] })
      toast.success('Help card updated successfully')
    },
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || 'An error occurred')
      } else {
        toast.error('An unexpected error occurred')
      }
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
    onError: (error: unknown) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data?.message || 'An error occurred')
      } else {
        toast.error('An unexpected error occurred')
      }
    }
  })
}
