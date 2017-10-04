// MODEL
class Model {
  constructor(){
    this.invities= []; // player contiene a mi array de objetos y será instanciado con New 
    this.inputValue = null;
  }
  
  notify(render) { // cada vez que se añada un nuevo elemento se actualiza el DOM virtual
    this.render();    
  }  

  subscribe(render){
    this.render = render;
  }

  addInvities(text){
      this.invities.push({
      input: text.value,
    });
   text.value= '';
   this.notify();
  } 

}

//VISTA
// primero maquetar

const Header = () => {
  return(
  <header>
        <h1>RSVP</h1>
        <p> Registration App </p>
        <form id="registrar">
          <input type="text" name="name" placeholder="Invite Someone" />
          <button type="submit" name="submit" value="submit">Submit</button>
        </form>
        <div className="main">
          <h2>Invitees</h2>
          <ul id="invitedList" />
      </div>
  </header>
  );
} 

ReactDOM.render(<Header/>, document.getElementById('container'));




// const form = document.getElementById('registrar');
// const input = form.querySelector('input');
// const ul = document.getElementById('invitedList');

// function createLI(text) {
//   const li = document.createElement('li');
//   li.textContent = text;
//   const label = document.createElement('label');
//   label.textContent = 'Confirmed';
//   const checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   label.appendChild(checkbox);
//   li.appendChild(label);  
//   const button = document.createElement('button');
//   button.textContent = 'remove';
//   li.appendChild(button);
//   return li;
// }

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   const text = input.value;
//   input.value = '';
//   const li = createLI(text);
//   ul.appendChild(li);
// });
  
// ul.addEventListener('change', (e) => {
//   const checkbox = event.target;
//   const checked = checkbox.checked;
//   const listItem = checkbox.parentNode.parentNode;
  
//   if (checked) {
//     listItem.className = 'responded';
//   } else {
//     listItem.className = '';
//   }
// });
  
// ul.addEventListener('click', (e) => {
//   if (e.target.tagName === 'BUTTON') {
//     const li = e.target.parentNode;
//     const ul = li.parentNode;
//     ul.removeChild(li);
//   }
// });  
  
  
  
  
  
  
  
  
  
  