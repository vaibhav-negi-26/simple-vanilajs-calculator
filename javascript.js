var inputlable = document.getElementById('inputlable');

function pushBtn(obj) {
    var pushed = obj.innerHTML;

    if (pushed == '=') {

        inputlable.value = eval(inputlable.value);

    } else if (pushed == 'C') {
        inputlable.value = '0';

    } else if (inputlable.value == '0') {
        inputlable.value = pushed;
    } else {
        inputlable.value += pushed;
    }

}
