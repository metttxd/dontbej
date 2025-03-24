import React from 'react'
import shirt from '../../src/assets/shirt1.png'
import { MagicCard } from './magicui/magic-card';
import { BorderBeam } from './magicui/border-beam';
import { Card, CardContent, CardTitle, CardHeader, CardDescription, CardFooter } from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { SpinningText } from './magicui/spinning-text';
import { VelocityScroll } from './magicui/scroll-based-velocity';
import DBJlogo from './logos/DBJlogo';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
import { Link } from 'react-router-dom';
const ProductShowcase = () => {

  return (
    <div className='flex justify-center items-center flex-col'>

      <div className=''>
        <VelocityScroll defaultVelocity={1} className={' overflow-x-hidden w-full scale-70 text-gray-200'}>© 2025 dontbejealous © 2025 dontbejealous © 2025 dontbejealous © 2025 dontbejealous</VelocityScroll>
      </div>

      <div className='flex justify-center items-center flex-col'>
        <div className='flex justify-center items-center flex-col  duration-500 --ease-in-expo transition-all my-10 mt-30 gap-30 '>
          <DBJlogo className={'scale-500 hover:scale-120 transition-all ease-[var(--ease-in-out-cubic-1)] text-gray-950 hover:text-red-800'}  />
          <p className={'italic text-5xl text-gray-950'}>dontbejealous</p>

        </div>
        <Link to={'/email'}><InteractiveHoverButton className={'w-full mb-10  cursor-pointer'}>Get notified!</InteractiveHoverButton></Link>
      </div>


      <div>
        <VelocityScroll defaultVelocity={1} className={'overflow-x-hidden w-full scale-70  text-gray-200 '}>© 2025 dontbejealous © 2025 dontbejealous © 2025 dontbejealous © 2025 dontbejealous</VelocityScroll>
      </div>


    </div>
  )
}



export default ProductShowcase