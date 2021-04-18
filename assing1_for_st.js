// 1
// let str=prompt('enter a string')
// let str1=str.toLowerCase()
// console.log("After converting to lower case ",str1);

// 2
// let str2=prompt('enter a string')
// let str3=str2.toUpperCase()
// console.log("After converting to upper case ",str3);

// 3
// var str4='';                                                             UNSOLVED
// var str5= prompt('enter a string in for turning in toggle case');
// for(var i=0;i<str4.length;i++){
//     if(str4[i]==str4[i].toUpperCase()){
//         str4[i]=str4[i].toLowerCase();
//         console.log(str4[i])}
//     else{
//         str[i]=str[i].toUpperCase();  }
//  console.log(str1);}

// 4
// var st=prompt('enter string: ');
// var ltr=dg=sp=0;
// for(var i=0;i<=st.length-1;i++){
//     if(st[i].match(/[a-zA-Z]/i)){
//         ltr++;
//        }
//     else if(st[i].match(/[0-9]/i)){
//         dg++;}
//     else{ sp++;}
// }
// console.log('This string has '+dg+' digits, '+ltr+' latters and '+sp+' special characters');

// 5
// var st1= prompt('enter a string ');
// var con=vol=0;
// for(var i=0; i<=st1.length;i++){
//     if(str[i]=='A' ||str[i]=='a' ||str[i]=='E' ||str[i]=='e' ||str[i]=='I' ||str[i]=='i' ||str[i]=='O' ||str[i]=='o' ||str[i]=='U' ||str[i]=='u'){
//         vol++;
//     }else{
//         con++;
//     }
// }console.log("This string has", con," consonants and ",vol ," vowels");

// 6
// var st2= prompt('enter a string ');
// var w=1;
// for(var i=0; i<=st2.length;i++){
//     if(st2[i]==' '){
//         w++;
//     }else{
//         continue;
//     }
// }
// console.log('this string has '+w+' words');

// 7
// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };
// var lst=[]
// for(var keys in student){
//     lst.push(keys)
// }console.log(lst);    

// 8
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// console.log("Before deleting ", student);
// delete student.rollno
// console.log("After deleting ", student);
// let ln=0
// for(var keys in student){
//     ln++    
// }console.log('the length of object is ',ln)

// 9
var library = [ 
    {
      author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
   readingStatus: false
    }];
    for(let i=0; i<library.length;i++){
        console.log(library[i].author,' ',library[i].title,' ',library[i].readingStatus);
    }

//     10
// let v,a,b,r,h
// a=prompt('enter radius of cylinder')
// b=prompt('enter hight of cylinder')
// r=parseInt(a)
// h=parseInt(b)
// v=2*3.14*h*r
// console.log("the volume of cylinder is ",v.toFixed(4));

// 11
// for(let i=0; i<=100;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }

// 12
// let a=prompt('Enter n number ')
// let sum,n;
// sum=0;
// n=parseInt(a)
// for(let i=0; i<=n;i++){
//     sum=sum+i;
// }
// console.log('the sum is ',sum);

// 13
// let aa=prompt('Enter n number ')
// let su,m;
// sum=0;
// m=parseInt(aa)
// for(let i=0; i<=m;i++){
//     if(i%2==0){
//     sm=sm+i;}
// }
// console.log('the sum of even number between 1 and ',m ,' is ',sm);

// 14
// let a1=prompt('Enter n number ')
// let sm1,n1;
// sm1=0;
// n1=parseInt(a1)
// for(let i=0; i<=n1;i++){
//     if(i%2!=0){
//     sm1=sm1+i;}
// }
// console.log('the sum of odd number between 1 and ',n ,' is ',sum);

// 15
// let a2=prompt('Enter a number for table ')
// let b2=prompt('Enter a number for table limit')
// let m1=parseInt(a2)
// let n2=parseInt(b2)
// for(let i=1; i<=n2;i++){
//     console.log(m1,' * ', i,'= ',m1*i);
// }

