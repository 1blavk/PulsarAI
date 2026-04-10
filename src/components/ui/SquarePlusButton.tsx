import React from 'react';

interface SquarePlusButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: 'sm' | 'md' | 'lg';
    variant?: 'primary' | 'secondary';
}

const SquarePlusButton: React.FC<SquarePlusButtonProps> = ({
    size = 'md',
    variant = 'primary',
    className = '',
    ...props
}) => {
    // O'lchamlarni belgilaymiz
    const sizeClasses = {
        sm: 'w-10 h-10',
        md: 'w-14 h-14',
        lg: 'w-20 h-20'
    };

    const iconSizes = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-12 h-12'
    };

    return (
        <button
            className={`
        ${sizeClasses[size]}
        flex items-center justify-center
        bg-[#5D6BB2] hover:bg-[#4A579E] 
        rounded-[22px] 
        transition-all duration-200 active:scale-95
        shadow-lg hover:shadow-[#5D6BB2]/30
        group
        ${className}
      `}
            {...props}
        >
            {/* Oq doira */}
            <div className={`
        ${iconSizes[size]}
        bg-white rounded-full 
        flex items-center justify-center
        transition-transform duration-200 group-hover:scale-110
      `}>
                {/* Plyus (+) belgisi */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-3/4 h-3/4 text-[#5D6BB2] stroke-[3]"
                >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
            </div>
        </button>
    );
};

export default SquarePlusButton;