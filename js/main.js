// var i = 0;

// while(i < 5) {
	// console.log(i);
	// i++;
// }

// var i = 10;
// while(i > 5) {
	// console.log(i);
	// i--;
// }

// Выполняется хотябы один раз
// var i = 0;
// do {
	// console.log(i);
	// i++;
	// }while(i < 5); 
	

// var i = 10;
// do {
	// console.log(i);
	// i--;
	// }while(i > 5);

	// for(var i = 0; i < 10;i++){
		// console.log(i);
	// }
/*
	for (var i = false, f = 10; i == false; (f += 1, f > 20 ? i = true : i = false)) {
		console.log(f);
	}
contine i break нельзя использовать с операторами */
/*
var i = 0;

for(;i < 10; i++){
	console.log(i);
}

var i = 10;
for(:1 > 5) {
	console.log(i);
	i--;
}

for(;;){
	//безконечный цикл
}
*/

// Деректива БРЕЙК
/*
var i = 0;

while(true) {
	console.log(i);
	i++;
	if(i > 10) {
		break;
	}
}

 var i = 0;
 do {
	 console.log(i);
	 i++;
	 if( i > 10){
	 break;
	 }
	 while(true);
 }

*/
/*
for (var i = 0; i < 10; i++) {
	if (!(i % 2)) {
		continue;
	}
	console.log(i);
}
*/

// Function
/*
function fnName(x, y, z) {
	console.log (x + y + z);
};

fnName(1, 2, 3); 
*/

var matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

findeFiveInMatrix(matrix);
function findeFiveInMatrix(matrix) {
	outer: for (var i = 0; 1 < matrix.length; i++) {
		console.log("outer iteration", i, "vale=", matrix[i]);
		inner: for(var j = 0; j < matrix[i].length; j++) {
			console.log("inner iteration", j, "vale=", matrix[i][j]);
			if (matrix[i][j] == 5) {
				break outer;
			}
		}
	}
};
