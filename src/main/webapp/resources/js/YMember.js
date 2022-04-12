
function ajax(action, data, fn) {
   let ajax = new XMLHttpRequest();
   ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && ajax.status == 200) {
         window[fn](JSON.parse(ajax.responseText));
      }
   };
      ajax.open("post", action, true);

      ajax.setRequestHeader("Content-type", "application/json; charset=utf-8");

   ajax.send(data);
}

let sfRanCode=[];
function getMeMg(ctcode,sfrank,sfcode){
closeModalIn(); 
	sfRanCode[0]=sfrank;
	sfRanCode[1]=sfcode;
	let json = [];
	json.push({ctCode:ctcode});
	const data = JSON.stringify(json);
	ajax("ajax/meMg",data,"getMeList");
}

let meList;

function getMeList(json){
	meList=json;
	const ajax = document.getElementById("ajax");
	let data = '<thead><tr><td></td><td>이름</td><td>성별</td><td>연령</td><td>전화번호</td><td>유형</td><td>결제횟수/잔여횟수(개월)<td><td><td></tr></thead>';
	for(i=0;i<json.length;i++){
		if(sfRanCode[0]=='M1'){
					data += '<tr id="meDtList" onClick="meDetail('+i+')"><td><input type=\"radio\" name=\"radibut\"/></td>';
					data +='<td>'+json[i].meName+'</td>';
					data +='<td>'+json[i].meGender+'</td>';
					data +='<td>'+json[i].meBirth+'</td>';
					data +='<td>'+json[i].meNumber+'</td>';
					data +='<td>'+json[i].caName+'</td>';
					if(json[i].caName=='일반'){
						data +='<td>'+json[i].lpQty+'</td>';
					}else{
						data +='<td>'+json[i].lpQty+'/'+json[i].lpStocks+'</td>';
					}
					if(json[i].stCode=='M1'){
						if(json[i].caName=='일반'){
							data +='<td><input type="button" value="X" onclick="clickExpiration(\''+i+'\')"/></td>';
						}
					}else{
						data +='<td>만료</td>';
					}
					data += '</tr><tbody colspan ="7" name = "dtInfo" style="border : 1px solid #000000;"></tbody>'
					+'<tbody style="border : 1px solid #000000;" colspan ="7" name = "dtInfo2"></tbody>';
		
		}else if(sfRanCode[1]==json[i].sfCode){
					data += '<tr id="meDtList" name = "meDtList" onClick="meDetail('+i+')"><td><input type=\"radio\" name=\"radibut\"/></td>';
					data +='<td>'+json[i].meName+'</td>';
					data +='<td>'+json[i].meGender+'</td>';
					data +='<td>'+json[i].meBirth+'</td>';
					data +='<td>'+json[i].meNumber+'</td>';
					data +='<td>'+json[i].caName+'</td>';
					if(json[i].caName=='일반'){
						data +='<td>'+json[i].lpQty+'</td>';
					}else{
						data +='<td>'+json[i].lpQty+'/'+json[i].lpStocks+'</td>';
					}
					if(json[i].stCode=='M1'){
						if(json[i].caName=='일반'){
							data +='<td><input type="button" value="X" onclick="clickExpiration(\''+i+'\')"/></td>';
						}
					}else{
						data +='<td>만료</td>';
					}
					data += '</tr><tbody colspan ="7" name = "dtInfo" style="border : 1px solid #000000;"></tbody>'
					+'<tbody style="border : 1px solid #000000;" colspan ="7" name = "dtInfo2"></tbody>';
		
		}
	}
	ajax.innerHTML=data;
	YcloseModal();
}

function clickExpiration(i){
	json=[];
	json.push({ctCode:meList[i].ctCode,meCode:meList[i].meCode});
	data=JSON.stringify(json);
	ajax("ajax/clickExpiration",data,"getMeList");
}

var idx1;
function meDetail(i){
	idx1 = i;
	var json = [];
	json.push({ctCode:meList[i].ctCode,meCode:meList[i].meCode});
	data=JSON.stringify(json);
	ajax("ajax/meDetail",data,"getMeDtail");	
}

