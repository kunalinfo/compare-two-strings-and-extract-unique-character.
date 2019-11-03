var str1 = "KUNAAL";
var str2 = "RANJANBB";

var len1 = str1.length;
var len2 = str2.length;

var op1 = "";
var op2 = "";

label1: for(var i=0; i<len1; i++)
{
  var ch1 = str1.charAt(i);
  
 label2: for(var j=0; j<len2; j++){
    var ch2 = str2.charAt(j);
    if(ch1==ch2)
    {
      continue label1;
    }
    
  }
  
  op1 = op1 + ch1;
}

var uniql="";
 for (var x=0;x < op1.length;x++)
 {

 if(uniql.indexOf(op1.charAt(x))==-1)
   {
  uniql += op1[x];  
  
   }
  }
console.log(uniql);

label3: for(var i=0; i<len2; i++)
{
  var ch1 = str2.charAt(i);
  
 label4: for(var j=0; j<len1; j++){
    var ch2 = str1.charAt(j);
    if(ch1==ch2)
    {
      continue label3;
    }
   
  }
  
  op2 = op2 + ch1;
}

var uniql1="";
 for (var x=0;x < op2.length;x++)
 {

 if(uniql1.indexOf(op2.charAt(x))==-1)
  {
  uniql1 += op2[x];  
  
   }
  }
console.log(uniql1);