const nodemailer = require('nodemailer');
 async function sendMail({from, to, subject, text, html}){
    let transporter = nodemailer.createTransport({
        host: process.env.Shost,
        port: process.env.Sport,
        secure:false,
        auth:{
            user: process.env.mailU,
            pass: process.env.mailP
        }
    });
    let info= await transporter.sendMail({
        from:`LetsShare <${from}>`,
        to:to,
        subject:subject,
        text:text,
        html:html
    });
    console.log(info);
}
module.exports = sendMail;