import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils } from 'lucide-react';

const MealCard = ({ title, items, icon: Icon, color }) => {
    const [result, setResult] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [displayItem, setDisplayItem] = useState("?");

    const handleRandomize = () => {
        if (isSpinning) return;
        setIsSpinning(true);

        let counter = 0;
        const maxSpins = 20; // Number of flicks before stopping
        const speed = 100; // Initial speed

        const interval = setInterval(() => {
            const randomTemp = items[Math.floor(Math.random() * items.length)];
            setDisplayItem(randomTemp);
            counter++;

            if (counter > maxSpins) {
                clearInterval(interval);
                const finalResult = items[Math.floor(Math.random() * items.length)];
                setDisplayItem(finalResult);
                setResult(finalResult);
                setIsSpinning(false);
            }
        }, speed);
    };

    return (
        <div className="relative group">
            {/* Glassmorphism Card */}
            <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-xl transition-all hover:bg-white/10 hover:shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white/90 tracking-tight">{title}</h2>
                    <div className={`p-3 rounded-full bg-gradient-to-br ${color} bg-opacity-20`}>
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                </div>

                {/* Result Area - The "Centerpiece" */}
                <div className="min-h-[120px] flex items-center justify-center mb-8 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={displayItem}
                            initial={{ y: 20, opacity: 0, filter: "blur(5px)" }}
                            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                            exit={{ y: -20, opacity: 0, filter: "blur(5px)" }}
                            transition={{ duration: 0.1 }}
                            className="text-center"
                        >
                            <p className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${result === displayItem && !isSpinning ? 'from-green-300 to-emerald-300 scale-110' : 'from-white to-gray-400'}`}>
                                {displayItem === "?" ? "Ready?" : displayItem}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                    {/* Glow effect specific to result */}
                    {result === displayItem && !isSpinning && (
                        <motion.div
                            layoutId="glow"
                            className="absolute inset-0 bg-white/5 blur-3xl -z-10 rounded-full"
                        />
                    )}
                </div>

                {/* Action Button */}
                <button
                    onClick={handleRandomize}
                    disabled={isSpinning}
                    className={`w-full py-4 px-6 rounded-xl font-semibold tracking-wide transition-all duration-300 
            ${isSpinning
                            ? 'bg-gray-700/50 text-gray-400 cursor-not-allowed'
                            : 'bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/10 hover:border-white/30 text-white shadow-lg shadow-black/20 active:scale-95'
                        }`}
                >
                    {isSpinning ? 'Rolling...' : 'Find Meal'}
                </button>
            </div>
        </div>
    );
};

export default MealCard;
