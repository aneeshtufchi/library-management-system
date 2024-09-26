import { Book } from "./book";

export class Library{
    private books:Book[]=[];

    addBook(book:Book){
        const existingBook=this.books.find((b)=>b.getIsbn()===book.getIsbn());
        if(existingBook){
            throw new Error('Book with this ISBN already exists');
        }
        this.books.push(book);
    }
    getAvailableBooks():Book[]{
        return this.books.filter(book=>book.getIsAvailable());
    }

};