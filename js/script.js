function slideshows(){ //funktion för bildspel
    
    let slides = document.querySelectorAll(".slideshow"); //fångar upp bilderna från html-koden
    let currentImage = 0; //vilken bild som visas nu

    function nextImage(){ //funktionen för att ändra bilden
        slides.forEach(slideshow => slideshow.style.opacity = 0); 
        slides[currentImage].style.opacity = 1;
        currentImage = (currentImage + 1) % slides.length;
    }

    setInterval(nextImage, 3000); // 3 sekunder mellan varje bild
}

slideshows(); //kör funktionen
