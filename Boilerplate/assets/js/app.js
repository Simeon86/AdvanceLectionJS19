function checkingArguments() {
    var args = arguments;
    var test = 1;
}


function sumArguments() {
    var args = arguments;

    var result = 0;

    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }
    return result;
}

document.body.style.background = 'green'
document.body.style.background = 'blue'
document.body.style.background = 'red'

console.log(document)

var h1 = document.querySelector('h1')
h1.innerText = "Simeon Nikolov";

h1.style.background = "green";  //!!!!!!

h1.style.color = "white";
h1.style.textAlign = 'center';

h1.style['background-color'] = 'orange';
h1.style.backgroundColor = 'black'

h1.classList.add('title')
h1.classList.remove('title')

////////////////////////////////////////////

var divs = document.querySelectorAll('div')

divs.forEach(function(el) {
    console.log(el)
})

divs.forEach(function(el) {
    el.style.background = 'blue';
    el.style.color = 'yellow';
})

divs.forEach(function(el, i) {
    console.log(i)

    if((i+1)%2) {
        el.style.background = 'black';
        el.style.color = 'red';
    }
    
})
