
const anybaseTodecimal = function (num, base) {
    let pow = 1;
    let ans = 0 ;

    while(num>0){
        let rem = Math.floor(num%10) ;
        num = Math.floor(num/10) ;
        rem = rem*pow ;
        ans  = ans+rem ;
        pow = pow*base ;
    };

    return ans
    
} ;

console.log(anybaseTodecimal(1101, 2));
