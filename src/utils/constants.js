import { User, Fav, Cart } from "../assets//icons";
import {
  ConEsoNo,
  Decisiones,
  ElMelomano,
  EnPalabras,
  Ilusrado,
  NiEnPedo,
  Refumany,
  Teg,
  Tekbio,
} from "../assets/ProductsImages";

export const navigationitems = [
  { id: "inicio", label: "Inicio", route: "/home" },
  { id: "nosotros", label: "Nosotros", route: "/nosotros" },
  { id: "productos", label: "Productos", route: "/productos" },
  { id: "contacto", label: "Contacto", route: "/contacto" },
];

export const navIcons = [
  { id: "usuario", icon: User },
  { id: "favs", icon: Fav },
  { id: "cart", icon: Cart },
];

export const buttons = [
  { id: "comprar", label: "Comprar" },
  { id: "verMas", label: "Ver Más" },
];

export const products = [
  {
    id: 0,
    name: "Decisiones de Mierda",
    image: Decisiones,
    description:
      "¿Creés que tus amigos toman malas decisiones? Conocé nuevos aspectos oscuros (muy oscuros) de ellos...",
    price: 4990,
    players: "2 - 4",
    age: "18",
    units: 0,
  },
  {
    id: 1,
    name: "En palabras - Desconectados",
    image: EnPalabras,
    description:
      " Disparador de encuentros festivos e íntimos, corporales y emocionales. Las cartas buscan destapar estereotipos y prejuicios.",
    price: 8990,
    players: "2 - 8",
    age: "16",
    units: 0,
  },
  {
    id: 2,
    name: "El melómano",
    image: ElMelomano,
    description:
      "El Melómano es un juego de mesa para los amantes de la música ¡Quién primero consiga los 3 discos de Platino será el ganador!",
    price: 14000,
    players: "4+",
    age: "16",
    units: 0,
  },
  {
    id: 3,
    name: "Ni en pedo",
    image: NiEnPedo,
    description:
      "Colocá el mazo en la mesa, saca una carta y ¡que comience el juego! Si no hacés lo que dice, como castigo, tomás unos tragos!!!",
    price: 4700,
    players: "2 - 8",
    age: "18",
    units: 0,
  },
  {
    id: 4,
    name: "Con eso no se jode",
    image: ConEsoNo,
    description:
      "Poné a prueba tu capacidad para improvisar respuestas graciosas en este juego de cartas de humor negro.",
    price: 5400,
    players: "3 - 10",
    age: "18",
    units: 0,
  },
  {
    id: 5,
    name: "Refumanyi",
    image: Refumany,
    description:
      "Cada carta tiene una consigna para que fume uno, todos o nadie.¡Gana el que después de varias rondas fuma la última pitada!",
    price: 6200,
    players: "2 - 4",
    age: "18",
    units: 0,
  },
  {
    id: 6,
    name: "TEG",
    image: Teg,
    description:
      "Poné a prueba tu inteligencia y táctica en la batalla por conquistar el mundo. ¡Cumplí las misiones y derribá a tus oponentes!",
    price: 21000,
    players: "2 - 6",
    age: "12",
    units: 0,
  },
  {
    id: 7,
    name: "TK-bió",
    image: Tekbio,
    description:
      "Un juego para disfrutar de lo más hermoso que tiene la amistad: LA MALDAD. Consignas llenas de venganza, sufrimiento y cringe...",
    price: 3200,
    players: "3 - 10",
    age: "18",
    units: 0,
  },
  {
    id: 8,
    name: "El ilustrado",
    image: Ilusrado,
    description:
      " Poné a prueba tus conocimientos en distintas áreas mientras compartís momentos inolvidables con tus seres queridos.",
    price: 15850,
    players: "2 - 9",
    age: "15",
    units: 0,
  },
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