var meDtMod;
function getMeDtail(json){
	meDtMod = json[0];
	const dtInfo = document.getElementsByName("dtInfo");
	const dtInfo2 = document.getElementsByName("dtInfo2");
	for(a=0;a<dtInfo.length;a++){
		while(dtInfo[a].hasChildNodes()){
         	dtInfo[a].removeChild(dtInfo[a].lastChild);
     	}
		while(dtInfo2[a].hasChildNodes()){
         	dtInfo2[a].removeChild(dtInfo2[a].lastChild);
     	}
		
	}
	let data;
	var data2;
	const addTr = document.getElementsByName("dtInfo")[idx1];
	const addTr2 = document.getElementsByName("dtInfo2")[idx1];
	data = '<tr><td rowspan = "4" colspan = "2">';
	data += (json[0].meGender=='남')? '<img src="res/images/male.svg" width="60">':'<img src="res/images/female.svg" width="60">' ;
	data +='</td><td>회원</td><td>'+json[0].meName+'('+json[0].meGender+', '+json[0].meBirth+'세)</td><td>회원유형</td><td>'+json[0].caName+'</td>';
	data += '<td rowspan = "4" colspan = "2">'
	data += '<button id = "butbut" onClick="modMeDt(\''+json[0].meCode+'\')">수정</button>'
	data += '</td></tr>'
	data += '<tr><td>담당 트레이너</td><td>'+json[0].sfName+'</td><td>라카번호</td><td>'+json[0].locker+'</td></tr>';
	data += '<tr><td>연락처</td><td>'+json[0].meNumber+'</td><td>결제금액</td><td>'+json[0].paTotal+'</td></tr>';
	data += '<tr><td>이메일</td><td>'+json[0].meEmail+'</td></tr>';
	if(json.length>1){
		data2 = '<tr><td rowspan = "3" colspan = "3"><canvas id="inbodyChart" width = "300px" height = "200px"></canvas>';
		data2 += '</td><td>기초대사량</td><td id="a1"></td>'
		data2 += '<td colspan = "2">목표량</td></tr>';
		data2 += '<tr><td>B M I</td><td id="a2"></td><td>운동명<br>목표운동량</td><td>'+json[1].exName+'<br>'+json[1].taMotion+' '+json[1].exUnit+'</td></tr>';
		data2 += '<tr><td>체지방률</td><td id="a3"></td><td>실행일자<br>실행상태</td><td>'+json[1].ibDate+'<br>'+json[1].stCode+'</td></tr>';
		addTr2.innerHTML = data2;
	}
	addTr.innerHTML = data;
	if(json.length>1){
	var raData = {
		type: 'radar',
    	data: {
			labels: [],
			datasets: [{
				label: "",
          		fill: true,
          		backgroundColor: "rgba(179,181,198,0.2)",
          		borderColor: "rgba(179,181,198,1)",
          		pointBorderColor: "#fff",
          		pointBackgroundColor: "rgba(179,181,198,1)",
          		data: []
        	}]
    	},
    	options: {
			responsive: false
    	}
	};
	raData.data.datasets.label='"'+json[1].ibDate+'"';
	for(i=1;i<json.length;i++){
		if(json[i].daName=='체중'||json[i].daName=='골격근량'||json[i].daName=='체지방량'){
			raData.data.labels.push(json[i].daName+'('+json[i].daUnit+')');
			raData.data.datasets[0].data.push(json[i].idCount);
		}
		if(json[i].daName=='기초대사량')document.getElementById("a1").innerText = json[i].idCount +' '+json[i].daUnit;
		if(json[i].daName=='BMI')document.getElementById("a2").innerText = json[i].idCount +' '+json[i].daUnit;
		if(json[i].daName=='체지방량'){document.getElementById("a3").innerText = json[i].idCount +' '+json[i].daUnit};
	}
new Chart(document.getElementById("inbodyChart"), raData);
}
}

