export const bubbleSort = (array) =>{
    for(var i=0;i<array.length;i++){
        for(var j=0;j<i-1;j++){
            var k=j+1;
            if(array[k]<array[j]){
                var temp = array[k];
                array[k] = array[j];
                array[j] = temp; 
            }
        }
    }
    return array;
}

export const  selectionSort = (array) =>{
    for(var i = 0 ;i<array.length;i++){
        for(var j=i+1;j<array.length;j++){
            if(array[i]>array[j]){
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp; 
        }
    }
    }
    return array;
}

export const arraysAreEqual=(arrayOne,arrayTwo)=>{
    if(arrayOne.length !== arrayTwo.length) return false;
    for(let i=0; i < arrayOne.length;i++){
        if (arrayOne[i]!=arrayTwo[i]) return false;
    }
    return true;
}