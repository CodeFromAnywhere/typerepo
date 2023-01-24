export declare const MAX_REGULAR_ITEMS_AMOUNT = 300;
/**
---
runEveryPeriod: minute
---


Cron that runs every minute for executing queue items.

Regular items: It will execute max `MAX_REGULAR_ITEMS_AMOUNT`

Browser items: You can set the amount of tabs it should have as a limit, and it will keep the tabs open afterwards, but after the thing is done it will just remove the item from the `Queue`.

Heavy items: functions with `.isHeavy: true` inside. Will execute max 1 every minute if the system isn't busy already.

- sort on priority high first
- filter out internet items if we are offline
- find single heavy item if it's there and if we're not busy
- find up to N (amount tabs available) queue items that require browser


 */
export declare const checkQueue: () => Promise<void>;
//# sourceMappingURL=checkQueue.d.ts.map