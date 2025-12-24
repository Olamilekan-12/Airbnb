"use client"

import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Logo = () => {
    const logo = useRouter()
  return (
    <Image alt='logo' className='hidden md:block cursor-pointer' height={100} width={100} src={"/images/logo.png"}/>
  )
}

export default Logo