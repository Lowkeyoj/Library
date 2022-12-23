const body = document.getElementsByTagName('body');
const library = [];

// takes in book name, author and pages then pushes it to the library
const constructor ={ 
index: 0,  
construct:function(book, author, pages){
     invoked = false;
     book = book.split(' ').join(' '); 
     book = {
      Book: book,
      Author: author,
      Pages: pages  
    }
    library.push(book);
     invoked = true;
     return this.index ++;
   } 
}

// displays the book name, author and how many pages
const display =  Object.create(constructor, {
    Display: function(index){
        for (key in library[index]){
            console.log(`${key}:${library[index][key]}`);
         }
        }
    });


// prompts a form to add a new book    
newBook = function(){
const body = document.getElementsByTagName('body');
const div = document.createElement('div');
const label = document.createElement('label');
const input = document.createElement('input');
const label2 = document.createElement('label');
const input2 = document.createElement('input');
const label3 = document.createElement('label');
const input3 = document.createElement('input');
const btn = document.createElement('button');
const form = document.createElement('form');
const con1 = document.createElement('div');
const con2 = document.createElement('div');
const con3 = document.createElement('div');

form.method = 'get';


btn.textContent = 'Submit';
btn.type = 'submit';
btn.style.height = '2em';
btn.style.width = '4em';

label.addEventListener('click', function() { input.focus()});
label.for = 'Book'
label.textContent = 'Book';

input.type = 'text';
input.id = 'Book';
input.required = true;

con1.append(label,input);

label2.addEventListener('click', function() { input2.focus()});
label2.for = 'Author';
label2.id = 'Author';
label2.textContent = 'Author';

input2.type = 'text';
input2.id = 'Author';
input2.required = true;

con2.append(label2,input2);

label3.addEventListener('click', function() { input3.focus()});
label3.for = 'Pages';
label3.id = 'Pages';
label3.textContent = 'Pages';

input3.type = 'number';
input3.id = 'Pages'; 
input3.required = true;

con3.append(label3,input3);

form.append(con1,con2,con3,btn);

div.append(form);


form.style.width = 'inherit';
form.style.padding = '10px';
form.style.display = 'grid';
form.style.gridtemplaterows = 'repeat(4, 1fr)';
form.style.rowGap = '10px';
body[0].appendChild(div);

div.style.position = 'fixed';
div.style.minHeight = '8rem';
div.style.width = '14rem';
div.style.left = '35%';
div.style.borderStyle = 'solid';

form.addEventListener('submit',test);

    function test(event) {
        let book = input.value;
        let author = input2.value;
        let pages = input3.value;
        constructor.construct(book,author,pages);    
        event.preventDefault();
        div.remove();
    }


};  





    
