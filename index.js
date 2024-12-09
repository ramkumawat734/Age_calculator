

window.onload = () =>{

    let btn = document.getElementById("btn");
    btn.addEventListener('click', calculate);
}

 function calculate(){
   
    const year = 24;

    let input = document.getElementById('Input').value;

    // console.log(typeof(input));
    // console.log(input);
      
    let num = input[0]+input[1]+input[2]+input[3];
     let ans = 2024-num;
    document.getElementById('spn').innerText = "your age is :"+ ans; 
     

 }