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

export const values = [
  {
    id: 0,
    icon: "fa-solid fa-user-group",
    title: "Crecimiento",
    description:
      "Nos esforzamos por evolucionar constantemente, sumando nuevos colaboradores y experiencias que nos permitan ampliar los límites del entretenimiento",
  },
  {
    id: 1,
    icon: "fa-solid fa-heart",
    title: "Empatía",
    description:
      "Comprendemos las diversas necesidades de nuestra comunidad, construyendo un espacio inclusivo donde todos se sientan vistos y valorados",
  },
  {
    id: 2,
    icon: "fa-solid fa-check-to-slot",
    title: "Confianza",
    description:
      "Nos comprometemos a brindar experiencias de entretenimiento de alta calidad, construyendo relaciones sólidas a través de la transparencia y la honestidad",
  },
  {
    id: 3,
    icon: "fa-solid fa-face-smile",
    title: "Diversión",
    description:
      "Nos dedicamos a llevar la alegría a cada hogar, brindando experiencias que despiertan risas y momentos inolvidables entre amigos y familia",
  },
  {
    id: 4,
    icon: "fa-solid fa-briefcase",
    title: "Compromiso",
    description:
      "El compromiso con la calidad, la innovación y el servicio al cliente es nuestra brújula para lleva las experiencias al máximo nivel de disfrute",
  },
  {
    id: 5,
    icon: "fa-solid fa-bolt-lightning",
    title: "Trabajo en Equipo",
    description:
      "Valoramos la colaboración, la creatividad conjunta y la sinergia que impulsa nuestra pasión compartida por el entretenimiento único y memorable",
  },
];
