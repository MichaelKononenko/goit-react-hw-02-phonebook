import { ContactList, Filter } from "./contacts/Contacts";
import { GlobalStyle } from "./GlobalStyle.styled";
import { NewContactForm } from "./new-contact/NewContact";

const { Component } = require("react");

export class App extends Component{
    state = {
      contacts: [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
    }

    render(){
      return(
        <div style={{padding: "20px"}}>
            <GlobalStyle/>
            <div>
            <h1 style={{marginBottom: "20px"}}>Phonebook</h1>
            <NewContactForm submitHandling = {this.submitHandling} />

            <h2 style={{marginBottom: "10px"}}>Contacts</h2>
            <Filter contacts={this.state.contacts} setFilter={this.setFilter}/>
            <ContactList contacts={this.state.contacts} filter={this.state.filter} deleteContact={this.deleteContact}/>
          </div>
        </div>
      )
    }

    submitHandling = event =>{
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
          { id: 'id-'+id, name: name, number: number },
        ],
      });
      console.log(this.state.contacts);
   }
   setFilter = event =>{
    const inpuText = event.currentTarget.value;
    this.setState({filter: inpuText});
   }
   deleteContact = event =>{
    const targetId = event.currentTarget.id;
    console.log(targetId);
    this.setState(prevState => ({contacts: prevState.contacts.filter(item => item.id !== targetId)}))
   }
};
