import Image from 'next/image'
import { Instagram, Spotify, Linkedin, Youtube } from 'react-bootstrap-icons'
export default function Footer() {
  return (
    <div>
      <div className='mx-autoshadow-md w-full items-center bg-brown-dark p-4 text-white sm:px-40'>
        <div className='sm:flex sm:flex sm:justify-between sm:justify-between md:py-6'>
          <div className='sm:flex sm:items-center sm:p-4'>
            <Image src='/coffee_beans.png' alt={''} width={41} height={41} />
            <h1 className='font-orbitron text-xl font-bold'>OTHO BREW</h1>
          </div>
          <ul className='me-5 mt-2 flex items-center text-base text-sm font-light font-medium text-gray-300 sm:pl-9'>
            <li className='cursor-pointer sm:mx-2'>
              <Instagram size={20} />
            </li>
            <li className='mx-1 cursor-pointer sm:mx-2'>
              <Spotify size={20} />
            </li>
            <li className='mx-1 cursor-pointer sm:mx-2'>
              <Linkedin size={20} />
            </li>
            <li className='mx-1 cursor-pointer sm:mx-2'>
              <Youtube size={20} />
            </li>
          </ul>
        </div>
        <hr className='dark:border-gray-700 my-2 border-gray-300 sm:mx-auto' />
        <span className='block pb-5 text-center text-sm text-gray-300'>
          © 2024
        </span>
      </div>
    </div>
  )
}
