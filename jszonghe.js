//输入一个整数，输出个位数之和  
  var x=prompt()
  var y=x.split("")
  var h=new Array(); 
  for(var j=0;j<y.length;j++)
  {
	  h.push(parseInt(y[j]))
	  }
	  function sum(a){
		  var b=0;
		  for(var i=0;i<a.length;i++){
			  b=b+a[i]
		  }
		  return b
	  }
alert(sum(h))
//输入四个数，输出最大最小值
var arr=new Array()
var x=prompt("输入一个数：")
arr.push(parseInt(x))
var x=prompt("输入一个数：")
arr.push(parseInt(x))
var x=prompt("输入一个数：")
arr.push(parseInt(x))
var x=prompt("输入一个数：")
arr.push(parseInt(x))
function daxiao(z){
	var x=z.sort(function(a,b){return a-b})[0]
	var y=z.sort(function(a,b){return a-b})[z.length-1]
	return ["最小值："+x+"最大值："+y]
		
}
alert(daxiao(arr))
//打印所有的水仙花数
var x=new Array()
for(var i=0;i<10;i++){
for(var j=0;j<10;j++){
for(var z=0;z<10;z++){
	
	if((i*100+j*10+z)==(i*i*i+j*j*j+z*z*z)){
		x=(i*100+j*10+z)
	}
	document.write("'"+x+"'")
}
}
}
//输入8个数，输出最大值和平均值
var x=new Array()
for(var i=0;i<3;i++){	
	x[i]=parseInt(prompt())			
}
alert(x.sort(function(a,b){return a-b})[7])
function pj(a){
	var y=0
	for(var i=0;i<a.length;i++){
		y=y+a[i]
	}
	var z=y/(a.length)
    return z
}
alert(pj(x))
//编写程序，求1+3+5+7+...+295+297+299的和。
var count=0
for(var i=1;i<300;i+=2){
	count=count+i
}
alert(count)
//编写程序，求2+4+6+...+196+198+200的和。
var count=0
for(var i=2;i<=200;i+=2){
	count=count+i
}
alert(count)
//编写程序，求出1至1000之间能被5或11整除，但不能同时被5和11整除的所有整数并将其存放在数组a中并输出。
function fun(){
	var arr=new Array()
	for(var i=1;i<=1000;i++){
		var num=i
		if((num%5==0||num%11==0)&&!(num%5==0&&num%11==0)){
			arr.push(num)
		}
	}
   return arr
}
//编写程序，求出数组的最大元素在数组中的下标并输出该值。如输入如下整数：876 675 896 101 301 401 980 431 451 ，则输出结果为6，980.
var x=[1,4,12,45,100,231,56]
function Myfunction(x){
	var arr=new Array()
	for(var i=0;i<x.length;i++){
		arr.push(x[i])
	}
	var y=arr.sort(function(a,b){return a-b})[arr.length-1]
	
    var z=x.indexOf(y)
    return [z,y]
}
//编写程序，求出字符串中指定字符的个数，并输出。例如，若输入字符串：aw23gk4w2w32，输入字符为：w，则输出：3。
var x=prompt("输入字符串")
function mf(a){
	var b=a.match(/\w/g)
	var c={}
	var d
    for(var i=0;i<b.length;i++){
		d=b[i]
		if(!c[d]){
			c[d]=1
		}
		else{
			c[d]++
		}
	}
	return c
}
alert(mf(x)[prompt("查找单个字符出现次数")])
//编写程序，实现从键盘输入n个整数，求该组整数的平均值，并将大于平均值的整数输出。
var x=new Array()
	for(var i=0;i<5;i++){
    x.push(parseInt(prompt()))
	}
