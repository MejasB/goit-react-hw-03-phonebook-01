import React, { Component } from "react";
import PropTypes from "prop-types";

import {
  ButtonContainer,
  ContactFormContainer,
  InputContainer,
  LabelContainer,
} from "./ContactFormStyled";

class ContactForm extends Component {
  state = { name: "", number: "" };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.addNewContact({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <ContactFormContainer onSubmit={this.handleSubmit}>
        <LabelContainer htmlFor="name">Name</LabelContainer>
        <InputContainer
          type="text"
          id="name"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <LabelContainer htmlFor="number">Number</LabelContainer>
        <InputContainer
          type="tel"
          id="number"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
          value={this.state.number}
        />
        <ButtonContainer type="submit">Add contact</ButtonContainer>
      </ContactFormContainer>
    );
  }
}

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
};

export default ContactForm;
