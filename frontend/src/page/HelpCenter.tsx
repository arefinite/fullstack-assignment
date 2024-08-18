import Cards from "@/components/Cards"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"

const HelpCenter = () => {
  return (
    <section className='flex flex-col min-h-screen'>
      <Header />
      <div className='flex-1'>
        <Hero />
        <Cards />
      </div>
      <Footer />
    </section>
  )
}
export default HelpCenter
