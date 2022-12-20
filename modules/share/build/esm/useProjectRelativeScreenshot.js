import { useEffect, useRef, useState } from "react";
import { useScreenshot } from "use-react-screenshot";
/**
 * Use https://www.npmjs.com/package/use-react-screenshot to get a blob of any component with the click a button

Upload the blob immediately using `processAsset`, which will result in a file in the file system.
*/
export var useProjectRelativeScreenshot = function () {
    var ref = useRef(null);
    var _a = useScreenshot(), image = _a[0], takeScreenshot = _a[1];
    var getImage = function () {
        takeScreenshot(ref.current);
    };
    var _b = useState(null), projectRelativeFilePath = _b[0], setProjectRelativeFilePath = _b[1];
    useEffect(function () {
        if (!image)
            return;
        console.log("got a base64 url I think", image);
        /*
    
    TODO:
    
    Convert base64 url to blob (I also did that for one of the asset inputs, I think)
    
    Extrahere `sendBlob` from `AssetInput` so I can upload the base64 generated blob programatically instead of with that component.
    
    Process the resulting temporaryUrl immediately using `api.processAssetUpload`, which will result in a file in the file system at my preferred `projectRelativeReferencingFilePath` destination.
    
    */
        //const asset:Asset = {};
        // const assets = []
        // api.processAssetUpload(assets)
        setProjectRelativeFilePath("jajajaj");
    }, [image]);
    return { getImage: getImage, projectRelativeFilePath: projectRelativeFilePath, ref: ref };
};
//# sourceMappingURL=useProjectRelativeScreenshot.js.map