document.addEventListener("DOMContentLoaded", function () {
  const nameElement = document.querySelector(".name");
  if (nameElement) {
    const nameText = "İrem Nur,";
    let index = 0;

    function typeEffect() {
      if (index < nameText.length) {
        nameElement.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeEffect, 34);
      }
    }
    typeEffect();
  }
});

const filterInput = document.querySelector("#inputFilter");
if (filterInput) {
  filterInput.addEventListener("keyup", function (e) {
    const filterValue = e.target.value.toLowerCase().trim();
    const projectItems = document.querySelectorAll("li.project-item");

    projectItems.forEach((project) => {
      const projectText = project.textContent.toLowerCase();
      if (projectText.includes(filterValue)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
}

document.getElementById("menu-icon").addEventListener("click", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});

function morOrLess() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("btn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Daha Fazla Göster";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Daha Az Göster";
    moreText.style.display = "inline";
  }
}

function sortList() {
  var productList, i, switching, b, shouldSwitch;
  productList = document.getElementById("project-product");
  switching = true;
  while (switching) {
    switching = false;
    b = productList.getElementsByTagName("LI");
    for (i = 0; i < b.length - 1; i++) {
      shouldSwitch = false;
      if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);
      switching = true;
    }
  }
}

function formValidate() {
  if (document.contactForm.Name.value == "") {
    alert("Lütfen İsminizi Giriniz.");
    document.myForm.Name.focus();
    return false;
  }

  if (document.contactForm.email.value == "") {
    alert("Lütfen E-Mail Adresinizi Giriniz.");
    document.myForm.email.focus();
    return false;
  }

  var email = document.contactForm.email.value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Lütfen geçerli bir E-Mail adresi giriniz.");
    document.contactForm.email.focus();
    return false;
  }
  if (document.contactForm.phone.value == "") {
    alert("Lütfen Telefon Numaranızı Giriniz.");
    document.myForm.phone.focus();
    return false;
  }

  if (document.contactForm.mesage.value == "") {
    alert("Lütfen Mesajınızı Giriniz.");
    document.myForm.mesage.focus();
    return false;
  }

  return true;
}

const images = document.querySelectorAll(".gallery img");
let imgSrc;

images.forEach((img) => {
  img.addEventListener("click", (e) => {
    imgSrc = e.target.src;
    imgModal(imgSrc);
  });
});

let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");

  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);

  const closeBtn = document.createElement("i");
  closeBtn.onclick = () => {
    modal.remove();
  };

  closeBtn.setAttribute("class", "bi bi-x-square closeBtn");

  modal.append(newImage, closeBtn);

  document.body.append(modal);
};

function time() {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds;
  setTimeout(time, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
