console.log("Script is running");

document.addEventListener("DOMContentLoaded", function() { //domcontentloaded ensures the content is loaded before the js exicutes anything
    let loading = document.getElementById("loading");
    
    setTimeout(function() {
        loading.style.opacity = 0;
        setTimeout(function(){
            loading.style.display = "none"},4000);
    }, 4000);
});
;