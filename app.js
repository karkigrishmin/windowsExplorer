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

// //creating li
// const li = document.createElement("li");
// li.className = "list-item";
// const text = document.createTextNode("Hello");
// li.appendChild(text);
// document.querySelector(".list-js").appendChild(li);

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

//for 3rd item
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

//image

const img = document.createElement("img");
img.setAttribute(
  "src",
  "https://rukminim1.flixcart.com/image/714/857/jmnrtzk0-2/shoe/v/r/t/pu-99-7-feedot-pure-red-original-imaf9gcuq5fegkcb.jpeg?q=50"
);
img.className = "shoe";
const container = document.querySelector(".img-bg");
const child = document.querySelector(".img-bg p");
container.insertBefore(img, child);

// const imgArrs = [
//   {
//     imgSrc:
//       "https://rukminim1.flixcart.com/image/714/857/jmnrtzk0-2/shoe/v/r/t/pu-99-7-feedot-pure-red-original-imaf9gcuq5fegkcb.jpeg?q=50",
//   },
// {
//   imgSrc:
//     "https://images-na.ssl-images-amazon.com/images/I/71DENclXolL._UY395_.jpg",
// },
// ];

// imgArrs.forEach((imgArr) => {
//   const img = document.createElement("img");
//   img.setAttribute("src", "imgArr.imgSrc");
//   img.className = "shoe";

//   const parent = document.querySelector(".img-bg");
//   const child = document.querySelector(".img-bg p");
//   parent.insertBefore(img, child);
// });
