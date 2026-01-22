
const lastOccured = (arr, target)=>{

    let st = 0;
    let end = arr.length-1 ;

    while(st <= end) {

        let mid = Math.floor((st + end)/2) ;

        if (arr[mid] > target) {
            end = mid-1;
            
        }else if (arr[mid] <= target){
            st = mid+1 ;
        }

        if (target === arr[end]) {
            return end ;
        }

    }
    return -1;
            
} ;

const ans = lastOccured([1,2,3,5,5,5,5,6,8,9,9,9],5); 
console.log(ans);
