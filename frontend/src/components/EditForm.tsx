import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import {
  createCardFormSchema,
  CreateCardFormValues,
} from '@/validators/FormSchema'
import { useUpdateCard } from '@/services/mutations'
import { Loader2 } from 'lucide-react'
import { useGetSingleCard } from '@/services/queries'
import { useEffect } from 'react'

interface EditFormProps {
  onClose: () => void
  title: string
}

const EditForm = ({ onClose, title }: EditFormProps) => {
  const { data: card, isLoading } = useGetSingleCard(title)
  const form = useForm<CreateCardFormValues>({
    resolver: zodResolver(createCardFormSchema),
    defaultValues: {
      title: '',
      description: '',
      link: '',
    },
  })

  const { mutateAsync: updateCard, isPending } = useUpdateCard(title!)

  useEffect(() => {
    if (card) {
      form.reset({
        title: card.title,
        description: card.description,
        link: card.link,
      })
    }
  }, [card,form])

  const onSubmit: SubmitHandler<CreateCardFormValues> = async data => {
    await updateCard(data)
    onClose()
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 mt-6'>
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Enter help card title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='link'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='Enter reference link' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder='Enter description of help card'
                    className='resize-none'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type='submit' className='flex gap-2'>
            {isPending && <Loader2 className='animate-spin' size={18} />}
            {isPending ? 'Updating...' : 'Update'}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default EditForm
