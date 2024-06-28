export class Payment{
    constructor(
        Id,
        BusName,
        OriginName,
        DestinationName,
        TicketPrice
    ){
        this.Id = Id;
        this.BusName = BusName;
        this.OriginName = OriginName;
        this.DestinationName = DestinationName;
        this.TicketPrice = TicketPrice;
    }
    static fromDisplayablePayment(displayablePayment) {
        return new Payment(
            displayablePayment.Id,
            displayablePayment.BusName,
            displayablePayment.OriginName,
            displayablePayment.DestinationName,
            displayablePayment.TicketPrice
        )
    }
    static toDisplayablePayment(payment) {
        return {
            Id: payment.id,
            BusName: payment.busName,
            OriginName: payment.originName,
            DestinationName: payment.destinationName,
            TicketPrice: payment.ticketPrice
        };
    }
}