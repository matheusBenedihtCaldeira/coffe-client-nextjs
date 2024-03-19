import {
  ProductCategory,
  ProductCategoryData,
} from '@/domain/category/category-domain'

export const getAllCategories = async (): Promise<ProductCategoryData[]> => {
  const categories = await fetch(
    'http://127.0.0.1:1337/api/categories?populate[products][populate]=*'
  )
  const jsonData = await categories.json()
  return jsonData.data
}
