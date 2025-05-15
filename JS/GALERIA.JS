document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".galeria img");
  
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);
  
    const imagenExpandida = document.createElement("img");
    lightbox.appendChild(imagenExpandida);
  
    imagenes.forEach(imagen => {
      imagen.addEventListener("click", () => {
        imagenExpandida.src = imagen.src;
        lightbox.style.display = "flex";
      });
    });
  
    lightbox.addEventListener("click", (e) => {
      if (e.target !== imagenExpandida) {
        lightbox.style.display = "none";
      }
    });
  });