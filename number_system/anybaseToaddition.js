

function anybaseToaddition(num1, num2, base) {
    
    let carry = 0 ;
    let pow = 1;
    let ans = 0 ;

    while (num1>0 || num2>0 || carry>0) {

        let rem1 = num1%10;
        let rem2 = num2%10;

        num1 = Math.floor(num1/10) ;
        num2 = Math.floor(num2/10) ;

        let sum =  rem1 + rem2 + carry ;
        let addrem = sum%base ;
        carry = Math.floor(sum/base) ;

        ans += addrem*pow ;

        pow = pow*10 ;

    }
   return ans 
} ;

console.log(anybaseToaddition(657, 567, 8));


