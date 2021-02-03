//let globallist = Array.from(document.getElementsByClassName('globallist')) ;
//let myproductlist =Array.from(document.getElementsByClassName('myproductlist'));

let mylist =Array.from(document.getElementsByClassName('mylist'));

let plus = Array.from(document.getElementsByClassName('plus')) ;

let minus = Array.from(document.getElementsByClassName('minus'));
let counter = Array.from(document.getElementsByClassName('counter'));


let price = Array.from(document.getElementsByClassName('num_prix')) ;
let total = Array.from(document.getElementsByClassName('total'));
let pricetotal = document.getElementById('prixtotal');




function calculateSum(){
    let somme = 0 ;
    for(let i = 0 ; i < mylist.length ; i++){

        total[i].value = Number(price[i].innerText) * Number(counter[i].innerText);

        somme += Number(price[i].innerText) * Number(counter[i].innerText);

        console.log("s="+somme) ;
        pricetotal.value = somme ;
}


}














for (let i= 0 ; i < mylist.length ; i++) 
{
    plus[i].addEventListener('click', function(){
        counter[i].innerText++ ;
       calculateSum()
    })


    minus[i].addEventListener('click' , function(){
        if(counter[i].innerHTML>0){
            counter[i].innerText-- ;


           calculateSum()

        }
    })


    let buttonremove = remove[i]
    buttonremove.addEventListener('click' , function(event){
        let buttonClick = event.target
        buttonClick.parentElement.remove()
        price[i].innerHTML=0 ;
   
        calculateSum()
    })
   
   
   
   }




































// heart start 1



function color(){

    let btn = document.getElementById('heart');
    if (btn.classList.contains("far")){
        btn.classList.remove("far");
        btn.classList.add("fas");
    }
    else {
        btn.classList.remove("fas");
        btn.classList.add("far");
       
    
    }
}


//heart end 1


// heart start 2



function color1(){

    let btn = document.getElementById('heart1');
    if (btn.classList.contains("far")){
        btn.classList.remove("far");
        btn.classList.add("fas");
    }
    else {
        btn.classList.remove("fas");
        btn.classList.add("far");
       
    
    }
}


//heart end 2


// heart start 3



function color2(){

    let btn = document.getElementById('heart2');
    if (btn.classList.contains("far")){
        btn.classList.remove("far");
        btn.classList.add("fas");
    }
    else {
        btn.classList.remove("fas");
        btn.classList.add("far");
       
    
    }
}


//heart end 3