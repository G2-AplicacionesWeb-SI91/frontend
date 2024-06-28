export class BusRoute {
    constructor(
        Id,
        BusName,
        OriginName,
        OriginCoord,
        DestinationName,
        DestinationCoord,
        TotalDistance
    ) {
        this.Id = Id;
        this.BusName = BusName;
        this.OriginName = OriginName;
        this.OriginCoord = OriginCoord;
        this.DestinationName = DestinationName;
        this.DestinationCoord = DestinationCoord;
        this.TotalDistance = TotalDistance;
    }

    static fromDisplayableBus(busRoute) {
        return new BusRoute(
            busRoute.Id,
            busRoute.BusName,
            busRoute.OriginName,
            busRoute.OriginCoord,
            busRoute.DestinationName,
            busRoute.DestinationCoord,
            busRoute.TotalDistance
        );
    }

    static toDisplayableBus(busRoute){
        return {
            Id: busRoute.Id,
            BusName: busRoute.BusName,
            OriginName: busRoute.OriginName,
            OriginCoord: busRoute.OriginCoord,
            DestinationName: busRoute.DestinationName,
            DestinationCoord: busRoute.DestinationCoord,
            TotalDistance: busRoute.TotalDistance
        }
    }
}