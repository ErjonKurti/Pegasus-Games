import emailjs from 'emailjs-com';

emailjs.init('YOUR_USER_ID'); // Initialize with your user ID

function sendEmail() {
    const templateParams = {
        name: 'John',
        notes: 'Check this out!'
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
}

sendEmail(); // Call the function to send an email
