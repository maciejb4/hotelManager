import { Hotel } from "./HotelInterface";

export interface HotelDetailsProps {
    hotelData: Hotel;
    key: string;
    adultsNumber: number;
    childrenNumber: number;
}