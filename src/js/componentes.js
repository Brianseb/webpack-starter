import "../css/componentes.css"; //para importar el estilo de la pagina web
import webpacklogo from "../assets/img/webpack-logo.png";

export const saludar = (nombre) => {
    console.log("Creando etiqueta h1");

    const h1 = document.createElement("h1");
    h1.innerText = `Hola, ${nombre}!!!`;

    document.body.append(h1);

    // Imagen
    // console.log(webpacklogo);
    // const img = document.createElement("img");
    // img.src = webpacklogo;
    // document.body.append(img);
}