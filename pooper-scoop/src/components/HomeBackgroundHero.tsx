import Image from 'next/image';

interface BackgroundProps {
  children: React.ReactNode;
  containerClassName?: string;
  showHeroImage?: boolean;
  showAbsoluteMascotte?: boolean;
  addMobileMargin?: boolean; // <-- new prop
}

export default function HomeBackgroundHero({
  children,
  containerClassName,
  showHeroImage = false,
  showAbsoluteMascotte = false,
  addMobileMargin = false, // <-- default
}: BackgroundProps) {
  return (
    <div className={`px-5 relative max-lg:px-0 `}>
      <div
      
        className={`relative lg:rounded-[var(--radius)] items-center bg-custom-gradient overflow-visible p-4 before:absolute before:inset-0 before:bg-repeat before:opacity-20 before:rounded-[var(--radius)]`}
        style={{
          // Use CSS custom property for the pattern
          ['--pattern-url' as any]: 'url(/images/home-page/pattern.svg)',
        }}
      >
        
        {/* Revert to div with background-image but make it discoverable via style attribute */}
        <div
          className="absolute left-0 top-0 h-full w-full opacity-20 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/home-page/pattern.svg)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            maskImage: 'linear-gradient(to right, white 0%, rgba(255, 255, 255, 0.2) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, white 0%, rgba(255, 255, 255, 0.2) 100%)'
          }}
        />
        <div className={`flex flex-col gap-20 mb-30 items-start max-md:gap-4 ${addMobileMargin ? "max-md:mb-4" : ""} `}>
          {children}
          {showHeroImage && (
            <img 
              src="/images/avif/real-life-images/creeper.avif" 
              alt="Doodie Duty professional pet waste removal service" 
              className="h-[30vw] absolute right-0 bottom-[1%] max-md:relative max-md:h-auto max-md:w-full max-md:-mb-25 max-md:mt-20"
              fetchPriority="high"
            />
          )}
        </div>
      </div>
      {showAbsoluteMascotte && (
        <img src="/images/avif/mascottes/deodorizer-hero.avif" alt="dog stink" className="absolute bottom-[-10px] h-[150px] left-[15%]" />
      )}
    </div>
  );
}