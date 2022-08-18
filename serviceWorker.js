self.addEventListener('push', (e) => {
    const options = {
        body: 'this notification is generated from a push',
        icon: 'images/example.png',
        vibrate: [100, 50, 100],
        date: {
            dateOfArrival: Date.now(),
            primaryKey: '2'
        },
        actions: [{
            action: 'Approve',
            title: 'Approve the Request',
            icon: 'images/checkmark.png'
        }, {
            action: 'Reject',
            title: 'Reject the Request',
            icon: 'images/xmark.png'
        }]
    };

    e.waitUntil(self.registration.showNotification('Hello User !', options));
})