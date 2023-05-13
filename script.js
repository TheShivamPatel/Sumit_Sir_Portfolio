function openSection(sectionName) {
    var i;
    var x = document.getElementsByClassName("section");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(sectionName).style.display = "block";  
  }