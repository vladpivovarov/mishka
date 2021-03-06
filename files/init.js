$(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    
    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.5,
        "fg_width": 0.03,
        "circle_bg_color": "#f3f5f7",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#f8e174",
                "show": false
            },
            "Hours": {
                "text": "часов",
                "color": "#f8e174",
                "show": true
            },
            "Minutes": {
                "text": "минут",
                "color": "#f8e174",
                "show": true
            },
            "Seconds": {
                "text": "секунд",
                "color": "#f8e174",
                "show": true
            }
        }
    });
	
	function update() {
		var Now = new Date(), Finish = new Date();
		Finish.setHours( 23);
		Finish.setMinutes( 59);
		Finish.setSeconds( 59);
		if( Now.getHours() === 23  &&  Now.getMinutes() === 59  &&  Now.getSeconds === 59) {
			Finish.setDate( Finish.getDate() + 1);
		}
		var sec = Math.floor( ( Finish.getTime() - Now.getTime()) / 1000);
		var hrs = Math.floor( sec / 3600);
		sec -= hrs * 3600;
		var min = Math.floor( sec / 60);
		sec -= min * 60;
		$(".timer .hours").text( pad(hrs));
		$(".timer .minutes").text( pad(min));
		$(".timer .seconds").text( pad(sec));
		setTimeout( update, 200);
	}
	function pad(s) { return ('00'+s).substr(-2) }
	update();

	$('.reviews_slider').slick({
		  infinite: true,
		  speed: 500,
		  cssEase: 'linear',
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: false,
		  arrows: true
	});

	$('.reviews').slick({
		  infinite: true,
		  speed: 500,
		  cssEase: 'linear',
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  dots: false,
		  arrows: true
		});    
		
		$(".list3 .button-m1").click(function () {
				var title = $(this).parent().find('h3').html();
			 $('#order_form input[name="comment"]').val("Заказать мишку “" + title + "“");
		  });



			var mail = function() {
      $(".vladozin").submit(function(e) { //Change
      	e.preventDefault();

        var th = $(this);
        var form = e.target;
        var name = form.querySelector('.input_name').value;
        var status = form.querySelector('.status');
        var user_name = form.querySelector('.input_name').value;
        var user_phone = form.querySelector('.input_phone').value;

        $.ajax({
          type: "POST",
          url: "./mail2.php", //Change
          dataType: "json",
          data: {
            "user_name": user_name,
            "user_phone": user_phone
          }
        }).done(function(result) {
          
          status.innerHTML = result + " " + name + "! Скоро мы с вами свяжемся";
          setTimeout(function() {
            status.innerHTML = "";
          }, 5000);

          setTimeout(function() {
            // Done Functions
            th.trigger("reset");
          }, 1000);
        });

        return false;
      });
    };

    mail();

		

});