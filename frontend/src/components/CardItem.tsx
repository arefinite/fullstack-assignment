import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from './ui/button'
import { Edit2, Trash2 } from 'lucide-react'
import { IHelpCard } from '@/interface/helpCard'
import { useState } from 'react'
import { useDeleteCard } from '@/services/mutations'
import toast from 'react-hot-toast'

interface CardItemProps {
  card: IHelpCard
}

const CardItem = ({ card: { title, description, link } }: CardItemProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setDeleteTitle] = useState<string | null>(null)

  const { mutateAsync: deleteCard } = useDeleteCard()
  const handleDelete = async (title: string) => {
    await deleteCard(title)
    toast.success('Help card deleted successfully')
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{link}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className='flex gap-3'>
        <Button className='h-10 w-10!important rounded-full' size='icon'>
          <Edit2 size={18} />
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              className='h-10 w-10!important rounded-full'
              size='icon'
              variant='destructive'
              onClick={() => setDeleteTitle(title)}
            >
              <Trash2 size={18} />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setDeleteTitle(null)}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={() => handleDelete(title)}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  )
}
export default CardItem
