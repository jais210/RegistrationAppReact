// MODEL
class Model {
  constructor() {
    this.invitees = [];
    this.input = null;
    this.check = null;
  }
  addInvite(text) {
    if(text!=''){
      this.invitees.push({
        name: text,
        confirmed: false,
        id: Utils.uuid()
      });
    }
    this.input.value = '';
    this.notify();
  }
  removeInvite(text) {
    this.invitees = this.invitees.filter(item => item != text);
    this.notify();
  }
  isChecked(invite, input) {
    invite.confirmed = input.checked;
    this.notify();
  }
  subscribe(render) {
    this.render = render;
  }
  notify() {
    this.render();
  }
}
const Header = ({model})=>{
  return(
  <header>
  <h1>RSVP</h1>
  <p> Registration App </p>
  <form id="registrar"
    onSubmit={e => {
      e.preventDefault();
      model.addInvite(model.input.value);
    }}
  >
    <input type="text" name="name" placeholder="Invite Someone" onChange={e => (model.input = e.target)} />
    <button type="submit" name="submit" value="submit">Submit</button>
  </form>
</header>)
}
const List = ({ invite, model }) => {
  return (
    <li className={invite.confirmed ? 'responded' : ''}>
      {invite.name}
      <label>Confirmed<input type="checkbox" onChange={(e) => model.isChecked(invite, e.target)} checked={invite.confirmed} /></label>
      <button onClick={() => model.removeInvite(invite)}>remove</button>
    </li>
  );
}

const Application = ({ model }) => {
  return (
    <div className="wrapper">
      <Header model = {model}/>
      <div className="main">
        <h2>Invitees</h2>
        <ul id="invitedList">
          {model.invitees.map(item => <List key={item.id} invite={item} model={model} />)}
        </ul>
      </div>
    </div>
  );
}


let model = new Model();
let render = () => {
  ReactDOM.render(
    <Application model={model} />,
    document.getElementById('container')
  );
};

model.subscribe(render);
render(); 