# NPAW Find Album App

=====> ***<a target="_blank" href="https://npaw-itunes-jorgepedraza.netlify.app/">LIVE DEMO</a>*** <=====

Here you can see my work on this project.
I am happy with the result, and I have managed to meet the objectives of the technical test.

## Stack
React, Vite, Material UI, Context API.

As a bonus, you asked to use Redux, but I still don't have the knowledge to use it. I really want to learn it.
Instead of Redux I have used Content API.

This is the second time I use Material UI, I would love to receive feedback to improve my code. 📝👍

## Project
An album browser connected to the Itunes API. The results are well divided and you can choose whether to see them in Grid format or in Vertical format.
In addition, there is also a pagination to find up to 100 results.

Above you have a link to test the app.

### Curiosities
The Itunes API returned artwork with 100x100, which caused the images to look blurry.
I have managed to load 400x400 images for better quality with the same API. Implementing this line.

`const cover = artworkUrl100.replace(/100x100/g, "400x400");`

I have done pagination with offset, this parameter did not come in the documentation

`https://itunes.apple.com/search?term=${search}&limit=20&offset=${offset}&entity=album`

I hope you like it, and I'm waiting for your feedback. Thank you for this opportunity!