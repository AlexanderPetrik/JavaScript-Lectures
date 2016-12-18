"use strict"; // строгий режим написания кода

// alert("Hello world");

// console.log("Hello console");

// var myPersic = "Fish";

// debugger;

// var MY_CONSTANT = "text";

// var myPersic = "Meat";

// console.log(myPersic);

// var object = {
	// name: "Shuric",
	// age: "21"
// };

// var arrey = ["friday", "sunday", myPersic];

// console.log(arrey);
// console.log(arrey[0]);

// console.log(object);

// console.log(object["name"]);
// console.log(object.age);

// object.age = 25;

// console.log(object.age);

// arrey["newParams"] = "text params";

// console.log(arrey);

// arrey[3] = "Buhlo";
// console.log(arrey);

// arrey.push(777);

// // function is{};
// // array is {};

// var myFunc = function () {
	// alert("axe, axe, axe");
// }

// myFunc();

// myFunc.myProperty = "test";

// console.log(myFunc.myProperty);

 // function drinking () {
	 // alert(drinking.drink);
	 // return "i dream" + drinking.drink;
	// }

 // drinking.drink = "BUHLOO!!!";

// drinking();

// console.log(drinking());

// console.log("3 > 5", 3 > '5', null > undefined);
// console.log(3 > '5');
// console.log(null > undefined);
// console.log(null == 0);
// console.log(5 == '5');
// console.log(5 === '5');

// console.log(3 == 3 && 5 == 5);
// console.log(3 == 5 && 5 == 5);
// console.log(3 == 3 && 5 == 3);

// var day = "Friday";
// console.log(day == "Friday" && drinking());
// console.log(day == "Friday" || drinking());

// console.log(!"");
// console.log(!"ikik");
// console.log("ikik");
// console.log(!!"ikik");

// какие элименты в JS приводяться к тру или фолс

// !"", !0, [], {}, function () {}, true // true
// "", 0, null, undefined, NaN, false // false

// Логические операторы "и", "или"

// console.log(1 && 2 || 5 && 6);
// console.log(1 && false || true && 6);
// console.log((1 && false || true) && 6);

// console.log('!"sleep"', !"sleep"); // false
// console.log('!0', !0); // true
// console.log('!!"null"=', !!null); // false 

// Оператор запятая

// var x, y;
// x = 5, 6
// y = (5,6);
// console.log(x); - display 5
// console.log(y); - display 6

// Операторы инкримента/декримента (МЕНЯЕТ исходную переменную)
// ++ увиличивает на 1
// -- уменьшает на 1

// var x = 10;
// x++;
// console.log(x);
// ++x;
// console.log(x);
// console.log(x++, ++x);

// Особенности операторов сравнения 

// console.log("'x'>'y'=", 'x'>'y');
// console.log("'x'>'Y'=", 'x'>'Y');
// console.log("'test'>'tes'=", 'test'>'tes');
// console.log("'1'>'2'=", '1'>'2');
// console.log("+'12'> +'2'=", +'12'> +'2');

// var x = NaN;
// if (typeof x === "number" && x === x) {
	// console.log(x); // равно числу и равно само себе
// }


// Условный оператор "if"

// var x = 5;

// if (x < 5) {
	// console.log(false);
// }
// else if (x >= 5) {
	// console.log(true); // Выполняеться это условие
// }

// else {
	// console.log("else");
// }

//Конструкция swich case //

var day = "Friday";
switch (day) {
	case "Friday":
	alert("Ура выходной");
	case "Manday":
	alert("Опять работать");
	default:
	alert("Ну хоть не понедельник");
}
