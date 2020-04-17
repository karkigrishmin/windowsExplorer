document.querySelector(".menu-1").addEventListener("click", function (e) {
  const lists = document.querySelectorAll(".list-item");

  lists.forEach((list) => {
    if (list.style.display === "block") {
      list.style.display = "none";

      document.querySelector(".menu-icon").innerHTML = `
    <i class="fas fa-angle-down icon-light"></i>
    `;
      // const item = document.querySelector(".updated-margin");
      // item.style.postition = "relative";
      // item.style.bottom = "-20rem";
    } else {
      list.style.display = "block";
      document.querySelector(".menu-icon").innerHTML = `
    <i class="fas fa-angle-up icon-light"></i>
    `;
    }
  });
  // if (list.style.display === "block") {
  //   list.style.display = "none";

  //   document.querySelector(".menu-icon").innerHTML = `
  //   <i class="fas fa-angle-down icon-light"></i>
  //   `;
  //   // const item = document.querySelector(".updated-margin");
  //   // item.style.postition = "relative";
  //   // item.style.bottom = "-20rem";
  // } else {
  //   list.style.display = "block";
  //   document.querySelector(".menu-icon").innerHTML = `
  //   <i class="fas fa-angle-up icon-light"></i>
  //   `;
  // }
  e.preventDefault();
});

// document.querySelector(".menu-2").addEventListener("click", function (e) {
//   //   const ul=document.createElement('ul');
//   //   ul.className='collection';
//   const li = document.createElement("li");
//   li.appendChild(document.createTextNode("Item-1"));
//   document.querySelector(".item").appendChild(li);

//   e.preventDefault();
// });

// const imgArrs = [
//   {
//     source:
//       "https://rukminim1.flixcart.com/image/832/832/shoe/b/6/c/red-basic-low-fila-3-original-imadgyh7swgmych8.jpeg?q=70",
//     title: "Nike",
//   },
//   {
//     source:
//       "https://rukminim1.flixcart.com/image/832/832/shoe/b/6/c/red-basic-low-fila-3-original-imadgyh7swgmych8.jpeg?q=70/red-basic-low-fila-3-original-imadgyh7swgmych8.jpeg.webp",
//     title: "Nike",
//   },
// ];

// // foreach loop
// imgArrs.forEach((img) => {
//   const container = document.createElement("div");
//   container.className = "img-grid";
//   const image = document.createElement("img");
//   image.src = im;
//   container.appendChild(image);
//   // const title = document.createElement(p);
//   document.querySelector(".img-grid").appendChild(container);
// });
