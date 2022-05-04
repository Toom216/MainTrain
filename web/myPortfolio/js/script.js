var timeout;

document.onmousemove = function () {
  // Clear timeout, as mouse is still moving
  clearTimeout(timeout);

  // Add class, as mouse is still moving
  document.querySelector("body").classList.add("change-cursor");

  // Schedule class to be removed very shortly in the future
  timeout = setTimeout(function () {
    document.querySelector("body").classList.remove("change-cursor");
  }, 30);
};