function modMeDt(mecode){
	const butbut = document.getElementById("butbut");
	butbut.removeAttribute("onClick");
	butbut.setAttribute("onClick","modMeDtAjax()");
	butbut.innerText = '저장';
	document.getElementById("mdtitle").innerText = "회원수정";
	var data = '<div class=\"input\"><i class=\"bx bx-user icon\"></i><input type ="text" id = "meName" placeholder="'+meDtMod.meName+'"/></div>';
	data += '<div class=\"input\"><i class=\"bx bx-phone\"></i><input type="text" id ="meNumber" placeholder="'+meDtMod.meNumber+'" title="형식 01012341234" /></div>';
	data += '<div class=\"input\"><i class=\"bx bx-envelope icon\"></i><input type = "email" id = "emailName" placeholder="'+meDtMod.meEmail+'"/></div>';/*<span>@<span><select id="juso">';
	data += '<option value = "return">주소선택</option>'
	data += '<option value = "daun.net">daun</option>';
	data += '<option value = "naver.com">naver</option>';
	data += '<option value = "google.com">GMAIL</option>';
	data += '<option value = "yahoo.com">yahoo</option>';
	data += '<option value = "outlook.com">outlook.com</option>';
	data += '<option value = "nate.com">nate</option>';
	data += '<option value = "dreamwiz.com">dreamwiz</option>';
	data += '<option value = "korea.com">korea.com</option></select>*/'</div>';
	data += '<div><button class=\"btn\" onClick = "modMeDtAjax(\''+mecode+'\')">MOD<button></div>';
	document.getElementById("mdbody").innerHTML = data;
	const juso = document.getElementById("juso");
	/*for(i=0;i<juso.length;i++){
		if(juso.options[i].value==meDtMod.meEmail.split('@')[1]){
			juso.options[i].setAttribute('selected', '');
		}
	}*/
	YopenModal();
}

function modMeDtAjax(mecode){
	let name =  document.getElementById("meName");
	let number =  document.getElementById("meNumber");
	let email =  document.getElementById("emailName");
	//let juso =  document.getElementById("juso").value;
	let json = [];
	if(name.value == ""){
		name = name.placeholder;
	}else{
		name = name.value;
	}
	if(number.value == ""){
		number = number.placeholder;
	}else{
		number = number.value;
	}
	if(email.value == ""){
		email = email.placeholder;
	}else{
		email = email.value;
	}
		json.push({ctCode : meList[0].ctCode, meCode: mecode, meName : name, meNumber : number , meEmail : email});
		const data = JSON.stringify(json);
	ajax("ajax/modMe",data,"getMeList");
}

function searchMe(ctcode){
	const select= document.getElementById('select').value;
	const searchText = document.getElementById('searchText').value;
	let json = [];
	json.push({ctCode:ctcode,meCode:select,meName:searchText});
	const data = JSON.stringify(json);
	ajax("ajax/meMg",data,"getMeList");
}


function searchMeCharTwo(ctcode,sfrank,sfcode){
	const select = document.getElementById('select');
	if(select.value.length>2){
		return;
	}
	if(select.value.charAt(0)=='M'){
		let json = [];
		json.push({ctCode:ctcode,stCode:select.value});
		const data = JSON.stringify(json);
		ajax("ajax/meMg",data,"getMeList");
	}
	if(select.value.charAt(0)=='L'){
		let json = [];
		json.push({ctCode:ctcode,caCode:select.value});
		const data = JSON.stringify(json);
		ajax("ajax/meMg",data,"getMeList");
	}
	if(select.value=='1'){
		getMeMg(ctcode,sfrank,sfcode);
	}
}


function getCaList(ctcode){
	let json = [];
	json.push({ctCode:ctcode});
	const data = JSON.stringify(json);
	ajax("ajax/getCaList",data,"addMemberModal");
}

