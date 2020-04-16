document.querySelector(".menu-1").addEventListener("click", function (e) {
  //   console.log("Hello");
  //   document.querySelector(".list-item").style.visibility = "hidden";
  //
  const list = document.querySelector(".list-item");
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
  e.preventDefault();
});

document.querySelector(".menu-2").addEventListener("click", function (e) {
  //   const ul=document.createElement('ul');
  //   ul.className='collection';
  const li = document.createElement("li");
  li.appendChild(document.createTextNode("Item-1"));
  document.querySelector(".item").appendChild(li);

  e.preventDefault();
});

// for image
const property = [
  {
    image,
  },
];
