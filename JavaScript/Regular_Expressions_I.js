var readlineSync = require('readline-sync');

function regexVar() {
	var re;
	var s = readlineSync.question("").toLowerCase()
	for (var i=0; i<s.length; i++){
		if(("a"===s[i] || "e"===s[i] || "i"===s[i] ||"o"===s[i]|| "u"===s[i]) && (s.length>=3)){
			if (s[i]===s[s.length-1]){
				re=true;
			}else{
				re=false;
			}
		}
	}
	return re
}
console.log(regexVar())



//Hackerrenk

// var readlineSync = require('readline-sync');

// function regexVar() {
// 	var s = readLine().toLowerCase()
// 	for (var i=0; i<s.length; i++){
// 		if(("a"===s[i] || "e"===s[i] || "i"===s[i] ||"o"===s[i]|| "u"===s[i]) && (s.length>=3)){
// 			if (s[i]===s[s.length-1]){
// 				re true;
// 			}else{
// 				return false
// 			}
// 		}return false
// 	}
// }
// console.log(regexVar())
