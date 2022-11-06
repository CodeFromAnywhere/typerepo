As OriginalGriff[^] states; this is usually part of the browser and it may seem ironic that improving your site's security is actually a bigger security risk for the end-user.

That said.. there are some tricks that you can attempt; keep in mind that your success may vary as browsers evolve, and what works today may fail tomorrow.

Change the control names. Instead of calling the inputs username and password; change them up a bit.
<input name="CredentialUsr" autocomplete="off" type="text" />
<input name="CredentialKey" autocomplete="off" type="password" />

Another trick I have seen is set the inputs to readonly and to then utilize the onfocus event to remove the readonly attribute
<input name="CredentialUsr" autocomplete="off" onfocus="this.removeAttribute('readonly');" type="text" />

I have also seen this one; where they add in username/password as hidden inputs, hoping that those values are used if the browser does try to save them.
<input name="username" type="hidden" />
<input name="password" type="hidden" />
<input name="CredentialUsr" autocomplete="off" type="text" />
<input name="CredentialKey" autocomplete="off" type="password" />
