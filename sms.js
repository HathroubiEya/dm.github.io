// Function to send SMS using an API (replace with actual API details)
function sendSMS(phoneNumber, message) {
    // Replace 'api_key' and 'api_secret' with your actual credentials
    var apiKey = 'your_api_key';
    var apiSecret = 'your_api_secret';
    var apiUrl = 'https://api.smsprovider.com/send';

    var formData = new FormData();
    formData.append('api_key', apiKey);
    formData.append('api_secret', apiSecret);
    formData.append('phone_number', phoneNumber);
    formData.append('message', message);

    // Example using fetch API to send SMS
    fetch(apiUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to send SMS');
        }
        console.log('SMS sent successfully');
    })
    .catch(error => {
        console.error('Error sending SMS:', error);
    });
}
