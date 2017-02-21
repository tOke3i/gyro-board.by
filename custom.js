$(document).ready(function() {
    $(".model_color").on("click", function() {
	    //onclick chage pictures in the card of the product
	    $(".model_color").removeClass("active_color");//remove active class(clean from privious actions)
	    $(this).addClass("active_color");// add to the element we've clicked
	        var src = $(this).data("src"); //take data-src value
	    $(this).closest(".thumbnail").find(".big_pic").attr("src", src); //change src
	    $(this).closest(".thumbnail").find(".color_title").html("(" + $(this).data("color") + ")");
    });
// animate move to the anchor starts
    $('a[href^="#"]').click(function() {
        var link = $(this).attr("href"),
           offSetTop = $(link).offset().top;
        return jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: offSetTop
        }, 800)
    });
// animate move to the anchor Ends
	
    document.getElementById("video").play(); //video plays
	
//	submit learn_more  from func STARTS
   $("#form_learn_more").submit(function() {
        return $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $("#myModal").fadeIn(300);
            $(".close").click(function() {
                $("#myModal").fadeOut(300);
            });
            $("#form_learn_more").trigger("reset");
        }),

    })
//submit from func ENDS
    
    $(".close").click(function() {
        $(this).closest("#myModal_oder").fadeOut(200);
    });

    $(".oder_thumb_btn").click(function() {
        $("#myModal_oder").fadeIn(200);
        var model = $(this).data("model")
          , color = $(this).closest(".thumbnail").find(".active_color").data("color");
        $(".model_input").val(model + " Цвет: " + color)
    });
// modal submit form starts
    $("#modal").submit(function() {
        return $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $("#myModal").fadeIn(300);
            $(".close").click(function() {
                $("#myModal").fadeOut(300);
            }),
            $("#form_learn_more").trigger("reset");
        })
    })
})
// modal submit form ENDS
	
//show model starts
$(".oder_thumb_btn_main").click(function() {
    $("#myModal_oder").fadeIn(200);
    var model = $(this).data("model");
    $(".model_input").val(model)
})
//show model ENDS
