import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface SendoNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendoNotificationResponse {
  notification: Notification;
}

export class SendoNotification {
  async execute(
    request: SendoNotificationRequest,
  ): Promise<SendoNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      category,
      recipientId,
      content: new Content(content),
    });

    return { notification };
  }
}
