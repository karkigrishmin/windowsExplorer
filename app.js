document.querySelector(".menu-1").addEventListener("click", function (e) {
  const lists = document.querySelectorAll(".list-item");

  lists.forEach((list) => {
    if (list.style.display === "block") {
      list.style.display = "none";

      document.querySelector(".menu-icon").innerHTML = `
    <i class="fas fa-angle-down icon-light"></i>
    `;
    } else {
      list.style.display = "block";
      document.querySelector(".menu-icon").innerHTML = `
    <i class="fas fa-angle-up icon-light"></i>
    `;
    }
  });

  e.preventDefault();
});
