const btn = document.querySelector(".buttons");

btn.onclick = function () {
  if (btn === document.querySelector(".btn1")) {
    console.log("click");
  }
  else {
    console.log("clickno")
  }
};
