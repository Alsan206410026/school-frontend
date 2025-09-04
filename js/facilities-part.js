document.addEventListener("DOMContentLoaded", function () {
  var hostelBoxes = document.querySelectorAll(".hostel-facilities");

  for (var i = 0; i < hostelBoxes.length; i++) {
    var heading = hostelBoxes[i].querySelector(".heading-sec");
    var content = hostelBoxes[i].querySelector(".content-section");
    var sign = hostelBoxes[i].querySelector(".hostel-sign");

    heading.addEventListener("click", function () {
      // First, close all others
      for (var j = 0; j < hostelBoxes.length; j++) {
        if (hostelBoxes[j] !== this.parentElement) {
          hostelBoxes[j].classList.remove("active");
          hostelBoxes[j].querySelector(".content-section").classList.remove("active");
          hostelBoxes[j].querySelector(".hostel-sign").classList.remove("active");
        }
      }

      // Toggle current box
      var parentBox = this.parentElement;
      var content = parentBox.querySelector(".content-section");
      var sign = parentBox.querySelector(".hostel-sign");

      parentBox.classList.toggle("active");
      content.classList.toggle("active");
      sign.classList.toggle("active");
    });
  }
});
