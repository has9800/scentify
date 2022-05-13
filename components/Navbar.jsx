import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'

function Navbar() {
    const { cartItems } = useStateContext();

    return (
        <div className="black-bg white-text flex flex-row justify-between items-center md:px-20 p-7 w-full">
            <div>
                <Link href="/">
                    <h1 className="text-2xl md:text-4xl cursor-pointer">Scentify</h1>
                </Link>
            </div>
            <div className="hidden md:block">
                <ul className="flex flex-row justify-between items-center">
                    <Link href="/">
                        <li className="mx-10 text-xs uppercase tracking-widest cursor-pointer">Home</li>
                    </Link>
                    {['Fragrances', 'Collection'].map((item) => (
                        <Link href="" key={item}>
                            <li className="mx-10 text-xs uppercase tracking-widest cursor-pointer">{item}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="">
                <button type="button" onClick="" className="cart-icon">
                    <AiOutlineShopping />
                    <span className="cart-item-qty">3</span>
                </button>
            </div>
        </div>
    )
}

export default Navbar
