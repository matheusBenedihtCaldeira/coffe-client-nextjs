export type PostID = number

export type AuthorAttributesData = {
  name: string
  created_by: number
  updated_by: number
  created_at: string
  updated_at: string
}

export type PostAuthor = {
  data: {
    id: PostID
    attributes: AuthorAttributesData
  }
}

export type CategoryAttributesData = {
  name: string
  created_by: number
  updated_by: number
  publishedAt: string
}

export type PostCategory = {
  data: {
    id: PostID
    attributes: CategoryAttributesData
  }
}

export type PostCreatedBy = {
  id: PostID
  firstname: string
  lastname: string
  username: null
}

export type PostCoverFormat = {
  ext: string
  url: string
  hash: string
  mime: string
  name: string
  path: null
  size: number
  width: number
  height: number
  provider_metadata: {
    public_id: string
    resource_type: string
  }
}

export type CoverData = {
  id: PostID
  attributes: PostCover
}

export type Cover = {
  data: CoverData
}

export type CoverFormat = {
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

export type CoverFormats = {
  large: CoverFormat
  small: CoverFormat
  medium: CoverFormat
  thumbnail: CoverFormat
}

export type PostCover = {
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
  formats: CoverFormats
}

export type PostAttributesData = {
  title: string
  content: string
  slug: string
  author: PostAuthor
  category: PostCategory
  created_by: PostCreatedBy
  updated_by: PostCreatedBy
  created_at: string
  updated_at: string
  cover: Cover
}

export type PostData = {
  id: PostID
  attributes: PostAttributesData
}
