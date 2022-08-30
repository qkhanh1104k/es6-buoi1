const letPlay = function calcSum(id,...args) {
    let sum = 0;
    let avarage;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    avarage = sum / args.length;
    document.querySelector(id).innerHTML =avarage;
}
let a = +document.querySelector("#inpToan").value;
let b = +document.querySelector("#inpLy").value;
let c = +document.querySelector("#inpHoa").value;
console.log(a)
document.querySelector("#tbKhoi1").onclick = letPlay("#tbKhoi1",a,b,c);
