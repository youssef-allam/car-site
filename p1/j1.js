$(document).ready(function(){
   
 
    // hover effect
    $("nav").hover(function(){

		$(this).css("top","0px");
        
		$("body").css("top",$("nav").outerHeight());
    },function(){
        
		$(this).css("top","-35px");
        
		$("body").css("top","0");
    });

    // scroll to section
    $("li").on("click",function(){
        $(this).each(function(){
            $("body","html").animate({
                scrollTop : $("#" + $(this).attr("data-scroll")).offset().top,
            },1500)
           
        });
    })
	
    // on scroll
	//reset some position to make changes via scrolling
	
    $(window).on("scroll",function(){
        // add class now to li
		
        if( $(this).scrollTop() > 700){
            $("#scrolling").fadeIn(600);
        }else{
            $("#scrolling").fadeOut(600);
        }
        
		if( $(this).scrollTop() > ($("#sec1").offset().top)-200  ){
            $(".sec1").removeClass("-transx").removeClass("transx");
        }
		if( $(this).scrollTop() > ($("#sec2").offset().top)-250  ){
            $(".sec2 div").css("transform", "scale(1)");
        }
		
       
    })

    
    $("#scrolling").on("click",function(){
        $("body").animate({
            scrollTop : "0",
        },1000);
    });
	
	$("#sign").on("click",function(){
		$("#form").css("transform","scale(1)");
		
	})
	
	$("#new").on("click",function(){
		$("#form").css("transform","scale(0)");
		$("#form2").css("transform","scale(1)");
		
	})
	
	$("#false , #false2").on("click",function(){
		$("#form").css("transform","scale(0)");
		$("#form2").css("transform","scale(0)");
	})
	$("#start , #start2").on("click",function(){
		$("#form").css("transform","scale(0)");
		$("#form2").css("transform","scale(0)");
		
	})
////////////////////////////////////////////////////
	var con_num = 4,
		con_index = 0;
	
		function rotate(n){
			var	con_angle = (con_index/con_num)* -(360),
				trform = `rotateY(${con_angle}deg)`
			
			$(".prespective").css("transform", trform);		
		}
	
	$("#nex").on("click",function(){
		con_index+=1;
		rotate(con_index);
	})
	
	$("#pre").on("click",function(){

		con_index -= 1;
		rotate(con_index);
		
		})
	$("input.t").on("focus",function(){
		$("input.t").animate({
			width : "60%",
		},100)
		$(this).animate({
			width : "67%",
		},200)
	})
	$("input.t").on("blur",function(){
		$("input.t").animate({
			width : "60%",
		},100)
		
	})
    
 
})