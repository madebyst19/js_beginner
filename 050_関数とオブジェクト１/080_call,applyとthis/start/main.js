function a(name) {
    console.log('hello ' + name);
}

const b = a.bind(null, 'Tim');

b();


const arry = [1,2,3,4,5];

const result = Math.max(...arry);
console.log(result);