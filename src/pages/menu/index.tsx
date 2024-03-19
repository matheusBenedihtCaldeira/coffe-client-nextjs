import MenuPage, { MenuPageProps } from '@/containers/MenuPage'
import { getAllCategories } from '@/data/category/get-all-categories'
import { GetStaticProps } from 'next'

export default function ProductMenu({ categories }: MenuPageProps) {
  return <MenuPage categories={categories} />
}

export const getStaticProps: GetStaticProps = async (context) => {
  const categories = await getAllCategories()
  return {
    props: {
      categories,
    },
  }
}
