export interface ConsumptionDetails {
    accountNumber: number; // Integer type
    presentConsumption: number; // Number type
    consumptionInMonth: Record<string, number>; // Object with string keys and number values
    carbonFootprint: Record<string, number>;

}