function handler(fn)
{
var a = Number(document.getElementById("i1").value);
var b = Number(document.getElementById("i2").value);
fn(a,b);
}



function add(a,b) {
    
    const sum = a + b;

    console.log('Result : ' +  sum);
    document.getElementById('i3').value=sum;
}


function sub(a,b) {
   
    const sum2 = a - b;

    console.log('Result : ' +  sum2);
    document.getElementById('i3').value=sum2;
}





function mutiply(a,b) {
   
    const sum3 = a * b;

    console.log('Result : ' +  sum3);
    document.getElementById('i3').value=sum3;
}





function div(a,b) {
   

    const sum4 = a / b;

    console.log('Result : ' +  sum4);
    document.getElementById('i3').value=sum4;
}



function rem(a,b) {
   

    const sum5 = a % b;

    console.log('Result : ' +  sum5);
    document.getElementById('i3').value=sum5;
}

function avg(a,b) {
    
    const sum6 = (a + b)/2;

    console.log('Result : ' +  sum6);
    document.getElementById('i3').value=sum6;
}



function reset(a,b)
{
    
    document.getElementById('i1').value="0";
    document.getElementById('i2').value="0";
    document.getElementById('i3').value="0";
    
}



// function custom(t,u,a)
// {
//     var x=Number(u*t + (0.5 * a*t*t));
//     console.log(x)
// }


// function result(){

//     document.getElementById('id3').innerHTML=addition();

//     addition();
//     sub();
//     mutiply();
//     div();
//     Rem();


// }