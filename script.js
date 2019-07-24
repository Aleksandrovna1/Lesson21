// №1
let ar = ['Жираф', 'Собака', 'Кот'];
function searchArrayWord(arr, word) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == word) {
            return true;
        }
    }
    return false;
}
console.log(searchArrayWord(ar, 'Кот'));
console.log(searchArrayWord(ar, 'Собака'));
console.log(searchArrayWord(ar, 'Собакен'));

// №2
let arr = [1, 2, 3, 7, 6, 9];
function average(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum / array.length;
}
console.log(average(arr));

// №3
let arr2 = [1, 3, 5, 6, 7, 9];
for (i = arr2.length - 1; i >= 0; i--) {
    console.log(arr2[i] + ' ');
}

// №4
let obj = { html: 'HTML', css: 'CSS', js: 'ECMA' };
console.log(Object.keys(obj));

// №5
let order = {
    'name': 'Tetyana',
    'phone': 380997185646,
    'address': 'Grebinki St. 44, Poltava,36002, Ukraine',
    'totalprice': 830,
    'totalweight': 2700,
    'purchased_goods': {
        'cap': {
            'price': 100,
            'weight': 200
        },
        'spoon': {
            'price': 30,
            'weight': 100
        },
        'pot': {
            'price': 550,
            'weight': 2000
        },
        'mud': {
            'price': 550,
            'weight': 400
        }
    }
}