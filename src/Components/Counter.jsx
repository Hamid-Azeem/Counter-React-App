import React, { useState } from "react";
import { FaPlus, FaMinus, FaRedo } from 'react-icons/fa'; // Using Font Awesome icons for a unique touch

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 rounded-full shadow-2xl max-w-xs mx-auto my-10 transform transition-all duration-300 hover:scale-105">
            <div className="flex justify-center items-center mb-4">
                <h1 className="text-6xl text-white font-bold">{count}</h1>
            </div>
            <div className="flex justify-between items-center mb-4">
                <button
                    className="bg-white text-purple-600 rounded-full p-3 m-4 transition-transform duration-300 hover:bg-purple-600 hover:text-white transform hover:scale-110"
                    onClick={() => setCount(count + 1)}
                >
                    <FaPlus className="w-6 h-6" />
                </button>
                <button
                    className="bg-white text-purple-600 rounded-full p-3 m-4 transition-transform duration-300 hover:bg-purple-600 hover:text-white transform hover:scale-110"
                    onClick={() => count > 0 ? setCount(count - 1) : null}
                >
                    <FaMinus className="w-6 h-6" />
                </button>
            </div>
            <div className="flex justify-center items-center">
                <button
                    className="bg-white text-purple-600 rounded-full p-3 m-4  transition-transform duration-300 hover:bg-purple-600 hover:text-white transform hover:scale-110"
                    onClick={() => setCount(0)}
                >
                    <FaRedo className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}

export default Counter;
