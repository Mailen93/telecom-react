import {
  User,
  Fav,
  Facebook,
  LinkedIn,
  Twitter,
  Youtube,
} from "../assets/icons";

export const navigationitems = [
  { id: "inicio", label: "Inicio", route: "/" },
  { id: "nosotros", label: "Nosotros", route: "/nosotros" },
  { id: "contacto", label: "Contacto", route: "/contacto" },
  { id: "alta", label: "Alta", route: "/alta" },
];

export const navIcons = [
  { id: "usuario", icon: User },
  { id: "favs", icon: Fav },
];

export const buttons = [{ id: "comprar", label: "Comprar" }];

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

export const addRemoveButtons = [
  { id: "add", label: "+" },
  { id: "remove", label: "-" },
];

export const summaryItems = [
  { id: "products", label: "Total Productos" },
  { id: "shipping", label: "Envío" },
  { id: "taxes", label: "IVA" },
  { id: "totalWithTaxes", label: "Total + IVA" },
];

export const uploadInputs = [
  { id: "name", label: "Game Name" },
  { id: "price", label: "Game Price" },
  { id: "players", label: "Game Players" },
  { id: "age", label: "Players Age" },
  { id: "description", label: "Game Description" },
];

export const prodcuctsListButtons = [
  { id: "modify", label: "Modify Product" },
  { id: "delete", label: "Delete Product" },
];
