var colors = ["#ffee00","#ff0800ff","#00ff33ff"]
var index = 0;

function changecolor()
{
    if (index === colors.length - 1)
        index = 0;
    else
        index++;

    document.body.style.backgroundColor = colors [index]
}