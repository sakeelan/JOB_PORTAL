var trole=document.querySelector(".trole").innerHTML;
var tlocation=document.querySelector(".tlocation").innerHTML;
var tname=document.querySelector(".tname").innerHTML;
var temail=document.querySelector(".temail").innerHTML;
var tcontact=document.querySelector(".tcontact").innerHTML;
var texp=document.querySelector(".texp").innerHTML;
var tsalary=document.querySelector(".tsalary").innerHTML;
var tresume=document.querySelector(".tresume").innerHTML;


function view(event){
    event.preventDefault();
    document.querySelector(".f").style.display="block";

    document.querySelector(".hrole").innerHTML=trole;
    document.querySelector(".hlocation").innerHTML=tlocation;
    document.querySelector(".hname").innerHTML=tname;
    document.querySelector(".hemail").innerHTML=temail;
    document.querySelector(".hcontact").innerHTML=tcontact;
    document.querySelector(".hexp").innerHTML=texp;
    document.querySelector(".hsalary").innerHTML=tsalary;
    document.querySelector(".hresume").innerHTML=tresume;

}


function cancel(event){
    event.preventDefault();

    document.querySelector(".f").style.display="none";
}

function deletedata(){
    alert('ARE U CONFIRM TO DELETE THIS PROFILE')
}
