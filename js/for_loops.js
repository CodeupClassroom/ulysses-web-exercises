function showMultiplicationTable(number) {
    for (var i = 1; i <= 10; i++) {
        console.log(number + ' x ' + i + ' = ' + (number * i));
    }
}

showMultiplicationTable(7);

for (var i = 0; i < 10; i++) {
    var number = Math.floor(Math.random() * 20) + 180;  // 180 - 200
}
