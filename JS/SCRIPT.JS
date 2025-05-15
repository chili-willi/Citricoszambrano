document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".galeria img");
  
    // Crear el contenedor del lightbox
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);
  
    const imagenExpandida = document.createElement("img");
    lightbox.appendChild(imagenExpandida);
  
    // Mostrar imagen al hacer clic
    imagenes.forEach(imagen => {
      imagen.addEventListener("click", () => {
        imagenExpandida.src = imagen.src;
        lightbox.style.display = "flex";
      });
    });
  
    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener("click", (e) => {
      if (e.target !== imagenExpandida) {
        lightbox.style.display = "none";
      }
    });
  });
  
  
  