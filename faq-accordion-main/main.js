const accordionBtns = document.querySelectorAll('.accordion-btn');      /* Obtengo todos los botones del accordion */

accordionBtns.forEach(btn => {      /* Foreach recorre todos los botones del accordion */
    btn.addEventListener('click', function () {
        const accordionDescrip = this.nextElementSibling;       /* Selecciona el siguiente elemento hermano del botón */
        const plusIcon = this.querySelector('.plus-icon');  
        const minusIcon = this.querySelector('.minus-icon');

        if(accordionDescrip.style.maxHeight) {      /* Cierra el accordion si el maxHeight tiene un valor (en este caso el div que esta oculto)*/
            accordionDescrip.style.maxHeight = null;    
            /*  se cierra el acordeón porque null remueve el estilo inline maxHeight, devolviendo el 
                comportamiento por defecto del CSS (en este caso maxHeight = 0) .
             */
            plusIcon.style.display = 'block';   /* el elemento se mostrará como un bloque, ocupando todo el ancho disponible. */
            minusIcon.style.display = 'none';   /* el elemento sea completamente invisible y lo saca del flujo del diseño, como si no existiera en la página. */
        } else {        /* Abre el accordion */
            accordionDescrip.style.maxHeight = accordionDescrip.scrollHeight + 'px';    
            /* mide la altura real del contenido aunque esté oculto por maxHeight: 0 y overflow: hidden;  (usar px ya que 
            scrollHeight devuelve el valor en px */
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    })
})