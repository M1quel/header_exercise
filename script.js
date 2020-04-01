var panelHeightOpen = "120px";
var panelHeightClose = "0px";
var btnList = document.querySelectorAll(".accordian-btn");

for (i = 0; i < btnList.length; i++){
  btnList[i].addEventListener("click", accordianfunc);
}

function accordianfunc(){
  this.classList.toggle("active");
  var panel = this.nextElementSibling;
  if (panel.style.height === panelHeightOpen){
    panel.style.height = "0px";
  }else{
    panel.style.height = panelHeightOpen;
  }
}