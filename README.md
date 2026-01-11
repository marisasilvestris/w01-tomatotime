# w01-tomatotime - What I done dang learned

## Requirements checklist

- 🟢 Ensure each section of the webpage is wrapped in the correct semantic tags, ensuring that includes a \<header\> \<nav\>, and \<footer\>
- 🟢 Implement CSS absolute positioning to overlay text on an image or another element.
- 🟢 Utilise CSS Flexbox to create a flexible and responsive layout, particularly in the \<nav\> element.
- 🟢 Ensure all image elements (\<img\>) and background images are correctly implemented with accurate file paths.
- 🟢 Deploy

### Stretch requirements

- 🟢 Create a “back to top” button.
- 🟢 Implement smooth scrolling for internal links to improve user experience.
- 🟢 Implement a hover effect on buttons to make them more interactive.
- 🟢 Create a basic footer with social media icons that link to social media pages.
- 🟠 Add a background music track that plays automatically when the website loads.
- 🟢 A lil' secret or two???

## Reflection

> tl;dr plan better, learn more

I tried to plan appropriately before commencing, interacting with the example site and trying to make an estimate as to how it was achieved, then drawing a quick box plan of my idea.  
I put the plan into place in a barebones HTML and CSS block model, and visually compared against the example making rough modifications until I felt the header, nav, main, and footer elements were broadly in place using the appropriate combinations of position: relative, position: absolute, flexbox, and viewport units.  
I themed what I had at that moment according to TT, basically just a lot of tomato colour, the occasional dark green, and using RGB background-colors to mark \<section\>s.  
At this point I used Chrome's inspect tool to compare my working model with the example site. I really should have done this before the theming step, but I just got doggone carried away, didn't I?  
Here I realised my original flexbox plan didn't really work, as I'd gotten my axes crossed and kept forgetting that it's largely one-dimensional, my nav and footer were an overcomplicated mess and worse in vertical aspect ratios. After fixing that it was a matter of small adjustments until I was satisfied with the whole page visually.

Implementing the stretch requirements was next on the cards! The Back-to-top button and social media footer were basically reapplying what had been learned thus far, and hover effects are simple pseudo-classes applied to existing elements (keeping in mind to apply only the rules to be changed).  
Audio was a small headscratcher despite the simplicity of the modern HTML \<audio\> element, as I continue to have problems with it firing correctly, although here I was thankful to have fixed the header flex as I could pretty much just pop the \<audio\> in there and forget about it (I was adamant on having visible controls because autoplay music's annoying, innit?).

Lastly, I chucked in some background-image secrets and spent _**way too long**_ making sure the key functionality in JS worked properly. I must have spent like 4 hours learning about key events and trying to plan an efficient way to both have a keyboard secret _and_ not have it interfere with the rest of the page experience. This included adding an eventListener for the secret popup to dismiss it upon click, adding a counter to track whether it had reached the limit of \<section\>s, and deciding to turn every keyboard button into a meow-horn. "Not interfere" indeed.

Finally figured out the scrolling buffoonery with the secret, too! Good grief, I was trying to over-engineer some kooky scheme with scrollTo and getting the new element's bounding box or whatever but that was a nightmare. scrollIntoView is a delight to find.

Honestly, after feeling like I had a bit of a stumbling start this week, I'm happier than I thought I'd be with it so far.

I've stuck a good deal of annotations in the CSS and JS files for some on-the-spot head-scratching nonsense, as well as some questions and a little extra reflection, feel free to check 'em out.

#### Things learned from evaluating against TT source:

2px border beneath each section, had completely missed it.  
Smooth scroll behaviour.  
More sensible flex layout behaviour.  
Transparency-related z-index shenanigans.

#### Third-party resources used:

Thanks to w3schools of all places for audio autoplay functionality info.  
MDN has been overwhelmingly useful for reading more about audio autoplay functionality, as well as learning to un-bone my original flexbox layout, but I'm still unsure as to why the audio autoplays _sometimes_, but not other times. Page interaction requirements, maybe?  
Double shout-out to MDN for helping DOM manipulation make a little more sense, as well as making it easier to understand how JS objects, methods, and properties daisy-chain to modify specifics.

## To improve

I should probably just research better, for a start. There's no shame in taking a look at the original source to begin with to make sure I'm setting off on the right foot, since I lost a decent amount of time to re-jigging. Not to mention, a little forethought would have saved some scroll and DOM insertion woes.  
Flexbox still melts my brain a little, grid will be even worse when we get to it, I get confused about the main/cross-axis specifics. I also get very muddled on which properties are applied to the parent or child. I think I would benefit from doing more of the prototyping in the inspector, for the property suggestions and instant feedback.

stay safe y'all  
marisa :black_cat:
