function main() {
	var readlineSync=require("readline-sync");
	var r =readlineSync.question("Enter the redius : ");
	area = (Math.PI)*(r*r);
	perimeter=2*(Math.PI)*(r)
	return(area+"\n"+perimeter)
}
console.log(main())