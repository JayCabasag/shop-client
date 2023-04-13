import { useAppSelector } from '@/app/hooks'
import cartSlice from '@/features/cartSlice'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function Navbar() {

  const selector = useAppSelector(state => state.cart)
  const totalCartItems = selector.total

  const router = useRouter()
  const isOnShopsRoute = router.asPath === '/'
  const isOnGadgetsRoute = router.asPath === '/gadgets'
  const isOnNewRoute = router.asPath === '/new'
  
  const renderNavItemsJSX = () => <>
    <li className={`${isOnShopsRoute ? 'font-bold': ''} cursor-pointer uppercase`}>
      <Link href='/' passHref legacyBehavior>
        <a>
          Shops
        </a>
      </Link>
    </li>
    <li className={`${isOnGadgetsRoute ? 'font-bold': ''} cursor-pointer uppercase`}>
      <Link href='/gadgets' passHref legacyBehavior>
        <a>
          Gadgets
        </a>
      </Link></li>
    <li className={`${isOnNewRoute ? 'font-bold': ''} cursor-pointer uppercase`}>
    <Link href='/new' passHref legacyBehavior>
        <a>
          New
        </a>
      </Link>
    </li>
  </>

  return (
    <>
      <nav className="h-16 bg-white w-full flex items-center justify-center px-2 md:shadow-md md:shadow-slate-200 sticky top-0 z-50">
        <div className='flex container items-center justify-between'>
          <div className='flex items-center'>
            <h1 className='font-bold text-lg text-slate-600'>BuyGadgets.io</h1>
            <ul className='hidden text-slate-500 md:flex flex-wrap gap-12 ml-32 font-normal'>
             {renderNavItemsJSX()}
            </ul>
          </div>
          <div className='font-bold text-lg text-slate-600 cursor-pointer relative'>
          <svg className='h-8 w-8 text-slate-600' fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
          </svg>
          {totalCartItems > 0 && (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">{totalCartItems}</div>
          )}
          </div>
        </div>
      </nav>
        {/* This is when on mobile */}
        <nav className="flex md:hidden h-16 bg-white w-full items-center justify-center px-2 shadow-md shadow-slate-200 sticky top-0 z-40">
        <div className='container items-center'>
          <ul className='text-slate-500 flex font-normal justify-between mx-12'>
            {renderNavItemsJSX()}
          </ul>
        </div>
        </nav>
    </>
  )
}
