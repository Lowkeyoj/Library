const body = document.getElementsByTagName('body');
const library = [];
const libraryContent = document.querySelector('.library');



// takes in book name, author and pages then pushes it to the library
const constructor ={ 
index: 0,  
cardCounter: 0,
hasRead: 0,
construct: function(book, author, pages){
   
     book = book.split(' ').join(' '); 
     book = {
      Book: book,
      Author: author,
      Pages: pages  
    }
    library.push(book);
     display.Display(this.index);
     
     return this.index ++;
    
   } 
}

// displays the book name, author and how many pages
const display = Object.create(constructor); 
    

    display.Display = function(index){
    tableContainer = document.createElement('div');    
    tableContainer.id = `tbcontainer-${this.index}`;
    libraryContent.append(tableContainer);
    let keys = Object.keys(library[index]);
    let value = Object.values(library[index]);
    for(i = 0; i < keys.length; i++){
        let pair = document.createElement('p')
        let container = document.createElement('div')
        container.append(pair);
        pair.textContent = `${keys[i]} : ${value[i]}`
        tableContainer.append(container);
    }
    let btnCon = document.createElement('div');
    let readBtn = document.createElement('button');
    let removeButton = document.createElement('button');  
    
    btnCon.id ='btncon';
    
    
    readBtn.id = `tbcontainer-${this.index}`;
    readBtn.textContent = 'Read';

    
    
    readBtn.addEventListener('click',function(){
        
        this.parentNode.parentNode.classList.toggle('read');
        if(this.parentNode.parentNode.className === 'read'){
          constructor.hasRead++;
        }else {constructor.hasRead--};
    })

    

    btnCon.append(readBtn,removeButton);
    
    removeButton.id = `tbcontainer-${this.index}`;
    removeButton.for = `tbcontainer-${this.index}`;
    removeButton.textContent = 'Remove';

    tableContainer.append(btnCon);
    removeButton.addEventListener('click', function()
    { 
      removeButton.parentNode.parentNode.remove();
      delete removeButton.parentNode.parentNode;
      constructor.cardCounter--;
         } )
    
   };




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
form.id = 'popup-form'

btn.id = 'popup-form-button';
btn.textContent = 'Submit';
btn.type = 'submit';


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

;
body[0].appendChild(div);


div.id = 'pop-up-form';

form.addEventListener('submit',addToLibrary);

    function addToLibrary(event) {
        let book = input.value;
        let author = input2.value;
        let pages = input3.value;
        constructor.construct(book,author,pages);    
        event.preventDefault();
        div.remove();
        constructor.cardCounter++;
    };
   invoked = true;
   
   
   
};  


     


