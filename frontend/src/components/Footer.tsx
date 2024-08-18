import logo from '/logo.svg'
const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='container mx-auto my-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-sm'>
          <ul>
            <li className='font-bold text-lg pb-3'>Abstract</li>
            <li>Branches</li>
          </ul>
          <ul>
            <li className='font-bold text-lg pb-3'>Resources</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Note</li>
            <li>Status</li>
          </ul>
          <ul>
            <li className='font-bold text-lg pb-3'>Community</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Dribble</li>
            <li>Podcast</li>
          </ul>
          <ul>
            <li className='font-bold text-lg pb-3'>Company</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
          <div>
            <img src={logo} className='h-8 mb-3' alt='' />
            <p>&copy; Copyright {new Date().getFullYear()}</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
