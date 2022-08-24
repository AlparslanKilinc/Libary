
class Library{
    constructor(){
        this.library=[];
    }

    addBook(book){
        this.library.push(book);
    }

    removeBook(book){
        let index = this.library.indexOf(book);
        this.library.splice(index,1);
    }

    getArray(){
        return this.library;
    }

    getBook(title){
        return this.library.find( (book) => book.title==title)
    }
}

class Book {
    constructor(title="unknown",author="unknown" ,pages=0 ,read=false){ 
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
    }
}


let library= new Library();
let content_box=[];
/// Document Elements
let form = document.getElementById("book-form");
let content= document.getElementById("content");

/// Form
let showForm= () => {form.style.display='flex';}
let closeForm= () => {form.style.display='none';}


/// Collect Data
let collectData = (event) =>{
    event.preventDefault();
    closeForm();
    // get book information from form
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read= document.getElementById("read").checked;
    /// create book and add it to library
    let book = new Book(title,author,pages,read);
    library.addBook(book);
    addToContent();
}

/// Adding Books to Content
let addToContent = () =>{
    content.innerHTML="";
    content_box=[];
    for(let book of library.getArray()){
        if (content_box.includes(book.title)) continue;
       content_box.push(book.title);
       let book_box = create_book_box(book);
       content.appendChild(book_box);
    }
}



let create_book_box = (book) =>{
    let box = document.createElement("div");
    let title= document.createElement("p");
    let author= document.createElement("p");
    let pages= document.createElement("p");
    let read_btn = document.createElement("button");
    let delete_btn=document.createElement("button");


    /// Delete
    delete_btn.textContent="Remove";  
    delete_btn.addEventListener("click", () => remove_Content(book)); 
    delete_btn.classList.add("delete_btn");

    /// Read Button
    read_btn.classList.add("read_btn");
    read_btn.addEventListener("click",() => update_read(book,read_btn));
    if(book.read){
        read_btn.textContent="Completed";
        read_btn.style.backgroundColor="#1DB954";
    } 
    else{
        read_btn.textContent="In Progress";
        read_btn.style.backgroundColor="#D22B2B";
    }

   
    title.textContent= "Title:"+" "+book.title;
    author.textContent="Author:"+" "+book.author;
    pages.textContent="Page Amount:"+" "+book.pages;
    

    box.appendChild(title);
    box.appendChild(author);
    box.appendChild(pages);
    box.appendChild(read_btn);
    box.appendChild(delete_btn);
    
    box.classList.add("book-box");
    return box;
}



let remove_Content = (book) =>{
    let index = content_box.indexOf(book.title);
    content_box.splice(index,1);
    library.removeBook(book);
    addToContent();
}

let update_read = (book,read_btn) => {
    book.read=!book.read;
    read=book.read;
    if(read){ 
        read_btn.style.backgroundColor="#1DB954";
        read_btn.textContent="Completed";
    } 
    else{
        read_btn.textContent="In Progress";
        read_btn.style.backgroundColor="#D22B2B";
    }
}

/// Place Holder Content: 
let dummy_book= new Book("Harry Potter and the Philospher's Stone","J.K. Rowling",223,true);
library.addBook(dummy_book);
addToContent();





