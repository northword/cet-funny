<?php 
	//header("content-type: text/html; charset=utf8");
	header("content-type: image/jpeg");
	$year=$_GET["year"];
	$name=$_GET["name"];
	$school=$_GET["school"];
	$score1=$_GET["score1"];   //听力
	$score2=$_GET["score2"];   //阅读
	$score3=$_GET["score3"];   //写作翻译
	$total=$_GET["score1"]+$_GET["score2"]+$_GET["score3"];    //总分
	$grade=$_GET["grade"];
	$session=$_GET["session"];
	
	//设定第二个等级值
	if ($grade==4){$grade2="四";}
	else {$grade2="六";}
	
	$imgtitle=$year."年".$session."半年全国大学英语".$grade2."级考试(CET".$grade.")-查看成绩";
	
	/*
	//回显html表单返回给php的值以验证是否正确
	echo "+".$_GET["year"]."+".$_GET["school"]."+".$_GET["name"]."+".$_GET["score1"]."+".$_GET["score2"]."+".$_GET["score3"];
	echo $total;
	*/
	
	//打开文件
	$dst_path="bg.jpg";
	$dst=imagecreatefromstring(file_get_contents($dst_path));
	
	//定义样式
	$color1 = imagecolorallocate($dst,  48, 131, 199);   //蓝色，用于姓名、学校、年份
	$color2 = imagecolorallocate($dst, 215, 30, 4);      //红色，用于总分
	$color3 = imagecolorallocate($dst, 124, 124, 124);   //灰色，用于三科成绩

	$font1='msyh.ttc';
	$font2='msyhbd.ttc';
	
	
	//向图片写入文字
	// imagettftext($dst,27,0,75,112,$color1,$font1,$year);
	// imagettftext($dst,27,0,793,112,$color1,$font1,$grade);
	// imagettftext($dst,27,0,555,112,$color1,$font1,$grade2);
	// imagettftext($dst,27,0,205,112,$color1,$font1,$session);
	imagettftext($dst,28,0,100,112,$color1,$font1,$imgtitle);
	imagettftext($dst,19,0,310,225,$color1,$font1,$name);
	imagettftext($dst,19,0,310,285,$color1,$font1,$school);
	imagettftext($dst,25,0,310,500,$color2,$font2,$total);
	imagettftext($dst,20,0,460,555,$color1,$font1,$score1);
	imagettftext($dst,20,0,460,615,$color1,$font1,$score2);
	imagettftext($dst,20,0,460,675,$color1,$font1,$score3);

	//生成图片
	//list($dst_w, $dst_h, $dst_type) = getimagesize($dst_path);
	imagejpeg($dst);
	imagedestroy($dst);
?>










