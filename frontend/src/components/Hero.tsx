import { ArrowRight } from 'lucide-react'
import { Input } from './ui/input'
import { useState } from 'react'

interface HeroProps {
  onSearch: (query: string) => void
}

const Hero = ({ onSearch }: HeroProps) => {
  const [query, setQuery] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    onSearch(value) 
  }

  return (
    <section className='bg-muted h-48 flex justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-4xl text-center font-semibold'>How can we help?</h1>
        <form className='w-96 relative' onSubmit={e => e.preventDefault()}>
          <Input 
            placeholder='Search' 
            value={query} 
            onChange={handleInputChange} 
          />
          <button type='button' className='absolute top-2 right-2 '>
            <ArrowRight />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Hero
