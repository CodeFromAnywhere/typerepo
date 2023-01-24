import { makeArray } from "js-util";
import { useRouter } from "react-with-native-router";
/**
 * Returns the queryPath of your URL without everything after ? and #
 */
export var useQueryPath = function () {
    var router = useRouter();
    var queryPath = router.query.queryPath;
    var realQueryPathArray = queryPath ? makeArray(queryPath) : [];
    var realQueryPath = realQueryPathArray.join("/");
    return realQueryPath;
};
//# sourceMappingURL=useQueryPath.js.map