'use client'
import { useState } from "react"
import Image from 'next/image'

const priceFormat = (price) => `$${price.toFixed(2)}`

const colorClass = {
    gray: { light: 'bg-gray-100', dark: 'bg-gray-200' },
    blueGray: { light: 'bg-gray-500', dark: 'bg-gray-600' },
    blue: { light: 'bg-blue-100', dark: 'bg-blue-200' },
    pink: { light: 'bg-pink-100', dark: 'bg-pink-200' },
    green: { light: 'bg-green-100', dark: 'bg-green-200' },
}

const ColorToPurchase = () => {

    const [active, setActive] = useState(0)
    const colorItems = [
        {
            images: [
                "/images/home-2/product-0-silver.jpeg",
                "/images/home-2/product-0-silver-1.jpeg",
            ],
            title: "Silver",
            colorScheme: "gray",
        },
        {
            images: [
                "/images/home-2/product-0-gray.jpeg",
                "/images/home-2/product-0-gray-1.jpeg",
            ],
            title: "Gray",
            colorScheme: "blueGray",
        },
        {
            images: [
                "/images/home-2/product-0-blue.jpeg",
                "/images/home-2/product-0-blue-1.jpeg",
            ],
            title: "Blue",
            colorScheme: "blue",
        },
        {
            images: [
                "/images/home-2/product-0-pink.jpeg",
                "/images/home-2/product-0-pink-1.jpeg",
            ],
            title: "Pink",
            colorScheme: "pink",
        },
        {
            images: [
                "/images/home-2/product-0-green.jpeg",
                "/images/home-2/product-0-green-1.jpeg",
            ],
            title: "Green",
            colorScheme: "green",
        },
    ]



    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="flex flex-col md:flex-row ">

                <div className="flex flex-col items-start justify-center flex-1 p-8 mb-5 space-y-5 md:w-1/2">
                    <h1 className="mb-2 text-5xl">
                        Find a beat that suits your style.
                    </h1>
                    <div className="space-x-5">
                        {
                            colorItems.map((item, idx) => (
                                <button onClick={() => setActive(idx)} title={item.title} className="focus:outline-none">
                                    <ColorBox
                                        isActive={idx === active}
                                        color={item.colorScheme}
                                        label={item.title}
                                    />
                                </button>
                            )

                            )
                        }

                    </div>
                    <p className="text-gray-500">
                        Quid securi etiam tamquam eu fugiat nulla pariatur.
                    </p>
                </div>

                <div className="flex justify-center md:w-1/2">
                    <div className="flex items-center w-full justify-center md:w-[435px] md:h-[358px]">
                        <Image
                            key={colorItems[active].images[0]}
                            src={colorItems[active].images[0]}
                            className="w-full h-full"
                            height={358}
                            width={435}
                            objectFit="contain"
                            alt={colorItems[active].title}

                        />

                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-5">

                <p>{colorItems[active].title}</p>
                <p className="font-mono text-5xl">
                    {priceFormat(399.9)}
                </p>


                <button className="px-20 py-3 mt-4 mb-20 text-gray-800 bg-gray-100 rounded-lg p-50" >
                    <p>
                        Purchase {colorItems[active].title} SoundMax
                    </p>

                </button>

            </div>

        </div >
    )
}

const ColorBox = (
    {
        label = '',
        color = 'gray',
        isActive = false
    }
) => {

    const activeStyle = isActive ? 'ring-2 ring-gray-400' : ''

    return (
        <div
            className={`flex transform rotate-45 w-8 h-8 rounded-full ${activeStyle}`}
        >
            {/* Use the light and dark color classes */}
            <div className={`${colorClass[color].light} w-4 h-8 rounded-l-full`}></div>
            <div className={`${colorClass[color].dark} w-4 h-8 rounded-r-full`}></div>
        </div>
    )
}

export default ColorToPurchase