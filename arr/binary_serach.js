
const seach_target = (arr,target) =>{
    // write code here 

    let st = 0 ;
    let end = arr.length-1;    

    while(st<=end){

        let mid = Math.floor((st+end)/2) ;

        if (arr[mid] === target) {
            return mid ;
        }

        if (arr[mid] < target) {
            st = mid+1 ;
        }else{                              
            end =  mid-1 ;
        }
    };

    return -1;

};

const ans = seach_target([1,3,5,6,7,9,10],10);
console.log(ans);