function sum(a){
	var s=0
	for(var i=0;i<a.length;i++){
		s=s+a[i]
	}
	sum=s/a.length
	var b=new Array()
	for(var j=0;j<a.length;j++){
		if(a[j]>sum){
			b.push(a[j])
		}
	}
	return ["平均数："+sum,"大于平均数的值："+b]
}
alert(sum(x)) 
//编写程序，实现求1!+2!+...+12!.
var sum=0
for(var i=1;i<13;i++){
	var y=i
function jiecheng(x){
	if(x<=1){
		return 1
	}
	else{
		return x*jiecheng(x-1)
	}
}
var z=jiecheng(y)
sum=sum+z
}
alert(sum)
//编写程序，输出100-200之间，能被5整除，但是不能被8整除的数。
function mf(){
	var arr=new Array()
	for(var i=100;i<=200;i++){
		var x=i
		if(x%5==0&&x%8!=0){
			arr.push(x)
		}
	}
	return arr
}
//编写程序，用于统计从键盘输入的字符串中的小写字母的个数。
var x=prompt()
function mf(a){
	var x=a.match(/[a-z]/g)
	
	return x.length
}
console.log(mf(x))
//猜数游戏，假如设定一个整数m=123，然后让其他人从键盘输入所猜的数字，如果猜对，输出"Right"，如果猜错，则输出"Wrong"，并且指出设定的数字比输入的数字大（Too high）还是小（Too low)。
	for(var i=0;i>=0;i++){
		var x=parseInt(prompt())
		if(x==123){
			alert("Right")
			break;
		}
		else{
			if(x>123){
				alert("Wrong"+"Too high")
			}
			if(x<123){
				alert("Wrong"+"Too low")
			}
		}
	}
//从键盘输入8个整数，保存在一个数组中，将这8个数逆序输出并求和。
var arr=new Array()
var arrReverse=new Array()
for(var i=0;i<8;i++){
	var x=parseInt(prompt())
	arr.push(x)
}
	arrReverse=arr.reverse()
	var sum=0
	for(var j=0;j<arrReverse.length;j++){
		sum=sum+arrReverse[j]
	}
	document.write("逆序输出"+arrReverse+"求和"+sum)
//给出一个不多于5位的正整数，要求：求出其位数，分别打印每一位数字，最后按逆序打印出这个正整数。如输入6582 ，输出为4，2856	
var x=prompt().match(/\d/g)
var y=x.length
var z=x.reverse()
alert(y+";"+z)		
//18、	某幼儿园只收2~6岁的小孩 ，2岁编入小班（small class），3~4岁编入中班（middle class），5~6岁编入大班（top class），编写程序实现每输入一个年龄。输出应编入什么班。	
var x=parseInt(prompt("请输入2-6岁小孩年龄："))
if(x==2){
	alert("small class")
}
else{
	if(x>=3&&x<=4){
		alert("middle class")
	}
	if(x>=5&&x<=6){
		alert("top class")
	}
}
//	19、	求从键盘上输入的8个整数中的最大值，并求和。
var arr=new Array()
var sum=0
for(var i=0;i<8;i++){
		var x=parseInt(prompt())
		sum=sum+x
		arr.push(x)
}
var y=arr.sort(function(a,b){return a-b})[arr.length-1]
alert("最大值"+y+";"+"求和"+sum)	
//20、	设计一个程序，从键盘输入三个整数，按由小到大的顺序输出。	
var arr=new Array()
for(var i=0;i<3;i++){
	var x=parseInt(prompt())
	arr.push(x)
}
	var y=arr.sort(function(a,b){return a-b})
	alert(y)
//	21、	输入8个学生的成绩，求其平均值，输出最高成绩，并统计低于平均分的人数。
var arr=new Array()
var sum=0
var p
for(var i=0;i<8;i++){
	var x=parseInt(prompt())
	sum=sum+x
	arr.push(x)
}
p=sum/arr.length
var y=arr.sort(function(a,b){return a-b})[arr.length-1]
var arr1=new Array()
	for(var j=0;j<arr.length;j++){
		if(arr[j]<p){
			arr1.push(arr[j])
		}
	}
	var z=arr1.length
	alert("平均值"+p+";"+"最高值"+y+";"+"低于平均分的人数"+z)
//22、输入n个学生的成绩，统计其中90分之上、70~89、60~69、小于60分的人数，并输出。当输入的成绩小于0时结束。		
function fun(arr){
	var sh=new Array()
	var h=new Array()
	var m=new Array()
	var l=new Array()
	for(var i=0;i<arr.length;i++){
        var num=arr[i]
		if(num>=90){
			sh.push(num)
		}
		if(num>=70&&num<=89){
			h.push(num)
		}
		if(num>=60&&num<=69){
			m.push(num)
		}
		if(num<=60&&num>=0){
			l.push(num)
		}
	}
	var t={"90分以上":sh.length,"70-80":h.length,"60-69":m.length,"小于60":l.length}
	return t
}
//23、输入一实数x和一整数n，求x+x*x+x*x*x+...+x*x...*x的值。编写程序，计算并输出下式的和:S=1/(1*2)+1/(2*3)+...+1/(n*(n+1))，例如，当n=10时，函数值为0.909091。	
function mf2(z){
	return z=z/x
}
function mf1(x){
	var sum=0
	var y=Math.pow(x,x)
	sum=y+mf2(y)
	return sum
}

