const nodemailer = require('nodemailer');
let transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "f7ff268d927800",
        pass: "ab143c2ef98104"
    }
  });

  message = {
    from: "from@email.com",
    to: "to@email.com",
    subject: "Subject",
    html: "<h1>Hello SMTP Email</h1>"
}
