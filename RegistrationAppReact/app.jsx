// MODEL
class Model {
  constructor(){
    this.invities= [];  
    this.inputValue = null;
    this.check= null;
  }
  
  notify(render) { // cada vez que se añada un nuevo elemento se actualiza el DOM virtual
    this.render();    
  }  

  subscribe(render){
    this.render = render;
  }

  addInvities(text){
    if(text!=''){
      this.invities.push({
      input: text,
      confirmed: false,
      id: Utils.uuid()
    });
  }
      
   this.inputValue.value= '';
   this.notify();
  } 

  removeInvities(text) {
    this.invities = this.invities.filter(inv => inv!= text);
    this.notify();
  }
  isChecked(ivte, input) {
    ivte.confirmed = input.checked;
    this.notify();
  }
 
}

//VISTA
// primero maquetar
const Header = ()=>{
  return(
    <header>
          <h1>RSVP</h1>
          <p> Registration App </p>
          <form id="registrar" onSubmit={e=>{e.preventDefault();
            model.addInvities(model.input.value)}}>
            <input type="text" name="name" placeholder="Invite Someone" onChange={e=>(model.input=e.target)}/>
            <button type="submit" name="submit" value="submit" onClick={() => props.addInvities(invities)}>Submit</button>
          </form>
          <div className="main">
            <h2>Invitees</h2>
            <ul id="invitedList">{model.invities.map(item=><List key={item.id} model={model}/>)}
            </ul>
          </div>
    </header>
    );
}
const List = ({invitie, model}) => {
  return (
    <li className = {invitie.confirmed? 'responded':''}>
        {invite.name}
      <label>Confirmed<input type="checkbox" onChange={(e)=>model.isChecked(invitie, e.target)} checked={invitie.confirmed}/></label>
      <button onClick = {()=> model.removeInvitie(invitie)}>remove</button>
    </li>
  );
}



const App = () => {
  return(
  <div className = "wrapper">
      <Header/>
      <h2>Invities</h2>
      <ul id="invitedList">
        // falta Aquí
      </ul>  
  </div>

  );
} 

ReactDOM.render(<App/>, document.getElementById('container'));


