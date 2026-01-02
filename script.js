function loadModule(module) {
  const content = document.getElementById("content");

  if (module === "inicio") {
    content.innerHTML = `
      <h1>Unidad Operativa</h1>
      <p>Piloto reconocido.<br>Todos los módulos disponibles.</p>
    `;
  }

  if (module === "construccion") {
    content.innerHTML = `
      <h1>Modo Construcción</h1>
      <p>Preparando ensamblaje estructural.</p>
    `;
  }

  if (module === "combate") {
    content.innerHTML = `
      <h1>Fuerza de Combate</h1>
      <p>Simulación en espera.</p>
    `;
  }

  if (module === "entorno") {
    content.innerHTML = `
      <h1>Entorno</h1>
      <p>Algunos sistemas funcionan mejor con espacio.</p>
    `;
  }

  if (module === "companeria") {
    content.innerHTML = `
      <h1>Canal de Soporte</h1>
      <p>Disponibilidad: continua.</p>
    `;
  }

  if (module === "sustento") {
    content.innerHTML = `
      <h1>Sustento</h1>
      <p>El sustento no es solo combustible.</p>
    `;
  }
}
