import React, { ReactNode } from 'react';

interface ShimmerEffectProps {
    children?: ReactNode;
}

const ShimmerEffect: React.FC<ShimmerEffectProps> = ({ children }) => {
    return (
        <div className="relative overflow-hidden w-full h-full">
            <div 
                className="absolute inset-0 z-10 opacity-10 transform translate-x-full ease-out w-screen h-screen bg-gradient-to-r from-white via-gray-400 to-white 
                animate-shimmer"
            />
            {children}
        </div>
    );
};

export default ShimmerEffect;