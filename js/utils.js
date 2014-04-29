var pattern;

// happens when loading this script
(function() {
	// trianglify pattern generation
	var t = new Trianglify({noiseIntensity: 0});
	var h = $(document).height(), w = $(document).width();
	h += 50; // margin from the top
	pattern = t.generate(w,h);
})();

$(document).ready(function() {
	// jQuery SmoothScroll | Version 18-04-2013
	$('a[href*=#]').click(function() {
		if($(this).parent().hasClass('carousel') || $(this).attr('href').indexOf('javascript')>-1) return;
		// duration in ms
		var duration=1000;
		// easing values: swing | linear
		var easing='swing';
		// get / set parameters
		var newHash=this.hash;
		var oldLocation=window.location.href.replace(window.location.hash, '');
		var newLocation=this;
		// make sure it's the same location
		if(oldLocation+newHash==newLocation) {
			// get target
			var target=$(this.hash+', a[name='+this.hash.slice(1)+']').offset().top;
			// adjust target for anchors near the bottom of the page
			if(target > $(document).height()-$(window).height()) target=$(document).height()-$(window).height();
			// animate to target and set the hash to the window.location after the animation
			$('html, body').animate({ scrollTop: target }, duration, easing, function() {
				// add new hash to the browser location
				window.location.href=newLocation;
			});
			// cancel default click action
			return false;
		}
	});

	// chris coyne's email script
	for (var j = 0; j < 18; j++) {
		var yeehah = function() {
			var i = j;
			setTimeout(function() {
				var n = "new";
				var o = "brict" + "@g";
				var b = "mail.com"
				var o = n + o + b;
				var t = document.getElementById('email');
				var s = t.innerHTML;
				t.innerHTML = s.slice(0,i) + o[i] + s.slice(i+1,s.length);
			}, Math.floor(Math.random()*1000));
		}();
	}

	// trianglify background
	$("body").attr('style', 'background: '+pattern.dataUrl);
});
