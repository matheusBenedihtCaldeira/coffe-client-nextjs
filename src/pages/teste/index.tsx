import { ProductData } from '@/domain/product/product-domain'
import axios from '@/services/axios'
import { useEffect, useState } from 'react'

export default function Teste() {
  const [products, setProducts] = useState<ProductData[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get('products?populate=*')
      setProducts(response.data.data)
    }
    getProducts()
  }, [])
  return (
    <h1>
      {products.map((p) => (
        <li key={p.id}>{p.attributes.name}</li>
      ))}
    </h1>
  )
}
