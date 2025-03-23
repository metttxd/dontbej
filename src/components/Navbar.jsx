import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { ShoppingCart } from 'lucide-react'
import DBJlogo from './logos/DBJlogo'
import {Mail} from 'lucide-react'



const Navbar = () => {
        return (

                <>
                        <div className='flex h-[10vh] justify-between items-center bg-red-800 gap-5 p-7 '>
                                <Link to={'/'}>
                                        <div className='flex justify-center flex-col items-center text-black hover:text-white cursor-pointer'>
                                                <DBJlogo />
                                                <p className='italic'>donbtjealous</p>
                                        </div>
                                </Link>
                                <div className='flex gap-5 whitespace-nowrap text-gray-950 transition-all'>
                                        <Link to={'/'} className=" cursor-pointer font-bold hover:text-white transition-all">may 2025</Link>
                                </div>
                                <div>
                                        <Mail className='w-25 cursor-pointer transition-all text-gray-950 hover:text-white' />
                                </div>
                        </div>

                </>
        )
}

export default Navbar