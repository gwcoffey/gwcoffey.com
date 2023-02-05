(() => {
	// put a dialog on the page with an empty image
	let dialog = document.createElement("dialog");
	dialog.classList.add("image");
	let img = document.createElement("img");
	dialog.appendChild(img);
	document.body.appendChild(dialog);

	dialog.addEventListener("click", () => {
		img.src = null;
		dialog.close();
	});
	
	document.querySelectorAll("img.popable").forEach(el => el.addEventListener("click", () => {
		img.src = el.src;
		dialog.showModal();
	}));
})();
