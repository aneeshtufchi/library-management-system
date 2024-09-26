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

    borrowBook(isbn: string) {
        const book = this.books.find(b => b.getIsbn() === isbn);
        if (!book) {
          throw new Error('Book not found');
        }
        if (!book.getIsAvailable()) {
          throw new Error('Book is not available');
        }
        book.setIsAvailable(false);
    }
    
    returnBook(isbn: string) {
        const book = this.books.find(b => b.getIsbn() === isbn);
        if (!book) {
          throw new Error('Book not found');
        }
        book.setIsAvailable(true);
    }

    getAvailableBooks():Book[]{
        return this.books.filter(book=>book.getIsAvailable());
    }

};