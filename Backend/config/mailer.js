import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter using environment variables
export const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail', // e.g., 'gmail', 'outlook', or custom SMTP
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // App password, not regular password
    },
    // Optional: For custom SMTP server
    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
    // secure: true, // true for 465, false for other ports
});

export const sendMail = async (mailOptions) => {
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
        return info;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

export const verifyEmailTransporter = async () => {
    try {
        await transporter.verify();
        console.log("Email transporter verified successfully.✅");
    } catch (error) {
        console.error('Error verifying email transporter:', error);
        throw error;
    }
};
