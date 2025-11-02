import { Suspense } from 'react'
import ProductList from './components/ProductList'
import Loading from './loading'

type Props = {}

const ProductListPage = async (props: Props) => {
  return (
    <div>
      <h3 className='text-center'>Product List</h3>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  )
}

export default ProductListPage