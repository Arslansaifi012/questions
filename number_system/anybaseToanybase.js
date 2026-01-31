
const anybaseTodecimal =  function anybaseTodecimal(num, base) {
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

const decimalToanybase = function decimalToanybase(num, base) {
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


const anybaseToanybase = function anybaseToanybase(num1, base1, base2 ){
   const decimalnumber =  anybaseTodecimal(num1,base1) ;

    const convertTobase = decimalToanybase(decimalnumber,base2) ;

    return convertTobase ;

} ;


const finalAnswer = anybaseToanybase(43,5,7) ;

console.log(finalAnswer);
