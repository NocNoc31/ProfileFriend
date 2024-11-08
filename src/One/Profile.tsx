import React, { useState } from 'react';
import { database, ref, set } from '/home/ubuntu/Desktop/Python/reactjs/Project1/src/firebase-config.js'; // Import từ firebase-config

export const Profile = ({ name, description, img }) => {
    const [rating, setRating] = useState(0); // Lưu số sao được chọn
    const [feedback, setFeedback] = useState(''); // Lưu feedback người dùng nhập
    const [isSubmitted, setIsSubmitted] = useState(false); // Trạng thái khi gửi đánh giá

    // Hàm xử lý khi người dùng chọn một số sao
    const handleRating = (value) => {
        setRating(value);
        setIsSubmitted(false); // Reset trạng thái gửi đánh giá khi thay đổi sao
    };

    // Hàm xử lý khi người dùng nhập feedback
    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    // Hàm gửi đánh giá
    const handleSubmit = () => {
        // Gửi dữ liệu lên Firebase
        const userName = name; // Sử dụng tên người dùng từ props
        const feedbackData = {
            name: userName,
            rating: rating,
            feedback: feedback,
        };

        // Gửi rating lên Firebase
        set(ref(database, 'Ratings/' + Date.now()), {
            name: userName,
            rating: rating,
        }).then(() => {
            console.log("Đánh giá đã được gửi lên Firebase!");
        }).catch((error) => {
            console.error("Lỗi khi gửi dữ liệu lên Firebase: ", error);
        });

        // Gửi feedback lên Firebase
        set(ref(database, 'Feedback/' + Date.now()), {
            name: userName,
            feedback: feedback,
        }).then(() => {
            console.log("Feedback đã được gửi lên Firebase!");
        }).catch((error) => {
            console.error("Lỗi khi gửi feedback lên Firebase: ", error);
        });

        setIsSubmitted(true);
        alert(`Đánh giá của bạn: ${rating} sao!\nFeedback: ${feedback}\nCảm ơn bạn đã gửi đánh giá.`);
    };

    return (
        <div className="w-[36rem] bg-white rounded-lg p-12 flex">
            <div className="w-1/2 pr-4">
                <img src={img} alt="Profile" className="w-full h-full object-cover rounded-lg" />
            </div>
            
            <div className="w-1/2 pl-4 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-600 mb-4">{description}</p>

                <p className="text-gray-600 mb-4">Đánh giá: {rating} sao.</p>

                <div className="flex items-center space-x-1 mt-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <CuteStar
                            key={value}
                            selected={value <= rating}
                            onClick={() => handleRating(value)}
                        />
                    ))}
                </div>

                <textarea
                    value={feedback}
                    onChange={handleFeedbackChange}
                    placeholder="Nhập feedback của bạn ở đây..."
                    className="mt-4 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all duration-300"
                    rows="4"
                />

                <button
                    onClick={handleSubmit}
                    className={`mt-4 px-6 py-3 text-white font-bold rounded-lg transition-all duration-300 ${isSubmitted ? 'bg-gray-400 cursor-not-allowed' : 'bg-pink-500 hover:bg-pink-600 active:scale-95'}`}
                    disabled={isSubmitted}
                >
                    {isSubmitted ? 'Đánh giá đã gửi! 💌' : 'Gửi đánh giá 💕'}
                </button>
            </div>
        </div>
    );
};

const CuteStar = ({ selected, onClick }) => {
    return (
        <div onClick={onClick} className="cursor-pointer text-3xl transition duration-200">
            {selected ? (
                <span role="img" aria-label="selected" className="text-pink-500">
                    💖
                </span>
            ) : (
                <span role="img" aria-label="unselected" className="text-gray-300">
                    🤍
                </span>
            )}
        </div>
    );
};
