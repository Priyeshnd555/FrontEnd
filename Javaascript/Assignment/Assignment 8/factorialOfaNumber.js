
const fact = factorial(5)
console.log(fact);


function factorial(num)
{

    if(num===0)
    {
        return 1;
    }
    else
    {
        return num*factorial(num-1);
    }
}