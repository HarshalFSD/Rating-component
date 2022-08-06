const submitBtn = document.getElementById("submit-btn");
const starRating = document.querySelectorAll(".star_rating");
const starImgEl = document.getElementById("starImg-el");
const changeImgEl = document.getElementById("changeImg-el");
const mainEl = document.getElementById("main-el");

let myRating = 0;

for (let i = 0; i < starRating.length; i++) {
  starRating[i].addEventListener("click", function () {
    myRating = starRating[i].textContent;
    starRating[i].classList.toggle("backColor");
  });
}

submitBtn.addEventListener("click", function () {
  centerText();
  changeInnerHTML();
  console.log(myRating);
});

function centerText() {
  mainEl.classList.add("center");
  changeImgEl.classList.add("center");
}

function changeInnerHTML() {
  mainEl.innerHTML = `<figure id="changeImg-el">
  <img
    id="starImg-el"
    class="center"
    src="./images/illustration-thank-you.svg"
    alt="Rating-star"
  />
</figure>
<div class="rating-para">
<p class="rate">You selected ${myRating} out of 5</p>
</div>
<h4 class="title">Thank you!</h4>
<p class="description">
  We appreciate you taking the time to give a rating.
  If you ever need more support, don't hesitate to get in touch!
</p>
`;
}
