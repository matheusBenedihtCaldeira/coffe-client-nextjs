'use client'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
export default function Header() {
  return (
    <Disclosure as='nav' className='bg-brown-dark text-white'>
      {({ open }) => (
        <>
          <div className='mx-5 p-3 sm:px-2'>
            <div className='relative flex h-16 w-full items-center justify-between'>
              <div className='flex flex-1 items-center justify-start px-2 sm:items-stretch sm:justify-start'>
                <div className='flex flex-shrink-0 items-center'>
                  <Image
                    src='/coffee_beans.png'
                    alt={''}
                    width={41}
                    height={41}
                  />
                  <h1 className='font-orbitron text-xl font-bold'>OTHO BREW</h1>
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:block sm:flex sm:justify-end'>
                <ul className='me-5 text-base font-medium md:flex'>
                  <li className='mx-3 cursor-pointer border-b-2 border-brown-dark transition-colors duration-300 ease-out hover:border-white  '>
                    <Link href='/'>Home</Link>
                  </li>
                  <li className='mx-3 cursor-pointer border-b-2 border-brown-dark transition-colors duration-300 ease-out hover:border-white'>
                    <Link href='/menu'>Menu</Link>
                  </li>
                  <li className='mx-2 cursor-pointer border-b-2 border-brown-dark transition-colors duration-300 ease-out hover:border-white'>
                    <Link href='ourCoffee'>Our Coffee</Link>
                  </li>
                </ul>
              </div>

              <div className='inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='focus:rint-white relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-inset'>
                  <span className='absolute -inset-0.5' />
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <div className='mr-4 flex justify-end px-1'>
            <Disclosure.Panel className='sm:hidden'>
              <Disclosure.Button className='block' as='a' href='/'>
                Home
              </Disclosure.Button>
              <Disclosure.Button className='block' as='a' href='/menu'>
                Menu
              </Disclosure.Button>
              <Disclosure.Button className='block ' as='a' href='/ourCoffee'>
                Our Coffee
              </Disclosure.Button>
            </Disclosure.Panel>
          </div>
        </>
      )}
    </Disclosure>
  )
}
