$(document).ready(function() {
  $("#form1").submit(function(event) {
    var animal = $("#animal").val();
    if (animal === "Shark") {
      $('#shark').show();
      $('#tardigrade').hide();
      $("#teacup").hide();
    } else if (animal === "Tardigrade"){
      $('#tardigrade').show();
      $("#teacup").hide();
      $('#shark').hide();
    } else {
      $("#teacup").show();
      $('#tardigrade').hide();
      $('#shark').hide();
    }
    event.preventDefault();
  });
});
