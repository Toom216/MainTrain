document.querySelector(".btn").addEventListener("click", () => {

  if (document.querySelector(".form-control").value === "1") {
    btn1.click("btn1");
    console.log("you take 1");
  }
  if (document.querySelector(".form-control").value === "2") {
    btn2.click("btn2");
    console.log("you take 2");
  }
  if (document.querySelector(".form-control").value === "3") {
    btn3.click("btn3");
    console.log("you take 3");
  }
  if (document.querySelector(".form-control").value === "4") {
    btn4.click("btn4");
    console.log("you take 4");
  }
  if (document.querySelector(".form-control").value === "5") {
    btn5.click("btn5");
    console.log("you take 5");
  }
});
