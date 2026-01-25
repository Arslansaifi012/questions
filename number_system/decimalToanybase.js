
function decimalToanybase(num, base) {

    let pow = 1;
    let ans = 0 ;

    while (num>0) {
        let rem = Math.floor(num%base)  ;
        num = Math.floor(num/base);
        rem = rem * pow ;
        ans =ans+rem ;
        pow = pow*10 ;
    } ;

    return ans ;
    
};

console.log(decimalToanybase(19, 8));


