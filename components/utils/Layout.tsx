import React, { ReactNode } from 'react'
import { UserCircleIcon, Cog6ToothIcon, ArrowLeftOnRectangleIcon, BuildingStorefrontIcon, ReceiptPercentIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router';

const Layout = ({children, className}: {children: ReactNode, className?: string }) => {
  const router = useRouter();
  return (
    <div className='h-screen'>
      <div className='grid grid-cols-6 h-full'>
        <div className='col-span-1 bg-neutral p-8 flex flex-col justify-between'>
          <div className='flex items-center h-fit space-x-4'>
            <button className='btn btn-circle btn-primary'>EK</button>
            <p className='text-2xl font-bold'>Exkis</p>
          </div>
          <div>
            <ul className='space-y-4'>
              <li className={`text-lg font-medium flex items-center space-x-2 hover:text-primary cursor-pointer ${router.pathname.startsWith("/admin/restaurants") && "text-secondary"}`}>
                <BuildingStorefrontIcon className='w-6' /> 
                  <p>Restaurants</p>
              </li>
              <li className={`text-lg font-medium flex items-center space-x-2 hover:text-primary cursor-pointer ${router.pathname === "" && "text-primary"}`}>
                <ReceiptPercentIcon className='w-6' /> 
                  <p>Programmes</p>
              </li>
            </ul>
          </div>
          <div>
            <ul className='space-y-4'>
            <li className={`text-lg font-medium flex items-center space-x-2 hover:text-primary cursor-pointer ${router.pathname === "" && "text-primary"}`}>
              <UserCircleIcon className='w-6' /> 
                <p> Mon compte</p>
            </li>
            <li className={`text-lg font-medium flex items-center space-x-2 hover:text-primary cursor-pointer ${router.pathname === "" && "text-primary"}`}>
                <Cog6ToothIcon className='w-6' /> 
                <p>Paramètres</p>
            </li>
            <li className={`text-lg font-medium flex items-center space-x-2 hover:text-primary cursor-pointer ${router.pathname === "" && "text-primary"}`}>
                <ArrowLeftOnRectangleIcon className='w-6' /> 
                <p>Déconnexion</p>
            </li>
            </ul>
          </div>
        </div>
        <div className={`col-span-5 ${className}`}>{children}</div>
      </div>
    </div>
  )
}

export default Layout