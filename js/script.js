let promise = fetch('../users.json')
/*fetch("users.json")*/
.then(function(response){

})
.then(function(data) {
  console.log(data[0])
  console.log(data[1])
  console.log(response);
  card(data)
})



/*let ftchF = fetch("../users.json")
   .then(function (response) {
    
   })*/
   
  function card(data){
    data.forEach(ele => {
        let container = document.querySelector('.container')
        let cardS = document.createElement('div')
        cardS.className = ('cardS')
        let div = document.createElement('div')

        cardS.appendChild(div)             
        container.appendChild(cardS)
    })
  }

  
  
  
  
  
  /*.then(function(data) {  <--non stampa in console
  console.log(ftch);
  console.log(response);
  console.log(data[0]);
  console.log(data[1]);
  arr = data;
  console.log(arr[0]);
  console.log(arr[1]);
  let lista = document.querySelector("#cars");
  data.forEach((element) => {
   arr.splice(1);
  })
})

function show() {
  let ftch = fetch("../users.json")
    .then(function (resp) {
      
    })
  }

  list.appendChild('#cars');
  console.log(ftch)  
  console.log(f);
  console.log(element);*/

   
































 