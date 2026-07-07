export const SITE = {
  name: "Auto Elétrica Dalex",
  phone: "(47) 3521-4622",
  phoneRaw: "+554735214622",
  phones: [
    { label: "Peças", number: "(47) 98905-5052", raw: "+5547989055052", whatsapp: "5547989055052" },
    { label: "Aferições", number: "(47) 99914-0300", raw: "+5547999140300", whatsapp: "5547999140300" },
    { label: "Financeiro", number: "(47) 3521-4622", raw: "+554735214622", whatsapp: "554735214622" },
  ],
  whatsapp: "554735214622",
  whatsappDisplay: "(47) 3521-4622",
  email: "dalex@dalex.com.br",
  address: "Rodovia BR-470, Km 145 — Rio do Sul/SC",
  hours: "Seg a Sex: 07h40 às 12h | 13h30 às 18h",
  instagram: "https://instagram.com/dalexautoeletrica",
  facebook: "https://facebook.com/eletricadalex",
  mapsEmbed: "https://www.google.com/maps?q=BR-470,+Rio+do+Sul,+SC&output=embed",
  gruUrl: "https://cronotacografo.rbmlq.gov.br/grus/emitir_verificacao",
  certUrl: "https://cronotacografo.rbmlq.gov.br/certificados/consultar",
};

export const waLink = (text = "Olá! Gostaria de mais informações.") =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