// 16
//  let n=prompt('enter a number')
//  let l =n.length
//  console.log(l);

// 17
// let a=prompt("enter a 1st number ")
// let n= parseInt(a)
// let b=prompt("enter a 2nd number ")
// let m= parseInt(b)
// let c=prompt("enter a 3rd number ")
// let l= parseInt(c)
// if(n>m){
//     if(n>l){
//         console.log("the first number",n,"is greatest");
//     }else{
//         console.log("the third number",l,"is greatest");
// }}
// else{if(m>n){
//     if(m>l)
//     console.log("the second number",m,"is greatest");
// }else{
//     console.log("the third number",l,"is greatest");
// }
// }

// 18
// let a=prompt("enter a 1st number ")
// let n= parseInt(a)
// let b=prompt("enter a 2nd number ")
// let m= parseInt(b)
// if(n>m){
//         console.log("the first number",n,"is greatest");
//   }else{
//     console.log("the second number",m,"is greatest");
// }

// let a=prompt("enter a number ")
// let n= parseInt(a)
// if(n>0){
//     console.log("this number is positive");
// }else if(n<0){
//     console.log("this number is negative");
// }else{
//     console.log("this number is zero");
// }

// let a=prompt("enter a number ")
// let n= parseInt(a)
// if(n%5==0 || n%11==0){
//     console.log("yes this number is divible by 5 or 11");
// }else{
//     console.log("No this number is not divible by 5 or 11");
// }



// let a=prompt("enter a number ")
// let n= parseInt(a)
// if(n%2==0){
//     console.log("this number is even");
// }else{
//     console.log("this number is odd");
// }

// let x=prompt("enter year number ")
// let y= parseInt(x)
// if(y%4==0){
//     console.log("this is a leap year");
// }else{
//     console.log("this is not a leap year");
// }

// var str=prompt('enter a chracter')
// if(str.match(/[a-zA-Z]/i)){
//     console.log('chacter is a letter');

// }else{
//     console.log('chacter is not a letter');

// }

// var x=prompt('enter a letter')
// if(x == "A" || x == "E" || x == "I" || x == "O" || x == "U" || x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
//     console.log('vowel letter');
// }else{
//     console.log('constant letter');
// }

// var str=prompt('enter a chracter')
// if(str.match(/[a-zA-Z]/i)){
//     console.log('chacter is a letter');

// }else if(str.match(/[0-9]/i)){
//     console.log('chacter is a digit');
// }else{
//     console.log('chacter is special')
// }

// let i;
// let str=prompt('enter a string foe find length')
// for(i=0;i<str.length;i++){

// }
// console.log(i);

// function findCube(a){
//     let n=a*a*a
//     console.log(n);
// }
// findCube(5)

// function findMax(a,b){
//     if(a>b){
//         console.log('Maximum number is :',a); 
//     }else{
//         console.log('Maximum number is :',b);
//     }

// }
//  findMax(2,3)

// function findMin(a,b){
//     if(a>b){
//         console.log('Minimum number is :',b); 
//     }else{
//         console.log('Minimum number is :',a);
//     }
// }
//  findMin(2,3)

// function checkNumber(a){
//     let n,m,rm,rs
//     n=a
//     rs=0
//     m=n
//     while(m!=0){
//         rm=m%10
//         rs=rs+(rm*rm*rm)
//         m=(m-rm)/10
//     }
//     if(rs==n){
//         console.log("yes, ",n, " number is armstrong");
//     }
//     else{
//         console.log("No this number is not armstrong");
//     }
//     let isPrime=true
//     if (n == 0 || n == 1) {
//         isPrime = false;
//     }
//     else {
//         for (i = 2; i <= n / 2;i++) {
//             if (n % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//     }if(isPrime){console.log(n,' is a prime number');}else{console.log('No, ',n,' is not a prime number');}
    
//     l=0
//     for(let i=1;i<=n/2;i++){
//         if(n%i==0){
//             console.log(i);
//             l=l+i
//         }
//     } if(n==l){console.log('yes, ',n,' is a perfect number');}else{console.log('No, ',n,' is not a perfect number');}
// }
// checkNumber(28)

