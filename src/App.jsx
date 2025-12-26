import React from 'react';
import MealCard from './components/MealCard';
import { foodLists } from './data/foodData';
import { Coffee, Sun, Moon } from 'lucide-react'; // Icons for meals

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-white selection:bg-purple-500/30">

      {/* Background Blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl mix-blend-screen animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl mix-blend-screen animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 max-w-7xl">

        {/* Helper Header */}
        <header className="text-center mb-16 space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
            <span className="text-xs font-bold tracking-widest text-purple-300 uppercase">Premium Randomizer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50">
            What's Cooking?
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Can't decide what to eat? Let fate decide your next meal with a spin.
          </p>
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <MealCard
            title="Breakfast"
            items={foodLists.breakfast}
            icon={Coffee}
            color="from-orange-400 to-red-500"
          />
          <MealCard
            title="Lunch"
            items={foodLists.lunch}
            icon={Sun}
            color="from-blue-400 to-cyan-500"
          />
          <MealCard
            title="Dinner"
            items={foodLists.dinner}
            icon={Moon}
            color="from-indigo-400 to-purple-500"
          />
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-sm text-slate-600">
          <p>Designed with Glassmorphism & React</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