//24、	n个人的成绩存放在score数组中，编写函数 fun(score[ ]，n，below[ ])，功能是将低于平均分的人数作为函数值返回，将低于平均分的分数放在below所指的数组中。如score数组中的数据为：10、20、30、40、50、60、70、80、90时，函数返回的人数应该是4，below中的数据应为：10、20、30、40。	
var score=[45,55,51,60,70,68,85]
function fun(x){
	var sum=0
	for(var i=0;i<x.length;i++){
			sum+=x[i]
	}
	var jun=sum/x.length
	var below=new Array()
	for(var j=0;j<x.length;j++){
		if(x[j]<jun){
			below.push(x[j])
		}
	}
		return below.length
	}
//25、	编写函数fun( str[ ])，函数功能：判断字符串是否为回文？若是，函数返回：YES；否则输出：NO。回文是指顺读和倒读都一样的字符串。 例如：字符串LEVEL是回文，而字符串123321也是回文，abcab就不是回文。			
function fun(x){
	var z="NO"
	var y="YES"
	for(var i=0;i<(x.length+1)/2;i++){
		if(x[i]==x[x.length-i-1]){
			return y
		}
	}
	        return z
}
//26、编写函数fun( str[ ]， ch)，实现在字符串str中寻找字符ch最后出现的位置，如果没有找到ch，则返回-1。输出查找到的结果。		
function fun(x){
	var ch=x.match(/ch/g)
	var y=-1
	if(!ch){
		return y
	}
	return x.lastIndexOf("ch")
}
//27、	编写函数fun( n)判断一个数n是否完数，是返回1，不是返回0，完数定义：如果一个数等于其所有真因子(不含自身)之和，则该数为完数，例如6的真因子有1，2，3，且6=1+2+3，所以6是完数。函数中求出2~1000中所有的完数，并输出。	
function fun(n){
	var arr1=new Array()
	for(var i=1;i<=1000;i++){
		var x=i
		if(n%x==0){
			arr1.push(x)
		}
	}
		var sum=0
		for(var j=0;j<arr1.length;j++){
			sum+=arr1[j]
		}
		if(n==sum-n){
		return 1
		}
		return 0
}
//28、	编写函数 fun( n， a[ ])，求出小于或等于n的所有素数并放在a数组中，函数返回所求出的素数的个数。要求函数中输入n值，并输出数组a。
function fun(n){
	var arr=new Array()
	if(n>=3){
		arr.push(2,3)
	}
	for(var i=2;i<=n;i++){
		if(i%2!=0&&i%3!=0){
			arr.push(i)
		}
	}
	return [arr.length,arr]
}
//29、	编写函数fun( s[ ])，其功能是：将s所指字符串中所有下标为奇数的位置上的字母转换为大写（若该位置上不是字母，则不转换）。例如，若输入"abc4EFg",则应输出"aBc4EFg"。
function fun(s){
	var str=""
	for(var i=0;i<s.length;i++){
		if(i%2!=0&&s[i].match(/[a-z]/)){
			str+=s[i].toUpperCase()
		}
		else{
			str+=s[i]
		}
	}
	return str
}
//30、	编写函数 fun( age[ ], d[ ])，函数的功能是：统计各年龄段的人数。n个年龄通过调用随机函数获得，并放在main函数的age数组中；要求在main函数中定义一个数组d，使用fun函数把0至9岁年龄段的人数放在d[0]中，把10至19岁年龄段的人数放在d[1]中，把20至29岁年龄段的人数放在d[2]中，其余依此类推，最后把100岁（含100）以上年龄的人数都放在d[10]中。			
function fun(age){
			var d={}
			var d
			for(var i=0;i<10;i++){
				 d[i]=0
			}
				for(var j=0;j<age.length;j++){
					var a=age[j]
					if(a>=0&&a<=9){
						d[0]++
					}
					if(a>=10&&a<=19){
						d[1]++
					}
					if(a>=20&&a<=29){
						d[2]++
					}
					if(a>=30&&a<=39){
						d[3]++
					}
					if(a>=40&&a<=49){
						d[4]++
					}
					if(a>=50&&a<=59){
						d[5]++
					}
					if(a>=60&&a<=69){
						d[6]++
					}
					if(a>=70&&a<=79){
						d[7]++
					}
					if(a>=80&&a<=89){
						d[8]++
					}
					if(a>=90&&a<=100){
						d[9]++
					}
				}
			
			d={"0-9":d[0],"10-19":d[1],"20-29":d[2],"30-39":d[3],"40-49":d[4],"50-59":d[5],"60-69":d[6],"70-79":d[7],"80-89":d[8],"90-100":d[9]}
			
			
			
			return d
}
					
