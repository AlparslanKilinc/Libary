
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
    
    toString(){
        return this.title+ "\n" + this.author +  "\n" + this.pages
    }

}

let book1 = new Book();
let content= document.getElementById("Content");
console.log(content);

let text = book1.toString();
let text_box=document.createElement("p");
text_box.textContent= text;

let book = document.createElement("div");
book.classList.add("book-box");
book.appendChild(text_box)

content.appendChild(book);