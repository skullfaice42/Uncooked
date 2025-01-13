console.log("Script is running");

document.addEventListener("DOMContentLoaded", function() { //domcontentloaded ensures the content is loaded before the js exicutes anything
    let loading = document.getElementById("loading");
    
    setTimeout(function() {
        loading.style.opacity = 0;
        setTimeout(function(){
            loading.style.display = "none"},4000); //was origionally 1000 but i needed to be able to access it right away so now its 10ms
    }, 4000);
});
;