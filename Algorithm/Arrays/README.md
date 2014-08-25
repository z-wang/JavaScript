Array Basics:
====================
1. var numbers = [];

2. number.length;

3. var numbers = new Array(10); But usually, use var number = [];

4. Array.isArray(numbers)

5. shallow copy:
var samenums = numbers;
numbers[0] = 400;
print(samenums[0]); // displays 400

6. deep copy:
function copy(arr1, arr2) {
for (var i = 0; i < arr1.length; ++i) {
          arr2[i] = arr1[i];
       }
}

7. search functions:
  indexOf()
  lastIndexOf(name)

8. Array to String:
  var namestr = names.join();
  namestr = names.toString();
  
9. arrays manipulate:
  var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"]; var dmpDept = ["Raymond", "Cynthia", "Bryan"];
  var itDiv = cis.concat(dmp);
  
  var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"]; var dmpDept = itDiv.splice(3,3);
  var cisDept = itDiv;
  print(dmpDept); // Raymond,Cynthia,Danny
  print(cisDept); // Mike,Clayton,Terrill,Jennifer
  
10. push, pop, shift and unshift

11. add or remove elements from the middle of an array
  //add
	var nums = [1,2,3,7,8,9];
	var newElements = [4,5,6]; 
	nums.splice(3,0,newElements); 
	print(nums); // 1,2,3,4,5,6,7,8,9
	
	or
	var nums = [1,2,3,7,8,9]; 
	nums.splice(3,0,4,5,6); print(nums);
	
	//remove
	var nums = [1,2,3,100,200,300,400,4,5]; 
	nums.splice(3,4);
	print(nums); // 1,2,3,4,5

12. reverse(), sort()
	var nums = [3,1,2,100,4,200]; nums.sort();
	print(nums); // 1,100,2,200,3,4	

	function compare(num1, num2) { 
		return num1 - num2;
	}
	var nums = [3,1,2,100,4,200]; 
	nums.sort(compare); print(nums); // 1,2,3,4,100,200

13. forEach(), every(), some(), reduce(), they will not generate new array
	function square(num) { 
		print(num, num * num);
	}
	var nums = [1,2,3,4,5,6,7,8,9,10];
	nums.forEach(square);

	function isEven(num) { 
		return num%2==0;
	}
	var nums = [2,4,6,8,10];
	var even = nums.every(isEven); //even is bool
	var someEven = nums.some(isEven); 
	
	function add(runningTotal, currentValue) { 
		return runningTotal + currentValue;
	}
	var nums = [1,2,3,4,5,6,7,8,9,10]; 
	var sum = nums.reduce(add); 
	print(sum); // displays 55
	
	//reduceRight()
	function concat(accumulatedString, item) { 
		return accumulatedString + item;
	}
	var words = ["the ", "quick ","brown ", "fox "]; 
	var sentence = words.reduceRight(concat); 
	print(sentence); // displays "fox brown quick the"
	
14. map() and filter(), they will return new array
	
	function curve(grade) { 
		return grade += 5;
	}
	var grades = [77, 65, 81, 92, 83];
	var newgrades = grades.map(curve); 
	print(newgrades); // 82, 70, 86, 97, 88

15. arrays of objects and arrays in objects:
	function Point(x,y) { 
		this.x = x;
		this.y = y; }

	var p2 = new Point(3,5);
	
	.......
	
	function weekTemps() {
		this.dataStore = []; 
		this.add = add; 
		this.average = average;
	}
	

	
  

