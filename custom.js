$(document).ready(function() {
    $(".model_color").on("click", function() {
	    $(".model_color").removeClass("active_color"), $(this).addClass("active_color");
	        var src = $(this).data("src");
	    $(this).closest(".thumbnail").find(".big_pic").attr("src", src);
	    $(this).closest(".thumbnail").find(".color_title").html("(" + $(this).data("color") + ")");
    });

    $('a[href^="#"]').click(function() {
        var link = $(this).attr("href"),
           offSetTop = $(link).offset().top;
        return jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: offSetTop
        }, 800)
    }), 
    document.getElementById("video").play()
})
