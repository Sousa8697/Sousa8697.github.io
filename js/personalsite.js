function showProjects(){
    var mainContent = document.querySelector(".main-content");
    var projectContent = document.querySelector(".project-content");
    if(mainContent.style.display == "none"){
        projectContent.style.display = "none";
         mainContent.style.display = "block";
    }else{
        mainContent.style.display = "none";
        projectContent.style.display = "block";
    }
    
}