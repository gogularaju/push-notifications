const push = require('web-push');

const vapidKeys = {
    publicKey: 'BOiZP9BDP55PihPOblgbWrqBR2Y0BCTwgFllmwYAFxDRjKdSFhnV0vtjazYtoEpd4aQI8L1jwjzLf-M8rT8Jj_4',
    privateKey: 'mcuE75z67aXVTlJhvnL9k2yqgRMRUe8xA23yaJnfsoQ'
  }

push.setVapidDetails('mailto: abc@def.com', vapidKeys.publicKey, vapidKeys.privateKey);

const subscribtion = {}; //from server 

//const subscribtion = {"endpoint":"https://fcm.googleapis.com/fcm/send/dkTUAcT3zsg:APA91bEpNX1QPDGFXPA246nsKL-fjB7K-aeZR6bIshO6eqD2SGldmc3BuzFN3Sf2il93odxvwwMaY1PPGAVs4knMN2LzgqBvC3dMDX32GczwDaR0E3LLzGhGTEgn3Tgo6Yd2mZI36YZN","expirationTime":null,"keys":{"p256dh":"BERNTh3J269i7CI76jaoywb2H-E8wyHRT3h7ZAVFvnzGPIc0zKs_V94lY5hHpRzDYC1t4nzRPJjXSDKR8cHCZSA","auth":"meUM-WoqUB7zCuqFjE2p2Q"}}

push.sendNotification(subscribtion, 'Hey web push !');


