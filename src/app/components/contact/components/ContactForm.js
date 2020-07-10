import React from "react";
import Fields from "./formFields";
import axios from "axios";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSending: false,
      didSend: false,
      didError: false
    };
  }
  onSubmit = async e => {
    e.preventDefault();
    this.setState({ didSend: false, didError: false, isSending: true });
    let data = {};
    let i = 0;
    while (i < this.form.elements.length - 1 /* skip submit button */) {
      const { name, value } = this.form.elements[i];
      data[name] = value;
      i++;
    }

    const res = await axios.post(
      `${process.env.REACT_APP_EMAIL_API}send-email`,
      data
    );
    // .then(res => {
    console.log("res.status", res.status);
    if (res.status === 200 || res.status === 204) {
      this.setState({ didSend: true, isSending: false, didError: false });
    } else {
      this.setState({ didError: true, isSending: false, didSend: false });
    }
    // });
  };
  render() {
    const disabled = this.state.isSending;
    return (
      <div>
        <p className="message">Send me a message</p>
        {this.state.didError && (
          <p className="error">
            Oops! Something when wrong when seding your email. <br />
            If the problem persists give me a call at{" "}
            <a href="tel:6786404262">(678) 640-4262</a>.
          </p>
        )}
        <form onSubmit={this.onSubmit} ref={c => (this.form = c)}>
          <ul>
            {Fields.map((f, i) => {
              return (
                <li
                  key={`${f.id}-${i}`}
                  className={`input-wrapper${
                    f.input.type === "submit" ? " submit" : ""
                  }`}
                >
                  {f.label && (
                    <label htmlFor={f.label.for}>{f.label.text}</label>
                  )}
                  {this.state.didSend && f.input.type === "submit" && (
                    <li id="thankyou_message">
                      <p>
                        Thanks for reaching out! I'll get back to you shortly.
                      </p>
                    </li>
                  )}
                  {f.input.type !== "textarea" && (
                    <input
                      type={f.input.type}
                      name={f.input.name}
                      id={f.input.id}
                      placeholder={f.input.placeholder}
                      required={f.input.required}
                      value={f.input.value}
                      disabled={disabled}
                    />
                  )}
                  {f.input.type === "textarea" && (
                    <textarea
                      type={f.input.type}
                      name={f.input.name}
                      id={f.input.id}
                      placeholder={f.input.placeholder}
                      required={f.input.required}
                      value={f.input.value}
                      disabled={disabled}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </form>
      </div>
    );
  }
}

export default ContactForm;
