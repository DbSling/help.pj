
let list;

 let jsPIp;
let datalesson;

	
function logOut(ct,id){
	let a = makeInputElement("hidden", "sfId", id);
	let b = makeInputElement("hidden", "ctCode", ct);
	var c = makeInputElement("hidden", "ahIp", jsPIp);
	let form = makeForm("", "logOut", "POST");
	form.appendChild(a);
	form.appendChild(b);
	form.appendChild(c);
      document.body.appendChild(form);
	form.submit();
   
}

function YopenModal(){
	let container = document.getElementById("gModal");
	container.style.filter = "alpha(Opacity=50)";
	container.style.display = "block";
}

function YcloseModal(){
	let container = document.getElementById("gModal");
	container.style.display = "none";
}

	
function meLessonMg(ctCode){

	const form = makeForm("", "meLessonMg", "POST")
	//const ctCode = makeInputElement("hidden","ctCode",ctCode,"")

	//form.appendChild(ctCode);
    document.body.appendChild(form);
    form.submit();
}

function meConfig(ctCode){
	
	const form = makeForm("", "meConfig", "POST")
	//const ctCode = makeInputElement("hidden","ctCode",ctCode,"")

	//form.appendChild(ctCode);
      document.body.appendChild(form);
      form.submit();
}
let ctcode;
function getMeMg(ctcode){
	ctt = ctcode;
	let jsondata = [];
	jsondata.push({"ctCode":ctcode});
	const clientdata = JSON.stringify(jsondata);
	whatsend("ajax/meMg","","getedmelist",false,"post");

}



function openModal() {
	let container =  document.getElementById("container");
	container.style.filter = "alpha(Opacity=50)";
	container.style.display = "block";
}
function openModal1() {

	let container =  document.getElementById("container1");
	container.style.display = "block";
}


function closeModal() {
	let container =  document.getElementById("container");
	let containerSF =  document.getElementById("containerSF");
	container.style.display = "none";
	//containerSF.style.display = "none";
}
function closeModalIn() {
	let container =  document.getElementById("containerIn");
	container.style.display = "none";
}

function closeModal1() {
	let container =  document.getElementById("container1");
	container.style.display = "none";
}

function ajaxconnection(action, data, fn, content) {
   let ajax = new XMLHttpRequest();
   ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && ajax.status == 200) {
         window[fn](JSON.parse(ajax.responseText));
      }
   };
      ajax.open("post", action, true);
if(content){
      ajax.setRequestHeader("Content-type", "application/json;charset=utf-8");
   }
   ajax.send(data);
}

function whatsend(action, data, fn, content,method) {
	const ajax = new XMLHttpRequest();
	
	ajax.onreadystatechange = function() {
		
			if (ajax.readyState == 4 && ajax.status == 200) {
		
			window[fn](JSON.parse(ajax.responseText));
		}
	};
	if(method == "Get"){
		ajax.open("get", action, true);
	}else{
		ajax.open("post", action, true);
		ajax.setRequestHeader("Content-Type",content? "application/x-www-form-urlencoded;charset=utf-8 ":"application/json;charset=utf-8");
	}
	
	ajax.send(data);
}


function getAjax1(action, data, fn, content ,method) {
   let ajax = new XMLHttpRequest();

   ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && ajax.status == 200) {
         window[fn](ajax.responseText);
         //document.getElementById("ajaxData").innerHTML = serverData;
      }
   };

   ajax.open("post", action, true);
   ajax.setRequestHeader("Content-type",
         "application/json;charset=utf-8");
   ajax.send(data);
}

function getAjax2(action, data, fn, content ,method) {
   let ajax = new XMLHttpRequest();

   ajax.onreadystatechange = function() {
      if (ajax.readyState == 4 && ajax.status == 200) {
         window[fn](JSON.parse(ajax.responseText));
         //document.getElementById("ajaxData").innerHTML = serverData;
      }
   };

   ajax.open("post", action, true);
   ajax.setRequestHeader("Content-type",
         "application/json;charset=utf-8");
   ajax.send(data);
}

function meProfile(mecode,cctcode){
	let jsondata = [];
	jsondata.push({"meCode":mecode,"ctCode":cctcode});
	const clientData = JSON.stringify(jsondata);
	whatsend("ajax/meDtInfo",clientData,"modProfileInfo",false,"post");
}


function modProfileInfo(data){
	if(document.getElementById("meEmail")!=null){
	for (idx = 0; idx< data.length; idx++){
	document.getElementById("meEmail").innerHTML = data[idx].meEmail;
	document.getElementById("meBirth").innerHTML = data[idx].meBirth;
	document.getElementById("meName").innerHTML = data[idx].meName;
	document.getElementById("meGender").innerHTML = data[idx].meGender;
	document.getElementById("meNumber").innerHTML = data[idx].meNumber;
	}
}else{}
}



function meDtInf(mmeCode){

	let jsondata = [];
	let cctCode = document.getElementsByName("searchct")[0].value;
	jsondata.push({"ctCode":cctCode,"meCode":mmeCode});
	const clientData = JSON.stringify(jsondata);
	
	whatsend("ajax/meDtInfo",clientData,"meDtInfo1",false,"post");
	
}

function meDtInfo1(data){

	let STCODE = "M1";

	for (idx = 0; idx< 1; idx++){
	message = '<div>';
	message += '<div class="lImg">';
	message += '<img src="res/images/male.svg" class="image"/>'
	message += '</div>';
	message += '<table class="fTable">';
	message += '<tr><td>회원이름</td><td>'+ data[idx].meName +"("+ data[idx].meBirth +"세,"+data[idx].meGender+')'+'</td></tr>';
	if(data[idx].sfName == null){
		message += '<tr><td>담당트레이너</td><td>할당안됨</td></tr><br>';
	}else{
		message += '<tr><td>담당트레이너</td><td>'+data[idx].sfName+'</td></tr><br>';
	}
	message += '<tr><td>이메일</td><td>'+data[idx].meEmail+'</td></tr><br>';
	message += '<tr><td>연락처</td><td>'+data[idx].meNumber+'</td></tr>';
	message += '</table>';
 	if(STCODE == ("M1")){
		message += '<table class="lTable">';
		message += '<tr><td>결제일</td><td>'+data[idx].paDate+'</td></tr>';
		message += '<tr><td>락카번호</td><td>'+data[idx].locker+'</td></tr>';
		message += '<tr><td>결제금액</td><td>'+data[idx].paTotal+'</td></tr>';
		message += '<tr><td>회원유형</td><td>'+data[idx].lsName+'</td></tr>';
		message += '</table>';
		message += '</div>';
	}	
	}
      document.getElementById("list").innerHTML = message;
}

function meInbodyMg(mmecode){
	
	let jsondata = [];
		let cctcode = document.getElementsByName("searchct")[0].value;
		jsondata.push({"meCode":mmecode,"ctCode":cctcode});
		const clientData = JSON.stringify(jsondata);
	
	whatsend("ajax/meInbodyMg2",clientData,"meInbodyMg1",false,"post");
}


/*function meInbodyMg(mmecode){

	let cctcode = document.getElementsByName("searchct")[0].value;
	
	let jsondata = [];
		jsondata.push({"meCode":mmecode,"ctCode":cctcode});
		const clientData = JSON.stringify(jsondata);
	whatsend("ajax/meInbodyMg2",clientData,"meInbodyMg1",false,"post");
}*/


function meInbodyMg1(data){


	message = '<div>';
	message += '<canvas id="line-chart" width="50" height="20">'+'</canvas>'
	message += '<table>';
	message += '<tr><td>'+data[9].daName+'</td><td>'+ data[9].idCount +"&nbsp"+data[9].daUnit+'</td></tr>';
	message += '<tr><td>'+data[1].daName+'</td><td>'+ data[1].idCount +"&nbsp"+data[1].daUnit+'</td></tr>';
	message += '<tr><td>'+data[10].daName+'</td><td>'+ data[10].idCount +"&nbsp"+data[10].daUnit+'</td></tr>';
	message += '</table>'+'<br>';
 	
		message += '<table>';
		message += '<tr><td>'+data[2].daName+'</td><td>'+ data[2].idCount +"&nbsp"+data[2].daUnit+'</td></tr>';
		message += '<tr><td>'+data[0].daName+'</td><td>'+ data[0].idCount +"&nbsp"+data[0].daUnit+'</td></tr>';
		message += '<tr><td>'+data[3].daName+'</td><td>'+ data[3].idCount +"&nbsp"+data[3].daUnit+'</td></tr>';
		message += '<tr><td>'+data[6].daName+'</td><td>'+ data[6].idCount +"&nbsp"+data[6].daUnit+'</td></tr>';
		message += '<tr><td>'+data[5].daName+'</td><td>'+ data[5].idCount +"&nbsp"+data[5].daUnit+'</td></tr>';
		message += '<tr><td>'+data[4].daName+'</td><td>'+ data[4].idCount +"&nbsp"+data[4].daUnit+'</td></tr>';
		message += '<tr><td>'+data[8].daName+'</td><td>'+ data[8].idCount +"&nbsp"+data[8].daUnit+'</td></tr>';
		message += '<tr><td>'+data[7].daName+'</td><td>'+ data[7].idCount +"&nbsp"+data[7].daUnit+'</td></tr>';
		message += '</table>';
		
		
	//	if(meInfo[0].caCode == "L1"){
		message += '<table>';
		message += '<tr><td>'+'운동명'+'</td><td>'+ data[0].exName+'</td></tr>';
		message += '<tr><td>'+'목표운동량'+'</td><td>'+ data[0].taMotion +"&nbsp"+'단위 ('+data[0].exUnit+')'+'</td></tr>';
		
		
		
		message += '<tr><td>'+'실행일'+'</td><select style="overflow:auto" class="dropdown" id="findDay"">';
		
		
		for (i=0; i<data.length;i++){
			if(data[i].findDay != null)
			message += '<option value ='+data[i].findDay+'>'+data[i].findDay+'</option>';
		}

		message+= '<input type = "button" value ='+"확인"+' onClick = "findDay('+data[12].meCode+')">'

		
	//	message += '<option value="date">'+date2+'</option>';
		
		message += '</select></tr>';
		
		message += '<tr><td>'+'실행상태'+'</td></tr><br><tr><td>'+ data[0].stCode+'</td></tr>';
		message += '</table>';
		message += '</div>';
		
	//	}
		
		document.getElementById("list").innerHTML = message;
		
		let input = document.createElement("input");
		let P1 = 'P1';
		input.setAttribute("type","button");
		input.setAttribute("id","Yes");
		input.setAttribute("value","Y");
		input.setAttribute("onClick","insTaState('"+data[0].ibDate+','+P1+','+data[12].meCode+"')")
		let input2 = document.createElement("input");
		let P2 = 'P2';
		
		input2.setAttribute("type","button");
		input2.setAttribute("id","No");
		input2.setAttribute("value","N");
		input2.setAttribute("onClick","insTaState('"+data[0].ibDate+','+P2+','+data[12].meCode+"')");
		const list = document.getElementById("list");
		list.appendChild(input);
		list.appendChild(input2);
		
		let jsondata = [];
	
	jsondata.push({"meCode":data[12].meCode});
	const clientData = JSON.stringify(jsondata);
		whatsend("ajax/inbodyChart",clientData,"inbodyChart",false,"post");
	//	inbodyChart();
}


function inbodyChart(data){

	new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
	labels: [data[7].ibDate,data[4].ibDate,data[1].ibDate],
    datasets: [{ 
        data: [data[7].idCount,data[4].idCount,data[1].idCount],
        label: "체중",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [data[6].idCount,data[3].idCount,data[0].idCount],
        label: "골격근량",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [data[8].idCount,data[5].idCount,data[2].idCount],
        label: "체지방량",
        borderColor: "#3cba9f",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: '최근 3개월 인바디 추이'
    }
  }
});
}

function findDay(mmeCode){
	const findDay = document.getElementById("findDay").value;
	let cctCode = document.getElementsByName("searchct")[0].value;
	let jsondata = [];
	/*const mmeCode = "10001";
	const cctCode = "1234567890";*/
	jsondata.push({"meCode":mmeCode,"ctCode":cctCode,"ibDate":findDay,"ibDate1":findDay});
	const clientData = JSON.stringify(jsondata);
	
		whatsend("ajax/meInbodyMg",clientData,"meInbodyMg1",false,"post");
}

function insTaState(data){
	
	let data1 = data.substring(0,14);
	let data2 = data.substring(15,17);
	
	let jsondata = [];
	jsondata.push({ibDate:data1,peStcode:data2});
	const clientData = JSON.stringify(jsondata);
	alert(clientData);
	whatsend("ajax/insTaState",clientData,"eee",false,"post");
}
function eee(){
	meInbodyMg(meall);
}

function checkMePw(cctcode, mmecode){
	let jsondata = [];
	

	jsondata.push({"ctCode":cctcode,"meCode":mmecode});
	const clientData = JSON.stringify(jsondata);
	
		whatsend("ajax/meDtInfo",clientData,"checkMePw1",false,"post");
	
	}

function checkMePw2(cctcode, mmecode){
	let jsondata = [];
	

	
	jsondata.push({"meCode":mmecode,"ctCode":cctcode});
	const clientData = JSON.stringify(jsondata);
	
		whatsend("ajax/meDtInfo",clientData,"checkMePw3",false,"post");
		
	}


function checkMePw3(data){
	const list2 = document.getElementById("profile2");
	let ctCode = document.getElementById("searchct").value;
	for(idx = 0; idx< data.length; idx++){
	
		if(data[idx].mePw == document.getElementById("mePw1").value){
			while(list2.hasChildNodes()){
			list2.removeChild(list2.lastChild);
			}
			let input1 = document.createElement("input");
			list2.setAttribute("type","submit");
			input1.setAttribute("value", data[idx].meEmail);
			input1.setAttribute("readOnly","");
			input1.setAttribute("id","meEmail");
			
			
			let input2 = document.createElement("select");
			let option1 = document.createElement("option");
			let option2 = document.createElement("option");
			input2.setAttribute("id","meGender");
			input2.appendChild(option1);
			option1.setAttribute("value","G1");
			option1.innerHTML = "남";
			input2.appendChild(option2);
			option2.setAttribute("value","G2");
			option2.innerHTML = "여";
			input2.innerHTML.value = data[idx].meGender;
			
			
			let input3 = document.createElement("input");
			input3.setAttribute("placeHolder", data[idx].meBirth);
			input3.setAttribute("type","date");
			input3.setAttribute("id","meBirth");
			let input4 = document.createElement("input");
			input4.setAttribute("placeHolder", data[idx].meName);
			input4.setAttribute("id","meName")
			let input5 = document.createElement("input");
			input5.setAttribute("placeHolder", data[idx].meNumber);
			input5.setAttribute("id","meNumber")
			let input6 = document.createElement("input");
			input6.setAttribute("class","modMeMg");
			let meCode = document.getElementById("meCode").value;
			input6.setAttribute("onClick","modMeMg("+meCode+","+ctCode+")");
			input6.setAttribute("type","button");
			input6.setAttribute("value","저장");
			
			
			list2.appendChild(input1);
			list2.appendChild(document.createElement("br"));
			list2.appendChild(input2);
			list2.appendChild(document.createElement("br"));
			list2.appendChild(input3);
			list2.appendChild(document.createElement("br"));
			list2.appendChild(document.createElement("br"));
			list2.appendChild(input4);
			list2.appendChild(document.createElement("br"));
			list2.appendChild(input5);
			list2.appendChild(input6);
			closeModal1();
		}else{
		}
		}
}

function modMeMg(mmecode,cctcode){
	const meEmail = document.getElementById("meEmail").value;
	const meGender = document.getElementById("meGender").value;
	const meBirth = document.getElementById("meBirth").value;
	const meName = document.getElementById("meName").value;
	const meNumber = document.getElementById("meNumber").value;
	let jsondata = [];
	jsondata.push({meCode: mmecode ,meEmail:meEmail,meGender:meGender,meBirth:meBirth,meName:meName,meNumber:meNumber,ctCode:cctcode});
	const clientdata = JSON.stringify(jsondata);

	getAjax1("ajax/modMeMg",clientdata,"meConfig",false,"post");
}

function checkMePw1(data){
		if(data[0].mePw == document.getElementById("mePw").value){
		alert("이용해주셔서 감사합니다.");
		delMe();
		closeModal();
	}else{
		alert("비밀번호가 틀렸습니다.");
	}
	
}

function delMe1(){
   const mmecode = document.getElementById("meCode").value;
   let jsondata = [];
   jsondata.push({meCode:mmecode});
   const clientdata = JSON.stringify(jsondata);
   getAjax1("/delMe",clientdata,"",false,"post");
   logOut();
   goHome();
}

function delMe(){
	const mmecode = document.getElementById("meCode").value;
	const form = makeForm("", "/delMe", "POST");
	const meCode = makeInputElement("hidden","meCode",mmecode,"");
	form.appendChild(meCode);
      document.body.appendChild(form);
      form.submit();
}


function initPage(){
	 whatsend("https://api.ipify.org?format=json","","getPublicIp","","Get");
}

function loadPage(msg){
	if(!msg=="")
	alert(msg);
}

function getPublicIp(pip){
	jsPIp = pip.ip;
}

function home(){
	let form = makeForm("", "/", "GET");
      document.body.appendChild(form);
	form.submit();
}
function makeForm(fname, faction, fmethod){
	const form = document.createElement("form");
	if(fname != ""){form.setAttribute("name", fname);}
	form.setAttribute("action", faction);
	form.setAttribute("method", fmethod);
	return form;
}

function makeInputElement(type, name, value, placeholder){
	const input = document.createElement("input");
	input.setAttribute("type", type);
	input.setAttribute("name", name);
	if(value != ""){input.setAttribute("value", value);}
	if(placeholder != ""){input.setAttribute("placeholder", placeholder);}
	
	return input;
}


function isEmpty(obj) {
		let check = true;
		if (obj.value == "") {
			check = false;
		}
		return check;

	}


function meLogIn(){


let mecode = document.getElementsByName("meCode")[0].value;
let mepw = document.getElementsByName("mePw")[0].value;

if(mecode != "" || mepw != "" ){
	let form = document.getElementsByName("dynamicFormdata")[0];
	form.submit();
}else{
 let msg = document.getElementById("msg");
 
 msg.innerText = "올바르게 입력해주세요.";
	
}}

function ctLogIn(){
	let ctcode = document.getElementsByName("ctCode")[0].value;
	let sfcode = document.getElementsByName("sfId")[0].value;
	let sfpw = document.getElementsByName("sfPw")[0].value;
	
     let  ip = jsPIp;

	const hidden = makeInputElement("hidden","ahIp",ip,"");
	
	if(ctcode != "" && sfcode != "" && sfpw != ""){
		let form = document.getElementsByName("dynamicFormdata2")[0];

	form.appendChild(hidden);
	
	form.submit();
}else{
 let msg = document.getElementById("msg");
 ms.innerText = "올바르게 입력해주세요.";
	
}
	

	
}


function modPw(){
	let email = document.getElementById("email").value;
	let pw1 = document.getElementById("pw1").value;
	let pw2 = document.getElementById("pw2").value;
	
	if(pw1 != pw2){
		alert("비밀번호를 확인해주세요.");
		/*
		const msg = "비밀번호를 확인해주세요.";
		document.getElementById("msg").innerText = msg;*/
	}else{
		const hidden1 = makeInputElement("hidden","sfEmail",email,"");
		const hidden2 = makeInputElement("hidden","sfPw",pw2,"");
		
	 const form =  makeForm("","modPw","post");

	form.appendChild(hidden1);
	form.appendChild(hidden2);
	document.body.appendChild(form);
	form.submit();
	
	}
}



function sendEmail(){
	
	
	let email = document.getElementById("email").value;
	 
	const hidden = makeInputElement("hidden","sfEmail",email,"");
	 const form =  makeForm("","sendEmail","post");

	form.appendChild(hidden);
	document.body.appendChild(form);
	form.submit();

}


function checkmail(msg){
	
	 msg = document.getElementById("msg");
	
	msg.innerHTML = msg;
	
	
}



function searchMeMg(){
	let ctcode = document.getElementById("caCode");
	let mecode = document.getElementById("meName");
	

	let jsondata = [];
	jsondata.push({"caCode":ctcode,"meName": mecode});
	
	const clientdata = JSON.stringify(jsondata);
	whatsend("ajax/searchMeMg",clientdata,"getselist",false,"post");
	
}

function getselist(data){

	data2 = data;
	const list =  document.getElementById("list");
	
      while(list.hasChildNodes()){
			list.removeChild(list.lastChild);
		}
	for (idx = 0; idx < data2.length; idx++) {
		
		let div = document.createElement("div");
	div.setAttribe("onClick", "showGoodsinModal("+idx+")");
	
	let div1=  document.createElement("div");
	div1.innerText = data[idx].meName;
	let div2=  document.createElement("div");
	div2.innerText = data[idx].meGender;
	let div3=  document.createElement("div");
	div3.innerText = data[idx].meBirth;
	let div4=  document.createElement("div");
	div4.innerText = data[idx].meNumber;
	let div5=  document.createElement("div");
	div5.innerText = data[idx].meLsName;
	div.appendChild(div1);
	div.appendChild(div2);
	div.appendChild(div3);   
	div.appendChild(div4);  

	div.appendChild(div5);           
  list.appendChild(div);

}
	
}

let meall;
	function getCenterList(mecode){
		meall = mecode;
		let jsondata = [];
	jsondata.push({"meCode":mecode});
	const clientdata = JSON.stringify(jsondata);
	whatsend("ajax/getLessonList",clientdata,"getmectlist",false,"post");
	
}

function getCenterListInbody(mecode){
		meall = mecode;
		let jsondata = [];
	jsondata.push({"meCode":mecode});
	const clientdata = JSON.stringify(jsondata);
	whatsend("ajax/getLessonList",clientdata,"getmectlistin",false,"post");
	
}

function getmectlistin(json){
		 let pjson =json;

		centerdata = json;
	let body = document.getElementById("center");
	
	if(pjson.length>0){

		data = ""
		data+= "<select id = 'searchct' name='searchct'>"

		for(i=0;i<pjson.length;i++){
			data+=	"<option value='"+pjson[i].ctCode+"'>"+pjson[i].ctName+"</option>"
		}
		data+= "</select>"

	body.innerHTML = data;
	meProfile(json[0].meCode,json[0].ctCode);
	}
	
}
	function getmectlist(json){
		 let pjson =json;

		centerdata = json;
	let body = document.getElementById("category");
	
	if(pjson.length>0){
		data = "<br><br>"
		data+= "<select name='searchct'>"
		for(i=0;i<pjson.length;i++){
			data+=	"<option value='"+pjson[i].ctCode+"'>"+pjson[i].ctName+"</option>"
		}
		data+= "</select>"
		data += "<select name='searchca'> "
			data+=	"<option value='sfName' >트레이너명</option>"
			data+=	"<option value='lsName'>수업명</option>"
			data+= "</select>"
			
			

	body.innerHTML = data;
	}else{const msg = document.getElementsByClassName("input")[0];
			msg.value = "";
			msg.placeholder="검색어를 확인해 주세요.";
			}
}



	function getctLessonList(){
		let list = document.getElementById("bottom");
		while(list.hasChildNodes()){
			list.removeChild(list.lastChild);
		}
	
		let jsondata = [];
	let da =  document.getElementById("da").value.replace("-","");
	let daa = da.replace("-","").toString();


	let ctcode = document.getElementsByName("searchct")[0].value;
	let cacode =  document.getElementsByName("searchca")[0].value;
	let text = document.getElementsByClassName("input2")[0].value;
if(daa != "" &&text != ""){
	let text = document.getElementsByClassName("input2")[0];
	text.value = "";
	text.placeholder= "날짜 or 입력값을 삭제해주세요.";
}
	else if(daa == ""){
	jsondata.push({ctCode: ctcode,caCode:cacode, meBirth: text });
	}else {
	jsondata.push({ctCode: ctcode,meCode:daa});
	}
	
	const clientdata = JSON.stringify(jsondata);
	
	whatsend("ajax/searchLsMg",clientdata,"getlslist",false,"post");
	
}

let pjson;
function getlslist(json){

	let list = document.getElementById("bottom");
		while(list.hasChildNodes()){
			list.removeChild(list.lastChild);
		}
	pjson =json;
	if(pjson.length>0){
	data = "<section >"
		data += "<div class='swiper mySwiper container'>"
			data += "<div class='swiper-wrapper content'>"	
			
		for(i=0;i<pjson.length;i++){
	data += "<div class='swiper-slide card'>"
	
		data += "<div class='card-content'>"
		data += "<div class='image'>"
		data +=  "<img src='res/images/lesson.jpg'>"
		data += "</div>"
		data += "<div class='media-icons'>"
		data += "<span>개강일:  "+pjson[i].lsOpen.substr(0,10)+"일 "+pjson[i].lsOpen.substr(11)+"시</span>"
		data += "<span>개강시간:  "+pjson[i].lsTime.substr(0,2)+"시  " +pjson[i].lsTime.substr(2,2)+"분</span>"
		data += "<span>수업 진행시간: "+pjson[i].lsTime.substr(4)+"분</span>"
		data += "<span>수업 진행요일: "

		if(pjson[i].lsDay.charAt(0)==1){
		data +=	"월/"
		} if(pjson[i].lsDay.charAt(1)==1){
			data +=	"화/"
		} if(pjson[i].lsDay.charAt(2)==1){
			data +=	"수/"
		} if(pjson[i].lsDay.charAt(3)==1){
			data +=	"목/"
		} if(pjson[i].lsDay.charAt(4)==1){
			data +=	"금/"
		}if(pjson[i].lsDay.charAt(5)==1){
			data +=	"토/"
		} if(pjson[i].lsDay.charAt(6)==1){
			data +=	"일"
		}

		
		data +="</span>"
		data += "</div>"
		data += "<div class='name-profession'>"
		data += "<span class='name'>수업명:  "+pjson[i].lsName+"</span>"
		data += "<span class='profession'>트레이너이름:  "+pjson[i].sfName+"</span>"
		data += "</div>"
		data += "<div class='rating'>"
		if((pjson[i].lpPrice-pjson[i].lpQty)>0 ){
		data += "<span>남은 자리수:  "+(pjson[i].lpPrice-pjson[i].lpQty)+"명</span>  "
		}else{
		data += "<span>남은 자리수:  "+0+"명</span>"
		}
		data += "<span>&nbsp총수업인원수:  "+pjson[i].lpPrice+"   명</span>"
		data += "</div>"
		data += "<div class='button'>"
		data += "<button class='aboutMe' onclick='insMeLesson("+i+")'>신청하기</button>"
		data += "<span  id = 'msg'></span>"
		data += "<button class='aboutMe' onclick='delMeLesson("+i+")'>취소하기</button>"
		data += "</div>"
		data += "</div>"
		data += "</div>"

		}
		data += "</div>"
		data += "</div>"
		
		data+= "<div class='swiper-button-next'></div>"	
			data+= "<div class='swiper-button-prev'></div>"
		data+= "<div class='swiper-pagination'></div>"
		data+= "</div>"
		data+= "</section>"
		data+= "</div>"
		
		
		list.innerHTML = data;
					var swiper = new Swiper(".mySwiper", {

			slidesPerView : 2,

			spaceBetween : 30,

			slidesPerGroup : 2,

			loop : true,

			loopFillGroupWithBlank : true,

			pagination : {

				el : ".swiper-pagination",

				clickable : true,

			},

			navigation : {

				nextEl : ".swiper-button-next",

				prevEl : ".swiper-button-prev",

			},

		});
	
	}else{let text = document.getElementsByClassName("input2")[0];
			text.value = "";
			text.placeholder="해당매장에 수업이 없습니다.";
			}

	
}


function meFoodMg(){
alert(' 준비중인 서비스입니다. ');
/*	let butn = document.getElementById("butn");
		while(butn.hasChildNodes()){
			butn.removeChild(butn.lastChild);
		}
 
		let m = makeInputElement("button","minus","","");
		let p =makeInputElement("button","plus","","");
		let e =makeInputElement("button","equals","","");
		
		butn.appendChild(m);
		butn.appendChild(p);
		butn.appendChild(e);
	
		document.body.appendChild(butn);
		
		
	let recentib = '1234567';
	
	json.push({ibCode:recentib});
	
	const data = JSON.stringify(json);
	
	whatsend("ajax/meFoodMg", data, "restate",false,"post");*/
}



function insMeLesson(i){
	
	if(pjson[i].lpQty >=pjson[i].lpPrice){
		const msg = document.getElementById("msg");
		msg.innerText = "남은자리가 없습니다.";
	}else{

	let json =[];
	json.push({ctCode:pjson[i].ctCode,sfCode:pjson[i].sfCode,lsCode:pjson[i].lsCode,meCode:meall,lsProgress:pjson[i].lsProgress});
	
	const data = JSON.stringify(json);
	
	whatsend("ajax/insMeLesson", data, "restate",false,"post");
	}
}

function delMeLesson(i){
	let json =[];
	json.push({ctCode:pjson[i].ctCode,sfCode:pjson[i].sfCode,lsCode:pjson[i].lsCode,meCode:meall,lsProgress:pjson[i].lsProgress});
	
	const data = JSON.stringify(json);
	
	whatsend("ajax/delMeLesson", data, "restateDel",false,"post");
}

function restate(data) {
		const msg = document.getElementById("msg");
	if(data.ctCode != ""){
	msg.innerText = data.ctCode;
		getctLessonList();
	}}
	
	function restateDel(data) {
		const msg = document.getElementById("msg");
	if(data.ctCode != ""){
	msg.innerText = "수업등록이 취소되었습니다.";
		getctLessonList();
	}else{
	msg.innerText = "취소할 수 없습니다.";
	}
	}

function getInbodyModal() {
	let container =  document.getElementById("containerIn");
	container.style.filter = "alpha(Opacity=50)";
	container.style.display = "block";
	
	
}
function meLogInModal() {
let containerSF =  document.getElementById("containerSF");
containerSF.style.display = "none";

	let container =  document.getElementById("container");
	container.style.filter = "alpha(Opacity=50)";
	container.style.display = "block";
	
}


function ctLogInModal() {
	let container =  document.getElementById("containerSF");
	container.style.filter = "alpha(Opacity=50)";
	container.style.display = "block";
	
}



function closeModalb() {
	
	let container =  document.getElementById("container");
	let containerSF =  document.getElementById("containerSF");
	
	
	container.style.display = "none";
	containerSF.style.display = "none";

	
}

	
	function sendEmailForm(){
		
		  const form =  makeForm("","sendEmailForm","GET");
document.body.appendChild(form);
		form.submit();
	}
	
	
	function searchLsMg(){
	let ctcode = document.getElementById("caCode");

	let mecode = document.getElementById("meName");
	

	let jsondata = [];
	jsondata.push({"caCode":ctcode,"meName": mecode});
	
	const clientdata = JSON.stringify(jsondata);
	whatsend("ajax/searchLsMg",clientdata,"getselist",false,"post");
	
}
	
	
	
	
	
	
	
	
	

function goGoodsPage(qctCode){
	const form = makeForm("goGoods", "goGoodsPage", "POST");
	const ctCode = makeInputElement("hidden", "ctCode", qctCode, "");
	
	form.appendChild(ctCode);
	
	document.body.appendChild(form);
	
	form.submit();
}


function goLessonPage(ctcode){
	const form = makeForm("goLesson", "goLessonPage", "POST");
	const ctCode = makeInputElement("hidden", "ctCode", ctcode, "");
	
	form.appendChild(ctCode);
	
	document.body.appendChild(form);
	
	form.submit();
}

function goPayPage(ctcode){
	const form = makeForm("goPay", "goPayPage", "POST");
	const ctCode = makeInputElement("hidden", "ctCode", ctcode, "");
	
	form.appendChild(ctCode);
	
	document.body.appendChild(form);
	
	form.submit();
}

function goJoinPage(){
	const form = makeForm("goJoin", "goJoinPage", "POST");
	document.body.appendChild(form);
	form.submit();
}

function goMePage(ctcode){
	
	const form = makeForm("goMember", "goMePage", "POST");
	const ctCode = makeInputElement("hidden", "ctCode", ctcode, "");
	
	form.appendChild(ctCode);
	
	document.body.appendChild(form);
	
	form.submit();
}	

function goSfPage(ctcode){

	const form = makeForm("", "goSfPage", "POST");
	const ctCode = makeInputElement("hidden", "ctCode", ctcode, "");
	
	form.appendChild(ctCode);
	
	document.body.appendChild(form);
	
	form.submit();
}	
function goHome() {
	const form = makeForm("", "/", "GET")
      document.body.appendChild(form);
      form.submit();	
}


		









