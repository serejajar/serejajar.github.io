const basket = ['Арбуз', "Книга", "Кофе", "Макароны", "Молоко", "Сахар", "Яблоки"]
const body = document.querySelector('body');
// add item
const addItem = document.createElement('button')
addItem.setAttribute('style', 'background-color:green; color:white; border:none; padding:10px; border-radius:5px; cursor:pointer; margin-right:5px')
 addItem.textContent = "Добавить товар"
 body.append(addItem)
// list
const listEL = document.createElement('ul');
listEL.setAttribute('style', 'list-style:none; padding:0')
body.append(listEL)



function renderList(arr){
   
    listEL.innerHTML = ""
       
       for (let i = 0; i < arr.length; i++) {
           const liEl = document.createElement('li');
           liEl.textContent = `${i+1}) ${arr[i]}`
           listEL.append(liEl)
       }
       
   }
   renderList(basket)

   function sort(arr){
    for (let i = 0; i < arr.length - 1; i++) {
       for (let j = 0; j < arr.length - 1 ; j++) {
        if (arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j]=arr[j+1]
        arr[j+1] = temp
    }
    }
        
    }
    return arr
   }

   addItem.onclick = function (){
   const newItem = prompt('Введите товар')
   if(newItem){
    basket.push(newItem)
   }else{
    alert("Название не введено")
   }
   const result = sort(basket)
   renderList(result)
   
   }