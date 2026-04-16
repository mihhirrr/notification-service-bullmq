const { Queue } = require('bullmq')

const notificationQueue = new Queue('email-queue', {
    connection: {
        host: 'redis',
        port: '6379'
    }
})

async function init() {
    const response = await notificationQueue.add("Send email!", {
        email: 'mihir.dongare@icloud.com',
        subject: 'BullMQ',
        body: 'This is Mihir Dngare, working on BullMQ'
    })
    console.log(`Job added to the queue with ID: ${response.id}`)
}

init();
