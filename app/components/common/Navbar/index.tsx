'use client';

import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  const {
    state: { items },
    dispatch,
  } = useCart();

  console.log('Cart contents:', items);

  return (
    <div className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-center space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products/list">Products</Link>
      </ul>
    </div>
  );
};

export default Navbar;
