import React from 'react'
import Link from 'next/link'


const Heading = () => {
  return (
    <div className='h-16 bg-yellow-500 flex items-center justify-center text-white p-0'>
        <div className='flex gap-4'>
            <Link href='/About' >About Me</Link>
            <Link href='/Products' >Products</Link>
            <Link href='/Careers' >Careers</Link>
        </div>
    </div>
    )
}

export default Heading