// let a=prompt("enter a 1st number ")
// let n= parseInt(a)
// let b=prompt("enter a 2nd number ")
// let m= parseInt(b)
// let c=prompt("enter a 3rd number ")
// let l= parseInt(c)
// if(n>m){
//     if(n>l){
//         console.log("the first number",n,"is greatest");
//     }else{
//         console.log("the third number",l,"is greatest");
// }}
// else{if(m>n){
//     if(m>l)
//     console.log("the second number",m,"is greatest");
// }else{
//     console.log("the third number",l,"is greatest");
// }
// }

// let a=prompt("enter a 1st number ")
// let n= parseInt(a)
// let b=prompt("enter a 2nd number ")
// let m= parseInt(b)
// if(n>m){
//         console.log("the first number",n,"is greatest");
//   }else{
//     console.log("the second number",m,"is greatest");
// }

// let a=prompt("enter a number ")
// let n= parseInt(a)
// if(n%2==0){
//     console.log("this number is even");
// }else{
//     console.log("this number is odd");
// }

// let x=prompt("enter year number ")
// let y= parseInt(x)
// if(y%4==0){
//     console.log("this is a leap year");
// }else{
//     console.log("this is not a leap year");
// }

// var str=prompt('enter a chracter')
// if(str.match(/[a-zA-Z]/i)){
//     console.log('chacter is a letter');

// }else{
//     console.log('chacter is not a letter');

// }
// let n=prompt('enter day number')
// let d=parseInt(n)
// switch(d)
//     {
//         case 1: 
//          console.log("Monday");
//             break;
//         case 2: 
//         console.log("Tuesday");
//             break;
//         case 3: 
//         console.log("Wednesday");
//             break;
//         case 4: 
//         console.log("Thursday");
//             break;
//         case 5: 
//         console.log("Friday");
//             break;
//         case 6: 
//         console.log("Saturday");
//             break;
//         case 7: 
//         console.log("Sunday");
//             break;
//         default: 
//         console.log("Invalid input! Please enter week number between 1-7.");
//     }
//     let m=prompt('enter month number')
//     let month=parseInt(m)
//     switch(month)
//         {
//             case 1: 
//              console.log("januanry");
//                 break;
//             case 2: 
//             console.log("febrary");
//                 break;
//             case 3: 
//             console.log("March");
//                 break;
//             case 4: 
//             console.log("April");
//                 break;
//             case 5: 
//             console.log("May");
//                 break;
//             case 6: 
//             console.log("June");
//                 break;
//             case 7: 
//             console.log("July");
//                 break;
//                 case 8: 
//                 console.log("Augest");
//                    break;
//                case 9: 
//                console.log("Setember");
//                    break;
//                case 10: 
//                console.log("Octuber");
//                    break;
//                case 11: 
//                console.log("November");
//                    break;
//                case 12: 
//                console.log("December");
//                    break;
//             default: 
//             console.log("Invalid input! Please enter week number between 1-7.");
//         }

// let alf=prompt('enter a alphabet')
// switch(alf){
//     case 'A':
//         console.log('this alphabet is vowel')
//         break
//     case 'a':
//         console.log('this alphabet is vowel')
//         break
//     case 'E':
//         console.log('this alphabet is vowel')
//         break
//     case 'e':
//         console.log('this alphabet is vowel')
//         break
//     case 'I':
//         console.log('this alphabet is vowel')
//         break
//     case 'i':
//         console.log('this alphabet is vowel')
//         break
//     case 'O':
//         console.log('this alphabet is vowel')
//         break
//     case 'o':
//         console.log('this alphabet is vowel')
//         break
//     case 'U':
//         console.log('this alphabet is vowel')
//         break
//         case 'u':
//         console.log('this alphabet is vowel')
//         break
//     default:
//         console.log('This alphabet is consonant')               
// }

