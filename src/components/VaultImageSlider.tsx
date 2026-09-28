import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export interface VaultImage {
  src: string;
  label?: string;
}

interface VaultImageSliderProps {
  images?: (string | VaultImage)[];
  caseStudyId?: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

export const VaultImageSlider: React.FC<VaultImageSliderProps> = ({ images = [], caseStudyId = '01' }) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  // Standardize items into { src, label }
  const formattedImages: VaultImage[] = images.map((item, idx) => {
    const figNum = String(idx + 1).padStart(2, '0');
    if (typeof item === 'string') {
      const defaultLabel = idx === 0 
        ? `FIGURE ${caseStudyId}.${figNum} // FACILITY & PRIMARY VIEW`
        : `FIGURE ${caseStudyId}.${figNum} // OPERATIONAL & ASSET VIEW`;
      return {
        src: item,
        label: defaultLabel,
      };
    }
    return {
      src: item.src,
      label: item.label || `FIGURE ${caseStudyId}.${figNum} // FIELD DISPATCH`,
    };
  });

  const imageCount = formattedImages.length;
  const currentIndex = imageCount > 0 ? ((page % imageCount) + imageCount) % imageCount : 0;

  const paginate = useCallback(
    (newDirection: number) => {
      if (imageCount <= 1) return;
      setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
    },
    [imageCount]
  );

  const goToIndex = (index: number) => {
    if (index === currentIndex || imageCount <= 1) return;
    const dir = index > currentIndex ? 1 : -1;
    setPage([index, dir]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        paginate(-1);
      } else if (e.key === 'ArrowRight') {
        paginate(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [paginate]);

  if (!formattedImages || imageCount === 0) {
    return null;
  }

  const currentImage = formattedImages[currentIndex];

  return (
    <div className="w-full select-none">
      {/* 16:9 Slider Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#00FFC2]/20 bg-[#0A1628]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'tween', duration: 0.4, ease: [0.25, 1, 0.5, 1] },
              opacity: { duration: 0.4 },
            }}
            drag={imageCount > 1 ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.8}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -100 || offset.x < -60) {
                paginate(1);
              } else if (swipe > 100 || offset.x > 60) {
                paginate(-1);
              }
            }}
            className="absolute inset-0 h-full w-full cursor-grab active:cursor-grabbing"
          >
            <img
              src={currentImage.src}
              alt={currentImage.label || `Vault visual asset ${currentIndex + 1}`}
              className="h-full w-full object-cover pointer-events-none"
              draggable={false}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {imageCount > 1 && (
          <>
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-lg border border-[#00FFC2]/30 bg-[#0A1628]/85 text-[#00FFC2] backdrop-blur-sm transition-all duration-200 hover:border-[#00FFC2] hover:bg-[#0A1628] active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-lg border border-[#00FFC2]/30 bg-[#0A1628]/85 text-[#00FFC2] backdrop-blur-sm transition-all duration-200 hover:border-[#00FFC2] hover:bg-[#0A1628] active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Label and Indicators Panel */}
      <div className="mt-3 flex flex-col items-center justify-between gap-2 px-1 sm:flex-row">
        {/* Label */}
        <p className="font-mono text-xs tracking-wider text-[#00FFC2] uppercase truncate max-w-full">
          {currentImage.label || `ASSET // ${String(currentIndex + 1).padStart(2, '0')}`}
        </p>

        {/* Dot Indicators */}
        {imageCount > 1 && (
          <div className="flex items-center gap-1.5">
            {formattedImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-6 bg-[#00FFC2]'
                    : 'w-1.5 bg-[#00FFC2]/30 hover:bg-[#00FFC2]/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VaultImageSlider;
