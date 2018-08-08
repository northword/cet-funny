//当听力、阅读、写作的输入框值变化时计算总分并赋给id为total的元素
 function OnInput (event) {
	document.getElementById("total").innerHTML=(parseInt(document.getElementById("score1").value)+parseInt(document.getElementById("score2").value)+parseInt(document.getElementById("score3").value));
 }

 
 
//生成图片按钮事件
function showimg() {
	//获取表单值
	var year = document.getElementById("year").value; 
	var name = document.getElementById("name").value;
	var school = document.getElementById("school").value;
	var score1 = document.getElementById("score1").value;
	var score2 = document.getElementById("score2").value;
	var score3 = document.getElementById("score3").value;
	//获取被选中的等级
	var grade_array = document.getElementsByName('grade');
	for (var i = 0; i < grade_array.length; i++) {
		if (grade_array[i].checked == true) {
		var grade = grade_array[i].value;
		//alert(grade);
		}
	}
	//获取被选中的场次
	var session_array = document.getElementsByName('session');
	for (var i = 0; i < session_array.length; i++) {
		if (session_array[i].checked == true) {
		var session = session_array[i].value;
		}
	}

	//传递数据给php并获取返回图片
	document.getElementById('vimg').src="CreatPic.php?year="+year+"&name="+name+"&school="+school+"&score1="+score1+"&score2="+score2+"&score3="+score3+"&grade="+grade+"&session="+session;
	//testUrl:CreatPic.php?year=2022&name=哈哈&school=哈哈哈&score1=100&score2=200&score3=300&&grade=6&session=上
	
	//显示返回的图片
	document.getElementById('div-img').style.display='block';
	document.getElementById('div-from').style.display='none';
}


//返回重填按钮事件：隐藏图片，显示表单
function hiddenimg(){
	document.getElementById('div-img').style.display='none';
	document.getElementById('div-from').style.display='block';
}
