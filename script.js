function loadModule(module) {
  const content = document.getElementById("content");

  if (module === "composition") {
    content.textContent =
      "COMPOSITION MODULE ONLINE. Structural integrity parameters loaded.";
  }

  if (module === "abilities") {
    content.textContent =
      "FUNCTIONAL ABILITIES MODULE ACTIVE. Core capabilities synchronized.";
  }

  if (module === "assistance") {
    content.textContent =
      "TECHNICAL ASSISTANCE CHANNEL ESTABLISHED. Continuous support available.";
  }

  if (module === "sustenance") {
    content.textContent =
      "SUSTENANCE SYSTEM STABLE. Energy flow within optimal thresholds.";
  }
}
