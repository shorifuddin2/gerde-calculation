 function calculate (){
    let a=parseInt (document.getElementById('bookOne').value)
    let b=parseInt (document.getElementById('bookTow').value)
    let c=parseInt (document.getElementById('bookThree').value)
    let d=parseInt (document.getElementById('bookFour').value)
    let e=parseInt (document.getElementById('bookFive').value)

    if(a>100 || b>100 || c>100 || d>100 ||e>100){
        alert("Please enter correct value");
    }
    else{
        var per = a+b+c+d+e;
        document.getElementById("obtain").innerHTML=per;
        var per=per/500*100;
        document.getElementById("per").innerHTML=per;
        if(a>=33 && b>=33 && c>=33 && d>=33 && e>=33){
            document.getElementById("remarks").innerHTML="<span style='color:#292'>Pass</span>";
        }
        else{
            document.getElementById("remarks").innerHTML="<span style='color:red'>Fail</span>";
        }
        if(per>=80){
            document.getElementById("grade").textContent="A+";
        }
        else if(per>=70){
            document.getElementById("grade").textContent="A";
        }
        else if(per>=60){
            document.getElementById("grade").textContent="A-";
        }
        else if(per>=50){
            document.getElementById("grade").textContent="B";
        }
        else if(per>=40){
            document.getElementById("grade").textContent="C";
        }
        else if(per>=33){
            document.getElementById("grade").textContent="D";
        }
        else {
            document.getElementById("grade").textContent="F";
        }
    }
}