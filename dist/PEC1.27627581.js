document.addEventListener("DOMContentLoaded",function(){let e=document.getElementById("imagen_quienes"),n=document.getElementById("btn-prev"),t=document.getElementById("btn-next"),d=["../img/rest1.png","../img/rest2.png","../img/rest3.png","../img/rest4.png"],g=0;function i(){e.src=d[g]}n.addEventListener("click",function(){g=(g-1+d.length)%d.length,i()}),t.addEventListener("click",function(){g=(g+1)%d.length,i()}),i()});
//# sourceMappingURL=PEC1.27627581.js.map
