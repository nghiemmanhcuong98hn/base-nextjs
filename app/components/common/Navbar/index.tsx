'use client'

import { useCart } from '@/app/context/CartContext'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  const { state: { items }, dispatch } = useCart()

  console.log('Cart contents:', items);

  return (
    <div className='p-4 bg-gray-800 text-white'>
      <ul className='space-x-4 flex justify-center'>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products/list">Products</Link>
      </ul>
    </div>
  )
}

export default Navbar