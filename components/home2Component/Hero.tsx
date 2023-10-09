import Image from 'next/image'

const Hero = () => {

    return (
        <>

            <div className="flex flex-col relative pb-[56.25%]">
                <div className="absolute w-full h-full">
                    <Image
                        src="/images/home-2/product-0.png"
                        alt="product 0"
                        layout='fill'
                        objectFit='contain'
                        objectPosition='top center'
                    />
                </div>
                <div
                    className="absolute inset-0 flex items-center justify-center px-6 font-bold text-black whitespace-nowrap"
                    style={{ fontSize: "clamp(12px, 10vw, 10rem)" }}
                >
                    Incredible Sound
                </div>
            </div>


        </>

    )
}

export default Hero

