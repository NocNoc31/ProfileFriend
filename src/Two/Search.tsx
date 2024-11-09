import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export const Search = () => {
    const [isActive, setIsActive] = useState(false);

    const handleFocus = () => setIsActive(true);
    const handleBlur = () => setIsActive(false);

    return (
        <div className="flex items-center justify-center w-full absolute top-4">
            <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-1 shadow-md 
                            transition duration-300 hover:shadow-lg focus-within:ring-4 focus-within:ring-pink-300">
                
                {/* Input Search Bar */}
                <input
                    type="text"
                    placeholder="Tìm kiếm..."
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={`w-60 py-2 text-gray-700 placeholder-gray-500 rounded-full outline-none 
                               transition-all duration-300 transform ${isActive ? 'ring-2 ring-pink-500 scale-105' : ''}`}
                />
                
                {/* Search Button */}
                <button
                    className="flex items-center justify-center ml-2 p-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition duration-300 transform hover:scale-110 
                               active:scale-90 focus:outline-none shadow-md"
                    style={{ height: '40px', width: '40px' }}  // giữ kích thước của button đồng nhất
                >
                    <FiSearch className="text-xl" />
                </button>
            </div>
        </div>
    );
};
