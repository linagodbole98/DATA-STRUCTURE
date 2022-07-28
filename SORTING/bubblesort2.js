
//A sorting Algorithm where the largest value bubble up to the top

function bubblesort(array){
for(let i=array.length ;i>0;i-- ){
    for(let j=0;j<i-1;j++){
        if(array[j]>array[j+1]){
            [array[j],array[j+1]]= [array[j+1],array[j]]
        }

    }
}
 return array;
 
}
const res= bubblesort([5,3,4,1,2,8,6,7])
console.log(res)