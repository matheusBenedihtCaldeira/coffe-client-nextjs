import { PRODUCTS_URL } from '@/config/app-config'
import { ProductData } from '@/domain/product/product-domain'
import { fetchJson } from '@/util/fetch-json'

export const getAllProducts = async (): Promise<ProductData[]> => {
  const posts = await fetchJson<ProductData[]>(`${PRODUCTS_URL}`)
  return posts
}
