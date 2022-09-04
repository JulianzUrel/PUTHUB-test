import { BellIcon, MagnifyingGlassIcon} from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener('scroll' ,handleScroll)

      return () => {
        window.addEventListener('scroll' , handleScroll)
      }
    },[])

  return (
    <header className={`${isScrolled && `bg-[#141414]`}`}>
        <div className="flex items-center space-x-2 md:space-x-10" >
        <img src="https://i.ibb.co/Fzwsq2J/phh.png"
        width={120}
        height={100}
        className="cursor-pointer object-contain" />
        
        <ul className="hidden space-x-4 md:flex">
            <li className="headerLink">Home</li>
            <li className="headerLink">JuliGanz File</li>
            <li className="headerLink">Movies</li>
            <li className="headerLink">New & Popular</li>
            <li className="headerLink">My List</li>
        </ul>
        </div>
        <div className='flex items-center space-x-4 text-sm'>
        <MagnifyingGlassIcon className='hidden h-6 w-6 sm:inline '/>
         <p className='hidden lg:inline'>Teens</p>
         <BellIcon className='h-6 w-6'/>
         <Link href="/account">
          <img src="https://icon-library.com/images/smiling-icon/smiling-icon-4.jpg"
           alt=""
           className='cursor-pointed rounded h-8 w-8'/>
         </Link>
        </div>
    </header>
  )
}

export default Header