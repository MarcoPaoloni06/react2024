import React from 'react';
import { BrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom';
import UserList from './components/client-server/UserLiest';
// import styles from './App.module.scss';
// import logo from "./assets/logo512.png";
// import Display from './components/Display';
// import { useEffect } from 'react';
// import { useState } from 'react';
// import { useMemo } from 'react';
// import Counter from './components/Counter';
// import IntervalCount from './components/Intervalcount';
// import { TextComponent } from './components/TextComponent';
// import CounterWithObjectState from './components/CounterWithObjectState';
// import { MyCustomInput } from './components/MyCustomInput';
// import { PersonInput } from './components/PersonInput';
// import { MiddleComponent } from './components/MiddleComponent';
// import ToDoList from './components/todolist/TodoList';
// import { Button } from 'antd';




/*function calcolo(n:number) {
  console.log("esecuzione di calcolo con n:",n);
  return n*2;
}*/

export default function App() {
  //const [textNome,setTextNome] = useState<string>("");
  //const [textCognome,setTextCognome]= useState<string>("");
  // const [text,setText] = useState<string>("");
  // const [value, setValue] = useState(0);
  //const [value, setValue] = useState(10);
  
  /*const risultatoCalcolo= useMemo(()=>{ 
    return calcolo(value);
  },[value])*/
  
  //se nello useEffect si passa come lista di dipendenze l'array
  // useEffect(()=>{console.log("useEffect evento di mount con return");return ()=>{console.log("return dello useEffect in app");}},[])
  // useEffect(()=>{console.log("useEffect evento di mount2")},[])
  // console.log("App():");
  return <>
  <div>App Marco Paoloni</div>
  <BrowserRouter>
    <div>
      <div> <Link to={"/"}>Vai a home</Link></div>
      <div> <Link to={"userlist"}>Vai a userlist</Link></div>
      <div> <Link to={"counter"}>Vai a counter</Link></div>
    </div>
    <Routes>
      <Route path="/" element="" /> {/* 👈 Renders at /app/ */}
      <Route path="/" element="" /> {/* 👈 Renders at /app/ */}
      <Route path="/" element="" /> {/* 👈 Renders at /app/ */}
    </Routes>

  </BrowserRouter>
  
  


  {/*<UserList />*/}
  {/* <ToDoList /> */}
  {/* <IntervalCount/> */}
  {/*<Display />*/}
  {/* <TextComponent /> */}
  {/* MyCustomInput placeholder='Inserisci Nome' label='Nome' required={true}
    onChange={text =>//implementazione della callback 
    {console.log(text); setTextNome(text)}} />
    <div>{textNome}</div>
    <button onClick={()=>{setTextNome(textNome);}}>Salva</button> */}
  {/* <MyCustomInput placeholder='Inserisci Cognome' label='Cognome' required={true}
    onChange={text => 
    {console.log(text); setTextCognome(textCognome)}} />
    <div>{textCognome}</div>
    <button onClick={()=>{setTextCognome(textCognome);}}>Salva</button> */}
  {/* <MiddleComponent onChange={text =>//implementazione della callback 
  {console.log(text); setText(text)}} />
  <div>{text}</div> */} 
  {/*<Counter /> */}
  {/*<Counter initialvalue={value}/>
  <button onClick={()=>{setValue(20)}}>imposta a 20</button>
  <div>value: {value}</div> */}
  {/*<CounterWithObjectState />*/} 
  </>
}

// export default function App() {
//   return (<>
//   {/* <MyComponent/> */}
//   <CyclicRenderingComponent/>
//     <div className={styles.title}>
//       {/* <img src={logo} alt="logo" /> */}
//       <div>Fitstic</div>
        
//    </div>
//   </>);
// }

// const sum=(n1:number,n2:number)=>{
//   return n1+n2;
}

export function MyComponent() {
  let num:number=5;
  let str:string="hello";
  let bool:boolean=true;

  //Rendering condizionale con variabile di appoggio
  let val:JSX.Element | null = null;
  if(bool===true){
    val= <div>bool è true</div>
  }else{
    val= <div>bool è false</div>
  }

  let varAppoggio;
  switch(num){
    case 1:{
      varAppoggio= <div> num: 1</div>
      break;}
    case 2:{
      varAppoggio= <div> num: 2</div>
      break;
    }
    default:{
      varAppoggio= <div> Altro!</div>
    }
  }
  return <div>
    <h2>myComponent</h2>
    <div>num:{num}</div>
    <div>str:{str}</div>
    <div>bool:{bool} Attenzione i booleani non vengono visualizzati</div>
    {val}
    {/* Rendering condizionale con operatore ternario */}
    {bool===true
      ? <div>bool è true</div>  : <div>bool è false</div>}

    {/* Rendering  */}
    {bool===true && <div>bool è true</div>}
    {null}
    {varAppoggio}

    
    <div>Risultato somma:{sum(3,4)}</div>
  </div>
}

export function CyclicRenderingComponent() {
  let array= [2,"ciao",6,7];

  let arrayDiJsx=[];
  for(let i=0; i<array.length; i++){
    arrayDiJsx.push(<div key={i}> arrayDiJsx posizione {i}: 
                                  {array[i]}</div>)
  }


  return <>
    <h4>Rendering ciclico</h4>
    {array.map((item, index) => <div key={index}>Num {index}: {item}</div>)}
    {arrayDiJsx}
  </>

}



