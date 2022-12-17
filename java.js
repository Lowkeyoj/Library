const body = document.getElementsByTagName('body');
const library = [];
const constructor ={ 
    
    construct:function(book, author, pages){
     book = book.split(' ').join(' '); 
     book = {
      Book: book,
      Author: author,
      Pages: pages  
    }
    console.log(book);
    return library.push(book);
} }


const display =  {
    Display: function(index){
        for (key in library[index]){
            console.log(`${key}:${library[index][key]}`);
         }
        }
    }

newBook = function(){
const body = document.getElementsByTagName('body');
const div = document.createElement('div');
const label = document.createElement('label');
const input = document.createElement('input');
const btn = document.createElement('button');
btn.setAttribute('type','submit');
btn.addEventListener('click', function(){ return div.remove()});
label.setAttribute('for','test');
label.id = 'test';
input.setAttribute('type','text');
input.id = 'test';
div.append(label,input,btn);
body[0].appendChild(div);

};  


    
