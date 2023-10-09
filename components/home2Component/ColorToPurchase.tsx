'use client'
import { useState } from "react"
import Image from 'next/image'
import { motion } from 'framer-motion'

const priceFormat = (price) => `$${price.toFixed(2)}`

const colorClass = {
    gray: 'bg-gray-100',
    blueGray: 'bg-blue-gray-100',
    blue: 'bg-blue-100',
    pink: 'bg-pink-100',
    green: 'bg-green-100'
};

const ColorToPurchase = () => {

    const [active, setActive] = useState(0);
    const items = [
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
        <div className="flex flex-col items-center">
            <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-10">

                <div className="flex flex-col items-center space-y-5">
                    <h1 className="mb-2 text-3xl">
                        Find a beat that suits your style.
                    </h1>
                    <div className="flex space-x-5">
                        {
                            items.map((item, idx) => (
                                <button onClick={() => setActive(idx)} className="focus:outline-none">
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

                <div className="flex justify-center">
                    <Image
                        key={items[active].images[0]}
                        src={items[active].images[0]}
                        height={600}
                        width={728}
                        objectFit="cover"
                        alt={items[active].title}
                    />
                </div>
            </div>
            <div className="mt-10">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

                    <img src={items[active].images[0]} alt={items[active].title} className="w-32 h-32 mb-4 rounded-full" />

                    <p>{items[active].title}</p>
                    <p className="font-mono text-5xl">
                        {priceFormat(399.9)}
                    </p>
                    <button className="px-6 py-2 mt-4 text-gray-800 bg-gray-300 rounded-lg" >
                        Purchase {items[active].title} SoundMax
                    </button>
                </motion.div>

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
            data-tip={label.toLocaleUpperCase()}
        >
            <div className={`${colorClass[color]} w-4 h-8 rounded-l-full`}></div>
            <div className={`${colorClass[color].replace('-100', '-200')} w-4 h-8 rounded-r-full`}></div>
        </div>
    )
}

export default ColorToPurchase