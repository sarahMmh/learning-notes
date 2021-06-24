import  {cube} from './utils';

let foo = () => {
    let x = 1;
    if (false) {
        console.log('never reached');
    }
    let a = 3;
    return a;
}

function bar (){
    var x = 1;
    console.log(x);
    function unused(){
        return 5;
    }
    return x;
    var c = x +3;
    return c;
}
cube();
bar();

// const modle = new Apple();
// console.log(modle)
const myInfo = {
    name:"I'm Joke",
    age: 18
}
console.log(myInfo.name);