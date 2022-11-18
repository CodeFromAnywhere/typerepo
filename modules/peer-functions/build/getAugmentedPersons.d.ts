import { Device, Person } from "peer-types";
export declare const getAugmentedPersons: (devices: Device[], config?: {
    onlyWithDevices?: boolean | undefined;
    onlyWithPapi?: boolean | undefined;
    onlyOnline?: boolean | undefined;
    withAppsCalculated?: boolean | undefined;
} | undefined) => Promise<Person[]>;
//# sourceMappingURL=getAugmentedPersons.d.ts.map