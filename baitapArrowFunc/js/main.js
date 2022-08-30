let arrColor = [
    "viridian",
    "pewter",
    "cerulean",
    "vermillion",
    "lavender",
    "celadon",
    "saffron",
    "fuschia",
    "cinnabar",
    "pallet",
];

let renderButton = (colors) => {
    let output = "";
    for (let index = 0; index < colors.length; index++) {
        let color = colors[index];
        output += `
      <button class="color-button ${color} " onclick="changeColor('${color}')"></button>
      `;
    }
    // hiển thị ra màn hình
    document.querySelector("#colorContainer").innerHTML = output;
};

renderButton(arrColor);

// let buttons = document.querySelectorAll(".color-button");
// buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//         buttons.forEach((btn) => btn.classList.remove("active"));
//         this.classList.add("active");
//     });
// });

window.changeColor = (color) => {
    let colorNameClass = color;
    let colorHouse = document.querySelector(".house").classList;

    colorHouse.remove(
        "viridian",
        "pewter",
        "cerulean",
        "vermillion",
        "lavender",
        "celadon",
        "saffron",
        "fuschia",
        "cinnabar",
        "pallet"
    );

    colorHouse.add(color);
};
// }

// window.changeColor = (color) => {
//    document.querySelector('#house').addClass = color;
// }
