const btn = document.querySelectorAll("button");
const spanShow = document.querySelectorAll(".show");
const spanHide = document.querySelectorAll(".hide");

btn.forEach((b) => {
  b.addEventListener("click", (event) => {
    //add class active button
    let target = event.target;
    target.classList.toggle("active");

    //  show/hide text button
    spanShow.forEach((show) => {
      if (b.classList.contains("active")) {
        show.style.display = "none";
      } else {
        show.style.display = "block";
      }
    });
    spanHide.forEach((hide) => {
      if (b.classList.contains("active")) {
        hide.style.display = "block";
      } else {
        hide.style.display = "none";
      }
    });
  });
});
