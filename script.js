
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

/// Document Elements
let form = document.getElementById("book-form");


/// Form
let showForm= () => {form.style.display='flex';}
let closeForm = ()=>{form.style.display='none';}


