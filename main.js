var a=prompt("enter the number");
var b,sum=0;
while(a>0){
		  b=a%10;
		  sum=sum*10+b;
		  a=parseInt(a/10);
		  }
		  document.write("Reverse  number is"+" "+sum);
