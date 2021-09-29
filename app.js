const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  let control = e.target.classList.value;

  if (control.includes("active")) {
    console.log("iceriği aktif yap");
  } else {
    articles.forEach((article) => {
      article.classList.remove("active");
      btns.forEach((button) => {
        button.classList.remove("active");
      });
    });
  }
  if (control.includes("tab-btn")) {
    e.target.classList.add("active");
    articles.forEach((article) => {
      if (e.target.dataset.id == article.id) {
        article.classList.add("active");
      }
    });
  }
});

/* about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const article = document.getElementById(id);
    article.classList.add("active");
  }
}); */
