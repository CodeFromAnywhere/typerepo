/**
 * Update frontmatter from a markdownfile by overwriting it, keeping old values that you don't change
 *
 * If you provide a folder as projectRelativePath, it stores it to README.md in that folder, even if that doens't exist.
 */
export declare const updateFrontmatter: (config: {
    projectRelativePath: string;
    frontmatter: {
        [key: string]: string;
    };
}) => Promise<{
    isSuccessful: boolean;
    message?: string;
}>;
//# sourceMappingURL=updateFrontmatter.d.ts.map