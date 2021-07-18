export declare function isMobile(): boolean;
export declare function isDesktop(): boolean;
export declare function outIf<T>(condition: boolean, output: T, defaultValue?: any): T;
export declare function toBool(data: any): boolean;
export declare function validURL(url: string): boolean;
export declare function groupBy<T, K extends keyof T>(data: Array<T>, key: K): T[][];
export declare function except<T, K extends keyof T>(data: T, keys: Array<K>): T;
export declare function exceptMany<T, K extends keyof T>(data: Array<T>, keys: Array<K>): T[];
export declare function has<T>(keys: Array<T>, data: T): boolean;
export declare function only<T, K extends keyof T>(data: T, keys: Array<K>): T;
export declare function onlyMany<T, K extends keyof T>(data: Array<T>, keys: Array<K>): T[];
export declare function getLocale(): any;
export declare function formatCurrency(value: number, currency?: string): string;
