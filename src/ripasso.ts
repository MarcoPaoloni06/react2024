export {}

console.log("Ciao Marco");

//tipi primitivi
let i:number=0;
console.log(i);
let str:string="hello";
console.log(str);
let bool:boolean=true;
console.log(bool);

//array
let array = [1,2,"ciao",true];//array di tipi uniti
let array2:number[] = [1,2,3,4];
console.log(array);


//enumerazioni 
enum WeekDay{
  MONDAY,
  TUESDAY,
  WEDNESDAY
};

let myDay:WeekDay = WeekDay.MONDAY;
let dayArray:WeekDay[] = [
  WeekDay.MONDAY,
  WeekDay.TUESDAY,
]
console.log(myDay);
console.log(dayArray);

//Operazioni con gli array
console.log(array2);
array2.push(5);//aggiunge un elemento in fondo
console.log(array2);

let nuovoArray= array2.concat(6);
//crea un altro array con gli elementi di partenza 
//dell'array+ gli elementi che vogliamo aggiungere
console.log("array2",array2);
console.log("nuovoArray",nuovoArray);


const arrayImmutabile=[1,2,3];
console.log("arrayImmutabile",arrayImmutabile);
arrayImmutabile.push(4)
console.log("arrayImmutabile",arrayImmutabile);


//oggetti e strutture dati
let punto={
  x:3,y:7
};
console.log(punto);

export interface Point{
  readonly x:number,
  readonly y:number,
  readonly z?:number
}

const mioPunto: Point={
  x:5, 
  y:6
}; 
console.log(mioPunto)

//mioPunto.x=10; non più possibile perchè x è readonly
interface Point3D extends Point{
  z:number
}

const punto3D:Point3D={
  x:1,
  y:1,
  z:1
}
console.log(punto3D)

const { x, y, z } = punto3D;
console.log("x:",x);
console.log("y:",y);
console.log("z:",z);

const punto3D2: Point3D = { ...punto3D };
//creo un nuovo oggetto con le proprietà dell'oggetto Point3D
console.log("oggetti iniziali:");
console.log("punto3D:",punto3D);
console.log("punto3D2:",punto3D2);
punto3D2.z=2;
console.log("punto3D:",punto3D);
console.log("punto3D2:",punto3D2);



//funzioni
function sum(n1:number,n2:number):number 
{
  return n1+n2
}
console.log(sum(2,3));

interface Sum {
  (n1:number,n2:number):number;
}

const sum2 :Sum = (n1,n2) => {
  return n1+n2;
}
console.log(sum2(2,3));

interface PuntoConFunzione{
  readonly x:number;
  readonly y:number;
  readonly z?:number;
  readonly sum : Sum;
}

const mioPuntoConFunzione: PuntoConFunzione = {
  x:2,
  y:4,
  sum: (n1:number,n2:number) => {
    return n1+n2;
  }
}
console.log(mioPuntoConFunzione);
console.log(mioPuntoConFunzione.sum(2,3));


//funzioni classiche della programmazione funzionale

const arr12:number | null=null as any;
console.log(arr12);
//const risultato= arr12?.map(item=>(item%2)===0) ?? [];

const arr1 = [1,2,3]
const arr2=arr1.map(item=>item*2);
const arr3=arr1.map(item=>(item%2)===0);
console.log("arr1:",arr1);
console.log("arr2:",arr2);
console.log("arr3:",arr3);

const arr4=arr1.filter(item=>(item%2)===0);
console.log("arr4:",arr4);