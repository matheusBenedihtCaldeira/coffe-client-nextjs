import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function OurCoffee() {
  return (
    <div>
      <Header />
      <div className='relative px-6 py-24 sm:py-20 lg:px-8'>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <figure className='mt-10'>
            <blockquote className='text-gray-900 text-center text-xl font-semibold leading-8 sm:text-2xl sm:leading-9'>
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className='mt-10'>
              <img
                className='mx-auto h-10 w-10 rounded-full'
                src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
              />
              <div className='mt-4 flex items-center justify-center space-x-3 text-base'>
                <div className='text-gray-900 font-semibold'>Judith Black</div>
                <svg
                  viewBox='0 0 2 2'
                  width={3}
                  height={3}
                  aria-hidden='true'
                  className='fill-gray-900'
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className='text-gray-600'>Founder of Otho Brew</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className='py-12 sm:py-5'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='border-gray-200 mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            <article className='hover:bg-slate-100 flex max-w-xl flex-col items-start justify-between rounded-md p-2'>
              <div className='flex items-center gap-x-4 text-xs'>
                <time className='text-gray-500'>Data do post</time>
              </div>
              <div className='group relative'>
                <h3 className='text-gray-900 group-hover:text-gray-600 mt-3 text-lg font-semibold leading-6'>
                  <a href='#'>
                    <span className='absolute inset-0' />
                    Lorem ipsum dolor sit amet
                  </a>
                </h3>
                <img
                  src='https://www.nescafe.com/gb/sites/default/files/2023-11/Untitled-5%20copy_6.jpg'
                  alt=''
                  className=' h-40 w-full rounded-md object-cover shadow-lg'
                />
                <p className='text-gray-600 mt-5 line-clamp-3 text-sm leading-6'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  expedita voluptas culpa sapiente alias molestiae. Numquam
                  corrupti in laborum sed rerum et corporis
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
