document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("imagen_chef"),n=document.getElementById("btn-prev-chef"),t=document.getElementById("btn-next-chef"),c=["../img/chef1.jpg","../img/chef2.jpeg"],d=0;function i(){e.src=c[d]}n.addEventListener("click",function(){d=(d-1+c.length)%c.length,i()}),t.addEventListener("click",function(){d=(d+1)%c.length,i()}),i()});
//# sourceMappingURL=PEC1.5287c07c.js.map
