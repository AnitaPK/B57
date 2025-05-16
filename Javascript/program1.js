console.log("hello world")

x = '5';
y = '5';

if(x == y){
    console.log('Yes we are same')
}

if(x === y){
    console.log('check in ===')
}else{
    console.log('we are not same ')
}

a = '         Wisdom             '
b= 'Sprouts'

c = a+ ' ' +b;
// a.concate(' ', b)

console.log(a.length);
console.log(a.trimEnd().length)

str = 'a b c d'
newArray = str.split();

console.log("This is String",str,"This is array", newArray)

console.log(`This is String ${str} This is array  ${newArray}`)

function greet(){
    console.log("Hello from function greet");
    return "Hello from function greet"
}

greet();

function greet1(name){
    console.log("Hello" + name +"from function greet");
    return "Hello" + name +"from function greet"
}
greet1('Wisdom')

const greet2 = function(greet2){
    return "Hello from function greet" + greet2
}
const str1 = greet2()

const age = ()=> {
    return 16
}

const greet3 = () =>{

}

vane =()=>{}


(function(){})()
(()=>{})()