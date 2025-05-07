import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., send data to an API
        console.log(formData);
    };

    return (
        <div className="contact-container">
            <div className="contact-form">
                <h1 className="contact-title">Contact Us</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label" htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-textarea"
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="form-button"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
