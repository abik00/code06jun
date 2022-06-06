let storedAmount=JSON.parse(localStorage.getItem('user'))
document.getElementById('wallet_balance').innerText=(Number(storedAmount))

let data=JSON.parse(localStorage.getItem('purchase'))
data.map(({image,name,price})=>{
  let div= document.createElement('div')
  let named=document.createElement('p')
  named.innerText=name;
  console.log(name)
})
 