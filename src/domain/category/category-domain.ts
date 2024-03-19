export type ProductID = number

export type CategoryAttributesData = {
  name: string
  products: Product
  created_by: number
  updated_by: number
  publishedAt: string
}

export type ProductCategoryData = {
  id: ProductID
  attributes: CategoryAttributesData
}

export type ProductCategory = {
  data: ProductCategoryData
}

export type Product = {
  data: ProductData[]
}

export type ProductCreatedBy = {
  id: ProductID
  firstname: string
  lastname: string
  username: null
}

export type ImageFormat = {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  sizeInBytes: number
}

export type ImageFormats = {
  large: ImageFormat
  small: ImageFormat
  medium: ImageFormat
  thumbnail: ImageFormat
}

export type ProductImage = {
  name: string
  url: string
  alternativeText: string | null
  caption: string | null
  previewUrl: null
  provider: string
  hash: string
  ext: string
  created_by: number
  updated_by: number
  created_at: string
  updated_at: string
  formats: ImageFormats
}

export type ImageData = {
  id: ProductID
  attributes: ProductImage
}

export type Image = {
  data: ImageData
}

export type ProductAttributesData = {
  name: string
  slug: string
  category: ProductCategory
  created_by: ProductCreatedBy
  updated_by: ProductCreatedBy
  created_at: string
  updated_at: string
  image: Image
}

export type ProductData = {
  id: ProductID
  attributes: ProductAttributesData
}
