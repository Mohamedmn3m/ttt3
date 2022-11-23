
 var allProducts = document.querySelectorAll(".list li")
 var content = document.querySelector("#content")
 var btn = document.querySelector("#addToCart")
 var totalPrice = 0 ;
 var tt = totalPrice1

 allProducts.forEach( function (item){
     item.onclick = function (){
         totalPrice += parseInt (item.getAttribute("price")) 
         content.innerHTML += item.textContent + " , ";
         if (content.innerHTML != "" ){
             btn.style.display = "block";
             btn.style.backgroundColor = "darkorange"
             btn.style.color = "black"
             
            
         }
     }
 })
 btn.onclick = function (){
   tt.innerHTML= totalPrice
     totalPrice1.style.display="block"  
     pri1.style.display="block"
      
 }





