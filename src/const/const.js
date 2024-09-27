import bbj from "../assets/bbj.webp"
import boxeo from "../assets/imagen-boxeo.webp"
import kickboxing from "../assets/kickboxing.webp"
import pilates from "../assets/pilates.webp"
import yoga from "../assets/yoga.webp"
import taekwondo from "../assets/taekwondo.webp"
import spinning from "../assets/spinning.webp"

const TRAINERS = [{
    name: "David",
    age: 23,
    class: "yoga",
    description: "Llevo muchos años de experiencia entrenando a yoga, a personas de todas las edades",
    image: "../assets/yoga.webp"
}, {
    name: "Julio",
    age: 34,
    class: "boxeo",
    description: "Llevo muchos años de experiencia entrenando boxeo, he sido campeón de Madrid amateur",
    image: "../assets/imagen-boxeo.webp"
}, {
    name: "Alberto",
    age: 26,
    class: "bbj",
    description: "Cinturón azul de brazilian jujitsu, llevo desde los doce años prácticando este apasionante deporte y me encanta compartirlo y disfrutarlo cada día con más gente",
    image: "../assets/bbj.webp"
},
{
    name: "Mónica",
    age: 31,
    class: "Taekwondo",
    description: "Subcampeona de España y cinturón negro, aprendamos a patadas ;)",
    image: "../assets/taekwondo.webp"
},
{
    name: "Juan",
    age: 25,
    class: "spinning",
    description: "Dando clases de spinning desde hace 1 año, pero me he enamorado del deporte y del ambiente",
    image: ""
},
{
    name: "Pablo",
    age: 27,
    class: "kick boxing",
    description: "Profesional del kick boxing con 8 años de experiencia enseñando.",
    image: "../assets/kickboxing.webp"
}, {
    name: "Alba",
    age: 24,
    class: "pilates",
    description: "Ven a cansarte de una forma entretenida y elástica conmigo.",
    image: "../assets/pilates.webp"
}]

const PRICES = [
    {
        name: "Classic",
        price: 30,
        plans: ["Maquinaria", "Piscina", "Entrenador personal"]
    }, {
        name: "Silver",
        price: 60,
        plans: ["Maquinaria", "Piscina", "Entrenador personal", "Actividades"]
    },
    {
        name: "Gold",
        price: 90,
        plans: ["Maquinaria", "Piscina", "Entrenador personal", "Actividades", "Spa"]
    }
]

const ACTIVITIES = [{
    id: 1,
    name: "Boxeo",
    hours: ["9:00", "12:00", "17:00"],
    trainer: "Julio",
    plazas: 25
}, {
    id: 2,
    name: "Boxeo",
    hours: "12:00",
    trainer: "Julio",
    plazas: 25
}, {
    id: 3,
    name: "Boxeo",
    hours: "17:00",
    trainer: "Julio",
    plazas: 25
},
{
    id: 4,
    name: "Kick Boxing",
    hours: "10:00",
    trainer: "Pablo",
    plazas: 25
},
{
    id: 5,
    name: "Kick Boxing",
    hours: "13:00",
    trainer: "Pablo",
    plazas: 25
},
{
    id: 6,
    name: "Kick Boxing",
    hours: "18:00",
    trainer: "Pablo",
    plazas: 25
},
{
    id: 7,
    name: "BBJ",
    hours: "9:00",
    trainer: "Alberto",
    plazas: 20
},
{
    id: 8,
    name: "BBJ",
    hours: "11:00",
    trainer: "Alberto",
    plazas: 20
},
{
    id: 9,
    name: "Taekwondo",
    hours: "10:00",
    trainer: "Mónica",
    plazas: 20
}, {
    id: 10,
    name: "Pilates",
    hours: "12:00",
    trainer: "Alba",
    plazas: 30
}, {
    id: 11,
    name: "Pilates",
    hours: "18:00",
    trainer: "Alba",
    plazas: 30
}, {
    id: 12,
    name: "Yoga",
    hours: ["13:00", "17:00"],
    trainer: "David",
    plazas: 30
}, {
    id: 13,
    name: "Yoga",
    hours: "17:00",
    trainer: "David",
    plazas: 30
}, {
    id: 14,
    name: "Spinning",
    hours: "13:00",
    trainer: "Juan",
    plazas: 15
}, {
    id: 15,
    name: "Spinning",
    hours: "17:00",
    trainer: "Juan",
    plazas: 15
}]

const CLASSES = [{
    name: "BBJ",
    description: "Arte marcial enfocado en la lucha cuerpo a cuerpo en el que se busca la sumisión del oponente.",
    imageURL: bbj
},
{
    name: "Boxeo",
    description: "Deporte de contacto en el cual se enfrentan dos individuos que lucharán únicamente con sus puños enfundados en unos guantes especiales con los cuales se golpearán y cuya principal condición será golpear al contrario por encima de la cintura dentro de un cuadrilátero que se encuentra especialmente diseñado para tal fin.",
    imageURL: boxeo,
},
{
    name: "Kick Boxing",
    description: "Combinación de dos disciplinas ya existentes previamente: el karate japonés y el boxeo occidental. Se trata de un deporte de contacto que alterna golpes propios del boxeo y patadas de artes marciales.",
    imageURL: kickboxing,
},
{
    name: "Pilates",
    description: "Método gimnástico que aúna el ejercicio corporal con el control mental, basado en la respiración y la relajación.",
    imageURL: pilates,
},
{
    name: "Yoga",
    description: "Conjunto de las prácticas modernas dirigidas a obtener mayor eficacia en el dominio del cuerpo y la concentración anímica.",
    imageURL: yoga,
},
{
    name: "Taekwondo",
    description: "Arte marcial moderno de los coreanos que utiliza diferentes técnicas de patada",
    imageURL: taekwondo,
},
{
    name: "Spinning",
    description: "Ejercicio aeróbico y cardiovascular que se realiza sobre una bicicleta estática en el que se trabaja el tren inferior.",
    imageURL: spinning,
}
]

const IMAGES = ["https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"]

const COLORS = [
    "bg-gradient-to-b from-black via-black to-white border border-black",
    "bg-gradient-to-b from-blue-700 via-blue-700 to-white border border-blue-700",
    "bg-gradient-to-b from-gold via-gold to-white border border-gold",
]


export {
    TRAINERS,
    PRICES,
    ACTIVITIES,
    CLASSES,
    IMAGES,
    COLORS
}