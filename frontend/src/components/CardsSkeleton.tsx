import { Skeleton } from './ui/skeleton'

const CardsSkeleton = () => {
  return (
    <main className='my-8 max-w-5xl mx-auto grid grid-cols-2 gap-6'>
      <Skeleton className='h-60 w-[500px]' />
      <Skeleton className='h-60 w-[500px]' />
      <Skeleton className='h-60 w-[500px]' />
      <Skeleton className='h-60 w-[500px]' />
    </main>
  )
}
export default CardsSkeleton
