
import cart from '../Images/carticon.png'

const Header = () => {
 
  return (
   <>
    <nav className=" py-2 h-4 ">
    <div className="container flex flex-wrap items-center justify-between mx-auto">
      <div className="flex justify-between items-center">
        <a href="/" className="font-bold text-3xl text-yellow-600">E@tzoo</a>
      </div>

      <div className="flex flex-wrap ">
       
        <button  className="p-2 lg:px-4 md:mx-2 text-white rounded bg-yellow-600">Home</button>
        <a href="../Pages/About" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-yellow-600 hover:text-gray-700 transition-colors duration-300">About</a>
        <a href="/" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-yellow-600 hover:text-gray-700 transition-colors duration-300">Menu</a>
        <a href="/" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-yellow-600 hover:text-gray-700 transition-colors duration-300">Blog</a>
        <a href="/" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-yellow-600 hover:text-gray-700 transition-colors duration-300">Contact</a>
      </div>
      <div className='bg-yellow-600 rounded-3xl '>
        <button><img  className='w-[50px]' src={cart} alt="error"></img></button>
      </div>
    </div>
  </nav>
   </>
  )
}

export default Header