/* Funció per mostrar/ocultar els popups */
// Rep un id com a paràmetre
function popup(elementId) {
	// ens assegurem que el navegador
	// suporta DOM
	if (!document.getElementById) {
		alert("El teu navagador no suporta el DOM (Document Object Model), i no podràs veure les solucions d'aquest curs.\n\nEt recomano que actualitzis el teu navegador a una versió més moderna (5 o superior).");
		return;
	}
	
	obj = document.getElementById(elementId);

	if (obj.style.visibility != "visible")
		obj.style.visibility = "visible";
	else
		obj.style.visibility = "hidden";
}