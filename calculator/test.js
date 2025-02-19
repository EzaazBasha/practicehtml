function display(val){
    document.getElementById('input').value+=val;
}

function clearscreen(){
    document.getElementById('input').value="";
}

function calc(){
    var x = document.getElementById('input').value
    var y = eval(x);
    document.getElementById('input').value=y;
}