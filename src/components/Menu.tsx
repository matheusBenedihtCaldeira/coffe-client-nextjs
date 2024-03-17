import { ProductData } from '@/domain/product/product-domain'

export type MenuProps = {
  products: ProductData[]
}
export default function Menu({ products }: MenuProps) {
  return (
    <div>
      <div className='group relative'>
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
            <p className='text-gray-500 mt-1 text-sm'>Teste</p>
          </div>
        </div>
      </div>
    </div>
  )
}
