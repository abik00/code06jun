let storedAmount=JSON.parse(localStorage.getItem('user'))
document.getElementById('wallet_balance').innerText=(Number(storedAmount))
 
 
 const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
 fetch(url)
 .then(function(res){
   return res.json()
 })
 .then(function(res){
   console.log(res[0].vouchers)  
   display(res[0].vouchers)
 })
 .catch(function(err){
   console.log(err)
  
 })

 function display(data){
   data.forEach(function(ele){
     let container=document.querySelector('#voucher_list')
     let div=document.createElement('div')

     let image=document.createElement('img')
     image.src=ele.image
     let name=document.createElement('h3')
     name.innerText=ele.name

     let price=document.createElement('h3')
     price.innerText=ele.price
     let btn=document.createElement('button')
     btn.class='buy_voucher'
     btn.innerText='buy'
     btn.addEventListener('click',()=>{
       let obj={
         image,
         name,
         price
       }
       addtocheakout(obj)
     })

     div.append(image,name,price,btn)
     container.append(div)

   })
 }
 let addtocheakout=(obj)=>{
   let arr=[]
   arr.push(obj)
   localStorage.setItem('purchase',JSON.stringify(arr))
 }
