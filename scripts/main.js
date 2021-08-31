function hashChange(e) {
  const oldLink = document
    .getElementById("sidebar")
    .querySelector(`.nav-link.active`);
  if (oldLink) oldLink.classList.remove("active");

  const newLink = document
    .getElementById("sidebar")
    .querySelector(`.nav-link[href='${location.hash}']`);
  if (newLink) {
    newLink.classList.add("active");
    document
      .querySelector(".content-section.content-active")
      .classList.remove("content-active");

    const newSection = document.querySelector(location.hash);
    // newSection.classList.remove("content-non-active");
    newSection.classList.add("content-active");
  } else location.hash = "#home";
}

(function () {
  window.addEventListener("hashchange", hashChange);
  hashChange();
  document.getElementById("sidebar-toggler").addEventListener("click", (e) => {
    document.getElementById("sidebar-wrapper").classList.toggle("mobile-show");
  });

  document.getElementById("sidebar-wrapper").addEventListener("click", (e) => {
    document.getElementById("sidebar-wrapper").classList.toggle("mobile-show");
  });

  const seeMoreDivs = document.querySelectorAll(".see-more");
  seeMoreDivs.forEach((div) => {
    const hiddenContents = div.getElementsByClassName("hidden-content");
    const btns = div.getElementsByClassName("see-more-btn");
    if (hiddenContents && btns) {
      btns[0].addEventListener("click", (e) => {
        const toggled = hiddenContents[0].classList.toggle(
          "hidden-content-active"
        );
        btns[0].textContent = toggled ? "See less" : "See more";
      });
    }
  });
})();
