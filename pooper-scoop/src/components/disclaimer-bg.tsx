interface DisclaimerBgProps {
  src?: string;
  alt?: string;
  objectPosition?: string;
  className?: string;
}

export default function DisclaimerBg({
  src = "/images/disclaimer-bg-3.png",
  alt = "",
  objectPosition = "object-bottom",
  className = "",
}: DisclaimerBgProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute inset-0 w-full h-full object-cover ${objectPosition} -z-10 ${className} `}
    />
  );
}
