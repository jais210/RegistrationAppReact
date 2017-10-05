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
const Li = () => {
  return (
    <li>

      <label>Confirmed<input type="checkbox"/></label>
      <button>remove</button>
    </li>
  );
}



const Header = () => {
  return(
  <header>
        <h1>RSVP</h1>
        <p> Registration App </p>
        <form id="registrar">
          <input type="text" name="name" placeholder="Invite Someone" />
          <button type="submit" name="submit" value="submit" onClick={() => props.addInvities(invities)}>Submit</button>
        </form>
        <div className="main">
          <h2>Invitees</h2>
          <ul id="invitedList" />
      </div>
  </header>
  );
} 

ReactDOM.render(<Header/>, document.getElementById('container'));


