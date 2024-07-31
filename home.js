document.addEventListener("DOMContentLoaded", () => {
  document.body.style.display = "block";
  const startBtn = document.getElementById(`startBtn`);
  const startPage = document.getElementById(`start-page`);
  const mainBody = document.getElementById(`main-body`);
  const startTitle = document.getElementById(`start-title`);
  document.body.style.overflowY = "hidden";
  setTimeout(() => {
    startTitle.classList.add("show-title");
    setTimeout(() => {
      startBtn.classList.add("show-start-btn");
    }, 1500);
  }, 1500);
  startBtn.addEventListener("click", () => {
    startPage.classList.add("hide-start-page");
    setTimeout(() => {
      startPage.style.display = "none";
    }, 3000);
    setTimeout(() => {
      mainBody.classList.add("show-main-body");
      document.body.style.overflowY = "auto";
    }, 3000);
    const projBtn = document.getElementById(`projectsBtn`);
    const projTxt = document.getElementById(`btnText`);
    const header = document.querySelector("header");
    const headerCxt = document.querySelectorAll(".headerContent");
    let lastScrollTop = -10;
    window.addEventListener("scroll", function () {
      const scrollText = document.getElementById("scrollText");
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      if (scrollPosition < 600) {
        scrollText.textContent = "Introduction";
      } else if (scrollPosition >= 600 && scrollPosition < 1220) {
        scrollText.textContent = "My Projects";
      } else if (scrollPosition >= 1220 && scrollPosition < 1890) {
        scrollText.textContent = "My Skills";
      } else if (scrollPosition >= 1890 && scrollPosition < 2090) {
        scrollText.textContent = "Resume";
      } else {
        scrollText.textContent = "Contact";
      }
    });
    projBtn.addEventListener("mouseover", () => {
      projTxt.classList.add("display");
    });
    projBtn.addEventListener("mouseout", () => {
      projTxt.classList.remove("display");
    });
    projBtn.addEventListener("click", () => {
      const targetElement = document.getElementById("projectsWrapper");
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    });
    window.addEventListener("scroll", () => {
      let scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        header.classList.add("hide-header");
        for (let index = 0; index < headerCxt.length; index++) {
          headerCxt[index].classList.add("hide");
        }
        console.log("Scrolling down");
      } else {
        header.classList.remove("hide-header");
        for (let index = 0; index < headerCxt.length; index++) {
          headerCxt[index].classList.remove("hide");
        }
        console.log("Scrolling up");
      }
      lastScrollTop = window.scrollY || document.documentElement.scrollTop;
    });
  });
});
