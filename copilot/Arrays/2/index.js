
 const rise = [117, 122, 231, 100, 121, 160, 140]
 const body = document.querySelector('body');
//добавить рост
 const addRiseBtn = document.createElement('button')
 addRiseBtn.setAttribute('style', 'background-color:green; color:white; border:none; padding:10px; border-radius:5px; cursor:pointer; margin-right:5px')
 addRiseBtn.textContent = "Добавить рост"
 body.append(addRiseBtn)
// фильтровать
 const filterBtn = document.createElement('button');
filterBtn.setAttribute('style', 'background-color:orange; color:white; border:none; padding:10px; border-radius:5px; cursor:pointer')
filterBtn.textContent = 'Фильтровать'
body.append(filterBtn)
//создать список
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
renderList(rise)


addRiseBtn.onclick = function(){
    const newRise = +prompt('Введите возраст')
    if (newRise){
        rise.push(newRise)
    } else {
        alert('Рост не введён!')
    }
    renderList(rise)
}


function filter(arr){
    const result = []
    for (let i = 0; i < arr.length; i++) {
        if (minRise <= arr[i]) {
            result.push(arr[i])
        }

        
    }
    return result
}

filterBtn.onclick = function(){
    minRise = +prompt('Введите минимальный возраст')
    const result = filter(rise)
    renderList(result)
}