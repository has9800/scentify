import Image from "next/image";
import Link from "next/link";
// import random from '../public/assets/jess-bailey-NaTza96eJm0-unsplash.jpg'
// import random from '../public/assets/v.png'
import random from '../public/assets/dior.jpg'

function HeroBanner({ heroBanner }) {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="black-bg flex flex-col md:items-center w-full md:w-1/2 p-10 md:p-20">
                <div>
                    <p className="text-sm font-thin text-white my-2">Featured - Dior Homme</p>
                    <h3 className="text-3xl md:text-4xl light-brown-text my-2">{heroBanner.midText}</h3>
                    <h1 className="text-6xl md:text-9xl uppercase text-white my-2">{heroBanner.largeText1} %</h1>
                     <Link href={`/product/${heroBanner.product}`}>
                        <button type="button" className="light-brown-bg my-2 p-3 text-xs uppercase tracking-widest font-semibold">{heroBanner.buttonText}</button>
                    </Link>

                    <div className="my-5">
                        <p className="text-white">{heroBanner.desc}</p>
                    </div>
                </div>
                {/* <div className="mt-5 text-black">
                    <Link href={`/product/${heroBanner.product}`}>
                        <button type="button" className="light-brown-bg p-3 text-xs uppercase tracking-widest font-semibold">{heroBanner.buttonText}</button>
                    </Link>

                    <div className="my-5">
                        <p className="text-white">{heroBanner.desc}</p>
                    </div>
                </div> */}
            </div>
            <div className="w-full md:w-1/2 relative">
                <div className="w-full h-full">
                    <Image src={random} alt="fragrance" objectFit="cover" layout="fill" />
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
