import Hero from "@/components/home2Component/Hero"
import Title from "@/components/home2Component/Title"
import SpecBlock from "@/components/home2Component/SpecBlock"
import SpecBlockReverse from "@/components/home2Component/SpecBlockReverse"
import Hero2 from "@/components/home2Component/Hero2"
import ColorToPurchase from "@/components/home2Component/ColorToPurchase"

import 'animate.css'

const page = () => {


    return (
        <div className="flex flex-col">
            <Hero />
            <Title />
            <SpecBlock />
            <SpecBlockReverse />
            <Hero2 />
            <ColorToPurchase />

        </div>
    )
}

export default page