var cats =[

{name: "fluffy", age:22, type:"Siamevil"},
{name: "jim", age:23, type:"unknown"},
{name: "greg", age:24, type:"Neanderthal"},
{name: "jeff", age:24, type:"Stupid"},
]

var my_cat = cats.find(function(cat){
return cat.name=="fluffy";
})

console.log("my cat is " ,my_cat);
console.log("my cat is " ,my_cat.name);
console.log("my cat is " ,my_cat.age);
console.log("my cat is " ,my_cat.type);


var fruits = ["apple","pear","mango","banana"]

fruits.sort(function(){
  fruits.splice();
  return 0.5-Math.random()
});
