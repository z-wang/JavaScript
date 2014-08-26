
//Store a set of words in an array and display the contents both forward and backward.

var arr = [1,2,3,4,5];
    var arr2 = [];
    for(var i = 0; i<arr.length;i++){
        arr2[i] = arr[i];
    }
    arr.reverse();
    console.log(arr);
    console.log(arr2);
