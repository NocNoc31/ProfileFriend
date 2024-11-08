import { useState } from 'react';
import { database, ref, set } from '../firebase-config.js'; // Import từ firebase-config
import './styles.css';


interface ProfileProps {
  name: string;
  description: string;
  img: string;
}

interface CuteStarProps {
  selected: boolean;
  onClick: () => void;
}

export const Profile = ({ name, description, img }: ProfileProps) => {
    const [rating, setRating] = useState<number>(0);
    const [feedback, setFeedback] = useState<string>('');
    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

    const handleRating = (value: number): void => {
        setRating(value);
        setIsSubmitted(false);
    };

    const handleFeedbackChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setFeedback(event.target.value);
    };

    const handleSubmit = (): void => {
        const userName = name;
    
        // Tạo đối tượng chứa cả rating và feedback
        const feedbackData = {
            name: userName,
            rating: rating,
            feedback: feedback
        };
    
        // Gửi cả rating và feedback cùng lúc lên Firebase
        set(ref(database, 'RatingsAndFeedback/' + Date.now()), feedbackData)
            .then(() => {
                console.log("Đánh giá và feedback đã được gửi lên Firebase!");
            })
            .catch((error: any) => {  // Khai báo kiểu cho error
                console.error("Lỗi khi gửi dữ liệu lên Firebase: ", error);
            });
    
        setIsSubmitted(true);
        alert(`Đánh giá của bạn: ${rating} sao!\nFeedback: ${feedback}\nCảm ơn bạn đã gửi đánh giá.`);
    };
    

    return (
        <div className="w-full max-w-3xl bg-white rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 pr-4 mb-4 sm:mb-0">
                <img src={img} alt="Profile" className="w-full h-full object-cover rounded-lg" />
            </div>
            
            <div className="w-full sm:w-1/2 pl-4 flex flex-col justify-center">
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
                    rows={4}
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

const CuteStar = ({ selected, onClick }: CuteStarProps): JSX.Element => {
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
