export declare type CreatorMarkdownProperties = {
    /**
    DESCRIPTION: Only accessible to admin
     */
    isPrivate?: boolean;
    /**
     * DESCRIPTION: Don't show in the file explorer if you don't have access to this file. NB: only works in combination with pricing or `.isPrivate: true`
     */
    isSecret?: boolean;
    /**
     * DESCRIPTION: If authorizedGroup is set, file content will not be available for people that aren't part of this group.
     */
    authorizedGroup?: "" | "premium" | "enterprise";
    /**
     * DESCRIPTION:If true, will not show up in reader ui's
     */
    isDraft?: boolean;
    /**
     * DESCRIPTION: If this is a date in the future, the file won't be available until that date
     */
    isAvailableFromDateAt?: number;
};
//# sourceMappingURL=CreatorMarkdownProperties.d.ts.map