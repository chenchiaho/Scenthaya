import Image from "next/image"

const SpecBlock = () => {
    return (
        <>
            <div className="flex flex-col mb-20 sm:flex-row md:space-x-6">

                <div className="flex-1 overflow-hidden rounded-2xl animate__animated animate__fadeInLeft min-h-[300px]">
                    <Image
                        className=""
                        src="/images/home-2/product-0-silver.jpeg"
                        alt="product 0"
                        fill
                        objectPosition="center"
                        objectFit="cover"
                    />
                </div>

                <div className="flex flex-col justify-center flex-1 p-10 animate__animated animate__fadeInRight">
                    <h2 className="mb-2 text-xl font-bold">Audio Technology</h2>
                    <p className="mb-4">
                        Prima luce, cum quibus mons aliud consensu ab eo. Quid securi etiam tamquam eu fugiat nulla pariatur. Cras mattis iudicium purus sit amet fermentum.
                    </p>
                    <a href="#" className="font-bold">Read More</a>
                </div>

            </div>
        </>

    )
}

export default SpecBlock