//31、	编写函数 fun( m， a[ ])，将1到m之间（含m）能被7或13整除的所有整数放在数组a中。例如，若传送的m的值为50，则程序输出：7 13 14 21 26 28 39 35 42 49。	
function fun(m){
	var arr=new Array()
	for(var i=1;i<=m;i++){
		var x=i
		if(x%7==0||x%13==0){
			arr.push(x)
		}
	}
	return arr
}
//	32、	编写函数  fun（s1，s2），函数实现将两个字符串s1和s2比较，如果s1>s2，输出一个正数；s1=s2，输出0；s1<s2，输出一个负数。不能用strcmp函数。两个字符串用gets函数读入。输出的正数或负数的绝对值应是相比较的两个字符串相对应字符的ASCII码的差值。例如，'A'与'C'相比，由于'A'<'C'，应输出负数，由于 'A' 与 'C' 的ASCII码差值为2，因此应输出"-2"。同理："And"和"Aid"比较，根据第2个字符比较结果，'n'比'i'大5，因此应输出"5"。
function fun(s1,s2){
	var x=0
	var y=0
	for(var i=0;i<s1.length;i++){
		x+=s1.charCodeAt(i)
		}
	for(var j=0;j<s2.length;j++){
		y+=s2.charCodeAt(j)
		}
	if(x>y){
		return x-y
	}
	if(x<y){
		return x-y
	}
	return 0
}
//33、	编写函数  fun（str），实现将字符串尾部的*号全部删除，前面的和中间的*号不删除。 例如，字符串中的内容为：****A*BC*DEF*G*******，删除后，字符串中的内容应当是：****A*BC*DEF*G。	
function fun(str){
	var s=str.match(/(\*)*(\w)?/g)
	return str.replace(s[s.length-2],"")
}

//34、	编写函数 fun（str）实现将字符串中的前导*号全部移到字符串的尾部。 例如，字符串中的内容为：*******A*BC*DEF*G****移动后，字符串中的内容应当是： A*BC*DEF*G***********。
function fun(str){
	var s=str.match(/(\*)*/g)
    var x=str.replace(s[0],"")
    return x.concat(s[0])
}

//35、	编写函数 fun（str）实现删除字符串中的所有*号。例如字符串中的内容为：****A*BC*DEF*G*******，删除后，字符串中的内容应当是：ABCDEFG。
function fun(str){
	var s=str.match(/(\w)?/g)
    return s.join("")
}

//	36、	编写函数 fun(s,t) ，实现将s所指字符串中ASCII值为偶数的字符删除，串中剩余字符形成一个新串放在t所指的数组中。例如，若s所指字符串中的内容为："ABCDEFG12345"，其中字符B的ASCII码值为偶数应删除，其他依次类推。最后t所指的数组中的内容为："ACEG135"。（提示："A"的ASCII值为65，'a'的ASCII值为97，'0'的ASCII值为48）。
	function fun(s){
		
		var t=new Array()
		for(var i=0;i<s.length;i++){
			if(s.charCodeAt(i)%2!=0){
				t.push(s.charAt(i))
			}
		}
		var x=t.join("")
		return x
	}
//37、	编写函数void fun(char *s，char *t)，实现将s所指的字符串中ASCII值为奇数的字符删除，字符串中剩余字符形成一个新串放在t所指的数组中。例如：s所指的内容：ABCDEFG12345， 其中字符A的ASCII码为奇数、1的ASCII码为奇数、......，都应当删除，其他以此类推。最后t所指的数组中的内容：BDF24。 （提示：'A'的ASCII值为65，'a'的ASCII值为97，'0'的ASCII值为48）。	
	function fun(s){
		
		var t=new Array()
		for(var i=0;i<s.length;i++){
			if(s.charCodeAt(i)%2==0){
				t.push(s.charAt(i))
			}
		}
		var x=t.join("")
		return x
	}					
//38、	编写函数 fun(s，t)，实现将s所指字符串中除了下标为偶数、同时ASCII值也为偶数的字符外，其余的全部都删除；串中剩余字符所形成的一个新串放在t所指的数组中。 例如，若s所指字符串中的内容为："ABCDEFG123456"，其中字符A的ASCII码值为奇数，因此应当删除；其中字符B的ASCII码值为偶数，所在数组中的下标也为奇数，因此也应当删除，其它依次类推。最后t所指的数组中的内容应是："246"。（提示：'A'的ASCII值为65，'a'的ASCII值为97，'0'的ASCII值为48）。
function fun(s){
	var t=new Array()
	for(var v in s){
		if(s[v].charCodeAt()%2==0&&v%2==0){
			t.push(s[v])
		}
	}
	var x=t.join("")
    return x
}
//39、	编写函数void fun（a，n， x)，n为数组元素的个数，x为待插入的数值，函数功能：实现在一个已排好序的数组中插入一个新的数值，插入后此数组仍然要保持有序。在main函数中输入数组和待插入的数值，最后输出插入后的数组。
function fun(arr,x){	
	 for(var i in x){
		arr.push(x[i])
	 }
	 var arr1=arr.sort(function(a,b){return a-b})
     var num=arr1.length
	 return [num,arr1]
}
//40、	学生的记录由学号和成绩组成，6名学生的数据放在main函数中的结构体数组s中，编写函数，实现把大于等于平均分的学生数据放在b所指的数组中，平均分通过函数值返回。
function main(){
	var b=new Array()
	var s={
		1:60,
		2:65,
		3:40,
		4:55,
		5:70,
		6:60
		}
		var sum=0
for(var i=1;i<7;i++){
	sum+=s[i]
}
var jun=sum/6
for(var j=1;j<7;j++){
	if(s[j]>=jun){
		b.push(s[j])
	}
}
return [jun,b]
}
//41、	已知学生的记录由学号和学习成绩构成，n名学生的数据已存入数组a中。请编写函数 ：找出成绩最低的学生记录。（假设只有一个最低分）。
function fun(){
	var a={
		1:80,
		2:85,
		3:50,
		4:55,
		5:45,
		6:90,
		7:40,
		8:60
	}
	var arr=new Array()
	for(var v in a){
		arr.push(a[v])
	}
	var x=arr.sort(function(a,b){return a-b})[0]
    for(var i in a){
		if(a[i]==x){
			return [i,x]
		}
	}
}
//42、	写一个函数 days( x),根据输入的日期，计算出该日期是这一年中的第几天（从1月1号起计算，考虑如果是闰年的情况），返回得到的天数。
function days(n,y,r){
	if(n%400==0||n%4==0&&n%100!=0&&n%y>2){
		var z={
			1:31,
			2:29,
			3:31,
			4:30,
			5:31,
			6:30,
			7:31,
			8:31,
			9:30,
			10:31,
			11:30,
			12:31
		}
		var sum=0
		var i=1
		while(i<y){
			sum+=z[i]
			i++
		}
		return sum+r
	}
	else{
		var z={
			1:31,
			2:28,
			3:31,
			4:30,
			5:31,
			6:30,
			7:31,
			8:31,
			9:30,
			10:31,
			11:30,
			12:31
		}
		var sum=0
		var j=1
		while(j<y){
			sum+=z[j]
			j++
		}
		return sum+r
	}
}
//写一个函数 days( x),根据输入的日期，计算出该日期是这一年中的第几天（从1月1号起计算，考虑如果是闰年的情况），返回得到的天数。	
function days(n,y,r){
      var sum=0
	  var z={1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31}
	  var i=1
	  while(i<y){
		  sum+=z[i]
		  i++
	  }
      if(n%400==0||n%4==0&&n%100!=0&&n%y>2){
		  return sum+r+1
	  }
	  return sum+r
}

//输入三个数，并按大小排序
function fun(x,y,z){
	var arr=new Array()
	arr.push(x,y,z)
	var arrnew=arr.sort(function(a,b){return a-b})
	return arrnew
}
//输入三个数，并按大小排序	
function fun(){
	var x=prompt("输入三个大于一位数的整数，用空格分开")
	var y=x.match(/\S\d/g)
	var arrnew=new Array()	
	for(var v in y){
		arrnew.push(parseInt(y[v]))
	}
	var z=arrnew.sort(function(a,b){return a-b})
	return z
}
	
	
	
	
	
	
	



