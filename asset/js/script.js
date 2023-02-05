const img = document.querySelectorAll(".footer .container .left .link img");

img.forEach((e, i) => {
  const imgSrc1 = `asset/img/icons-${i + 1}.svg`;
  const imgSrc2 = `asset/img/icons-w-${i + 1}.svg`;
  e.addEventListener("mouseover", () => {
    e.src = imgSrc1;
    e.addEventListener("mouseleave", () => {
      e.src = imgSrc2;
    });
  });
});

// active
const activePage = window.location.pathname;
console.log(activePage);
