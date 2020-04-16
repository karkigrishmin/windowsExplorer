document.querySelector(".menu-1").addEventListener("click", function (e) {
  //   console.log("Hello");
  //   document.querySelector(".list-item").style.visibility = "hidden";
  //
  const list = document.querySelector(".list-item");
  if (list.style.display === "block") {
    list.style.display = "none";

    document.querySelector(".menu-1").innerHTML = `
    <i class="fas fa-angle-down icon-light"></i>
    `;
  } else {
    list.style.display = "block";
    document.querySelector(".menu-1").innerHTML = `
    <i class="fas fa-angle-up icon-light"></i>
    `;
  }
  e.preventDefault();
});
