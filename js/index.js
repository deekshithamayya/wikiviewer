$(document).ready(function(){
  $("#search").click(function(){
    search=$("#searchtext").val();
    $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&callback=?&gsrsearch="+search).done(function(data){
      
      var objarr=Object.values(data.query.pages);
      $("#databox").text(" ");
      for(i=0;i<objarr.length;i++){
         
        $("#databox").append("<a href='https://en.wikipedia.org/wiki/" + objarr[i].title+"' target='_blank'><div class='item'>"+objarr[i].title+"</div></a>");
      }
      

    });
      
   
    
  });
});