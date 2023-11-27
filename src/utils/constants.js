import {
  User,
  Fav,
  Facebook,
  LinkedIn,
  Twitter,
  Youtube,
} from "../assets//icons";

export const navigationitems = [
  { id: "inicio", label: "Inicio", route: "/home" },
  { id: "nosotros", label: "Nosotros", route: "/nosotros" },
  { id: "productos", label: "Productos", route: "/productos" },
  { id: "contacto", label: "Contacto", route: "/contacto" },
  { id: "alta", label: "Alta", route: "/alta" },
];

export const navIcons = [
  { id: "usuario", icon: User },
  { id: "favs", icon: Fav },
];

export const buttons = [
  { id: "comprar", label: "Comprar" },
];

export const footerContent = [
  {
    id: "us",
    title: "Nosotros",
    content:
      "Creemos fervientemente en la importancia de la conexión humana, la risa y la camaradería en la era digital actual. Nuestro objetivo es ofrecerte una amplia gama de juegos de mesa diseñados especialmente para adultos.",
  },
  {
    id: "help",
    title: "Dejanos Ayudarte",
    content: [
      { id: "account", label: "Tu cuenta" },
      { id: "orders", label: "Tus órdenes" },
      { id: "faq", label: "FAQ" },
      { id: "help2", label: "Ayuda" },
    ],
  },
  {
    id: "contact",
    title: "Contacto",
    content: [
      { id: "direction", label: "Spiro 65, Adrogue" },
      { id: "mail", label: "m.labarrere2@gmail.com" },
      { id: "phone", label: "1131225993" },
    ],
  },
];

export const footerIcons = [
  {
    id: "facebook",
    icon: Facebook,
    link: "https://www.facebook.com/?locale=es_LA",
  },
  {
    id: "linkedIn",
    icon: LinkedIn,
    link: "https://www.linkedin.com/in/mlabarrere/",
  },
  {
    id: "twitter",
    icon: Twitter,
    link: "https://twitter.com/?lang=es",
  },
  {
    id: "youtube",
    icon: Youtube,
    link: "https://www.youtube.com/?app=desktop&gl=AR&hl=es",
  },
];
