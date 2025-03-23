import React from 'react'
import { Particles } from '@/components/magicui/particles'
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { GridPattern } from '@/components/magicui/grid-pattern';
import { cn } from "@/lib/utils";
import ProductShowcase from '@/components/ProductShowcase';

const Home = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ff0000");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#ff0000");
  }, [resolvedTheme]);

  return (
    <div className=" flex justify-center  overflow-hidden">
    
    
    <ProductShowcase/>
   
    
  </div>
    
  )
}

export default Home