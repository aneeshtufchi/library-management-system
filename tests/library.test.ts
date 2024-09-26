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
});