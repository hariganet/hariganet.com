//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  //スキルボードのツールチップ
  $("[data-toggle=tooltip]").tooltip();


  //スライダーギャラリー
	// オプションの一括指定-ねぷた
	var optionsNeputa = {
		imglist: [
      "img/neputa/neputa-up.jpg",
      "img/neputa/neputa-enkei.jpg",
      "img/neputa/shirasagi.jpg",
      "img/neputa/neputa-hitori.jpg",
      "img/neputa/jouhanshin-kami.jpg",
      "img/neputa/ashi-front.jpg",
      "img/neputa/ashi-side.jpg",
      "img/neputa/ashi-kiwaku.jpg",
      "img/neputa/shirasagi-hone.jpg",
      "img/neputa/shirasagi-kami-hikari.jpg",
      "img/neputa/three-hone.jpg",
      "img/neputa/neputa-yoko.jpg",
      "img/neputa/neputa.jpg",
      "img/neputa/neputa-kage.jpg"
		],
		width: 1200,
		height: 896,
		minWidth: 600,
		minHeight: 400,
		callback: function() {
			var self = this;
			
			// ローディング表示を終了
			$(".loading").hide();
			// 末尾の要素をフェードイン
			self.find("img").eq(-1).fadeIn(function() {
				// フェード切り替え開始
				self.fadechanger({ selector: "img" });
			});

			// fitter起動
			//self.fitter(options);
		}
	}
	
	// loader
	$(".img-container" + "#neputa").imgloader(optionsNeputa);

	// transition
	//$("#header a").transition();


	// オプションの一括指定-針金細工
	var optionsWireworks = {
		imglist: [
      "img/wireworks/zebra.jpg",
      "img/wireworks/owl_side.jpg",
      "img/wireworks/owl_front.jpg",
      "img/wireworks/skull.jpg",
      "img/wireworks/flog.jpg",
      "img/wireworks/dragon.jpg"
		],
		width: 1200,
		height: 896,
		minWidth: 600,
		minHeight: 400,
		callback: function() {
			var self = this;
			
			// ローディング表示を終了
			$(".loading").hide();
			// 末尾の要素をフェードイン
			self.find("img").eq(-1).fadeIn(function() {
				// フェード切り替え開始
				self.fadechanger({ selector: "img" });
			});

			// fitter起動
			//self.fitter(options);
		}
	}
	
	// loader
	$(".img-container" + "#wireworks").imgloader(optionsWireworks);

	// transition
	//$("#header a").transition();


});
