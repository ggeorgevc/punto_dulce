// ===== COPIAR CLABE =====
function copiar() {
    const clabe = document.getElementById("clabe").innerText;
  
    navigator.clipboard.writeText(clabe)
      .then(() => {
        mostrarToast("CLABE copiada 💳");
      })
      .catch(() => {
        mostrarToast("No se pudo copiar 😢");
      });
  }
  
  // ===== TOAST (mensaje bonito) =====
  function mostrarToast(mensaje) {
    const toast = document.createElement("div");
    toast.innerText = mensaje;
  
    toast.style.position = "fixed";
    toast.style.bottom = "20px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#ff5c8a";
    toast.style.color = "white";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "20px";
    toast.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    toast.style.zIndex = "9999";
    toast.style.fontSize = "14px";
  
    document.body.appendChild(toast);
  
    setTimeout(() => {
      toast.remove();
    }, 2000);
  }