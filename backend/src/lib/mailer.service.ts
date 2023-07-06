import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import Mail from 'nodemailer/lib/mailer';
import { logger } from 'lib/logger';
export class MailService {
  private transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE as string,
      auth: {
        user: process.env.SMTP_SERVICE_EMAIL as string,
        pass: process.env.SMTP_SERVICE_PASSWORD as string,
      },
    });
  }

  // private transporter() {
  //   const transporter = nodemailer.createTransport({
  //     service: process.env.SMTP_SERVICE,
  //     auth: {
  //       user: process.env.SMTP_SERVICE_EMAIL,
  //       pass: process.env.SMTP_SERVICE_PASSWORD,
  //     },
  //   });
  //   return transporter;
  // }

  public async sendMail(templateName: string, recipientEmail: string, subject: string, templateData: any) {
    try {
      const templatePath = path.resolve(__dirname, '..', 'templates', `${templateName}`, `${templateName}.ejs`);

      const mailBody: string = await ejs.renderFile(templatePath, templateData);
      logger.info(mailBody);

      const mailOptions: Mail.Options = {
        from: `Audio Lounge ${process.env.SMTP_SERVICE_EMAIL}` as string,
        to: recipientEmail,
        subject: subject,
        html: mailBody,
      };

      await this.transporter.sendMail(mailOptions);
      logger.info('Email sent successfully');
    } catch (err) {
      logger.error('Error in  sending mail', err);
    }
  }
}
