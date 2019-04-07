function reverseString(s) {
	if(typeof(s)==="number"){
		console.log("s.split is not a function","\n"+s);
	}else{
		s=s.split("").reverse().join("");
		console.log(s);
	}
}
var s="1234"
reverseString(s)