function addMemberModal(json){
	
	document.getElementById("mdtitle").innerText = "회원추가";
	var data = '<div class= "mhead"><span><i class="bx bx-user icon"></i><input type ="text" id = "meName" placeholder="이름을 입력해주세요."/></span><span><i class="bx bx-envelope icon"></i><input type = "email" id = "emailName" placeholder = "이메일을 입력해주세요."/></span></div>';
	/*data += '<div class = "abc"><span>@<span><select id="juso">';
	data += '<option value = "return">주소선택</option>'
	data += '<option value = "daum.net">daum.net</option>';
	data += '<option value = "naver.com">naver.com</option>';
	data += '<option value = "google.com">gmail.com</option>';
	data += '<option value = "yahoo.com">yahoo.com</option>';
	data += '<option value = "outlook.com">outlook.com</option>';
	data += '<option value = "nate.com">nate.com</option>';
	data += '<option value = "dreamwiz.com">dreamwiz.com</option>';
	data += '<option value = "korea.com">korea.com</option></select></div>';*/
	for(i=0; i<json.length;i++){
		
		if(i==0){
			data+= '<article><div><span><input type = "checkbox" name = "check" value="'+json[i].caCode+'"/><br><span class = "checkText"><span>'+json[i].caName+'</span><br><span><br><select name="lpQty">';
			data+= '<option value="'+json[i].lpQty+','+json[i].lpPrice+'">'+json[i].lpQty+(json[i].caName=='일반'?'개월':'회')+' : '+json[i].lpPrice+'</option>';
		}else{
			if(json[i].caName==json[i-1].caName){
				data+= '<option value="'+json[i].lpQty+','+json[i].lpPrice+'">'+json[i].lpQty+(json[i].caName=='일반'?'개월':'회')+' : '+json[i].lpPrice+'</option>';
			}else{
				data+= '</select></span></div><div><span><input type = "checkbox" name = "check" value="'+json[i].caCode+'"/><br><span class = "checkText"><span>'+json[i].caName+'</span><br><span><br><select name="lpQty">';
				data+= '<option value="'+json[i].lpQty+','+json[i].lpPrice+'">'+json[i].lpQty+(json[i].caName=='일반'?'개월':'회')+' : '+json[i].lpPrice+'</option>';
			}
			if(i==json.length-1){
				data+= '</select></div></article>';
			}
		}
	}
	var iptBtn =document.createElement("input");
	iptBtn.setAttribute("type","button");
	iptBtn.setAttribute("value","create");
	iptBtn.setAttribute("onclick","addMember('"+json[0].ctCode+"')");
	document.getElementById("mbody").appendChild(iptBtn);
	document.getElementById("mdbody").innerHTML = data
	YopenModal();
}

function addMember(ctcode){
	var mename = document.getElementById("meName").value;
	var emailName = document.getElementById("emailName").value;
	var juso = document.getElementById("juso").value;
	var email = emailName+"@"+juso;
	var check = document.getElementsByName("check");
	var lpPrQty = document.getElementsByName("lpQty");
	var json = [];
	for(i=0;i<check.length;i++){
		if(check[i].checked==true){
		json.push({ctCode:ctcode,meName:mename,meEmail:email,caCode:check[i].value,lpQty:lpPrQty[i].value.split(',')[0]});
		}
	}
	var data = JSON.stringify(json);
	ajax("ajax/addMember",data,"getMeList");
}


function closeModalIn() {
	let containerIn =  document.getElementsByName("containerIn")[0];
	containerIn.style.display = "none";

}


	
	function UploadinbodyFile() {
		 const form = document.getElementsByName("containerIn")[0];
				 let data = new FormData(form);
				 ajaxFromData("insInbody",data,"ajaxCallback","POST");
	}
	
	
	function ajaxFromData(action, data, fn, method) {
		const ajax = new XMLHttpRequest();
		
		ajax.onreadystatechange = function() {
			if (ajax.readyState == 4 && ajax.status == 200) {
			window[fn](JSON.parse(ajax.responseText));
			
			
		}
		};
		if(method == "Get"){
			ajax.open("get", action, true);
		}
		else{
		ajax.open("post", action, true);
		//ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=utf-8 ");
		}
		ajax.send(data);
	}
	
	function ajaxCallback(msg){
	alert(msg);
	
		let ms = document.getElementById("msg");
		ms.innerText = msg.msg;
	}
	function openModalIn() {
	
	let containerIn = document.getElementsByName("containerIn")[0];
	containerIn.style.filter = "alpha(Opacity=50)";
	containerIn.style.display = "block";

}

	
	













