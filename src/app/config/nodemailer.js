import nodemailer from 'nodemailer'
const transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
user:process.env.EMAIL_USER,
pass:process.env.EMAIL_TOKEN
    }
})

export async function sendMail(to,subject,text){
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: text,
    };

    return transporter.sendMail(mailOptions);
}

