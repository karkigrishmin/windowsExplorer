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

const imgArrs = [
  {
    imgSrc:
      "https://rukminim1.flixcart.com/image/714/857/jmnrtzk0-2/shoe/v/r/t/pu-99-7-feedot-pure-red-original-imaf9gcuq5fegkcb.jpeg?q=50",
    title: "nike",
    id: 1,
  },
  {
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/71DENclXolL._UY395_.jpg",
    title: "addidas",
    id: 2,
  },
  {
    imgSrc:
      "https://assets.myntassets.com/dpr_2,h_240,q_50,w_180/assets/images/6842501/2018/10/12/76c2ee5f-b6dd-40bb-a15e-9bf6164ef3671539334453456-Adidas-Originals-Men-Black-Leather-Superstar-Sneakers-3041539334453437-1.jpg",
    title: "goldstar",
    id: 3,
  },
  {
    imgSrc:
      "https://images.complex.com/complex/image/upload/t_in_content_image/p7ttdfk91vi63ziqxgyr.jpg",
    title: "vanns",
    id: 4,
  },
  {
    imgSrc:
      "https://cdn.thesolesupplier.co.uk/2017/09/Adidas-ZX-Flux-Lava-Red-01-760x552.jpg",
    title: "shikhar",
    id: 5,
  },
  {
    imgSrc:
      "https://5.imimg.com/data5/UP/DR/WO/SELLER-10420561/nike-air-max-270-sports-running-shoes-500x500.jpeg",
    title: "fila",
    id: 6,
  },
  {
    imgSrc:
      "https://sharesmile.co.il/wp-content/uploads/2019/10/b5f2080780ff1cad358a6025f09b7831.jpg",
    title: "bata",
    id: 7,
  },
  {
    imgSrc:
      "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Ftimnewcomb%2Ffiles%2F2019%2F01%2FSp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_original-1200x900.jpg",
    title: "puma",
    id: 8,
  },
];

imgArrs.forEach((imgArr) => {
  const img = document.createElement("img");
  img.setAttribute("src", imgArr.imgSrc);
  img.setAttribute("title", imgArr.title);
  img.setAttribute("data-id", imgArr.id);
  img.className = "shoe";
  const container = document.querySelector(".img-grid");
  const imgParent = document.createElement("div");
  imgParent.className = "imagesContainer";
  const para = document.createElement("p");
  para.setAttribute("data-id", imgArr.id);
  para.className = "shoe-para";
  para.innerHTML = "Nike";
  imgParent.appendChild(img);
  imgParent.appendChild(para);
  container.appendChild(imgParent);
});

//declaration
const imgDiv = document.querySelector(".one-img-padding");
const img1 = document.createElement("img");
img1.className = "one-img";

//eventlistener
document.querySelector(".img-grid").addEventListener("click", function (e) {
  const a = imgArrs.find(
    ({ id: id, title: title }) =>
      id == e.target.dataset.id && title == e.target.title
  );

  img1.setAttribute("src", a.imgSrc);
  imgDiv.appendChild(img1);
});

//for adding more info using alert box
const alertBox = document.querySelector(".alert-box");
alertBox.style.display = "none";
const add = document.querySelector(".add");
add.addEventListener("click", (e) => {
  if (alertBox.style.display === "none") {
    alertBox.style.display = "block";
  } else {
    alertBox.style.display = "none";
  }
});

const inputBox = document.querySelector(".input-box");
const url = document.getElementById("url");
const title = document.getElementById("title");
alertBox.addEventListener("click", (e) => {
  if (e.target.value === "ADD") {
    console.log("clicked");
    const urlValue = url.value;
    const titleValue = title.value;
    const imgContainer = document.querySelector(".img-grid");
    const div = document.createElement("div");
    const para = document.createElement("p");
    para.className = "shoe-para";
    const img = document.createElement("img");
    img.className = "shoe";
    img.setAttribute("src", urlValue);
    para.textContent = titleValue;
    div.appendChild(img);
    div.appendChild(para);
    imgContainer.appendChild(div);
    alertBox.style.display = "none";
  }
});
