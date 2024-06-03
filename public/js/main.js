const { text } = require("express");

var trole=document.querySelector(".trole").innerHTML;
var tlocation=document.querySelector(".tlocation").innerHTML;

var tdes=document.querySelector(".tdes").value;
var tskills=document.querySelector(".tskills").innerHTML;
var texp=document.querySelector(".texp").innerHTML;
var tsalary=document.querySelector(".tsalary").innerHTML;


var body=document.querySelector(".body")

///////////////search filter////////////=================





document.querySelector(".fil").addEventListener('input', filterList) 
function filterList(){

  var search=document.querySelector('.fil')
  var filter=search.value.toLowerCase()
  var trole=document.querySelector(".trole")
  var item=document.querySelector(".opening")

  trole.forEach((item)=>{

    let text=item.textContent;
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display="";
    } else {
      item.style.display="none";
    }
  })
}




//////////////////////////////////============================

function view(event){
    
  body.style.opacity=.8;
    document.querySelector(".f").style.display="block";

    // document.querySelector(".hrole").innerHTML=trole;
    // document.querySelector(".hlocation").innerHTML=tlocation;
    // document.querySelector(".hskills").innerHTML=tskills;
    // document.querySelector(".hdes").innerHTML=tdes;
    // document.querySelector(".hexp").innerHTML=texp;
    // document.querySelector(".hsalary").innerHTML=tsalary;

}


function cancel(event){
    event.preventDefault();
    body.style.opacity=1;
    document.querySelector(".f").style.display="none";
}
