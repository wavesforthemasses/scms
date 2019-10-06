const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp(functions.config().firebase);

// We have to import the built version of the server middleware.
const { sapper } = require('./__sapper__/build/server/server.js');
//import * as sapper from '@sapper/server';

middleware = sapper.middleware();

const oneHour = 60 * 60
const oneDay = oneHour * 24
const oneWeek = oneDay * 7
const oneMonth = oneWeek * 4
const oneYear = oneDay * 365
const emailSender = {
  service: 'gmail',
  auth: {
    user: '***@gmail.com',
    pass: ''
  }
}

exports.ssr = functions.https.onRequest((req, res) => {
  req.baseUrl = '';
  res.set(
    'Cache-Control',
    `public, max-age=${oneWeek}, must-revalidate, s-maxage=${oneMonth}, proxy-revalidate, stale-while-revalidate=${oneDay}, stale-if-error=${oneWeek}`
  );
  middleware(req, res);
});

if(emailSender && emailSender.auth && emailSender.auth.pass){
  let transporter = nodemailer.createTransport(emailSender);
}

exports.sendMail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    // getting dest email by query string
    const from = req.body.from;
    const name = req.body.name;
    const txt = req.body.txt;

    const mailOptions = {
      from: `${name} <${from}>`,
      to: 'Name <***@gmail.com>',
      subject: 'Subject',
      text: txt
    };

    if(!transporter) return res.send('You need to configure nodemailer first!');

    return transporter.sendMail(mailOptions, (erro, info) => {
      if(erro){
        return res.send(erro.toString());
      }
      return res.send('Sended');
    });
  });
});
