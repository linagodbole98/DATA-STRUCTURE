function bubbleSort(arr){
    for(var i=arr.length;i>0;i--){
        for(var j=0;j<i-1;j++){
            console.log("ji")
            console.log(arr,arr[j],arr[j+1])
             if(arr[j] > arr[j+1]){
                 //SWAP..!
                 var temp = arr[j];
                 arr[j]= arr[j+1];
                 arr[j+1] = temp;
                 console.log("pass")
             }   
        }
    }
    return arr;
}
bubbleSort([12,3,4,6,7,8,56])