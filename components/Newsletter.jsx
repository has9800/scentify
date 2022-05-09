/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function Newsletter() {
    return (
        <div className="text-center black-bg p-10 mt-32">
            <div className="w-full md:w-1/2 mx-auto">
                <h3 className="text-3xl md:text-4xl light-brown-text my-2">Never miss out on a deal again!</h3>
                <p className="text-white my-5 text-lg">Sign up for our newsletter to receive gifts & offers</p>
                <div className="w-full md:w-1/2 mt-5 mx-auto">
                    <input 
                        type="email" placeholder="Email"
                        className="bg-white my-2 p-3 rounded-sm w-9/12 md:w-full"
                        />
                    <button 
                    className="light-brown-bg w-1/2 md:w-9/12 p-3 my-3 dark-brown-text cursor-pointer"
                    type="submit">Sign Up</button>
                </div>
            </div>
            <p className="text-xs my-1 light-brown-text">We don't spam or share data with third parties</p>
        </div>
    )
}

export default Newsletter
