import Header from '@/components/Header'
import Image from 'next/image'
import { MapPinIcon } from '@heroicons/react/24/outline'
import Footer from '@/components/Footer'
import { ProductData } from '@/domain/product/product-domain'
import { getAllProducts } from '@/data/products/get-all-products'
import { GetStaticProps } from 'next'
import Link from 'next/link'

export type HomePageProps = {
  products: ProductData[]
}

export default function Home({ products }: HomePageProps) {
  products = products.slice(0, 4)
  return (
    <div>
      <Header />
      <div className='relative flex flex-col bg-gradient-to-r from-brown-medium to-brown-dark md:h-[425px] md:flex-row'>
        <div className='relative h-48 md:ml-auto md:h-full md:w-1/2'>
          <Image src='/capuccino.jpg' alt={''} fill />
        </div>
        <div className='flex items-center justify-center text-wrap text-white md:w-1/2'>
          <div className='text-center'>
            <h2 className='mt-2 font-montserrat text-2xl font-semibold'>
              EXPLORE OUR CAFES
            </h2>
            <p className='mt-1 font-montserrat md:px-5'>
              Regardless of your taste or palate, you will find a perfect coffee
              for you
            </p>
            <button className='my-3 w-32 rounded-md bg-brown-light px-3'>
              <Link href='/menu'>more</Link>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-20 lg:max-w-7xl lg:px-8'>
          <h2 className='text-gray-900 text-2xl font-normal tracking-tight'>
            Our Flavors
          </h2>
          <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {products.map((product) => (
              <div key={product.attributes.slug} className='group relative'>
                <div className='aspect-h-1 aspect-w-1 bg-gray-200 lg:aspect-none w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-80'>
                  <img
                    src='https://www.abcfoodservice.it/22491-large_default/bebida-de-cafe-starbucks-frappuccino-ml250.jpg'
                    className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                  />
                </div>
                <div className='mt-4 flex justify-between'>
                  <div>
                    <h3 className='text-gray-700 text-sm'>
                      <a href='#'>
                        <span aria-hidden='true' className='absolute inset-0' />
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
      </div>
      <div className='relative flex flex-col bg-gradient-to-r from-brown-medium to-brown-dark md:h-[485px] md:flex-row'>
        <div className='relative h-48 md:ml-auto md:h-full md:w-1/2'>
          <Image src='/grown.png' alt={''} fill className='object-cover' />
        </div>
        <div className='flex items-center justify-center text-wrap text-white md:w-1/2'>
          <div className='mb-5 text-center'>
            <h2 className='p-4 font-montserrat text-2xl font-semibold'>
              Grown responsibly and traded ethically to help create a better
              future for producers
            </h2>
            <button className='mt-3 w-32 rounded-md  bg-brown-light px-3'>
              more
            </button>
          </div>
        </div>
      </div>
      <div className='mt-1'>
        <div className='bg-white' id='localizacao'>
          <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-20 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
            <div>
              <h2 className='text-gray-900 text-3xl font-normal tracking-tight sm:text-4xl'>
                Our Place
              </h2>
              <p className='text-gray-500 mt-4'>
                We create an environment dedicated to the pleasure of enjoying
                special moments. Whether to work, socialize or simply relax, our
                café is the perfect refuge for those seeking comfort and
                hospitality.
              </p>
              <p className='mt-4 text-sm'>
                <MapPinIcon className=' inline h-2 w-2' />
                Rua Terreno Toscano 68, Jardim Cerrado
              </p>

              <dl className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-10 lg:gap-x-8'>
                <div className='border-gray-200 border-t pt-4'>
                  <dt className='text-gray-900 font-medium'>
                    Air-conditioned indoor environment{' '}
                  </dt>
                  <dd className='text-gray-500 mt-2 text-sm'>
                    In our internal space, we provide an environment pleasant
                    and air-conditioned, ensuring comfort throughout the seasons
                    of the year.
                  </dd>
                </div>
                <div className='border-gray-200 border-t pt-4'>
                  <dt className='text-gray-900 font-medium'>
                    External Environment
                  </dt>
                  <dd className='text-gray-500 mt-2 text-sm'>
                    Ideal for relaxed gatherings or quiet moments, our open-air
                    setting offers a relaxing and inviting atmosphere, perfect
                    for enjoying your favorite meals and drinks.
                  </dd>
                </div>
                <div className='border-gray-200 border-t pt-4'>
                  <dt className='text-gray-900 font-medium'>
                    Vegan and Vegetarian Menu
                  </dt>
                  <dd className='text-gray-500 mt-2 text-sm'>
                    Discover delicious and nutritious options that meet your
                    needs choose food, comfort an experience inclusive
                    gastronomy in our cafeteria.
                  </dd>
                </div>
                <div className='border-gray-200 border-t pt-4'>
                  <dt className='text-gray-900 font-medium'>
                    WiFi network for customers
                  </dt>
                  <dd className='text-gray-500 mt-2 text-sm'>
                    Work, study or simply browse while enjoying your favorite
                    drinks.
                  </dd>
                </div>
              </dl>
            </div>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-3'>
              <img
                src='https://images.adsttc.com/media/images/6141/bcfc/5737/3601/6579/44f8/slideshow/dsc00616-pyeonjib.jpg?1631698186'
                className='bg-gray-100 rounded-lg'
              />
              <img
                src='https://images.adsttc.com/media/images/6141/bcfe/c5a0/d71a/3318/068d/slideshow/dsc00508-pyeonjib.jpg?1631698198'
                className='bg-gray-100 rounded-lg'
              />
              <img
                src='https://images.adsttc.com/media/images/6141/bcfe/c5a0/d71a/3318/068f/slideshow/dsc00642-pyeonjib.jpg?1631698205'
                className='bg-gray-100 rounded-lg'
              />
              <img
                src='https://images.adsttc.com/media/images/6141/bcf8/c5a0/d71a/3318/0688/slideshow/dsc00408-pyeonjib.jpg?1631698179'
                className='bg-gray-100 rounded-lg'
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const products = await getAllProducts()
  return {
    props: {
      products,
    },
  }
}
