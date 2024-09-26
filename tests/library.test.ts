describe("Library Management System",()=>{
    let library:Library;

    beforeEach(()=>{
        library=new library();
    })

    it("should add a new book to the library",()=>{
        const initialBookCount=library.getAvailableBooks().length;
        const book= new Book('1','2 States','Chetan Bhagat',2009);

        library.addBook(book);

        expect(library.getAvailableBooks().length).toBe(initialBookCount+1);
    })

    it("should throw an error when adding a book with duplicate ISBN",()=>{
        const book1= new Book('1','2 States','Chetan Bhagat',2009);
        const book2= new Book('1','Three Men in a Boat','Jerome',1889);

        library.addBook(book1);
        expect(()=>library.addBook(book2).toThrow('Book with this ISBN already exists'));
    })
});