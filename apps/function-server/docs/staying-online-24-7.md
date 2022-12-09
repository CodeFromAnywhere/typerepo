A central idea to typerepo is the ability to make it easy for people to allow others to access their stuff in a peer to peer fashion. For this we came to the conclusion that it would be easiest to make everyone set up their own local homeserver.

The easiest way, according to my findings, is [localtunnel](https://localtunnel.me). You can expose your server of your localhost with `yarn lt`. If you want it to be on a static domain

# Ghetto routing

We've found that it's hard to set up a thing like this in a decentralised way, but it's still possible. The localtunnel IP may change, so we use the power of "ghetto routing" to ensure that your frontends always find their way to your local backend (that's running locally, on your laptop)

If the address of your backend changes, but you don't want to redeploy all your websites, we've built in some nifty way for your frontend to find your backend. It will search the address of your backend by scraping it on one of your socials. For example, if you always ensure your server address is available at your twitter bio, your websites won't need to be redeployed. It has the added advantage that people can easily find you even if you don't have websites, via peer to peer.

Of course, setting your server address into your twitter bio can easily be automated.

# Staying online 24/7

For your websites to be accessible, it is a requirement that your laptop or computer is running 24/7, with a stable internet connection. If your system isn't accessible, your websites won't be able to reach your server. Luckily, Next.js [ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) makes it possible to cache your static pages until there's a new connection again.
