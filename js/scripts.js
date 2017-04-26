var getFullContactInfo = function(name, address, phone){
  return "<p>name:" + name+"</p>";
}



$(document).ready(function(){

  $("form#customer").submit(function(event) {
    event.preventDefault();
    var shirtStyle = $("#shirtStyle").val();
    var shirtSize = $("input:radio[name=size]:checked").val();
    var shirtColor = $("#shirtColor").val();
    var graphic = $("input:radio[name=graphic]:checked").val();
    var customerName = $("input#name").val();

    var fullContactInfo = getFullContactInfo(customerName);

    $("#output").text(fullContactInfo);
  });
  });
});











  // var result = $("#shirtStyle").val();
  // $("#output") var result;
