import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = async (mailOptions) => {
    const info = await sgMail.send(mailOptions);
    console.log('Email sent successfully:', info[0].statusCode);
    return info;
};

export const verifyEmailTransporter = async () => {
    if (!process.env.SENDGRID_API_KEY) {
        console.warn('Warning: SENDGRID_API_KEY is not set. Email features will be unavailable.');
    } else {
        console.log('Email service (SendGrid) configured successfully.✅');
    }
};
