import React from 'react';
import Fields from './formFields';

const ContactForm = () =>
    <div>
        <p className="message">Send me a message</p>
        <form
            id="form"
            action="https://script.google.com/macros/s/AKfycbyhthAKEEKBnlqLKVFsyfv6wmej4Q_0PKisv_S3xOv4YDtYCVw/exec"
            encType="multipart/form-data"
            method="POST"
        >
            <ul>
                {Fields.map((f, i) => {
                    return (
                        <li key={`${f.id}-${i}`}>
                            {f.label &&
                                <label htmlFor={f.label.for}>
                                    {f.label.text}
                                </label>}

                            {f.input.type !== 'textarea' &&
                                <input
                                    type={f.input.type}
                                    name={f.input.name}
                                    id={f.input.id}
                                    placeholder={f.input.placeholder}
                                    required={f.input.required}
                                />}
                            {f.input.type === 'textarea' &&
                                <textarea
                                    type={f.input.type}
                                    name={f.input.name}
                                    id={f.input.id}
                                    placeholder={f.input.placeholder}
                                    required={f.input.required}
                                />}
                        </li>
                    );
                })}
            </ul>
        </form>
        <div className="hidden" id="thankyou_message">
            <h2>
                <em>Thanks</em> for contacting us! We will get back to you soon!
            </h2>
        </div>
    </div>;

export default ContactForm;
