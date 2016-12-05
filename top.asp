<!DOCTYPE html>
<html>

	<head>
		<meta charset="utf-8" />
		<title>正职帮</title>
		<meta name="description" content="正职帮" />
		<meta name="keywords" content="正职帮" />
		<link href="images/favicon.ico" type="image/x-icon" rel="shortcut icon" />
		<link href="css/style.css" rel="stylesheet" />
		<script>
			/*
			 * pc 跳转到 phone
			 */
			try {
				var urlhash = window.location.hash;
				if(!urlhash.match("fromapp")) {
					if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
						window.location.href = "/m";
					}
				}
			} catch(err) {}
		</script>
	</head>

	<body>
		<div class="header">
			<div class="logo">
				<a href="index.asp"><img src="images/logo_03.jpg" alt="logo" /></a>
			</div>
			<div class="tel"><img src="images/dh_06.jpg" alt="" /></div>
		</div>
		<div class="w-nav">
			<div class="nav" id="nav">
				<ul>
					<li>
						<a href="index.asp" class="this">首页</a>
					</li>
					<li><a href="#">西装</a></li>
					<li><a href="#">衬衣</a></li>
					<li><a href="#">冲锋衣</a></li>
					<li><a href="#">工作服</a></li>
					<li><a href="#">校服</a></li>
					<li><a href="#">特需定制</a></li>
					<li><a href="#">酒店服装</a></li>
					<li><a href="#">关于我们</a></li>
					<li><a href="#">联系我们</a></li>
				</ul>
			</div>
		</div>