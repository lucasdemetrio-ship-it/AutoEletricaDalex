import { MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground grid place-items-center shadow-elegant hover:scale-110 transition-base animate-pulse"
    >
      <MessageCircle size={26} />
    </a>
  );
}
