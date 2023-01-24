import { takeFirst } from "js-util";
import { useRouter } from "react-with-native-router";
import { useStore } from "./store";
export var useVariantResult = function (fileContextualPromptResults) {
    var _a;
    var router = useRouter();
    var defaultVariant = useStore("generativeWeb.defaultVariant")[0];
    /**
     * Variant either comes from URL or from the stored default variant slug from localStorage
     */
    var variantResultPromptSlug = ((_a = router.query) === null || _a === void 0 ? void 0 : _a.variant)
        ? takeFirst(router.query.variant)
        : defaultVariant
            ? defaultVariant
            : undefined;
    var variantResult = fileContextualPromptResults === null || fileContextualPromptResults === void 0 ? void 0 : fileContextualPromptResults.find(function (x) { return x.contextualPromptSlug === variantResultPromptSlug; });
    return variantResult;
};
//# sourceMappingURL=useVariant.js.map