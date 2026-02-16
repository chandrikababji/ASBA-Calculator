const myinput = document.getElementById('myinput');
function appendToInputbox(value) {
    myinput.value += value; 
}

function cleardata(){
   myinput.value='';
   myoutput.value='';
   alert('input & ouput data is cleared');
}

const myoutput = document.getElementById('myoutput');
function outputresult(){
     myoutput.value = eval(myinput.value); 
  
}