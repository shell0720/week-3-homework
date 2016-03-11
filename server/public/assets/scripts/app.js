$(document).ready(function(){

   $("form").submit(function(event){
      event.preventDefault();
      var values = {};

      $.each($(this).serializeArray(), function(i, field){
         values[field.name] = field.value;
      });
      $("form").find("input[type=text]").val("");
      console.log(values);

        $.ajax({
           type: "POST",
           url: "/add",
           data:values,
           success: function(data){
             $.ajax({
                type: "GET",
                url: "/cats",
                success: function(data){
                  appendDom(data);

                }
             });
           }
        });

   });

});

function appendDom(data) {
  $("li").empty();
  for (var i = 0; i<data.length; i++){
    $(".container").append("<li>" +data[i].name+ "</li>");
    console.log(data[i].name);
  }
}
