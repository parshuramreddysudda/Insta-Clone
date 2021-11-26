import Image from 'next/image'
import {SearchIcon} from '@heroicons/react/outline'

export default function Header() {
    return (
        <div >

            <div className="flex justify-between max-w-6xl">

                {/* Left */}
                <div className="relative h-24 w-24 hidden lg:inline-grid cursor-pointer">
                    <Image
                        src="https://links.papareact.com/ocw"
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
                    <Image
                        src="https://links.papareact.com/jjm"
                        layout="fill"
                        objectFit="contain"
                    />

                </div>

                {/* Middle */}

                <div >
                    <div>
                        <SearchIcon className="h-5 w-5 text-gray-500" />
                    </div>
                    <input type="text" className="" placeholder="Search" />
                </div>

                {/* Right */}
            </div>
        </div>
    )
}
