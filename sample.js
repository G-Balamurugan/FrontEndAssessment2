function add(x , y) {
    return x + y;
}

function sliceOpr(s){
    return s.slice(" ");
}

function concatOpr(x ,y)
{
    return x + y;
}

function cahrAtOpr(s , a){
    return x.charAt(s);
}

function chk(Numbers){
    var l = Numbers.length;
    var max = -Infinity;
    for (let i = 0; i<l ; i++) {
    
        if (Numbers[i] > max) {
    
            max = Numbers[i];
    
        }
    }
    return max;
}
const arr = [1,3,34,5,65,665,22,1];

console.log(add(3,4));
console.log(sliceOpr("asbd sdmd"));
console.log(concatOpr("sds", "kdsd"));
// chk(arr);
console.log(chk(arr));


var studentInfo = {
    "firstName" : "Bala",
    "lastName" : "G",
    "age" : 21
}

function getName(studentInfo)
{
    return studentInfo.firstName+studentInfo.lastName
}

console.log(getName(studentInfo))

function addToCart(msg)
{
    alert(msg + "Added To Cart")
}