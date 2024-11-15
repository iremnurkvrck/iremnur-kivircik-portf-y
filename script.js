document.addEventListener("DOMContentLoaded", function () {
  // İsminizi yazdıran yazma efekti
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

  // Menü açma/kapama
  document.getElementById("menu-icon").addEventListener("click", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("active");
  });

  // Proje arama filtresi
  const filterInput = document.querySelector("#inputFilter");
  if (filterInput) {
    filterInput.addEventListener("keyup", function (e) {
      const filterValue = e.target.value.toLowerCase().trim();
      const projectItems = document.querySelectorAll("li.project-item");

      projectItems.forEach((project) => {
        const projectText = project.textContent.toLowerCase().trim();
        if (projectText.includes(filterValue)) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  }

  // Projeleri alfabetik sıraya göre sıralama
  function sortList() {
    const productList = document.getElementById("project-product");
    if (productList) {
      let switching = true;
      while (switching) {
        switching = false;
        const items = productList.getElementsByTagName("LI");
        for (let i = 0; i < items.length - 1; i++) {
          let shouldSwitch = false;
          if (
            items[i].innerHTML.toLowerCase() >
            items[i + 1].innerHTML.toLowerCase()
          ) {
            shouldSwitch = true;
            break;
          }
        }
        if (shouldSwitch) {
          items[i].parentNode.insertBefore(items[i + 1], items[i]);
          switching = true;
        }
      }
    }
  }
  const sortButton = document.querySelector(".btn");
  if (sortButton) {
    sortButton.addEventListener("click", sortList);
  }

  // Görselleri modal ile açma
  const images = document.querySelectorAll(".gallery img");
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

  if (images.length > 0) {
    images.forEach((img) => {
      img.addEventListener("click", (e) => {
        imgModal(e.target.src);
      });
    });
  }

  // Zaman göstergesi
  function time() {
    const today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    minutes = checkTime(minutes);
    seconds = checkTime(seconds);

    const clockElement = document.getElementById("clock");
    if (clockElement) {
      clockElement.innerHTML = hours + ":" + minutes + ":" + seconds;
    }
    setTimeout(time, 1000);
  }

  function checkTime(i) {
    return i < 10 ? "0" + i : i;
  }

  time();
});
