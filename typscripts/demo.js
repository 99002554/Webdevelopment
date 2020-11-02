var message = "Hello world";
console.log(message);
var username = 'Kumaran';
var username;
var username = 'Kumaran';
console.log(username);
// union types
var urname;
urname = 'Priya';
urname = 10;
console.log(urname);
function calcSum(n1, n2) {
    console.log(n1 + n2);
}
calcSum(10, 20);
function greetUser(name) {
    return 'welcome' + name;
}
console.log(greetUser('Ram'));
//rest
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    console.log(sum);
}
addNumbers(10, 20);
addNumbers(10, 20, 30);
addNumbers(10, 20, 30, 40);
//default paameter
function userDetails(name, city) {
    if (city === void 0) { city = ' Bengaluru'; }
    console.log('name' + name);
    console.log('city' + city);
}
userDetails('Raju');
userDetails('Raju', 'Ooty');
//using lambda
var greet = function (msg) {
    return 'welcome' + msg;
};
console.log(greet('hello'));
//single statement
var show = function () { return console.log('Hi'); };
show();
var checktype = function (a, b) {
    console.log(a + b);
};
checktype(10, 20);
checktype('ram', 'tom');
checktype(10, 'ram');
