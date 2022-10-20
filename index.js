import { menuArray } from "/data.js";

function getFeedHtml(menu){
    let main = "";
    menu.forEach(display => {
         console.log(display)
        main += `
        <div>
             <div>
                 ${display.emoji}
                 </div>
                 <div>
                <h2>
                   ${display.name}
                   </h2>
                   <p>${display.ingredients}</p>
                   <h3>${display.price}</h3>
                  </div>
              <div class="plus-btn">
                   <strong id="plus-btn">
                    +
                    </strong>
                </div>
            </div>
            <hr>
        `


\
    })
   return main;
  
}
 
function render(){
    document.getElementById("content").innerHTML = getFeedHtml(menuArray)
    document.getElementById("content").innerHTML = displayModal(menuArray)
}
render();

const plusBtn = document.getElementById("plus-btn");
 
plusBtn.addEventListener("click", displayModal);

function displayModal(){
  let modal1 = "";
  modal1 += `
     <div>
  <h2>Your order</h2>
  <div>
      <h3>${display.name}</h3>
      <p>remove</p>
  </div>
  <div>
    <h3>${display.price}</h3>
  </div>
  <hr>
  <div>
  <h2>Total Price</h2>
  <h3>${display.price}</h3>
  <button>Complete order</button>
  </div>
    </div>
  `
  return modal1;
 
}
