import React from 'react'

type Props = {
  params: Promise<{ id: string }>
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const ProductPage = async ({ params }: Props) => {
  const { id } = await params

  await delay(5000)

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { cache: 'default' })
  if (!res.ok) throw new Error('Failed to fetch posts')

  const product = await res.json()

  return (
    <div>
      <h1>Product Page</h1>
      <p>{product.title}</p>
    </div>
  )
}

export default ProductPage
