document.addEventListener("DOMContentLoaded", () => {
    const imageGallery = document.getElementById("imageGallery");
    const url = "https://fakestoreapi.com/products";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const img = document.createElement("img");
                img.src = product.image;
                img.alt = product.title;
                img.classList.add("fade-in");
                imageGallery.appendChild(img);
            });
        })
        .catch(error => console.error("Error fetching the images:", error));
});
