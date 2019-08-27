var count = 0;

function run(){
    var elm = document.getElementById('listLog');
    elm.innerHTML = '';
    
    var egg = +document.getElementById("inputEggs").value;
    var end = +document.getElementById("inputFloor").value;
    var ans = +document.getElementById("inputAns").value;
    
    noOfTestRequired(0, end, ans, egg);
}

function noOfTestRequired(start, end, ans, egg) {
    if (egg == 1) {        
        linear(start, end, ans, egg);
    }
    else {
        count++;
        console.log(`start- ${start} -- end - ${end} -- ans - ${ans} -- egg - ${egg} -- count - ${count}`);
        logTests(start, end, ans, egg, count);
        var temp = Math.ceil((end - start)/2) + start;
        if (temp >= ans) {
            noOfTestRequired(start, temp, ans, --egg);
        }
        else {
            noOfTestRequired(temp, end, ans, --egg);
        }
    }

}

function linear(start, end, ans, egg) {
    for (; start <= end; start++) {
        count++;
        console.log(`start- ${start} -- end - ${end} -- ans - ${ans} -- egg - ${egg} -- count - ${count}`);
        logTests(start, end, ans, egg, count);
        if (start == ans) {
            return count;
        }
    }
}

function logTests(start, end, ans, egg, count) {
    var elm = document.getElementById('listLog');    
    var chld = document.createElement('li');
    chld.setAttribute('class','list-group-item');
    chld.innerHTML = `start- ${start} -- end - ${end} -- ans - ${ans} -- egg - ${egg} -- count - ${count}`;
    elm.appendChild(chld);
}
