import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { ShoppingCart } from 'lucide-react'


const Navbar = () => {
return (
        <>
                <div className='flex h-[10vh] justify-between items-center bg-amber-700 gap-5 p-7 '>
                        <div>
                                <img src={logo} alt="Logo" className='cursor-pointer w-25 min-w-25'/>
                        </div>
                        <div className='flex gap-5 whitespace-nowrap'>
                                <Link to={'/'} className="cursor-pointer font-bold hover:text-gray-400">home</Link>
                                <Link to={'/shop'} className="cursor-pointer font-bold hover:text-gray-400">shop</Link>
                                <Link to={'/who-are-we'} className="font-bold hover:text-gray-400">about us</Link>
                                <Link to={'/contact'} className="cursor-pointer font-bold hover:text-gray-400">contact</Link>
                        </div>
                        <div>
                                <ShoppingCart className='w-25'/>
                        </div>
                </div>
                
        </>
)
}

export default Navbar