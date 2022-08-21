
class Library{
    constructor(){
        this.library=[];
    }

    addBook(book){
        this.library.push(book);
    }

    removeBook(book){
        this.library.pop(book);
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
    console.log("12");
}


let create_book_box = (book) =>{
    let box = document.createElement("div");
    let title= document.createElement("p");
    let author= document.createElement("p");
    let pages= document.createElement("p");
    let read= document.createElement("p");
    
    title.textContent=book.title;
    author.textContent=book.author;
    pages.textContent=book.pages;
    if(book.read) read.textContent="Completed";
    else read.textContent="In Progress";

    box.appendChild(title);
    box.appendChild(author);
    box.appendChild(pages);
    box.appendChild(read);
    
    box.classList.add("book-box");
    return box;
}

/// Adding Books to Content
let addToContent = () =>{

    for(let book of library.getArray()){
        if (content_box.includes(book.title)) continue;
       content_box.push(book.title);
       let book_box = create_book_box(book);
       content.appendChild(book_box);
    }

}



