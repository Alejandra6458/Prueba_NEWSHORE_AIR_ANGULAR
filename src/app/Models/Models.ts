export interface IJourney {
    id:               number;
    transportDetails: ITransportDetails;
    origin:           string;
    destination:      string;
    price:            number;
}

export interface ITransportDetails {
    id:            number;
    flightCarrier: string;
    flightNumber:  string;
}
