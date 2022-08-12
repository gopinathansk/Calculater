// function display0(){
// 	let prenum=document.getElementById("output").innerHTML;
// 	document.getElementById("output").innerHTML=prenum+"0";
// }
// function display1(){
// 	let prenum=document.getElementById("output").innerHTML;
// 	document.getElementById("output").innerHTML=prenum+"1";
// }
// function display2(){
// 	let prenum=document.getElementById("output").innerHTML;
// 	document.getElementById("output").innerHTML=prenum+"2";
// }
// function display3(){
// 	let prenum=document.getElementById("output").innerHTML;
// 	document.getElementById("output").innerHTML=prenum+"3";
// }
// function display4(){
// 	let prenum=document.getElementById("output").innerHTML;
// 	document.getElementById("output").innerHTML=prenum+"4";
// }
// function display5(){
// 	let prenum=document.getElementById("output").innerHTML;
// 	document.getElementById("output").innerHTML=prenum+"5";
// }
// function display6(){
// 	let prenum=document.getElementById("output").innerHTML;
// 	document.getElementById("output").innerHTML=prenum+"6";
// }
// function display7(){
// 	let prenum=document.getElementById("output").innerHTML;
// 	document.getElementById("output").innerHTML=prenum+"7";
// }
// function display8(){
// 	let prenum=document.getElementById("output").innerHTML;
// 	document.getElementById("output").innerHTML=prenum+"8";
// }
// function display9(){
// 	let prenum=document.getElementById("output").innerHTML;
// 	document.getElementById("output").innerHTML=prenum+"9";
// }



// function ans(){
// 	let equ= document.getElementById("output").innerHTML; 
// 	let value=eval(equ);
// 	document.getElementById("output").innerHTML=value;
// }

let operation,value1,value2;

function display(num){
	let prenum=document.getElementById("output").innerHTML;
	document.getElementById("output").innerHTML=prenum+num;
}

function add(){
	operation='+';
	value1=document.getElementById('output').innerHTML;
	document.getElementById('output').innerHTML="";
}

function sub(){
	operation='-';
	value1=document.getElementById('output').innerHTML;
	document.getElementById('output').innerHTML="";
}

function multi(){
	operation='*';
	value1=document.getElementById('output').innerHTML;
	document.getElementById('output').innerHTML="";
}
function division(){
	operation='/';
	value1=document.getElementById('output').innerHTML;
	document.getElementById('output').innerHTML="";
}

function ans(){
	value2=document.getElementById('output').innerHTML;
	if(operation=='+'){
		var ans=parseInt(value1)+parseInt(value2);
		document.getElementById('output').innerHTML=ans;
	}
	else if(operation=='-'){
		var ans=parseInt(value1)-parseInt(value2);
		document.getElementById('output').innerHTML=ans;
	}
	else if(operation=='*'){
		var ans=parseInt(value1)*parseInt(value2);
		document.getElementById('output').innerHTML=ans;
	}
	else if(operation=='/'){
		var ans=parseInt(value1)/parseInt(value2);
		document.getElementById('output').innerHTML=ans;
	}
	else if(operation=='%'){
		var ans=parseInt(value1)%parseInt(value2);
		document.getElementById('output').innerHTML=ans;
	}
}

function clr(){
	document.getElementById('output').innerHTML="";
}
function del(){
	document.getElementById('output').innerHTML=document.getElementById('output').innerHTML.slice(0,-1);
}

















// let outputscreen=document.getElementById("output")
// function display(num){
// 	output.value+=num;

// }
// function calculate(){
// 	try{
// 		output.value= eval(outputscreen.value);
// 	}
// 	catch(err){
// 		alert("invalid")
// 	}
// }
// function clr(){
// 	outputscreen.value="";
// }
// function del(){
// 	outputscreen.value= outputscreen.value.slice(0,-1);
// }