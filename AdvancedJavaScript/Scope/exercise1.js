
// For all of these, what is the value of a when the function gets called with the alert()
// #1 This alerts 3
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}

//#2 This alerts 5
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

//#3 This alerts hello
function q3() {
    window.a = "hello";
}

function q32() {
    alert(a);
}

//#4 This alerts test
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}

//#5 This alerts 5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);