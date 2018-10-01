# facebook-reaction-counter

A Vue powered Facebook reaction counter

## Count reactions real time

1. Add your access token to `src/app.js`
1. Find your Page id using: http://findpostid.com/
1. Get your post id
1. Add your post id to `src/app.js`
1. Run index.html in browser

The page will refresh every second with an updated count of the reactions on your post.

## Count reactions real time with custom images

Ideal if you want to do a voting style post with reactions.

1. Add your access token to `src/app.js`
1. Find your Page id using: http://findpostid.com/
1. Get your post id
1. Add your post id to `src/app.js`
1. Update the placeholder images with your own images
1. Run imageAndReaction.html in browser

You can remove the cards you don't need so that you are only left with the reactions you want.
e.g if you are only using two images to vote and want to use 'wow' and 'haha' then remove all the other divs but those two and they will continue to update on the page as normal.
Any overflow of the image will be cropped to keep the card looking nice
The page will refresh every second with an updated count of the reactions on your post.
