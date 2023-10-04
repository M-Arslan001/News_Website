const btnAll = document.getElementById("allbtn");
const btnTech = document.getElementById("tech");
const btnBusiness = document.getElementById("Business");
const readMorebtn = document.getElementById("btn2");
/////////////////
// NEWS API KEY
////////////////
const APIkey = "8289078da9d6489f954daa10b6c9bfe9";

const Headlines =
  " https://newsapi.org/v2/top-headlines?country=us&apiKey=8289078da9d6489f954daa10b6c9bfe9";
function fetchAndDisplayNews() {
  // btnAll.addEventListener("click", () => {
  fetch(Headlines)
    .then((response) => response.json())
    .then((data) => {
      const headlineContainer = document.getElementById("disData");

      headlineContainer.innerHTML = "";

      data.articles.forEach((article) => {
        const postBox = document.createElement("div");
        (postBox.className = "post-box"), "tech";

        const img = document.createElement("img");
        img.classList.add("post-img");
        img.src = article.urlToImage;

        const category = document.createElement("h2");
        category.className = "category";
        category.textContent = article.title;

        const postTitle = document.createElement("a");
        postTitle.href = article.url;
        postTitle.className = "post-title";
        postTitle.textContent = article.title;

        const postDate = document.createElement("span");
        postDate.className = "post-date";
        postDate.textContent = new Date(article.publishedAt).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          }
        );

        const postDescrip = document.createElement("p");
        postDescrip.className = "post-description";
        postDescrip.textContent = article.description;

        postBox.appendChild(img);
        postBox.appendChild(category);
        postBox.appendChild(postTitle);
        postBox.appendChild(postDate);
        postBox.appendChild(postDescrip);

        headlineContainer.appendChild(postBox);
        console.log("API Response:", data);
      });
    })
    .catch((error) => {
      console.error("Error fetching headlines:", error);
    });
}
window.addEventListener("load", fetchAndDisplayNews);

/////////////////
// article/blog//
/////////////////
const blogAPI =
  " https://newsapi.org/v2/everything?q=apple&from=2023-10-03&to=2023-10-03&sortBy=popularity&apiKey=8289078da9d6489f954daa10b6c9bfe9";
function fecthAPIdata() {
  fetch(blogAPI)
    .then((response) => response.json())
    .then((data) => {
      const disAbout = document.getElementById("about");
      disAbout.innerHTML = "";
      if (data.articles.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.articles.length);
        const article = data.articles[randomIndex];

        const contentSec = document.createElement("section");
        (contentSec.className = "about"), "container";

        const section = document.createElement("div");
        section.className = "contentBx";

        const newHeading = document.createElement("h2");
        newHeading.className = "titleText";
        newHeading.textContent = article.title;

        const newpara = document.createElement("p");
        newpara.className = "title-text";
        newpara.textContent = article.description;

        section.appendChild(newHeading);
        section.appendChild(newpara);
        contentSec.appendChild(section);

        // for img
        const imgbx = document.createElement("div");
        imgbx.className = "imgBx";
        const fImg = document.createElement("img");
        fImg.className = "fitBg";

        fImg.src = article.urlToImage;
        imgbx.appendChild(fImg);

        contentSec.appendChild(imgbx);
        disAbout.appendChild(contentSec);

        // /Read More Button
        const readMoreBtn = document.createElement("a");
        readMoreBtn.textContent = "Read More";
        readMoreBtn.className = "btn2";
        readMoreBtn.addEventListener("click", function () {
          window.open(article.url, "_blank");
        });
        section.appendChild(readMoreBtn);
        disAbout.appendChild(contentSec);
      }
      console.log("API blog:", data);
    })
    .catch((error) => {
      console.error("Error fetching headlines:", error);
    });
}
window.addEventListener("load", fecthAPIdata);

//////////////////
///tech news///
/////////////////
const techApi =
  "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=8289078da9d6489f954daa10b6c9bfe9";
btnTech.addEventListener("click", () => {
  fetch(techApi)
    .then((response) => response.json())
    .then((data) => {
      const headlineTech = document.getElementById("techdisData");

      headlineTech.innerHTML = "";

      data.articles.forEach((article) => {
        const postBox = document.createElement("div");
        (postBox.className = "post-box"), "tech";

        const img = document.createElement("img");
        img.classList.add("post-img");
        img.src = article.urlToImage;

        const category = document.createElement("h2");
        category.className = "category";
        category.textContent = article.title;

        const postTitle = document.createElement("a");
        postTitle.href = article.url;
        postTitle.className = "post-title";
        postTitle.textContent = article.title;

        const postDate = document.createElement("span");
        postDate.className = "post-date";
        postDate.textContent = new Date(article.publishedAt).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          }
        );

        const postDescrip = document.createElement("p");
        postDescrip.className = "post-description";
        postDescrip.textContent = article.description;

        postBox.appendChild(img);
        postBox.appendChild(category);
        postBox.appendChild(postTitle);
        postBox.appendChild(postDate);
        postBox.appendChild(postDescrip);

        headlineTech.appendChild(postBox);
      });

      console.log("API tech:", data);
    })
    .catch((error) => {
      console.error("Error fetching headlines:", error);
    });
});

//////////////////
///BBC NEWS//
/////////////////
const Business_News =
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=8289078da9d6489f954daa10b6c9bfe9";
btnBusiness.addEventListener("click", function () {
  fetch(Business_News)
    .then((response) => response.json())
    .then((data) => {
      const headlineBusiness = document.getElementById("businessdisData");
      headlineBusiness.innerHTML = "";
      data.articles.forEach((article) => {
        const postBox = document.createElement("div");
        (postBox.className = "post-box"), "tech";

        const img = document.createElement("img");
        img.classList.add("post-img");
        img.src = article.urlToImage;

        const category = document.createElement("h2");
        category.className = "category";
        category.textContent = article.title;

        const postTitle = document.createElement("a");
        postTitle.href = article.url;
        postTitle.className = "post-title";
        postTitle.textContent = article.title;

        const postDate = document.createElement("span");
        postDate.className = "post-date";
        postDate.textContent = new Date(article.publishedAt).toLocaleDateString(
          "en-US",
          {
            year: "numeric",
            month: "short",
            day: "numeric",
          }
        );

        const postDescrip = document.createElement("p");
        postDescrip.className = "post-description";
        postDescrip.textContent = article.description;

        postBox.appendChild(img);
        postBox.appendChild(category);
        postBox.appendChild(postTitle);
        postBox.appendChild(postDate);
        postBox.appendChild(postDescrip);

        headlineBusiness.appendChild(postBox);
      });
      console.log("API business trump:", data);
    })
    .catch((error) => {
      console.error("Error fetching headlines:", error);
    });
});
