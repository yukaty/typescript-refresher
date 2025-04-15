type EmailNotification = {
    type: 'email';
    emailAddress: string;
    sendEmail: () => void;
};

type PushNotification = {
    type: 'push';
    deviceToken: string;
    sendPush: () => void;
};

type AppNotification = EmailNotification | PushNotification;

const notify = (appNotification: AppNotification): void => {
    if ('sendEmail' in appNotification) {
        appNotification.sendEmail();
    } else {
        appNotification.sendPush();
    }
};

const emailNotification: EmailNotification = {
    type: 'email',
    emailAddress: 'taro.samurai@example.com',
    sendEmail: () => {
        console.log('Email notification sent.');
    },
};

const pushNotification: PushNotification = {
    type: 'push',
    deviceToken: 'abc123xyz',
    sendPush: () => {
        console.log('Push notification sent.');
    },
};

notify(emailNotification);
notify(pushNotification);