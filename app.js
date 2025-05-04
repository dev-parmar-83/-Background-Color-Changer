let btn1 = document.getElementById("mybutton");
let btn2 = document.getElementById("mybutton2");
let copydiv = document.querySelector(".copyCode");
let rgb1 = "rgb(92,145,229)";
let rgb2 = "rgb(152,62,198)";

const hexValue = () => {
  let myHexaVlaue = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexaVlaue[Math.floor(Math.random() * 16)];
  }
  return colors;
};
hexValue();
const handleButton1 = () => {
  rgb1 = hexValue();
  console.log(rgb1);
  btn1.innerHTML = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right ,${rgb1}
          ,${rgb2}`;
  copydiv.innerHTML = `background-image:linear-gradient(to right ,${rgb1}
          ,${rgb2})`;
};
const handleButton2 = () => {
  rgb2 = hexValue();
  console.log(rgb2);
  btn2.innerHTML = rgb2;
  document.body.style.backgroundImage = `linear-gradient(to right ,${rgb1}
          ,${rgb2}`;
  copydiv.textContent = `background-image:linear-gradient(to right ,${rgb1}
          ,${rgb2})`;
};

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);

copydiv.addEventListener("click", () => {
  navigator.clipboard.writeText(copydiv.textContent);
});
