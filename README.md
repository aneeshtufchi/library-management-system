# Library Management System 

# Overview
  Library Management System is a simple application that allows users to perform basic operations such as adding books, borrowing books, returning books, and viewing available books in a library. The application is implemented in TypeScript and follows Test-Driven Development (TDD) principles.

# Technologies Used
-TypeScript
-Jest (for testing)

# Setup
1.Clone the repository:
 ```
 git clone <repository-url>
 ```
2.Install the dependencies:
  ```
  npm install
  ```
3.Run Tests
  ```
  npm test
  ```

# Test Report
 PASS  tests/library.test.ts
  Library Management System
    √ should add a new book to the library (2 ms)                                                                                      
    √ should throw an error when adding a book with duplicate ISBN (8 ms)                                                              
    √ should borrow a book if it is available                                                                                          
    √ should throw an error if the book is unavailable (1 ms)                                                                          
    √ should throw an error when trying to borrow a book that does not exist (1 ms)                                                    
    √ should return a borrowed book                                                                                                    
    √ should throw an error when returning a book that does not exist in the library (1 ms)                                            
    √ should return a list of all available books (1 ms)                                                                               
    √ should return an empty list when there are no available books (1 ms)                                                             
                                                                                                                                       
Test Suites: 1 passed, 1 total                                                                                                         
Tests:       9 passed, 9 total                                                                                                         
Snapshots:   0 total
Time:        2.269 s, estimated 3 s
Ran all test suites.