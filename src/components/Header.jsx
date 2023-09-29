import React from 'react'
import { Link } from 'react-router-dom'

function showNav() {
    console.log('showNav');
    const mylinks =   document.getElementById('myLinks');
    mylinks.classList.remove('hidden');
    const navButton = document.getElementById('navButton')
    navButton.classList.remove('hidden')
    const navDecoy = document.getElementById('navDecoy')
    navDecoy.classList.add('hidden')
}

function hideNav() {
    console.log('HIDE Nav');
    const mylinks =   document.getElementById('myLinks');
 mylinks.classList.add('hidden');
 const navButton = document.getElementById('navButton')
 navButton.classList.add('hidden')
 const navDecoy = document.getElementById('navDecoy')
 navDecoy.classList.remove('hidden')
}

export default function Header() {
    
  return (
     
    <div className='bg-blue-200 sticky'>
        {/* HEADER */}
        
    <div className='w-full flex flex-row justify-center shadow-xl mb-4  border-b-2 border-blue-500'>
   {/* NAV BAR */}
        <div className='w-[80vw] md:w-[60vw] flex justify-between mb-4 font-semibold '>

            {/* NAV BAR LOGO */}
            <div className='mt-4'>
       Header     
                </div> 

  
{/* NAV BUTTON*/}
  <div className="relative inline-block text-left mt-4">
    {/* NAV BUTTON DECOY */}
  <div id="navDecoy">
    <button onClick={showNav} type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md shadow-blue-400 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
    </button>
  </div>
{/* NAV BUTTON */}
  <div id="navButton" className='hidden'>

    <button onClick={hideNav} type="button" className=" inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-lg shadow-blue-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
    </button>


    {/* Drop Down Menu */}

  <div id="myLinks" className="text-center absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
    <div className="py-1 flex flex-col text-center" role="none" onClick={hideNav}> 
    <p> <Link to="/" className=' mr-3 focus:text-blue-400 text-blue-900 hover:text-blue-300'><span>Home</span></Link></p>
  
<p> <Link to="/about" className=' mr-3 focus:text-blue-400 text-blue-900 hover:text-blue-300'><span>About</span></Link></p>
    <p> <Link to="/contact" className=' mr-3 focus:text-blue-400 text-blue-900 hover:text-blue-300'><span>Contact</span></Link></p>
    
        
      <form method="POST" action="#" role="none">
      </form>
    </div>
  </div>
</div>


</div>

{/* NAV BAR sm and larger */}
        {/*    <p className='mt-8 hidden'>
            <Link to="/portfolio" className=' mr-2 md:mr-4 focus:text-blue-400 text-blue-700 hover:text-blue-300'><span>Portfolio</span></Link>
            <Link to="/videos" className=' mr-2 md:mr-4 focus:text-blue-500 text-blue-700 hover:text-blue-300'><span>Videos</span></Link>
                <Link to="/blog" className=' mr-2 md:mr-4 focus:text-blue-400 text-blue-700 hover:text-blue-300'><span>Blog</span></Link>
                <Link to="/about" className=' mr-2 md:mr-4 focus:text-blue-400 text-blue-700 hover:text-blue-300'><span>About</span></Link>
                <Link to="/contact" className=' mr-2 md:mr-4 focus:text-blue-400 text-blue-700 hover:text-blue-300'><span>Contact</span></Link>    
        </p>
        */} 
                
            
            </div>
        </div>
        </div>
  ) }
