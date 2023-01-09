//Any//
// function model(document:any){
//     console.log(document);
// }

//Touples//
// let users : [number,string] = [1,'hello']

//enum//
// const enum Size {Small=1,Medium,Large}
// let mySize : Size = Size.Small
// console.log(mySize);

//Object//
// let employee :{
    // } = {id:1,name:'anshid'}
    
    //------------------------> Advanced Type <----------------------------//
//Type Aliases

// type Employee ={
//     id:number,
//     name:string    
// }

// let employee :Employee ={
//     id:2,
//     name:'anshy'
// }

//Union Types :-

// function KgToLbs(weight: number | string):number{
//     //Narrowing
//     if(typeof weight === 'number'){
//         return weight *10
//     }else{
//         return parseInt(weight)*10
//     }
// }

// KgToLbs(7)
// KgToLbs('8')


//Union Type :- 

// type Draggable ={
//     drag :()=> void
// }

// type Resizable = {
//     resize :()=> void
// }
// //union
// type UiWidget = Draggable & Resizable

// let textBox : UiWidget = {
//    drag:()=>{},
//    resize:()=> {}
// }

//Literal Types :-
//literal means (exact or specific)

// type Quantity = 50 | 100 ;
// let quantity : Quantity = 100 ;
//or
// type metric = 'cm' | 'inch';

//Nullable Types :-

// function greetings (name:string | null | undefined){
//     if(name){
//         console.log(name.toUpperCase())
//     }else{
//         console.log('Hola')
//     }
// }

// greetings(null)

// Optional Chaining :-

// type Customer = {
//     birthday :Date
// }

// function getCustomer (id:number):Customer | null | undefined {
//     return id === 0 ? null : { birthday : new Date()}
// }

// let customer = getCustomer(0)
// Optional property access operator
// console.log(customer?.birthday); 

//Optional element acess operator (This is array based)
// customer?.[0]

//Optional call operator
// let log : any = null;
// log?.('a')
