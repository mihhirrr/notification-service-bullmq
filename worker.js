const { Worker } = require('bullmq')
const transporter = require('./node-mailer')

const sendEmail = async (job) => {
    const mailOptions = {
        from: "mihirdongare1045@gmail.com",
        to: job.data.email,
        subject: job.data.subject,
        text: job.data.body,
    };

    try {
        const info = await transporter.sendMail(mailOptions)
        return {
            message: `Email sent to ${job.data.email}`
        }
    } catch (error) {
        console.log(error)
    }
}

const worker = new Worker('email-queue', async (job) => {
    console.log(`Message received with Job ID:  ${job.id}`);
    console.log('Processing the job.');
    const response = await sendEmail(job);
    console.log(response.message)
}, {
    connection: {
        host: '127.0.0.1',
        port: '6379'
    }
});