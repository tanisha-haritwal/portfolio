function submit(){
    array_name=[];
    var name1=document.getElementById("guest_name").value;
    var name2=document.getElementById("guest_sort").value;
    var name3=document.getElementById("guest_search").value;
    array_name.push(name1);
    array_name.push(name2);
    array_name.push(name3);
    array_name.push(name4);
    document.getElementById("display").innerHTML=array_name;
    document.getElementById("sub_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
    }
    function sort(){
        array_name.sort();
        document.getElementById("display").innerHTML=array_name;
    }
    function searching(){
        var s=document.getElementById("s1").value; 
        var found=0;
        var j;
        for(j=0; j<names_of_people.length; j++)
        {
    if(s=names_of_people[1]){
    found=found+1;
     }
        
        2.
        
        }
        
        document.getElementById("p2").innerHTML="name found"("name found"+found+" time/s");
        console.log("found name"+found+" time/s");
    }