//���������Ķ���д���������ֵ�仯ʱ�����ֲܷ�����idΪtotal��Ԫ��
 function OnInput (event) {
	document.getElementById("total").innerHTML=(parseInt(document.getElementById("score1").value)+parseInt(document.getElementById("score2").value)+parseInt(document.getElementById("score3").value));
 }

 
 
//����ͼƬ��ť�¼�
function showimg() {
	//��ȡ��ֵ
	var year = document.getElementById("year").value; 
	var name = document.getElementById("name").value;
	var school = document.getElementById("school").value;
	var score1 = document.getElementById("score1").value;
	var score2 = document.getElementById("score2").value;
	var score3 = document.getElementById("score3").value;
	//��ȡ��ѡ�еĵȼ�
	var grade_array = document.getElementsByName('grade');
	for (var i = 0; i < grade_array.length; i++) {
		if (grade_array[i].checked == true) {
		var grade = grade_array[i].value;
		//alert(grade);
		}
	}
	//��ȡ��ѡ�еĳ���
	var session_array = document.getElementsByName('session');
	for (var i = 0; i < session_array.length; i++) {
		if (session_array[i].checked == true) {
		var session = session_array[i].value;
		}
	}

	//�������ݸ�php����ȡ����ͼƬ
	document.getElementById('vimg').src="CreatPic.php?year="+year+"&name="+name+"&school="+school+"&score1="+score1+"&score2="+score2+"&score3="+score3+"&grade="+grade+"&session="+session;
	//testUrl:CreatPic.php?year=2022&name=����&school=������&score1=100&score2=200&score3=300&&grade=6&session=��
	
	//��ʾ���ص�ͼƬ
	document.getElementById('div-img').style.display='block';
	document.getElementById('div-from').style.display='none';
}


//�������ť�¼�������ͼƬ����ʾ��
function hiddenimg(){
	document.getElementById('div-img').style.display='none';
	document.getElementById('div-from').style.display='block';
}
