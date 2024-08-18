import { ArrowRight } from 'lucide-react'
import { Input } from './ui/input'

const Hero = () => {
  return (
    <section className='bg-muted h-48 flex justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl text-center font-semibold'>How can we help?</h1>
        <form className='w-96 relative'>
          <Input placeholder='Search' />
          <button role='submit' className='absolute top-2 right-2 '>
            <ArrowRight />
          </button>
        </form>
      </div>
    </section>
  )
}
export default Hero
