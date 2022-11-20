# Asset type

asset-type (`OperationClassification` cjs)

All types related to asset upload




# Docs

<details><summary>README.md</summary>
    
  Support different UX's for file uploading

- Audio recording (to mp3)
- Camera (to png)
- Video recording (to mp4)
- Audio upload in multiple formats (with conversion to mp3)
- Image upload in multiple formats (with conversion to png)
- File upload of any other file for download (pdf, docx, xlsx, csv, etc.)
- An alt text should always be able to be provided.
- A thumbnail should always be generated and stored in the same place.
- Uploading multiple files at once should be possible
- Choosing an already existing media from within King OS

Nice to have:

- Files can upload while the form is still loading, so this should be a separate endpoint
- Form should invalidate if the upload is still in progress
- Upload can be canceled or deleted after upload


### CDN

A connected CDN would be nice as well to save bandwidth and increase performance.


### Cleanup

A cleanup strategy would be great. If a model is deleted, all referenced assets should also be deleted if they are not referenced anymore. Also, when saving a `md`-file the assets that aren't referenced anymore should be removed (or moved to the global `/assets` folder). This way it is kept clean.


### conclusion

All in all, this would be a feasible way to store stuff on any SaaS product. It is quite interconnected to other things like `fs-orm`, but this is a nice Micro-SaaS in itself!

  </details>

<details><summary>implementation-choices.md</summary>
    
  # Model or no model for asset?

If we are going to work with a model, it will be hard to see what the asset is straight from the JSON since it just refers to the id. Also, the Assets are probably not going to be used anywhere else, except for in the media selector itself maybe, to find previous assets.

That is a problem however, because it will be extremely heavy and custom to search every db model for assets in there. But we need to do it anyway because if you add an asset without any ui, just by copying markdown, for example, because that will not be created in the asset model.

Hmmmm.... It's probably much easier attach it to hte model. Only objection would be performance. Let's try it first. Another good reason to attach it to the model directly is that you don't have any problems when accessing assets. it's completely authorized because the model you are accessing is authorized. You cannot access assets for models that you don't have access to.

Allright.... let's try without model.


### Implementation for progress for uploading

After some research, I came to the conclusion it's great to have upload progress for file upload.

Fetch has been trying to support ReadableStream, but it seems that it's not completely adopted yet, and also may never happen completely: https://github.com/whatwg/fetch/issues/1438

There are other ways though to show progress. It can be done with `axios`, but that would create a new dependency. As you can see here: https://stackoverflow.com/a/69400632, it seems that maybe the old fashioned and broadly supported `XMLHttpRequest` can easily do this. So why try to use any libraries or new stuff? Not needed....

  </details>

# Api reference

