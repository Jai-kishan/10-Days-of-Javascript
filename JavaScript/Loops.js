var s="javascriptloops"
function vowelsAndConsonants(s) {
	var vowel="";
	var consonant="";
	var result="";
	for(let i of s){
			if("a"===i || "e"===i || "i"===i ||"o"===i|| "u"===i){
				vowel=vowel+i
			}else{
				consonant= consonant+i
			}				
	}
	var store=(vowel+consonant)
	for (var i of store){
		console.log(i)
	}
}
vowelsAndConsonants(s)


// console.log(  ); // 122


// binary search  
// lenier

// sorting

// oops inheritance
// polymorephysim

// string manipulation 


// mapping one to one 
// one to many
// many to one
// many to many

// curd operation 

