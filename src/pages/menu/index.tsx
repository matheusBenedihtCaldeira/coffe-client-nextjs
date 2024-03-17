import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function ProductMenu() {
  return (
    <div>
      <Header />
      <div className='mx-auto px-4 py-16 sm:py-10 lg:px-10'>
        <div className='border-gray-200 pt- flex items-baseline justify-between border-b pb-6'>
          <h1 className='text-gray-900 text-4xl font-normal tracking-tight'>
            Our Flavors
          </h1>
        </div>
        <div className='max-w-2xl px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8'>
          <h2 className='text-gray-900 text-2xl font-bold font-normal tracking-tight'>
            Frappes
          </h2>

          <div className='mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
