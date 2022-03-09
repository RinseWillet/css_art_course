window.addEventListener("mousemove", (event) => {
    // array van de oogelementen maken
    let eyes = Array.from(document.getElementsByClassName("spongebob__innerEye"));

    // hoogte en breedte berekenen op basis van scherm grootte
    let height = window.innerHeight;
    let width = window.innerWidth;   

    // percentage berekenen op basis van de muisbeweging en de breedte en hoogte van het scherm
    let left = event.pageX / width * 90;
    let top = event.pageY / height * 90;

    // checks om te zorgen dan de innerEyes niet buiten het oog valt
    if(left < 10) left = 10;
    if(left > 63) left = 63;

    if(top > 60) top = 60;
    if(top < 15) top = 15;

    //loopen door de eyes array en daar de style aanpassen.
    eyes.forEach(eye => {
        eye.style.left = left + "%";
        eye.style.top = top + "%";
    });
});