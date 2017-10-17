const Fields = [
    {
        label: { for: 'name', text: 'Name:' },
        input: {
            type: 'text',
            name: 'name',
            id: 'name',
            placeholder: 'Name',
            required: true
        }
    },
    {
        label: { for: 'email', text: 'Email:' },
        input: {
            type: 'email',
            name: 'email',
            id: 'email',
            placeholder: 'Email',
            required: true
        }
    },
    {
        label: { for: 'phone', text: 'Phone:' },
        input: {
            type: 'phone',
            name: 'phone',
            id: 'phone',
            placeholder: 'Phone',
            required: true
        }
    },
    {
        label: { for: 'message', text: 'Message:' },
        input: {
            type: 'textarea',
            name: 'message',
            id: 'message',
            placeholder: 'Message',
            required: true
        }
    },
    {
        input: {
            type: 'submit',
            name: 'submit',
            id: 'submit',
            placeholder: 'Send',
            required: true
        }
    }
];

export default Fields;
