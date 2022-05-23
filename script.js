var count = 1;

function counter(element) {
    count++;
    // console.log(count);
    // console.log(element);
    // element.innerText = count;
    element.innerText++;
}

function specialCounter() {
    document.querySelector("#number").innerText++;
}