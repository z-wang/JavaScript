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
  
10. 
  

