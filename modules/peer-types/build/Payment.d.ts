/**

- ship every operation, typerepo or not, to npm
- ship every operation, typerepo or not, to github
- ensure it's clear how to use every operation independently, with or witout typerepo
- let devs read about code, showing examples, and read pieces of code, by showing a library on website(s)
- let devs use code by installing with npm (only obfuscated build)
- sell code by allowing developers read-access for private organisation repos at fixed price + subscription
- bundle a platform, deployed on a server, that provides this access

For now, this seems to be enough. Courses usually don't make a lot of money, but if people start using King OS and Typerepo, this can be my initial way of making income. Later, it will be relatively easy to add support for:

- file/folder assets (one-time download)
- markdown reader content sections (file/folder, long-term subscription)
- newsletter content
- real items
- etc, etc.

In the end, a subscription to something like browse-puppy can easily be sold to companies for hundreds a month.

Later we can also make the credit function be applied on function execution, but this is more work, and harder to convince people for (more onboarding).
*/
import { RunEveryPeriodEnum } from "code-types";
import { DefaultModelType, Id, MarkdownModelType, Price, Slug, Credit } from "model-types";
/**
 * An actual payment that is being initiated, processed or happened
 */
export interface PaymentEvent extends DefaultModelType {
    personId?: Id;
    price: Price;
    status: unknown;
}
export interface PaymentSubscription extends DefaultModelType {
    personId?: Id;
    paymentPlanSlug: Slug;
    paymentPlan?: PaymentPlan;
}
/**
 *
 */
export interface PaymentPlan extends MarkdownModelType {
    /**
     * If there's a one-time price, it should be filled in here.
     */
    oneTimePrice?: Price;
    intervalPrice?: Price;
    /**
     * When does the payment occur?
     *
     * Leave undefined for one-time payments
     */
    paymentInterval?: RunEveryPeriodEnum;
    /**
     * How many credit are received?
     */
    credit?: Credit;
    /**
     * Description of the plan
     */
    markdown: string;
}
//# sourceMappingURL=Payment.d.ts.map