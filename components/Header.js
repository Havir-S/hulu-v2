import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'

import {
    HomeIcon,
    SearchIcon,
    UserIcon,
    LightningBoltIcon,
    CollectionIcon,
    BadgeCheckIcon,
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header className='flex flex-col h-auto sm:flex-row m-5 justify-between items-center'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
            <HeaderItem title='HOME' Icon={HomeIcon} />
            <HeaderItem title='TRENDING' Icon={LightningBoltIcon} />
            <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon} />
            <HeaderItem title='COLLECTIONS' Icon={CollectionIcon} />
            <HeaderItem title='SEARCH' Icon={SearchIcon} />
            <HeaderItem title='ACCOUNT' Icon={UserIcon} />
        </div>
        <Image 
            className='object-contain'
            src='https://brandslogos.com/wp-content/uploads/images/large/hulu-logo.png'
            alt=''
            width={200}
            height={100}
         />
    </header>
  )
}

export default Header