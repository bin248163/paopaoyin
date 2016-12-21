var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?9362dfef318c57c223d20d5b73682df9";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(hm, s);
})();
$(function(){
    var $na=$('#na');
	var $navw=$('#nav-w');
	var $navl=$('#nav-l');
	var $x=$('#x');
	var $tabx1list=$("#group1 li a");
    var $tabx1=$("#group1-c");
	$na.click(function(){
		$navw.animate({left:'30%'},200);
		$navl.show();
	});
	$navl.click(function(){
		$navw.animate({left:'100%'},200);
		$(this).hide();
	});
	$x.click(function(){
		$navw.animate({left:'100%'},200);
		$navl.hide();
	});
	var botnav=$('#botnav');
	var botnavi=$('#botnavi');
	botnavi.click(function(){
		botnav.toggle();
	})
    
    if($('#demo')[0]) {
    var speed=50; //数字越大速度越慢
	var t=$('#demo')[0];
	var t1=$('#demo1')[0];
	var t2=$('#demo2')[0];
	t2.innerHTML=t1.innerHTML;
	function Marquee(){
	if(t2.offsetWidth-t.scrollLeft<=0)
	t.scrollLeft-=t1.offsetWidth
	else{
	t.scrollLeft++;
	}
	}
	var MyMar=setInterval(Marquee,speed);
	t.onmouseover=function() {clearInterval(MyMar)};
	t.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
    } else{
    	return false;
    }
    
});