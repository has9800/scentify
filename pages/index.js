import {
  Navbar,
  Product,
  HeroBanner,
  Newsletter,
  Footer
} from '../components'
import { client } from '../lib/client'

export default function Home({ products, bannerData }) {
  return (
    <div>
      <Navbar />

      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className="text-center my-16">
        <h2 className="text-3xl md:text-4xl my-3">Best Selling Products</h2>
        <p className="light-brown-text my-2">Scents of many variations</p>
      </div>
 
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start px-10">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>


      <div className="text-center my-16">
        <h2 className="text-3xl md:text-4xl my-3">New Arrivals</h2>
        <p className="light-brown-text my-2">2022 Collection</p>
      </div>
 
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start px-10">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <Newsletter />

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