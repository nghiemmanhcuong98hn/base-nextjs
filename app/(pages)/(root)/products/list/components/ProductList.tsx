import Link from 'next/link';
import React from 'react';

type Props = {};

const ProductList = async (props: Props) => {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', {
    cache: 'default',
  });
  if (!data) throw new Error('Failed to fetch posts');

  const products = await data.json();

  return (
    <div>
      <ul>
        {products.map((product: any, index: number) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {index + 1}.{product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
