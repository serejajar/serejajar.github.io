function find(arr, search) {
  let result = -1

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]===search) {
        result = i
        break
    } 
  }
  return result
}


const books = ["Мастер и Маргарита" , "Гарри Потер", "Зa пропастью во ржи", "Властелин колец", "Дюна", "Отцы и дети"]
const addEl = document.querySelector('.addBtn');
const listEl = document.querySelector('.list');
listEl.style.listStyle = 'none';
const searchEL = document.querySelector('.searchBtn');

function renderList(arr){
    listEl.innerHTML = ""

    for (let i = 0; i < arr.length; i++) {
    
        let liEl = document.createElement("li");
        liEl.style.marginBottom='5px';
        
        liEl.textContent =`${i+1}) ${arr[i]}` ;
        listEl.append(liEl);
       
    }
    return
}
renderList(books)

addEl.onclick=function(){
    const newBook = prompt('Введите название книги')
    if (newBook ) {
        books.push(newBook)  
    } else{
        alert('Название книги не введено')
    }
   renderList(books)
  }

  searchEL.onclick = function(){
    let search = prompt('Поиск')
    const findIndex = find(books, search)
    if (findIndex> -1 ){
       const Elem = document.querySelector(`li:nth-child(${findIndex + 1})`)
       Elem.setAttribute('style', 'background-color:yellow;  padding:10px;  margin-right:5px')
        console.log(a);
    } else {
        alert('Книга не найдена')
    }
    
  }



       
        
 
    






