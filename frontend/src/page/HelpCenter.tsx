import Cards from "@/components/Cards"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import { useState } from "react"

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }
  return (
    <section className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-1'>
        <Hero onSearch={handleSearch} />
        <Cards searchQuery={searchQuery} />
      </div>
      <Footer />
    </section>
  )
}
export default HelpCenter
