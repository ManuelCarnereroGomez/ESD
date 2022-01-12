/** Boiler Galería simple */
let cambioimagen = (img, alt) => {
    let imagengrande = document.querySelector("#caja");
	imagengrande.src = img;
    imagengrande.alt = alt;
};


document.querySelectorAll('.mini').forEach(item => {
    item.addEventListener('click', event => {
      cambioimagen(item.src, item.alt);
    })
})
