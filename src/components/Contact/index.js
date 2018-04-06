import React, { Component } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import { required, email } from 'bedrock-sdk/validators'
import { Textarea, Button } from 'bedrock-sdk/formHelpers'

class ContactForm extends Component {
  render () {
    return (
      <section id="contact">
        <h2>Contact</h2>
        <Form
          name="book-tower-subscribe"
          method="post"
          action="/success-subscribe"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="flex items-center justify-center"
        >
          <div className="flex form-group">
            <input style={{ display: 'none' }} name="bot-field" />
            <input type="hidden" name="form-name" value="book-tower-subscribe" />
            <div className="input-wrapper">
              <Input name="name" placeholder="Name" validations={[required]} />
            </div>
            <div className="input-wrapper">
              <Input name="email" placeholder="Email Address" validations={[required, email]} />
            </div>
            <div className="input-wrapper">
              <Textarea name="message" placeholder="Message" validations={[required]} />
            </div>
            <Button className="submit-button pointer">Subscribe</Button>
          </div>
        </Form>
        <style jsx>{`
          #contact {
            padding: 0;
            margin: 0 30px;
          }
          form {
            max-width: 1100px;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 50px;
          }
          .form-group {
            width: 60%;
            max-width: 500px;
          }
          .input-wrapper div {
            width: 100%;
          }
          @media screen and (max-width: 30em) {
            .form-group {
              width: calc(100% - 30px);
            }
          }
        `}</style>
        <style jsx global>{`
          .error-msg {
            color: red;
            display: block;
          }
          input.is-invalid-input,
          textarea.is-invalid-input {
            border: 1px solid red;
          }
          input,
          textarea {
            outline: none;
            padding: 11px 8px;
            margin: 0 0 10px;
            width: calc(100% - 15px);
            box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
            font-size: 1rem;
            font-weight: 300;
            line-height: 1.5;
            border: 1px solid #cfcfcf;
          }
          .submit-button {
            appearance: none;
            outline: none;
            border: none;
            font-size: 16px;
            padding: .5rem;
            margin-top: 1rem;
            background-color: #cfcfcf;
            color: #ffffff;
          }
          .submit-button:hover {
            opacity: 0.9
          }
          [disabled].submit-button {
            cursor: default;
            opacity: 0.25;
          }
          [disabled].submit-button:hover {
            opacity: 0.25;
          }
        `}</style>
      </section>
    )
  }
}

export default ContactForm
