import React, { Component } from 'react'
import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import { required, email } from 'bedrock-sdk/validators'
import { Textarea, Button } from 'bedrock-sdk/formHelpers'

class ContactForm extends Component {
  render () {
    return (
      <section id="contact">
        <h2>{this.props.title}</h2>
        <p id="form-intro">{this.props.formIntro}</p>
        <Form
          id="contact-form"
          name="contact"
          method="post"
          action="/contact-success"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input style={{ display: 'none' }} name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="input-wrapper">
            <Input name="name" placeholder="Name" validations={[required]} />
          </div>
          <div className="input-wrapper">
            <Input name="email" placeholder="Email Address" validations={[required, email]} />
          </div>
          <div className="input-wrapper">
            <Textarea name="message" placeholder="Message" validations={[required]} />
          </div>
          <Button className="submit-button pointer">Submit</Button>
        </Form>
        <style jsx>{`
          #contact {
            padding: 0;
            margin: 96px auto 46px;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 50%;
          }
          #form-intro {
            margin: 2.5rem 0;
          }
          @media screen and (max-width: 1023px) {
            #contact {
              width: calc(200% / 3);
            }
          }
          @media screen and (max-width: 640px) {
            #contact {
              width: calc(100% - 30px);
              padding: 0 15px;
            }
          }
        `}</style>
        <style jsx global>{`
          #contact-form {
            width: 100% !important;
            max-width: 1100px;
            margin-bottom: 50px;
          }
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
            margin: 0 0 1rem;
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
