// Question1
class book{
    title;
    author;
    ISBN;

    constructor(title,author,ISBN){
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
    }
    checkOut(){
        console.log(this.title,"has been taken");
    }
    returnBook(){
        console.log(this.title,"has been returned");
    }
    updateTitle(newTitle){
        this.title = newTitle;
        console.log("the book title has been updated",newTitle);
    }    
}
var b1 = new book("wings of fire","APJ abdul kalam","1234");
b1.checkOut();
b1.returnBook();
b1.updateTitle("wings");
console.log(b1);


// question2
class product{
    name;
    price;
    category;

    constructor(name,price,category){
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(amount){
        console.log("applied 20% discount",this.price);
    }
    getPriceafterDiscount(){
        console.log("price after the discount is",this.price);
    }   
}
var p1 = new product("story book","500","reading");
p1.applyDiscount(100);
p1.getPriceafterDiscount();
console.log(p1);

// question3
class BankAccount{
    accountHolderName;
    accountNumber;
    balance;

    constructor(accountHolderName,accountNumber,balance){
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    Deposit(amount){
        console.log("amount has been deposited",this.accountNumber);    
    }
    Withdraw(amount){
        console.log("amount has been withdrawn",this.accountNumber);
    }
    getBalance(){
        console.log("current balance is",this.balance);
    }
}
var a1 = new BankAccount("priya","UNIB05234","5000");
a1.Deposit(2000);
a1.Withdraw(500);
a1.getBalance();
console.log(a1);

// question4
class vehicle{
    model;
    licensePlate;
    mileage;

    constructor(model,licensePlate,mileage){
        this.model = model;
        this.licensePlate = licensePlate;
        this.mileage = mileage;
    }
    drive(miles){
        this.mileage = milles+this.mileage;
        console.log("mileage after increasing",this.mileage);
    }
    getMileage(){
        console.log(this.mileage);
    }
}
var v1 = new vehicle("royal enfield","TS09765","50");
v1.drive(30);
v1.getMileage();
console.log(v1);

// question5
class student{
    name;
    grade;

    constructor(name,grade){
        this.name = name;
        this.grade = grade;
    }
    setGrade(newGrade){
        this.grade = newGrade;
    }
    getGrade(){
        console.log("current grade is",this.grade);
    }
}
var s1 = new student("Aadhya","B");
s1.setGrade("A");
s1.getGrade();
console.log(s1);

