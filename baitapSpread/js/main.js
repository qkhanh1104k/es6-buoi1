// function getElement() {
//     let element = document.querySelector(".heading").innerHTML;
//     let chars = [...element];
//     for(i = 0;i<chars.length;i++){
//         document.querySelector(".heading").innerHTML=`
//         <span>chars</span>
//         ` 
//     }
//     document.querySelector(".heading").innerHTML=`
//     <span>${}</span>
//     ` 
//     console.log(chars)
// }
// getElement();
let element = document.querySelector(".heading").innerHTML;
let chars = [...element];
let renderText = (texts) =>{
    let output = "";
    for (let index = 0; index < texts.length; index++) {
        let text = texts[index];
        output += `
     <span>${text}</span>
      `;
    }
    // hiển thị ra màn hình
    document.querySelector(".heading").innerHTML = output;
};
renderText(chars);