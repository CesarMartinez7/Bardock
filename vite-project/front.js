
function fetching(){
  
  fetch("http://localhost:3000/datos")
    .then(respuesta => respuesta.json())
    .then(data => {
      console.log(data); 
  
      const container = document.getElementById("container"); 
      console.log(container); 
      if (!container) {
        console.error("No se encontró el contenedor con el ID 'container'");
        return;
      }
  
      container.innerHTML = ""; 
      
      data.forEach((dato, index) => {
        const div = document.createElement("div");
        div.textContent = dato.Nombre; 
        const p = document.createElement("p")
        p.textContent = dato.Categoria
        div.classList.add("box"); 
        container.appendChild(div);
        div.appendChild(p) 
      });
    })
    .catch(error => {
      console.error("Error al obtener los datos:", error);
    });

}

fetching()



