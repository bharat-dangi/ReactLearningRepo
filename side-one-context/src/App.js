import React,{Fragment} from "react";
import Provider from "./provider"
import Context from "./context" 

// const GrandChild = (props) => {
//   return (
//     <div>
//       <h1>Grandchild:</h1>
//       <Child value={props.value} />
//     </div>
//   );
// };

// const Child = (props) => {
//   return (
//     <div>
//       <h1>Child: {props.value}</h1>
//     </div>
//   );
// };

// const App = () => {
//   const [brandName] = useState("Amazon");

//   return (
//     <div>
//       <h1>Hello</h1>
      
//       <GrandChild value={brandName}/>
//     </div>
//   );
// };

// export default App;

const Agents=()=>{
  return<AgentOne/>
}

const AgentOne=()=>{
  return <AgentTwo/>
}

const AgentTwo=()=>{
  return <AgentBond/>
}

const AgentBond=()=>{
  return (
    <Context.Consumer>
        {
          (context)=>(
            <Fragment>
              <h3>Agent Information</h3>
              <p>Mission Name:{context.data.mname}</p>
              <h2>Mission Status:{context.data.accept}</h2>
              <button onClick={context.isMissionAccepted}>Choose to Accept</button>
            </Fragment>
          )
        }
    </Context.Consumer>
  )
}

const App=()=>{
  return(
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents/>
      </Provider>
    </div>
  )
}

export default App;