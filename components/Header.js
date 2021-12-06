import Image from 'next/image'
import { HeartIcon, HomeIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, SearchIcon, UserGroupIcon } from '@heroicons/react/outline'
import { signIn, signOut, useSession } from "next-auth/react"

export default function Header() {

    const { data: session, status } = useSession()


    console.log(session)


    return (
        <div className="shadow-sm border-b bg-white sticky top-0 z-10">

            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">

                {/* Left */}
                <div className="relative w-24 hidden lg:inline-grid cursor-pointer">
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>

                {/* Middle */}

                <div className="max-w-xs">
                    <div className=" relative p-3 rounded-md mt-1">
                        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input type="text" className=" bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" placeholder="Search" />
                    </div>
                </div>

                {/* Right */}

                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 w-10 md:hidden cursor-pointer " />
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate-45" />
                        <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full 
                        flex animate-pulse items-center justify-center text-white"
                        >3</div>
                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />
                    <HeartIcon className="navBtn" />
                    <img src="https://miro.medium.com/fit/c/262/262/1*QBkKw8hN85LzwVOS7mfSNg.jpeg" alt="" className="h-10 rounded-full cursor-pointer" />
                </div>
            </div>
        </div>
    )
}
