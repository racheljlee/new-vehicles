$("#showall").ready(function() {
 $('.car-div').show();
});
        $("#showall").click(function(){
        $('.car-div').show();
        $(".menu-btn").css("background","#c40030");
        $(this).css("background","#000");
      });

      $("#sedan").click(function(){
        $('.car-div').hide();
        $('.sedan').show();
        $(".menu-btn").css("background","#c40030");
        $(this).css("background","#000");
      });
    
      $("#suv_minivan").click(function(){
        $('.car-div').hide();
        $('.suv').show();
        $('.minivan').show();
        $(".menu-btn").css("background","#c40030");
        $(this).css("background","#000"); 
      });
    
      $("#hybrid").click(function(){
        $('.car-div').hide();
        $('.hybrid').show();
        $(".menu-btn").css("background","#c40030");
        $(this).css("background","#000");
      });
