let searchForm = document.querySelector(".search-form");
let searchBox = document.querySelector(".search-box");
let resultBox = document.querySelector(".search-result");
let showBtn = document.querySelector(".show-btn");
let accesKey = "LcomFFkx3GViB-biG7PwDZkNOASdoj90sWeiDIEWCq0";

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesKey}&per_page=12`;
  const response = await fetch(url);
  const data = await response.json();

  if(page===1){
    resultBox.innerHTML=""
  }
  const results = data.results;

  results.map((result) => {
    const img = document.createElement("img");
    img.src = result.urls.small;
    const imgLink = document.createElement("a");
    imgLink.href = result.links.html;
    imgLink.target = "_blank";
    imgLink.appendChild(img);
    resultBox.appendChild(imgLink);
  });
  showBtn.style.display = "block";
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});
showBtn.addEventListener("click", () => {
  page++;
  searchImages()
});
