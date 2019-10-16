const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/

document.addEventListener("scroll", function () {
    if (window.scrollY >= 50) {
        audrey.style.width = `${window.scrollY / 3}px`;
        console.log("width", audrey.style.width)
    } else {
        audrey.style.width = "50px";
    }
    if (window.scrollY >= 100) {
        audrey.style.height = `${window.scrollY * .25}px`;
    } else {
        audrey.style.height = "100px";
    }
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */



    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */

})