export class Book {
    private isbn: string;
    private title: string;
    private author: string;
    private publicationYear: number;
    private isAvailable: boolean;

    constructor(isbn: string, title: string, author: string, year: number, available: boolean = true) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.publicationYear = year;
        this.isAvailable = available;
    }
    public getIsbn(): string {
        return this.isbn;
    }

    public getTitle(): string {
        return this.title;
    }

    public getAuthor(): string {
        return this.author;
    }

    public getPublicationYear(): number {
        return this.publicationYear;
    }

    public getIsAvailable(): boolean {
        return this.isAvailable===true;
    }
    
    public setIsAvailable(status: boolean): void {
        this.isAvailable = status;
    }
}
