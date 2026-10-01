import React, { useEffect, useRef, useState } from 'react';

export const InfographicsSection: React.FC = () => {
  const [revealed1, setRevealed1] = useState(false);
  const [revealed2, setRevealed2] = useState(false);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal immediately on mount, with intersection observer enhancing the scroll entry
    const timer = setTimeout(() => {
      setRevealed1(true);
      setRevealed2(true);
    }, 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === section1Ref.current) setRevealed1(true);
            if (entry.target === section2Ref.current) setRevealed2(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (section1Ref.current) observer.observe(section1Ref.current);
    if (section2Ref.current) observer.observe(section2Ref.current);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="infographics-wrapper" className="w-full bg-[#0A1931] p-0 m-0 border-0 overflow-hidden">
      
      {/* 1. THE CHALLENGE (Cycle Form) - THE PROBLEM */}
      <section 
        id="infographic-challenge-section"
        aria-label="The Challenge - Cycle Form"
        ref={section1Ref}
        className="w-full bg-[#0A1931] p-0 m-0 border-0 flex justify-center items-center overflow-hidden"
      >
        <div 
          className={`w-full max-w-7xl mx-auto p-0 m-0 flex justify-center transition-all duration-700 ease-out transform ${
            revealed1 ? 'opacity-100 scale-100' : 'opacity-90 scale-[0.99]'
          }`}
        >
          <img 
            src="/IMG-20260929-WA7672.jpg" 
            alt="The Challenge - Same Effort. Same Spend. Zero Growth. Ekalavya Consulting"
            className="w-full h-auto object-contain block mx-auto shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('/images/')) {
                target.src = '/images/IMG-20260929-WA7672.jpg';
              }
            }}
          />
        </div>
      </section>

      {/* 2. THE ANSWER (Chain Breaker) - THE SOLUTION */}
      <section 
        id="infographic-answer-section"
        aria-label="The Answer - Chain Breaker"
        ref={section2Ref}
        className="w-full bg-[#0A1931] p-0 m-0 border-0 flex justify-center items-center overflow-hidden"
      >
        <div 
          className={`w-full max-w-7xl mx-auto p-0 m-0 flex justify-center transition-all duration-700 ease-out transform ${
            revealed2 ? 'opacity-100 scale-100' : 'opacity-90 scale-[0.99]'
          }`}
        >
          <img 
            src="/IMG-20260929-WA5137.jpg?v=3" 
            alt="The Answer - One Arrow. One Kill. No Waste. Ekalavya Consulting"
            className="w-full h-auto object-contain block mx-auto shadow-2xl transition-transform duration-500 hover:scale-[1.01]"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('/images/')) {
                target.src = '/images/IMG-20260929-WA5137.jpg?v=3';
              }
            }}
          />
        </div>
      </section>

    </div>
  );
};
