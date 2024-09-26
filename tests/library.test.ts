import { Book } from "../src/book";
import { Library } from "../src/library";

describe("Library Management System",()=>{
    let library:Library;

    beforeEach(()=>{
        library=new Library();
    })

    it("should add a new book to the library",()=>{
        const initialBookCount=library.getAvailableBooks().length;
        const book= new Book('1','2 States','Chetan Bhagat',2009);

        library.addBook(book);

        //Check if no. of books are increased by 1 after adding the book
        expect(library.getAvailableBooks().length).toBe(initialBookCount+1);

        //Check if the newly added book exists in the library
        expect(library.getAvailableBooks()).toContain(book);
    })

    it("should throw an error when adding a book with duplicate ISBN",()=>{
        const book1= new Book('1','2 States','Chetan Bhagat',2009);
        const book2= new Book('1','Three Men in a Boat','Jerome',1889);

        library.addBook(book1);
        expect(()=>library.addBook(book2)).toThrow('Book with this ISBN already exists');
    })

    it("should borrow a book if it is available", () => {
        const book= new Book('1','2 States','Chetan Bhagat',2009);
        library.addBook(book);
    
        // Borrow the book (in borrowing the book we provide the isbn no. as it is unique)
        library.borrowBook('1');
    
        // Check that the borrowed book is no longer available in the library
        expect(library.getAvailableBooks()).not.toContain(book);
    });

    it("should throw an error if the book is unavailable", () => {
        const book= new Book('1','2 States','Chetan Bhagat',2009);
        library.addBook(book);
        library.borrowBook('1');

        //Trying to borrow a book that's unavailable because it is already been borrowed should throw an error
        expect(() => library.borrowBook('1')).toThrow('Book is not available');
    });

    it('should throw an error when trying to borrow a book that does not exist', () => {
        const book= new Book('1','2 States','Chetan Bhagat',2009);
        library.addBook(book);

        //Trying to borrow a book thatis not present in the library 
        expect(() => library.borrowBook('3')).toThrow('Book not found');
    });

    it("should return a borrowed book", () => {
        const book= new Book('1','2 States','Chetan Bhagat',2009);
        library.addBook(book);
        library.borrowBook('1');
        library.returnBook('1');
    
        //Check that the book is now available again in the library
        expect(library.getAvailableBooks()).toContain(book);
    });

    it('should throw an error when returning a book that does not exist in the library', () => {
        const book= new Book('1','2 States','Chetan Bhagat',2009);
        library.addBook(book);
        library.borrowBook('1');

        //Trying to return a book that was never present in library
        expect(() => library.returnBook('3')).toThrow('Book not found');
    });

    it("should return a list of all available books", () => {
        // Add multiple books to the library
        const book1= new Book('1','2 States','Chetan Bhagat',2009);
        const book2= new Book('2','Three Men in a Boat','Jerome',1889);
        const book3 = new Book('3', 'Modern Physics', 'Einestein',1930);
        
        library.addBook(book1);
        library.addBook(book2);
        library.addBook(book3);

        // Get the available books
        const availableBooks = library.getAvailableBooks();

        // Check that the list of available books is correct
        expect(availableBooks.length).toBe(3); // Ensure there are 3 available books
        expect(availableBooks).toEqual([book1, book2, book3]); // Ensure  that the books are the same
    });

    it("should return an empty list when there are no available books", () => {

        // Check available books when the library is empty
        const availableBooks = library.getAvailableBooks();
        expect(availableBooks.length).toBe(0); // Ensure the list is empty
    });
});