const body = document.getElementsByTagName('body');
const libraryContent = document.querySelector('.library')


class Library {
    constructor(Title,Author,Pages){
        this.Title = Title,
        this.Author = Author,
        this.Pages = Pages
        
        Library.index += 1
        Library.totalBooks += 1
    } 
    
    static hasRead = 0;
    static totalBooks = 0;
    static index = -1;
    static storage = [];

    static create(Title,Author,Pages){
        return this.storage.push(new Library(Title,Author,Pages));
    }
};

class Display extends Library {
    static onPage (){
    let tableContainer = document.createElement('div');    
        tableContainer.id = `tbcontainer-${this.index}`;
        libraryContent.append(tableContainer);
    let keys = Object.keys(this.storage[this.index]);
    let value = Object.values(this.storage[this.index]);
    for(let i = 0; i < keys.length; i++){
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
          Library.hasRead++;
        }else {Library.hasRead--};
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
      Library.totalBooks--;
         } )
    }
};

class onInput extends Display{
    static newBook(){
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
            let Title = input.value;
            let Author = input2.value;
            let Pages = input3.value;
            Library.create(Title,Author,Pages)
            Display.onPage()
            event.preventDefault();
            div.remove();
        };
            
    }
}



