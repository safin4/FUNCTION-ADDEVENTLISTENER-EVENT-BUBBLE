function explain_callback(name, age, task) {
    console.log("Hello ", name);
    console.log("Your age ", age);
    task();
}

function washHand() {
    console.log("Wash hand with soap");
}

function takeShower() {
    console.log("Take shower");
}

function scrollFacebook() {
    console.log("Scroll facebook but din't like any post");
}

explain_callback("Safin", 18, washHand);
explain_callback("Hafsa", 26, takeShower);
explain_callback("Sabbir", 17, scrollFacebook);