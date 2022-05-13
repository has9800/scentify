import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
    let date = new Date().getFullYear();

    return (
        <div className="black-bg p-20">
            <h1 className="text-gray-500 uppercase md:text-center text-2xl mb-10 tracking-widest">Scentify</h1>

            <div className="text-gray-500 flex flex-col md:flex-row items-start justify-around">
                <div className="my-3">
                    <p className="font-bold mb-3 text-xl tracking-wider">Information Center</p>
                    {["Privacy Policy", "Return Policy", "Terms & Conditions", "Customer Service"].map((item) => (
                        <p key={item} className="my-4 d cursor-pointer hover:text-gray-400">{item}</p>
                    ))}
                </div>
                <div className="my-3">
                    <p className="font-bold mb-3 text-xl tracking-wider">About Us</p>
                    {["Contact Us", "Company", "Careers", "Store Locator", "Newsroom", "FAQ"].map((item) => (
                        <p key={item} className="my-4 cursor-pointer hover:text-gray-400">{item}</p>
                    ))}
                </div>
                <div className="my-3">
                    <p className="font-bold mb-3 text-xl tracking-wider">Services</p>
                    {["Shipping", "Same-day Delivery", "Curbside Pickup", "Returns", "Track Order", "Request Item"].map((item) => (
                        <p key={item} className="my-4 cursor-pointer hover:text-gray-400">{item}</p>
                    ))}
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start md:justify-around md:items-center">
                <div>
                    <p className="text-gray-500 md:text-center mt-20 text-sm">Copyright - Scentify {date}</p>
                </div>
                <div className="flex flex-row items-start justify-center mt-2 md:mt-20">
                    <AiFillInstagram className="light-brown-text mr-5 cursor-pointer hover:transition-all hover:scale-125" />
                    <AiOutlineTwitter className="light-brown-text cursor-pointer hover:transition-all hover:scale-125" />
                </div>
            </div>
        </div>
    )
}

export default Footer
