import { GlobalStyle } from "./GlobalStyle.styled";
import { NewContactForm } from "./new-contact/NewContact";

const { Component } = require("react");

export class App extends Component{
    state = {
      contacts: [],
      name: ''
    }

    render(){
      return(
        <div style={{padding: "20px"}}>
          <GlobalStyle/>
          <div>
          <h1 style={{marginBottom: "20px"}}>Phonebook</h1>
           <NewContactForm submitHandling = {this.submitHandling} />

          <h2>Contacts</h2>
          {/* <Filter/> */}
          {/* <ContactLis/> */}
        </div>
        </div>
      
      )
    }

    submitHandling = event =>{
      console.log(this.state.contacts);
      event.preventDefault();
      const id = this.state.contacts.length + 1;
      const form = event.currentTarget;
      const name = form.elements.name.value;
      const number = form.elements.number.value;
      console.log('name:', name, 'number:', number);
      this.setState({
        ...this.state,
        contacts: [
          ...this.state.contacts,
          { id: id, name: name, number: number },
        ],
      });

   }
};
