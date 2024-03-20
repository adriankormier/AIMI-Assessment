## Instructions:

1. Use bootstrap5 html framework to code the webpage. √
2. Image should only load when in viewport. √
3. Webpage must be responsive and must use grid structure. √
4. Use Vanilla Js/jQuery wherever is required, no external plugins allowed. √
5. Image box must always be square and image should always fill the box. √
6. Image should not lose its aspect ratio. √
7. Those boxes must be checkbox and image should be background image of those checkboxes. √
9. As the default property of checkbox, I should be able to select those image and selection should be highlighted with outline/border, selection part must be done using only css without any js. √

## Approach:
The main challenge here was interpretting exactly how the images and their loading should be implemented. Initially my thought was to simply use `<img loading="lazy">`, however since images should be the background of the checkboxes (which themselves can't be styled directly) my workaround was to use the label of the checkbox as it maintains selection functionality, allowing CSS to style the boxes upon selection. 

However, since lazy loading only applies to `<img>` elements, I elected to use the Intersection Observer (IO) API which allows functionality upon an element entering the viewport.

Ultimately, upon page load, 20 images are created. The IO then observes an invisible footer element at the bottom of the page, and when it is detected, loads 4 more images. This is easily modified, however 4 is enough to fill up any screen size and therefore create the space needed for the IO to detect changes upon scrolling down.