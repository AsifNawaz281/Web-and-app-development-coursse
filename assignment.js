console.log('js is loaded')
    var a= prompt('enter 1st number');
    var b= prompt('enter 2nd number');
    if(a>b){
        console.log('the number '+ a+' is greater then '+b);
    }else
        {
            console.log('the number'+ b+' is greater then '+a);
        }

console.log('js is loaded')
    var a= prompt('enter 1st number');
    var b= prompt('enter 2nd number');
    var c= prompt('enter 3rd number');
    if(a>b){
        if(a>c){
        console.log('the number '+ a+' is greater then '+b+' and '+c);
    }else{
        console.log('the number '+ c+' is greater then '+a+' and '+b);
    }
}else
        {
            console.log('the number '+ b+' is greater then '+a+' and '+c);
        }

    var a= prompt('enter number');
    if(a==0){
        console.log('the number '+ a+' is zero');
    }else if(a>0){
        console.log('the number '+ a+' is positive');
    }else{
        console.log('the number '+ a+' is negative');
    }
    
    var a= prompt('enter number');
    if(a%5==0 & a%11==0){
        console.log('the number '+ a+' is divible by 5 and 11');
    }else if(a%5==0){
        console.log('the number '+ a+' is divible by 5');
    }else if(a%11==0){
        console.log('the number '+ a+' is divible by 11');
    }else{
        console.log('the number is not divible')
    }
    
    var a= prompt('enter number');
    if(a%2==0){
        console.log('the number is even');
    }else{
        console.log('the number is odd')
    }

    var a= prompt('enter your year');
    if(a%4==0){
        console.log('the mentioned year is leap year');
    }else{
        console.log('the mentioned year is not leap year');
    }
    
    var str=prompt('enter a chracter')
    if(str.match(/[a-zA-Z]/i)){
        console.log('chacter is a letter');

    }else{
        console.log('chacter is not a letter');

    }

    var x=prompt('enter a letter')
    if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
        console.log('vowel letter');
    }else{
        console.log('constant letter');
    }

    var str=prompt('enter a chracter')
    if(str.match(/[a-zA-Z]/i)){
        console.log('chacter is a letter');

    }else if(str.match(/[0-9]/i)){
        console.log('chacter is a digit');
    }else{
        console.log('chacter is special')
    }

    var str= prompt('enter a string');
l=str.length;
console.log('the length of string is '+l)

var str1= prompt('enter a string 1');
var str2= prompt('enter a string 2');
console.log('after concatinate both string: '+str1+' '+str2);

var str1= prompt('enter a string 1');
var str2= prompt('enter a string 2');
var str3= str1.localeCompare(str2);
console.log('after comparing: '+str3);

var str= prompt('enter a string in lower case');
var str1=str.toUpperCase();
console.log('In uppercase: '+str1);

var str= prompt('enter a string in upper case');
 var str1=str.toLowerCase();
 console.log('In Lowercase: '+str1);


var str1='';                                                             unsolveed toggle case
var str= prompt('enter a string in for turning in toggle case');
for(var i=0;i<str.length;i++){
    if(str[i]==str[i].toUpperCase()){
        str[i].toLowerCase();}
    else{
        str[i].toUpperCase();  }
}


var str=prompt('enter string: ');
var ltr=dg=sp=0;
for(var i=0;i<=str.length-1;i++){
    if(str[i].match(/[a-zA-Z]/i)){
        ltr++;
       }
    else if(str[i].match(/[0-9]/i)){
        dg++;}
    else{ sp++;}
}
console.log('This string has '+dg+' digits, '+ltr+' latters and '+sp+' special characters');


var str= prompt('enter a string ');
var con=vol=0;
for(var i=0; i<=str.length;i++){
    if(str[i]=='A' ||str[i]=='a' ||str[i]=='E' ||str[i]=='e' ||str[i]=='I' ||str[i]=='i' ||str[i]=='O' ||str[i]=='o' ||str[i]=='U' ||str[i]=='u'){
        vol++;
    }else{
        con++;
    }
}

console.log('this string has '+vol+' and '+con+' constants');


var str= prompt('enter a string ');
var w=1;
for(var i=0; i<=str.length;i++){
    if(str[i]==' '){
        w++;
    }else{
        continue;
    }
}
console.log('this string has '+w+' words');


var str= prompt('enter a string ');
var rs='';
for(var i=str.length-1; i>=0;i--){
    rs=rs+str[i];
}
console.log('this string has '+rs);

fl=true;
var str=prompt('enter a string to check palidrome: ')
for(var i=0; i<=(str.length)/2;i++){
    if(str[i] != str[(str.length)-i-1]){  
        fl = false;  
        break;}}  
