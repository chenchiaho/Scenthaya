import Image from "next/image"

const Hero2 = () => {
    return (
        <>

            <div className="flex flex-col mb-20 relative pb-[56.25%]">
                <div className="absolute w-full h-full">
                    <Image
                        src="/images/home-2/audio-quality.jpg"
                        alt="product 0"
                        layout='fill'
                        objectFit='cover'
                        objectPosition='center'
                    />
                </div>


                <div
                    className="absolute inset-0 flex flex-col justify-center font-bold text-white" style={{ lineHeight: '1' }}

                >
                    <div style={{ fontSize: "clamp(8px, 1.8vw, 1.5rem)" }}>
                        AUDIO QUALITY
                    </div>
                    <div style={{ fontSize: "clamp(12px, 8vw, 10rem)" }}>
                        Enjoy high quality <br />sound
                    </div>

                </div>


            </div>


        </>
    )
}

export default Hero2