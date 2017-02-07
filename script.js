$(function(){
	$("#navbar").on('show.bs.collapse', function(){
		$(".topcasa-banner").css('transform', 'translate(-50%, 10%)');
	});
	$("#navbar").on('hide.bs.collapse', function(){
		$(".topcasa-banner").css('transform', 'translate(-50%, -50%)');
	});
});