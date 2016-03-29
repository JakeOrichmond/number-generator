$(function){
  $(".numberBot").submit(function(event){
    event.preventDefault();
    $(".output").text("");
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());

    for (var total = countBy; total <= countTo; total += countBy) {
      $(".output").append(total + " ");
    }
  }


});
});
