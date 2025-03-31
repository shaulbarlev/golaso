import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton({
  className,
  text,
  href = "https://wa.me/message/IG2MOYAMRYOLL1",
}: {
  className?: string;
  text: string;
  href?: string;
}) {
  return (
    <div
      className={`text-xl text-green-500 font-bold bg-white px-5 py-2 rounded-full w-fit ${className}`}
    >
      <a href={href} className="flex items-center justify-center gap-2">
        {text && <span className="">{text}</span>}
        <span className="inline-block align-[-4px]">
          <FaWhatsapp size={24} title="צור קשר בוואטסאפ" />
        </span>
      </a>
    </div>
  );
}
