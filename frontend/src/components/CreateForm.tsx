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
import { useCreateCard } from '@/services/mutations'
import toast from 'react-hot-toast'
import { Loader2 } from 'lucide-react'

const CreateForm = ({ onClose }: { onClose: () => void }) => {
  const form = useForm<CreateCardFormValues>({
    resolver: zodResolver(createCardFormSchema),
    defaultValues: {
      title: '',
      description: '',
      link: '',
    },
  })

  const { mutateAsync: createCard, isPending } = useCreateCard()

  const onSubmit: SubmitHandler<CreateCardFormValues> = async data => {
    await createCard(data)
    toast.success('Help card created successfully')

    // Close the dialog box after successful submission
    onClose()
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
            {isPending && <Loader2 size={18} />}
            {isPending ? 'Creating...' : 'Create'}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default CreateForm
