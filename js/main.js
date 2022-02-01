import clock from "./clock.js";
import tooltip from "./tooltip.js";

const d = document;

// Función para cargar el contenido a mostrar dentro de la etiqueta main. Usando AJAX
const $main = d.querySelector("main");

const getHTML = (options) => {
    let { url, success, error } = options;
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status <= 300) {
            let html = xhr.responseText;
            success(html);
        } else {
            let message = xhr.statusText || "Ocurrió un error";
            error(`Error ${xhr.status}: ${message}`);
        }
    });
    xhr.open("GET", url);
    xhr.setRequestHeader("Content-type", "text/html;charset=utf-8");
    xhr.send();
};

d.addEventListener('DOMContentLoaded', (e) => {


    getHTML({
        url: "/pages/clock.html",
        success: (html) => $main.innerHTML = html,
        error: (err) => $main.innerHTML = `<h1>${err}</h1>`
    });

    d.addEventListener('click', (e) => {

        const $btns = d.querySelectorAll(".btn-circle");

        if (e.target.matches(".buttons-modes .btn-circle") || e.target.matches(".buttons-modes .btn-circle *")) {
            e.preventDefault();

            let href = "";

            $btns.forEach((element) => {
                if(element == e.path[1] || element == e.path[0]){
                    href = element.dataset.href;        
                }
            });

            getHTML({
                url: e.target.dataset.href || href,
                success: (html) => $main.innerHTML = html,
                error: (err) => $main.innerHTML = `<h1>${err}</h1>`
            });

        }
    })

    clock("#display-clock")
    tooltip(".tooltip");

});