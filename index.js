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
              <div>
                    +
                </div>
            </div>
        `
     
    })
   return main;
   
}
 
function render(){
    document.getElementById("content").innerHTML = getFeedHtml(menuArray)
}
render();

