/* eslint-disable @next/next/no-img-element */
import { useStateContext } from '../../context/StateContext'
import { client, urlFor } from '../../lib/client'
import { Product } from '../../components'
import { 
    AiOutlineMinus, 
    AiOutlinePlus, 
    AiFillStar, 
    AiOutlineStar 
} from 'react-icons/ai'
// import afterPay from '../../public/assets/afterpay.png'

function ProductDetails({ product, similarProducts }) {
    const { image, name, details, price } = product; 
    const { incQty, decQty, qty, onAdd } = useStateContext();
    
    return (
         <div className="">
            <div className="product-detail-container flex flex-col md:flex-row md:items-center">
                <div className="">
                    <img src={urlFor(image && image[0])} alt="fragrance" />
                </div>
                <div className="product-detail-desc w-full">
                    <h1 className="text-2xl">{name}</h1>
                    <div className="reviews my-3">
                        <div className="flex flex-row justify-center items-center">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p className="light-brown-text">(734)</p>
                    </div>
                    <h4 className="text-xl mb-5">Product Details</h4>
                    <p className="md:w-2/3 mb-5 leading-7">{details}</p>
                    <p className="font-bold my-5 text-3xl">${price}</p>
                    <div className="quantity mt-10">
                        <h3 className="text-xl">Quantity</h3>
                        <p className="flex flex-row items-center justify-center md:justify-start">
                            <span className="minus light-brown-bg rounded-sm w-16 p-1 text-white hover:scale-95 hover:transition-all hover:cursor-pointer shadow-lg" onClick={decQty}>
                                <AiOutlineMinus className="mx-auto" />
                            </span>
                            <span className="num mx-5 text-xl" onClick="">
                                {qty}
                            </span>
                            <span className="plus light-brown-bg rounded-sm w-16 p-1 text-white hover:scale-95 hover:transition-all hover:cursor-pointer shadow-lg" onClick={incQty}>
                                <AiOutlinePlus className="mx-auto" />
                            </span>
                        </p>
                    </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart mr-4" onClick={() => onAdd(product, qty)}>Add to cart</button>
                        <button type="button" className="buy-now mr-4" onClick="">Buy now</button>
                    </div>
                </div>
            </div>
            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {similarProducts.map((product) => (
                            <Product key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    // query for all product slugs
    const query = `*[_type == "product"] {
        slug { current }
    }`;

    const productSlugs = await client.fetch(query);
    const paths = productSlugs.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }))

    return {
      paths,
      fallback: 'blocking',
    }
}


export const getStaticProps = async ({ params: { slug }}) => {
    // query sanity products
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const similarProductsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const similarProducts = await client.fetch(similarProductsQuery)
  
    return {
      props: {
        product,
        similarProducts
      }
    }
}

export default ProductDetails