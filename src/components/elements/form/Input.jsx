import React from "react";

const Input = () => {
    return (
        <div>
            <label htmlFor="helper-text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
            </label>
            <input
                type="email"
                id="helper-text"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
            />
            <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                We’ll never share your details. Read our{" "}
                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Privacy Policy
                </a>
                .
            </p>
        </div>
    );
};

export default Input;
