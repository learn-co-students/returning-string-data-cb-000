$(".js-more").on("click", function(){
  let id = $(this).data("id");
  $.get("/posts/"+ id + "/body", function(data) {
    console.log("#body-"+id)
    $("#body-"+id).text(data);
    // alert(data);
  });
});
