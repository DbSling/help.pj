<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />

<link rel="stylesheet" href="res/css/join.css" />
<title>MemberJoin & CenterJoin</title>
<script src="https://kit.fontawesome.com/64d58efce2.js" crossorigin="anonymous"></script>
<script src="res/js/YJoin.js"></script>
</head>
<body onload="checkMeEmailNum()" onLoad = "loadPage('${msg}')">

	<div class="container">
		<div class="forms-container">
			<div class="signin-signup">
				<form action="meJoin" class="sign-in-form" name="meJoin" method="post">
					<h2 class="title">회원가입</h2>
					<div class="input-field">
						<i class="fas fa-user"></i> <input type="text" name="meCode" value="${maxMeCode.meCode}" readonly/>
					</div>
					<div class="input-field">
						<i class="fas fa-user"></i> <input type="text" name="meName" placeholder="이름" spellCheck="false"
							maxlength='20' />
					</div>
					<div class="input-field">
						<i class="fas fa-envelope"></i> <input type="email" name="meEmail" style="text-transform: lowercase;"
							placeholder="이메일" />
					</div>
					<div class="input-field">
						<i class="fas fa-lock"></i> <input type="password" name="mePw" maxlength='15'
							placeholder="비밀번호" />
					</div>
					<div class="input-field">
						<i class="fas fa-lock"></i> <input type="password" name="mePwCheck" maxlength='15'
							placeholder="비밀번호확인" />
					</div>
					<div class="input-field">
						<i class="fas fa-user"></i> <input type="text" name="meNumber" placeholder="번호 '-' 없이 입력해 주세요."
							pattern="(010)-\d{3,4}-\d{4}" title="형식 01012341234" />
					</div>
					<div class="input-field">
						<i class="fas fa-user"></i> <input type="date" name="meBirth" placeholder="생일" />
					</div>
					<div class="input-field">
						<i class="fas fa-user"></i> <select name="meGender" >
							<option value="0">성별</option>
							<option value="G1">♂</option>
							<option value="G2">♀</option>
						</select>
					</div>
					<input type="button" value="Create" class="btn solid" onclick="creatMeJoin()" />
					
				</form>
				<form action="ctJoin" class="sign-up-form" name = 'ctJoin' method = 'post'>
					<h2 class="title">센터가입</h2>
					<div class="input-field">
						<i class="fas fa-user"></i> <input type="text" name='ctCode' placeholder="사업자 등록 번호" />
					</div>
					<div class="input-field">
						<i class="fas fa-user"></i> <input type="text" name='ctName' placeholder="매장명" spellCheck="false"/>
					</div>
					<div class="input-field">
						<i class="fas fa-user"></i> <input type="text" name='ctAddress' placeholder="매장주소" />
					</div>
					<div class="input-field">
						<i class="fas fa-user"></i> <input type="text" name='sfName' placeholder="대표자명" spellCheck="false"/>
					</div>
					<div class="input-field">
						<i class="fas fa-envelope"></i> <input type="email" name='sfEmail'
							placeholder="이메일" />
					</div>
					<div class="input-field">
						<i class="fas fa-lock"></i> <input type="password" name='sfPw' maxlength='15'
							placeholder="비밀번호" />
					</div>
					<div class="input-field">
						<i class="fas fa-lock"></i> <input type="password" name='sfPwCheck' maxlength='15'
							placeholder="비밀번호확인" />
					</div>
					<div class="input-field">
						<i class="fas fa-user"></i> <input type="text" name="sfNumber" placeholder="번호 '-' 없이 입력해 주세요."
							pattern="(010)-\d{3,4}-\d{4}" title="형식 01012341234" />
					</div>
					<input type="button" value="Create" class="btn solid" onclick="creatCtJoin()" />
					
				</form>
			</div>
		</div>

		<div class="panels-container">
			<div class="panel left-panel">
				<div class="content">
					<h3>센터가입하시겠습니까?</h3>
					<p>센터가입은 ...</p>
					<button class="btn transparent" id="sign-up-btn" onclick="checkCtCode()">Click
						Here!</button>
				</div>
				<img src="res/images/help.svg" class="image" alt="" />
			</div>
			<div class="panel right-panel">
				<div class="content">
					<h3>회원가입하시겠습니까?</h3>
					<p>회원가입은 ...</p>
					<button class="btn transparent" id="sign-in-btn" onclick="checkMeEmailNum()">Click
						Here!</button>
				</div>
				<img src="res/images/plan.svg" class="image" alt="" />
			</div>
		</div>
	</div>
	<div class="logo" onClick="home()">
		<div class="zero">
			<br>
			<div class="one"></div>
		</div>
		<div class="hp">
			H E L P
			<div id="plan">Health Plan</div>
		</div>
	</div>

	<script>
	const sign_in_btn = document.querySelector("#sign-in-btn");
	const sign_up_btn = document.querySelector("#sign-up-btn");
	const container = document.querySelector(".container");
	sign_up_btn.addEventListener("click", () => {
	  container.classList.add("sign-up-mode");
	});
	
	sign_in_btn.addEventListener("click", () => {
	  container.classList.remove("sign-up-mode");
	});
	</script>
</body>
</html>
