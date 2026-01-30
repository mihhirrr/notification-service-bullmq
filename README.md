# Notification Service with BullMQ and Nodemailer

This is a basic notification service demonstrating the use of [BullMQ](https://bullmq.io/) for message queuing and [Nodemailer](https://nodemailer.com/) for sending emails. This service is designed for learning and testing purposes.

## Features

*   **Message Queuing:** Utilizes BullMQ to handle email sending tasks asynchronously.
*   **Email Sending:** Integrates Nodemailer to send emails via Gmail.
*   **Environment Variables:** Securely manages sensitive information (like Gmail password) using `dotenv`.

## Project Structure

*   `package.json`: Project metadata and dependency management.
*   `node-mailer.js`: Nodemailer transporter configuration for sending emails.
*   `producer.js`: Adds email jobs to the BullMQ queue.
*   `worker.js`: Processes email jobs from the BullMQ queue and sends emails.

## Getting Started

### Prerequisites

*   Node.js installed
*   Redis server running (BullMQ uses Redis for its queue)
*   A Gmail account and an App Password for that account (refer to [Nodemailer's documentation](https://nodemailer.com/usage/gmail/) for details on how to set this up).

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository_url>
    cd notification-service-bullmq
    ```
2.  Install dependencies:
    ```bash
    npm install
    ```

### Configuration

1.  Create a `.env` file in the root directory of the project.
2.  Add your Gmail app password to the `.env` file:
    ```
    GMAIL_PASSWORD=your_gmail_app_password
    ```

### Running the Service

1.  Start the Redis server (if not already running).
2.  Open two separate terminal windows.

3.  In the first terminal, start the worker:
    ```bash
    node worker.js
    ```
4.  In the second terminal, run the producer to add a job to the queue:
    ```bash
    node producer.js
    ```

You should see output in both terminals indicating the job being added and processed, and an email should be sent to the configured recipient.

## Dependencies

*   `bullmq`: ^5.67.2 - High performance Node.js queue library based on Redis.
*   `dotenv`: ^17.2.3 - Loads environment variables from a `.env` file.
*   `nodemailer`: ^7.0.13 - Send e-mails from Node.js.
*   `nodemon`: ^3.1.11 - Automatically restarts the node application when file changes are detected.
