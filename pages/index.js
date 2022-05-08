import {
  Navbar,
  Product,
  HeroBanner,
  Footer
} from '../components'
import { client } from '../lib/client'

export default function Home({ products, bannerData }) {
  return (
    <div>
      <Navbar />

      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="text-center my-20">
        <h2 className="text-3xl md:text-4xl my-3">Best Selling Products</h2>
        <p className="light-brown-text my-2">Scents of many variations</p>
      </div>
 
      <div className="flex flex-col md:flex-row justify-center items-center">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <Footer />
    </div>
  )
}
 
export const getServerSideProps = async props => {
  // query sanity products
  const productsQuery = '*[_type == "product"]';
  const products = await client.fetch(productsQuery);

  // query banner data
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData
    }
  }
}