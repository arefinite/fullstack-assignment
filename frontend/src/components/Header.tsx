import logo from '/logo.svg'
import { useState } from 'react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CreateForm from './CreateForm'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <header className='bg-black text-white h-20 flex'>
      <section className='container mx-auto flex justify-between items-center'>
        <h1 className='flex items-center gap-2 text-lg font-semibold'>
          <img src={logo} className='h-8' alt='logo' />
          <span className='hidden md:block'>Abstract | Help Center</span>
        </h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant='secondary'>Submit a request</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className='text-xl'>Create Help Card</DialogTitle>
              <DialogDescription asChild>
                <CreateForm onClose={handleClose} />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </section>
    </header>
  )
}
export default Header
