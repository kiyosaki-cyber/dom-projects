const accordion = document.getElementsByClassName("content-container")
for (i = 0; i< accordion.length; i+= 1){
    accordion[i].addEventListener("click", function(){
        this.classList.toggle("active")
    })
}