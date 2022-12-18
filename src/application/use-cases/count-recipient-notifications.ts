import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface countRecipientNotificationRequest {
    recipientId: string;
}

type countRecipientNotificationResponse = {
    count: number;
}

@Injectable()
export class CountRecipientNotification {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(
        request: countRecipientNotificationRequest,
        ): Promise<countRecipientNotificationResponse> {
        const { recipientId } = request;
            
        const count = await this.notificationsRepository.countManyByRecipientId(
            recipientId,
        );

        return {
            count,
        };
    }
}
