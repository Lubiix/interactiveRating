// var ratings = document.getElementById("ratings");

// ratings.addEventListener("click", getRating, "true");
// var selectedRating = 0;

// function getRating(e) {
//   e.stopPropagation();
//   selectedRating = e.target.value;
// }

// console.log("slectedRating", selectedRating);
// var selectedRating = 0;
// var ratings = document.querySelector("#ratings").childNodes;
// console.log(ratings);

// ratings.addEventListener("click", function (e) {
//   console.log(e);
//   //   e.stopPropagation();
//   selectedRating = e.target.value;
//   console.log("selected rating: ", selectedRating);
// });

// console.log("selected rating: ", selectedRating);

var li = document.getElementsByTagName("li");
var rating = "";
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    // console.log(this.textContent);
    rating = this.textContent;
    // this.style.backgroundColor = "hsl(217, 12%, 63%)";
    // this.style.color = "hsl(0, 0%, 100%)";
    this.classList.add("selected");

    // if (this.classList == "selected") {
    //   this.classList.remove("selected");
    // }
    console.log("rating", rating);
  });
}

for (var j = 0; j < document.getElementsByClassName("selected").length; j++) {
  li[j].addEventListener("click", function () {
    this.classList.remove("selected");
    // if (this.classList == "selected") {
    // }
  });
}

// console.log("rating", rating);
