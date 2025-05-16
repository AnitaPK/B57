let arr = [];
console.log(arr);

arr[0] = 1;

arr[1]= 2;
arr[2] = 3;
console.log(arr);

// arr[10] = 10
// console.log(arr);

arr.push(4)
console.log(arr);

arr.unshift(0);

console.log(arr);

arr.splice(3,1,2.5)

console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.slice(0,1)
console.log(arr);

let fruits = ["Apple", "Banana", "Cherry"];

fruits[0], fruits[1], fruits[2]

for(i=0; i<fruits.length; i++){
    console.log( "I Like ", fruits[i])
}

for(index in fruits){
    console .log(index)
}

for(value of fruits){
    console.log(value)
}
const arr1 = [1,2,3,4,5,6,7,8,9,10]
arr1.forEach((element,index)=>{
    s=element*element
    console.log(`${element} square is ${s}`);
})

// Map, filter, indexof, lastIndexOf, some,find, reduce, 

result=arr1.map((e)=>e*e)
console.log(result);

oddNum = arr1.filter((element)=>{
    return element % 2 != 0
})

console.log(oddNum);
i_num = arr1.findIndex((e)=> e == 77)
console.log(i_num)


let user = {
    name:"Kahihi Chalel",
    age:1000000,
    info:['Kuch bhi chalega', 'anything', 'koi pan haily'],
}

console.log(user.name, "  ", user.age, "   ")
user.info.map((e)=>console.log(e))


user.age = 3456234563456
console.log(user.name, "  ", user.age, "   ")
user.DOB = '1111/01/01'

console.log(user)
// console.log(typeof(user), "User", typeof(arr1),"arr1")