// a=prompt('ente 1st number')
// let m=parseInt(a)
// b=prompt('enter 2nd number')
// let n=parseInt(b)
// switch(m>n){
//     case true:
//         console.log("The first number ",m,' is greater');
//         break
//     default:
//         console.log("The second number ",n,' is greater');
// }

// b=prompt('enter a number')
// let n=parseInt(b)
// switch(n%2==0){
//     case true:
//         console.log('The number is even')
//         break
//     default:
//         console.log("The number is odd");
// }

// b=prompt('enter a number')
// let n=parseInt(b)
// switch(n){
//     case (n>0):
//         console.log('The number is positive')
//         break
//     case (n<0):
//         console.log('The number is nagetive')
//         break
//     default:
//         console.log("The number is zero");
// }
// var arr=[1,-2,-2,3,-3,1];
// var ng=0;
// for(var i=0;i<=arr.length-1;i++){
//         if(arr[i]<0){
//             ng++;   
//         }}
// console.log('the negative number are '+ng);

// var first =  [1, 2, 3];
// var second = [4, 5]; 
// for (var i of second) {
//     first.push(i);
// } 
// console.log(first);

// var arr=[1,-3,-2,3,-3,1];
// console.log(arr);
// var n=prompt('enter number to enter ')
// arr.push(parseInt(n));
// console.log(after inserting element array is: '+arr);

// var arr=[1,-3,-2,3,-3,1];
// console.log(arr);
// var m=prompt('enter index want to delete ')
// arr.splice(m,1);
// console.log('after deleting number from index'+m+'is: '+arr);


// var arr2=prompt('enter a array ');
// var evn=0;
// var od=0;
// for(var i=0;i<=arr.length;i++){
//         if(arr2[i]%2==0){
//             evn++;   
//         }else if(arr2[i]%2==0){
//             od++;
//         }}
// console.log('the even number are '+evn+' and odd are '+od);

// ar=[22,22,44,5,7,-9,10,13]
// let m,n,l
// l=m=n=0
// ar.forEach(el => {
//     if(el>m){
//         m=el
//     }else if(el<n){
//         n=el
//     }
// });
// console.log(n,m);
// for(let i=n;i<=m;i++){
//     ar.forEach(elm=>{
//         if(elm==i){
//             l++
//         }
//     });
//     if(l>0){
//     console.log('The frequancy of element ', i,' is ' ,l);
//     l=0}
// }

// ar=[3,4,4,5,-2,-5,3]
// console.log(ar);
// for(let i=0; i<=ar.length;i++){
//     console.log(ar[i],' ',i);
//     for(let j=i+1; j<=ar.length;j++){
//         if(ar[i]==ar[j]){
//             ar.splice(j,1)
//         }
//     }}
// console.log(ar)

// ar=[3,4,4,5,-2,5,-5,-5,3]
// let d=0
// console.log(ar);
// for(let i=0; i<=ar.length;i++){
//     console.log(ar[i],' ',i);
//     for(let j=i+1; j<=ar.length;j++){
//         if(ar[i]==ar[j]){
//             d++
//         }
//     }}
// console.log('the total duplicates are:',d)


// ar=[3,4,4,5,-2,-5,3]
// console.log(ar);
// for(let i=0; i<=ar.length;i++){
//     console.log(ar[i],' ',i);
//     for(let j=i+1; j<=ar.length;j++){
//         if(ar[i]==ar[j]){
//             ar.splice(j,1)
//         }
//     }}
// console.log(ar)

// let ar1=[2,1,2]
// let ar2=[3,2,3]
// let arr3=[]
// arr3=ar1+ar2
// console.log(arr3)

// function cicleRAC(){
//     let n=prompt('enter radius of circle')
//     var rd=parseInt(n)
//     console.log('Diameter of circle is: ',rd*2)
//     console.log('Cirsumference of circle is: ',2*(3.14*rd))
//     console.log('Diameter of circle is: ',2*(rd*rd))
// }
// cicleRAC()