if(fl){  
    console.log('Given string is palindrome');  }
else{
    console.log('Given string is not a palindrome');  }

var str= prompt('enter a string ');                              unsolved reverse order of words
str2='';
var j=str.length-1;
for(var i=j; i>=0;i--){
    if(str[i]==' '){
        for(var k=i; k<=j;k++){
            str2=str2+' '+str[k];
        }}else{
        continue;
    }}
console.log(str2);

var str=prompt('enter string :');
var ch=prompt('enter chacarter for finding first occurance :');
for(var i=0;i<=str.length-1;i++){
        if(str[i]==ch){
            break;
        }}
        var j=i+1;
        if(j>str.length){
            console.log('the character is not found');
        }else{
            console.log('the character first occurance is at '+ i);
        }


        var str=prompt('enter string :');
        var ch=prompt('enter chacarter for finding last occurance :');
        for(var i=str.length;i>=0;i--){
                if(str[i]==ch){
                    break;
                }}
                var j=i+1;
                if(j<=0){
                    console.log('the character is not found');
                }else{
                    console.log('the character first occurance is at '+ i);
                }
 
                var arr=[9,2,3,5,-5,-7,3,-2];
                console.log(arr)
                var arr1=[]
                var j=0;
                for(var i=0;i<=arr.length;i++){
                    if(arr[i]<0){
                        arr1[j]=arr[i];
                        j++
                    }}
                console.log(arr1)
                
                var sm=0;
                for(var i=0;i<=arr.length-1 ;i++){
                    sm=sm+arr[i];
                } console.log(sm)
                
                for(var i=0;i<=arr.length-1;i++){
                    var n=arr[i];
                    for(var j=0;j<=arr.length-1;j++){
                    if(n<arr[j]){
                        n=arr[j];
                    }else{
                        continue;
                   } }}
                        console.log(n)
                
                for(var i=0;i<=arr.length-1;i++){
                    var n=arr[i];
                    for(var j=0;j<=arr.length-1;j++){
                    if(n>arr[j]){
                        n=arr[j];
                    }else{
                        continue;
                    }}}
                        console.log(n)
                
                a=[2,3,4,5,6,7]
                var temp;  
                for(var i = 0; i < a.length; i++){
                    for (var j = i + 1; j < a.length; j++){
                        if (a[i] > a[j]){
                            temp = a[i];  
                            a[i] = a[j];  
                            a[j] = temp;  
                                }  
                            }}
                console.log('the second largest number is: '+a[i-2]);  
                
                var arr2=prompt('enter a array ');
                var evn=0;
                var od=0;
                for(var i=0;i<=arr.length;i++){
                        if(arr2[i]%2==0){
                            evn++;   
                        }else if(arr2[i]%2==0){
                            od++;
                        }}
                console.log('the even number are '+evn+' and odd are '+od);
                    
                
                var arr=[1,-2,-2,3,-3,1];
                var ng=0;
                for(var i=0;i<=arr.length-1;i++){
                        if(arr[i]<0){
                            ng++;   
                        }}
                console.log('the negative number are '+ng);
                
                var arr=[1,-3,-2,3,-3,1];
                var n=prompt('enter number to enter ')
                arr.push(parseInt(n));
                console.log(arr);
                var m=prompt('enter index want to delete ')
                arr.splice(m,1);
                console.log('after deleting number from index'+m+'is: '+arr);
                
                var first =  [1, 2, 3];
                var second = [4, 5];
                 
                for (var i of second) {
                    first.push(i);
                }
                 
                console.log(first);
                
                var  b=parseFloat(prompt('enter a float number: '));
                var C=b+0;
                var d=parseInt(b);
                if((C-d)>=.5){
                    b=parseInt(b)+1;}
                else{
                b=parseInt(b);}
                console.log('after rounding number: '+b)
                
                var  b=parseFloat(prompt('enter a float number: '));
                var C=b+0;
                var d=parseInt(b);
                    b=parseInt(b)+1;
                console.log('after ceiling a number: '+b)
                
                var  b=parseFloat(prompt('enter a float number: '));
                var C=b+0;
                var d=parseInt(b);
                    b=parseInt(b);
                console.log('after flooring a number: '+b)
                var a=prompt('enter n for loop');
                for (var i=1;i<=a;i++){
                    console.log(i);
                }
                var a=prompt('enter n for loop');
                for (var i=a;i>=1;i--){
                    console.log(i);
                }
                
                for(var i='a'; i<='z';i++){
                    console.log(i)
                }
                
                
                 for (var i=1;i<=100;i++){
                    if(i%2==0){
                        console.log(i)
                    }}
                
                    for (var i=1;i<=100;i++){
                        if(i%2==1){
                            console.log(i)
                        }}
                                                