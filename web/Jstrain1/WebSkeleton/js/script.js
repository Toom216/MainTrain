const change = document.querySelector(".pe");


change.addEventListener("click", function () {
    console.log("click");
	document.getElementById("p1").className += " pe2"

});

function calc(a,x,b){
	if(x == '+'){
		console.log(a+b)
	}
	else if(x == '-'){
		console.log(a-b)
	}
	else if(x == '*'){
		console.log(a*b)
	}
	else if(x == '/'){
		console.log(a/b)
	}
	else console.log('error')
}

calc(10, '/', 5)
