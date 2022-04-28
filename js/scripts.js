$(document).ready(function () {

  $("#User").submit(function (event) {
    event.preventDefault();

    const age = parseInt($("#age").val());
    if (age < 18) {
      $("#read").show();

    }



  });









});