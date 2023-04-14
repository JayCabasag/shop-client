import React, { useState } from 'react'

interface CreateAccountWaringProps {
    open: boolean
    handleModalToggler: () => void
}

export default function CreateAccountWarning({ open , handleModalToggler} : CreateAccountWaringProps) {
  return (
    <div tabIndex={-1} aria-hidden="false" className={`${open ? '' : 'hidden'} flex items-center justify-center z-50 fixed top-0 left-0 right-0 w-screen bg-slate-500 bg-opacity-80 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full`}>
        <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button onClick={handleModalToggler} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                    <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Please fill out your details</h3>
                    <form className="space-y-2" action="#">
                        <div>
                            <input type="text" name="firstname" id="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Firstname" required />
                        </div>
                        <div>
                            <input type="text" name="lastname" id="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Lastname" required />
                        </div>
                        <div>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" required />
                        </div>
                        <div>
                            <input type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Phone number" required />
                        </div>
                        <div>
                            <input type="text" name="delivery-address" id="delivery-address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Delivery address" required />
                        </div>
                        <button type="submit" className="w-full text-white bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-500 dark:hover:bg-slate-600 dark:focus:ring-slate-500">Save details</button>
                        {/* <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                        </div> */}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
