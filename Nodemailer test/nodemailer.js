const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'hieuntgch190423@fpt.edu.vn',
        pass: 'EarthDefender',
    },
});
const mailOptions = {
    from: 'hieuntgch190423@fpt.edu.vn',
    to: 'hieuntgch190423@fpt.edu.vn',
    subject: 'hello world!',
    html: 'This is an email sent by nodejs.',
};
transport.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    }
    console.log('Email sent: ' + info.response);
});