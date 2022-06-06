
  let storedAmount=JSON.parse(localStorage.getItem('user')) ||''
  let inputAmount=document.getElementById('amount').value;
  
  let userlocal=()=>{
    let inputAmount=document.getElementById('amount').value;
    let total=Number(storedAmount)+Number(inputAmount)

    localStorage.setItem('user',JSON.stringify(total))
  }