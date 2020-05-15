//theese are calling variables to ues as constants in the js 
const txtName = document.getElementById("name");
const txtadress = document.getElementById("adress");

const intseat_no = document.getElementById("seat_no");

const theForm = document.getElementById("data");
const btnCost = document.getElementById("Cost");

btnCost.addEventListener("click", calculate);
//this is to run whe the cost button is clicked

function calculate() {
    const txtName = document.getElementById("name");
    const txtadress = document.getElementById("adress");

    if (theForm.checkValidity()) {
        event.preventDefault();
        //this is to get the ivalue for the choesn options 
        var g = document.getElementById("shows");
        var e = document.getElementById("type");
        var t = g.options[g.selectedIndex].value;
        var t_type = e.options[e.selectedIndex].value;
        //this iss adding thoose values up
        var first_total= (t_type+ t);
        //this is multiplying the number of seats bu the amount of tickets 
        var total = (first_total)*intseat_no;
        //theese if statment arte to work out the discounts 
    if ((intseat_no>=6)&&(intseat_no<10)){
        total = total- ((total/100)*10);
    }
    else if(intseat_no>=10){
        total = total- ((total/100)*15);
    }
    //this outputs the values 
    output.innerText = ('the total cost is £'+first_total+' for '+txtName+'at the address of '+txtadress);
    }
}
