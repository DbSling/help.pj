<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">

<!----======== CSS ======== -->
<link rel="stylesheet" href="res/css/meMg.css">
<!----===== Boxicons CSS ===== -->
<link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css'
	rel='stylesheet'>

<title>MemberManagement</title>
<script  src="res/js/resource.js" src="res/js/bon.js" src="res/js/Dong.js"></script> 


</head>
<body onload = "getMeMg('${ctCode}')">
	<nav class="sidebar close">
		<header>
			<div class="image-text">
				<span class="image"> <!--<img src="logo.png" alt="">-->
				</span>

				<div class="text logo-text" onClick="goMePage('${sfInfo.ctCode}')">
					<span class="name">HELP</span> <span class="profession">Health
						Plan </span>
				</div>
			</div>

			<i class='bx bx-chevron-right toggle'></i>
		</header>

		<div class="menu-bar">
			<div class="menu">
				<ul class="menu-links">
					<li class="nav-link"onClick="goMePage('${sfInfo.ctCode}')"><a>
					<i class='bx bx-user icon'></i> 
					<span class="text nav-text">회원관리</span>
					</a></li>

					<li class="nav-link" onClick="goSfPage('${sfInfo.ctCode}')"><a>
					<i class='bx bx-group icon'id="sfMg" ></i> 
					<span class="text nav-text">직원관리</span>
					</a></li>

					<li class="nav-link" onClick="goLessonPage('${sfInfo.ctCode}')"><a> 
					<i class='bx bx-chalkboard icon' id="lessonMg"></i>
					<span class="text nav-text">수업관리</span>
					</a></li>

					<li class="nav-link" onClick="goGoodsPage('${sfInfo.ctCode}')"><a>
					<i class='bx bx-wrench icon' id="goodsMg" ></i>
					<span class="text nav-text">장비관리</span>
					</a></li>

					<li class="nav-link" onClick="goPayPage('${sfInfo.ctCode}')"><a> 
					<i class='bx bx-credit-card icon' id="payMg"></i> 
					<span class="text nav-text">결제관리</span>
					</a></li>


				</ul>
			</div>

			<div class="bottom-content">
				<li class=""><a href="#"> <i class='bx bx-id-card icon'></i>
						<span class="text nav-text"></span> <span class="text nav-text">	<span>${sfInfo.sfName}</span>
						<span>(${sfInfo.sfRankName})</span></span>
				</a></li>

				<li class=""><a onClick="logOut('${sfInfo.ctCode}','${sfInfo.sfId}')"> <i class='bx bx-log-out icon' ></i>
						<span class="text nav-text">로그아웃</span>
				</a></li>

				<li class="mode">
					<div class="sun-moon">
						<i class='bx bx-moon icon moon'></i> <i class='bx bx-sun icon sun'></i>
					</div> <span class="mode-text text">다크모드</span>

					<div class="toggle-switch">
						<span class="switch"></span>
					</div>
				</li>

			</div>
		</div>

	</nav>

	<section class="home">
		<div class="text">MemberManagement</div>
		<div class="search">
			<div class="nav-search">
				<select class="select">
					<option disabled selected>회원검색</option>
					<option>이름</option>
					<option>연락처</option>
				</select> <select class="select">
					<option disabled selected>회원유형</option>
					<option>일반</option>
					<option>PT</option>
					<option>만료</option>
				</select> <span> <input type="text" placeholder="검색"> <i
					class='bx bx-search icon'></i>
				</span>
			</div>

		</div>
		<div class="etc">
			<div>
				<button>
					<i class='bx bx-user-plus icon'></i><span></span>
				</button>
				<button>
					<i class='bx bx-user-x'></i>
				</button>
			</div>
		</div>
<table id="ajax"></table>

	</section>

	<script>
	 const body = document.querySelector('body'),
     sidebar = body.querySelector('nav'),
     toggle = body.querySelector(".toggle"),
     //searchBtn = body.querySelector(".search-box"),
     modeSwitch = body.querySelector(".toggle-switch"),
     modeText = body.querySelector(".mode-text");


	toggle.addEventListener("click" , () =>{
   sidebar.classList.toggle("close");
	})

	modeSwitch.addEventListener("click" , () =>{
   body.classList.toggle("dark");
   
   if(body.classList.contains("dark")){
       modeText.innerText = "라이트모드";
   }else{
       modeText.innerText = "다크모드";
       
   }
	});
	</script>

</body>
</html>
