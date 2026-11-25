import Image from "next/image";

type PolaroidProps = {
  className?: string;
  sizes: string;
  priority?: boolean;
  alt?: string;
};

// Off-white instant photo of Pieter with a strip of coral tape across the top.
export default function Polaroid({ className = "", sizes, priority = false, alt = "Pieter, the voice of Echo Room" }: PolaroidProps) {
  return (
    <figure className={`polaroid ${className}`.trim()}>
      <span className="polaroid-tape" aria-hidden="true" />
      <div className="polaroid-photo">
        <Image src="/Pieter_Borremans.jpeg" alt={alt} fill priority={priority} sizes={sizes} />
      </div>
    </figure>
  );
}
