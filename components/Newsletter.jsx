/* eslint-disable react/no-unescaped-entities */
import React from 'react'

function Newsletter() {
    return (
        <div className="text-center black-bg p-10 mt-32">
            <div className="w-full md:w-1/2 mx-auto">
                <h3 className="text-3xl md:text-4xl light-brown-text my-2">Never miss out on a deal again!</h3>
                <p className="text-white my-2 text-lg">Sign up for our newsletter to receive gifts & offers</p>
                <p className="text-xs my-2 light-brown-text">We don't spam or share data with third parties</p>
                <div className="w-full md:w-1/2 mt-5 mx-auto">
                    <input 
                        type="email" placeholder="Email"
                        className="bg-white p-3 rounded-l-md"
                        />
                    <button 
                    className="light-brown-bg w-24 p-3 dark-brown-text rounded-r-md cursor-pointer"
                    type="submit">Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
