function isGeometric(arr) {
    if (arr.length <= 2) return true; // special cases
    var a = arr[1],                   // we dont need to test before this
        r = a / arr[0],               // ratio of first 2
        i;
    for (i = 2; i < arr.length; ++i)
        if ((a *= r) !== arr[i])
            return false;
    return true;
}

isGeometric([2, 4, 8]); // true
isGeometric([2, 4, 5]); // false

var arr =[2,4,6,8,10];// [2,6,18,54]- Geometric
var arthCount=0;
var geoCount=0;
    function ArthGeo(){
        for (var i=0;i<arr.length-2;i++){
             if(arr[i+1]-arr[i]===arr[i+2]-arr[i+1]){
                 arthCount++;
            }
            else if(arr[i+1]/arr[i] ===arr[i+2]/arr[i+1]){
                 geoCount++;
            }
            else return "neither arithmetic nor geometric";
        }
         if(arthCount===arr.length-2)
             return "Arthematic series";
         else if(geocount===arr.length-2)
             return "Geometric series";
     }    
 console.log(ArthGeo());