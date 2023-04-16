(() => {
	// put a dialog on the page with an empty image
	let dialog = document.createElement("dialog");
	dialog.classList.add("image");

	let fig = document.createElement("figure");
	let container = document.createElement("div");
	let img = document.createElement("img");
	
	container.appendChild(img);	
	fig.appendChild(container);
	dialog.appendChild(fig);
	
	document.body.appendChild(dialog);

	dialog.addEventListener("click", () => {
		dialog.close();
	});
	
	dialog.addEventListener("close", () => {
		let caption = fig.querySelector("figcaption");
		caption && caption.remove();
	});
	
	document.querySelectorAll("img.popable").forEach(el => el.addEventListener("click", () => {
		img.src = el.src;
		
		if (el.parentElement.tagName === "FIGURE") {
			let caption = el.parentElement.querySelector("figcaption");
			caption && fig.appendChild(caption.cloneNode(true));
		}
		
		dialog.showModal();
	}));
})();
