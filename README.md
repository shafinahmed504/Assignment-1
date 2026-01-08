# Assignment-1

5.Provide an example of using union and intersection types in TypeScript.

type Employee={
name:string
}
type Manager={
age:number
}

type Union_=Employee|Manager
type Intersection=Employee&Manager

1.What are some differences between interfaces and types in TypeScript?

1.Key word:
Type:type
Interface:interface

2.Type:is used to define the type of an object,variable,function
Interface:is used to define the structure of an object
