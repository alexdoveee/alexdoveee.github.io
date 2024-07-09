$(document).ready(function() {

	//POPUP ADD-ONS: open/close
	$("#myAddon").hide();
	$(".open-addon").click(function() {
		$("#myAddon").toggle();
	});

	//VIDEO: prevents touch interactions on iOS
	const iphoneVideo = document.getElementById('myVideo');
	iphoneVideo.addEventListener('touchstart', function(event) {
		//event.preventDefault();
	});

	//HERO VIDEO: orientation switcher
	function checkViewport() {
		const video = document.getElementById('myVideo');
		const isMobile = window.matchMedia('(max-width: 767px)').matches;

		if (isMobile) {
			video.src = 'video/video_mobile.mp4';
		} else {
			video.src = 'video/video_desktop.mp4';
		}
		video.load();
	}
	//check on page load, then listen for window resize events
	checkViewport();
	window.addEventListener('resize', checkViewport);

	//TABS
	$('ul.tabs li').first().addClass('current');
	$('.tab-content').first().addClass('current');

	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});
