//for this pc menu
document.querySelector(".menu-1").addEventListener("click", function (e) {
  const lists = document.querySelectorAll(".collection-1");

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

//for Quick Access
document.querySelector(".menu-2").addEventListener("click", function (e) {
  const lists = document.querySelectorAll(".collection-2");

  lists.forEach((list) => {
    if (list.style.display === "block") {
      list.style.display = "none";

      document.querySelector(".menu-icon-2").innerHTML = `
    <i class="fas fa-angle-down icon-light"></i>
    `;
    } else {
      list.style.display = "block";
      document.querySelector(".menu-icon-2").innerHTML = `
    <i class="fas fa-angle-up icon-light"></i>
    `;
    }
  });

  e.preventDefault();
});
document.querySelector(".menu-3").addEventListener("click", function (e) {
  const lists = document.querySelectorAll(".collection-3");

  lists.forEach((list) => {
    if (list.style.display === "block") {
      list.style.display = "none";

      document.querySelector(".menu-icon-3").innerHTML = `
    <i class="fas fa-angle-down icon-light"></i>
    `;
    } else {
      list.style.display = "block";
      document.querySelector(".menu-icon-3").innerHTML = `
    <i class="fas fa-angle-up icon-light"></i>
    `;
    }
  });

  e.preventDefault();
});
