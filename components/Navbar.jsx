import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
import { Cart } from './'

function Navbar() {
    const { showCart, setShowCart, totalQuantities } = useStateContext();

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
                <button type="button" onClick={() => setShowCart(true)} className="cart-icon">
                    <AiOutlineShopping />
                    <span className="cart-item-qty">{totalQuantities}</span>
                </button>
            </div>

            {showCart && <Cart />}
        </div>
    )
}

export default Navbar
