var ratings = document.getElementById("ratings");
// var ratings = document.querySelectorAll("ratings");

ratings.addEventListener("click", getRating, "false");

function getRating() {
  console.log("click detecté");
  console.log(this);
  //   var selectedRating = this.childNodes[0].textContent;
  //   console.log("rating: ", selectedRating);
}
