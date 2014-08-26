<script>
        //Create a grades object that stores a set of student grades in an object.
        //Provide a function for adding a grade and a function for displaying the
        //student’s grade average.
        
        function grades(){
            this.grade = [];
            
        }
        
        grades.prototype.addgrade = function(thisgrade){
            this.grade.push(thisgrade)
        }
        
        grades.prototype.avg = function(){
            var sum = 0;
            for(var i = 0; i<this.grade.length;i++){
                sum += this.grade[i];
            }
            var avg = sum/this.grade.length;
            console.log(avg);
            alert(avg);
        }
        
        var mygrade = new grades();
        mygrade.addgrade(13);
        mygrade.addgrade(15);
        console.log(mygrade.grade);
        mygrade.avg();
</script>
