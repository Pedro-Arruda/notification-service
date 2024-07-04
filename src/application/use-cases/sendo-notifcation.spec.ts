import { SendoNotification } from './sendo-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendoNotification();

    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'This is a content',
      recipientId: 'example-recipient-id',
    });
  });
});
