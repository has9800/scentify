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

      <div className="">
        <h2>Best Selling Products</h2>
        <p>Scents of many variations</p>
      </div>
 
      <div className="">
        {products?.map(({ name }) => (
          <Product key={name} name={name} />
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