interface Occupancy {
    maxAdults: number;
    maxChildren: number;
    maxOverall: number;
}

interface CancellationPolicy {
    name: string;
    text: string;
    penalty: string;
    applicable: string;
    amount: number;
}

interface RatePlan {
    id: string;
    shortDescription: string;
    prePayment: string;
    prePaymentValue: number;
    prePaymentIsPercentage: boolean;
    longDescription: string;
    cancellationPolicy: CancellationPolicy;
}

export interface Room {
    id: string;
    name: string;
    longDescription: string;
    occupancy: Occupancy;
    disabledAccess: boolean;
    bedConfiguration: string;
    images: any[];
    facilities: any[];
}

export interface RoomObject {
    rooms: Room[];
    ratePlans: RatePlan[];
}