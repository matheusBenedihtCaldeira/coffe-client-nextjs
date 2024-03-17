import HomePage, { HomePageProps } from '@/containers/HomePage'
import { getAllProducts } from '@/data/products/get-all-products'
import { GetStaticProps } from 'next'

export default function Home({ products }: HomePageProps) {
  return <HomePage products={products} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const products = await getAllProducts()
  return {
    props: {
      products,
    },
  }
}
