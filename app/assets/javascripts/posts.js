$(function(){
  $(".js-more").on('click', function(e){
    e.preventDefault
    let url = this.attributes.action.value
    let id = this.dataset.id
    
    $.get(url, function(data){
      $(`#body-${id}`).text(data)
    })
  })
})

