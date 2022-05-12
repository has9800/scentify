import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'

function Navbar() {
    return (
        <div className="black-bg white-text flex flex-row justify-between items-center md:px-20 p-7 w-full">
            <div>
                <h1 className="text-2xl md:text-4xl">Scentify</h1>
            </div>
            <div className="hidden md:block">
                <ul className="flex flex-row justify-between items-center">
                    {['Home', 'Fragrances', 'Collection'].map((item) => (
                        <Link href="" key={item}>
                            <li className="mx-10 text-xs uppercase tracking-widest cursor-pointer">{item}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="">
                <button type="button" onClick="" className="cart-icon">
                    <AiOutlineShopping />
                    <span className="cart-item-qty">10</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar
