function psInBodyMg(){
	const list = document.getElementById("list");
	var data = '<div class=\"exInput\" style="margin-bottom: 15px"><input type="button" value="전신" onClick="allbody()"></div>';
	data += '<div class=\"exInput\" style="margin-bottom: 15px"><input type="button" value="등" onClick="back()"></div>';
	data += '<div class=\"exInput\" style="margin-bottom: 15px"><input type="button" value="가슴" onClick="chicken()"></div>';
	data += '<div class=\"exInput\" style="margin-bottom: 15px"><input type="button" value="팔" onClick="arm()"></div>';
	data += '<div class=\"exInput\" style="margin-bottom: 15px"><input type="button" value="복근" onClick="sixpack()"></div>';
	data += '<div id = "list2"></div>';
	list.innerHTML = data;
}

function allbody(){
	const list = document.getElementById("list2");
	var data = '<div><iframe width="300" height="200" src="https://www.youtube.com/embed/swRNeYw1JkY?start=25" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	data += '<iframe width="300" height="200" src="https://www.youtube.com/embed/4AU4kY4CAio?start=24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	data += '<iframe width="300" height="200" src="https://www.youtube.com/embed/f6Xs2GwYs-g?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
	list.innerHTML = data;
}

function back(){
	const list = document.getElementById("list2");
	var data = '<div><iframe width="300" height="200" src="https://www.youtube.com/embed/o_pwMN40DLM?start=45" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	data += '<iframe width="300" height="200" src="https://www.youtube.com/embed/EEqGCoTuYfQ?start=33" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	data += '<iframe width="300" height="200" src="https://www.youtube.com/embed/qBwoL0gncX4?start=65" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
	list.innerHTML = data;
}

function chicken(){
	const list = document.getElementById("list2");
	var data = '<div><iframe width="300" height="200" src="https://www.youtube.com/embed/UqlUZFZgczk?start=200" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	data += '<iframe width="300" height="200" src="https://www.youtube.com/embed/D_R8ZpzGu8c?start=12" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	data += '<iframe width="300" height="200" src="https://www.youtube.com/embed/wZdrFoMKTwo?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
	list.innerHTML = data;
}

function arm(){
	const list = document.getElementById("list2");
	var data = '<div><iframe width="300" height="200" src="https://www.youtube.com/embed/UJ8Xp2SZ3SE?start=33" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	data += '<iframe width="300" height="200" src="https://www.youtube.com/embed/TIc-xNWxD-U?start=33" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	data += '<iframe width="300" height="200" src="https://www.youtube.com/embed/T-bVqdhqW2U?start=36" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
	list.innerHTML = data;
}

function sixpack(){
	const list = document.getElementById("list2");
	var data = '<div><iframe width="300" height="200" src="https://www.youtube.com/embed/SKCEpgEucFM?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	data += '<iframe width="300" height="200" src="https://www.youtube.com/embed/zcQ16cfJN9Q?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
	data += '<iframe width="300" height="200" src="https://www.youtube.com/embed/kETh8T3it4k?start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>';
	list.innerHTML = data;
}