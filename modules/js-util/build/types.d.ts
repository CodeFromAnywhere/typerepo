export declare type KeysOfType<T, U> = {
    [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];
export declare type RequiredKeys<T> = Exclude<KeysOfType<T, Exclude<T[keyof T], undefined>>, undefined>;
export declare type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;
//# sourceMappingURL=types.d.ts.map