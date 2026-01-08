problem1:
const formatValue=(input:string|number|boolean):(string|number|boolean)=>{
    if (typeof input==="number"){
        return input*10
    }
    else if(typeof input==="string"){
        return input.toUpperCase()
    }
    else{
        return !input
    }
}



problem2:
const getLength=(input:string|Array<number|string>):number=>{

    if(typeof input ==="string"){
        return input.length
    }
    else if(Array.isArray(input)){
        return input.length
    }
    
}

problem3:
class Person{
    name:string;
    age:number;

    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    getDetails(){
        return `'Name: ${this.name}, Age:${this.age}'`
    }


}

problem4:
type Book={
    title:string,
    rating:number
}

const filterByRating=(value:Book[]):Book[]=>{
    return value.filter(book=>book.rating>=4)
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];
problem 5:
type FilterActiveUsers={
    id:number,
    name:string,
    email:string,
    isActive:boolean
}

const filterActiveUsers=<T extends FilterActiveUsers>(value:T[]):T[]=>{
    return value.filter(user=>user.isActive===true)
}


problem 6:

interface Book{
    title:string,
    author:string,
    publishedYear:number,
    isAvailable:boolean
}


const printBookDetails=(input:Book)=>{
    console.log(`Title: ${input.title}, Author: ${input.author},Published: ${input.publishedYear}, Available: ${input.isAvailable ? "Yes":"No"}`)
}

problem 7:
const getUniqueValues=(X:(number|string)[],Y:(number|string)[]):(number|string)[]=>{
    const uniqueArray:(number|string)[]=[]

    X.forEach(x=>{
        if(!uniqueArray.includes(x)){
            uniqueArray.push(x)
        }
    })

    Y.forEach(y=>{
        if(!uniqueArray.includes(y)){
            uniqueArray.push(y)
        }
    })

    return uniqueArray


}
