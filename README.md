# Ginny's Web Gallery

## Dependencies
- NPM is absolutely required for the build scripts.
- Both `imagemagick` and `graphicsmagick` are required in order for `gulp downscale` to work.

## How to add pictures
Put new pictures in `images/raw` WITH APPROPRIATE NAMES: #.png, where # is substituted with the number of the image. Pictures will be displayed on the website in a specific order based on their filenames.

Then, run
```bash
$ gulp
```
to run the build scripts. This will asynchronously run
```bash
$ gulp downscale
```
which will populate the `images/downscaled` directory with downscaled versions of the pictures, and
```bash
$ gulp count
```
which will update the `script.js` file with the new amount of images.

Lastly, commit your changes and push them to the remote repository using
```bash
$ git add .
$ git commit -m '...an appropriate commit message...'
$ git push
```
