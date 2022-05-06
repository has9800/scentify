/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { urlFor } from '../lib/client'

function HeroBanner({ heroBanner }) {
    return (
        <div className="hero-banner-container">
            <div>
                <div style={{textAlign: 'center'}}>
                    <p className="hero-product">{heroBanner.smallText}</p>
                    <h3>{heroBanner.midText}</h3>
                    <h1>{heroBanner.largeText1}</h1>
                    {/* <img src={urlFor(heroBanner.image)} alt="fragrance" className="hero-banner-image" /> */}
                </div>

                <div>
                    <Link href={`/product/${heroBanner.product}`}>
                        <button type="button">{heroBanner.buttonText}</button>
                    </Link>

                    <div className="desc">
                        <h5>DESCRIPTION TITLE</h5>
                        <p>{heroBanner.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner
