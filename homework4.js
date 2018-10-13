//1st task is the video

//2nd task
const triangleStars = function(height)
{
    const base = 2 * height - 1;
    let i = 0;
    while(i < height) {
        console.log(' '.repeat(i) + '*'.repeat(base - 2 * i));
        i++;
    }
};
triangleStars(4);

//3rd task
const multiToSingle = function(array) {
    let newarray = [];
    let ParentIndex = 0;
    while (ParentIndex < array.length) {
        const childArray = array[ParentIndex];
        ParentIndex++;
        let ChildIndex = 0;
        while (ChildIndex < childArray.length) {
        
            newarray[newarray.length] = childArray[ChildIndex];
            ChildIndex++;
        }
       
    }
    return newarray+"";
}
console.log(multiToSingle([[20,21,22],[23,24,25]]));

//4th task
const findMinMax = function (array, boolean){
    if (boolean) {
        return Math.max(...array);
    }   
    return Math.min(...array);
};
console.log(findMinMax([4, 2, 66, -44, 8], true));

//5th task
    const forEach = function (array){
    let i = 0;
    while (i < array.length) {
        console.log(array[i]);
        i++;
    }
};
forEach([15, 16, 17]);

//6th task
const sum = function (array) {
    sumOfNum = 0;
    let i = 0;
    while (i < array.length) {
        sumOfNum = sumOfNum + array[i];
        i++
       
    }
    return sumOfNum;
};
console.log(sum([5, 10, 15]));

//7th task
const reverse = function (stringArr) {
   let outcome = "";
   let i = stringArr.length - 1;
   while (i >= 0 ){
     outcome = outcome + stringArr[i];
     i--;

   }
   return outcome;
 };
 console.log(reverse("garo"));
 
//8th task
const checkerboard = function(size) {
    let i = 0;
    while (i < size) {
        if ( i %2 === 0) {
        console.log("# ".repeat(size));
    } else { 
    console.log(" #".repeat(size));
        }
    i++;
  }
};
checkerboard(5);
