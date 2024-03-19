import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { ProductCategoryData } from '@/domain/category/category-domain'

export type MenuPageProps = {
  categories: ProductCategoryData[]
}

export default function MenuPage({ categories }: MenuPageProps) {
  return (
    <div>
      <Header />
      <div className='mx-auto px-4 py-16 sm:py-10 lg:px-10'>
        <div className='flex items-baseline justify-between pb-6'>
          <h1 className='text-gray-900 text-4xl font-normal tracking-tight'>
            Our Flavors
          </h1>
        </div>
        {categories.map((category) => (
          <div
            key={category.id}
            className='w-full py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'
          >
            <h2 className='text-gray-900 border-b pb-2 text-2xl font-bold font-normal tracking-tight'>
              {category.attributes.name}
            </h2>
            <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
              {category.attributes.products.data.map((product) => (
                <div key={product.attributes.slug} className='group relative'>
                  <div className='aspect-h-1 aspect-w-1 bg-gray-200 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80'>
                    <img
                      src={
                        'http://localhost:1337' +
                        product.attributes.image.data.attributes.url
                      }
                      alt=''
                      className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                    />
                  </div>
                  <div className='mt-4 flex justify-between'>
                    <div>
                      <h3 className='text-gray-700 text-sm'>
                        <a href='#'>
                          <span
                            aria-hidden='true'
                            className='absolute inset-0'
                          />
                        </a>
                      </h3>
                      <p className='text-gray-500 mt-1 text-sm'>
                        {product.attributes.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}
