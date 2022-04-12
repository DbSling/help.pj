<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>HOME</title>
<link rel="stylesheet" type="text/css" href="res/css/home.css" />
<link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css'
	rel='stylesheet'>
<script src="res/js/resource.js" src="res/js/bon.js"></script>

</head>


<body onLoad="initPage()">

	<div class=circle></div>
	<div class=circle2></div>
	<div class=circle3></div>
	<div class=circle4></div>
	<div class=crcle5></div>
	<div class=circle6></div>
	<div class="logo">
		<div class="zero">
			<br>
			<div class="one"></div>
		</div>
		<div class="hp">
			H E L P
			<div id="plan">Health Plan</div>
		</div>
	</div>

	<div class="underLine"></div>
	<div class="text">
		Do your<br>best work
	</div>
	<div class="somebody">Made by :: SOMEBODY</div>
	<div class="logIn">
		<input class="log" type="button" value="Log In"
			onClick="meLogInModal()" />
	</div>
	<!-- 회원 로그인모달 -->
	<div class="container" id="container">
		<form name="dynamicFormdata" action="meLogin" method="post">
			<div class="mdialog">
				<input type="button" class="clo" value="X" onClick="closeModal()" />
				<div class="mbody" id="mbody">
					<span>로그인</span>
					<div class="input-field">
						<i class='bx bx-user icon'></i> <input type='text' class='id'
							name='meCode' placeholder="아이디를 입력하세요." />
					</div>
					<div class="input-field">
						<i class='bx bx-lock-alt icon'></i> <input type='password'
							class='pw' name='mePw' placeholder="비밀번호를 입력하세요." />
					</div>
					<div class="login">
						<input type="button" value="로그인" onClick="meLogIn()" />
					</div>
					<div class="ctLogin">
						<input type="button" value="매장으로 로그인하기" onClick="ctLogInModal()" />
					</div>
				</div>

				<div id="list">${list}</div>
				<div class="mfooter">
					<input type="button" class="mbtn" value="계정만들기" onClick="goJoinPage()" />
					<input type="button" class="mbtn" value="비밀번호변경" onClick="sendEmailForm()" />
				</div>
			</div>
		</form>

		<!-- 매장 로그인 모달 -->
		<form name="dynamicFormdata2" action="ctLogin" method="post">
			<div class="containerSF" id="containerSF">
				<div class="mdialog">
					<input type="button" class="clo" value="X" onClick="closeModal()" />
					<div class="mbody" id="mbody">
						<span>매장로그인</span>
						<div class="input-field">
							<i class='bx bx-store icon'></i> <input type='text' class='id'
								name='ctCode' placeholder='매장코드를 입력하세요.' />
						</div>
						<div class="input-field">
							<i class='bx bx-user icon'></i> <input type='text' class='id'
								name='sfId' placeholder='직원코드를 입력하세요.' />
						</div>
						<div class="input-field">
							<i class='bx bx-lock-alt icon'></i> <input type='password'
								class='pw' name='sfPw' placeholder="비밀번호를 입력하세요." />
						</div>
						<div class="login2">
							<input type="button" class="login" value="로그인"
								onClick="ctLogIn()" />
						</div>
					</div>
					<div id="list">${list}</div>
					<div class="mfooter">
						<input type="button" class="mbtn" value="계정만들기" onClick="goJoinPage()" />
					<input type="button" class="mbtn" value="비밀번호변경" onClick="sendEmailForm()" />
				</div>
				</div>
			</div>
		</form>
	</div>
</body>
</html>
