function hello(name){
    name = name || "tom";
    console.log("hello" + name);
}
hello();
let name;
name && hello(name);

AudioParam