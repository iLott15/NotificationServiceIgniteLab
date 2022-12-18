import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { Notification } from "@application/entities/notification";

interface getRecipientNotificationRequest {
    recipientId: string;
}

interface getRecipientNotificationResponse {
    notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(
        request: getRecipientNotificationRequest,
        ): Promise<getRecipientNotificationResponse> {
        const { recipientId } = request;
            
        const notifications = await this.notificationsRepository.findManyByRecipientId(
            recipientId,
        );

        return {
            notifications,
        };
    }
}
