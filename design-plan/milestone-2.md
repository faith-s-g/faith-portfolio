# Project, Milestone 2: Design Journal

[← Table of Contents](journal.md)


> **Replace ALL _TODOs_ with your work.** (There should be no TODOs in the final submission.)
>
> Be clear and concise in your writing. Bullets points are encouraged.
>
> Place all design journal images inside the "design-plan" folder and then link them in Markdown so that they are visible in Markdown Preview.
>
> **Everything, including images, must be visible in _Markdown: Open Preview_.** If it's not visible in the Markdown preview, then we can't grade it. We also can't give you partial credit either. **Please make sure your design journal is easy to read for the grader** (no side-ways images, etc.); in Markdown preview the **question _and_ answer should have a blank line between them**.


## GitHub Copilot Reflection
> Write a paragraph reflecting on your use of GitHub Copilot during this milestone.
> Your reflection should include how you used GitHub Copilot, how well it worked, what mistakes it made, and how you revised the code to produce a professional quality website from starting with its output. (~5 sentences)

The only time I used Github copilot for the final result was to generate the basic HTML structure for the content as optionally directed to in step 4. This was very helpful and saved me a lot of time; however, I did have to go over it and change some things that didn't make sense to me (ex. I didn't want the structure to use the "pre" tag) and I had to re-organize it a bit and change the order of things. Interestingly, I did try to use GitHub Copilot for the styling stage (step 5), but it was very unsuccessful. The AI output was incredibly overcomplicated, could not reflect the themes and stylings I wanted, and did not look. Ultimately, I scrapped it and coded the CSS styling on my own.

NOTE: Here is the HTML generation prompt (it gave me an error when I tried to put it at the top of an html file): Prompt used to help generate HTML skeletons tructure: Structure this content with HTML elements. Structure the content in your HTML files using appropriate HTML elements. Your markup must demonstrate a logical document hierarchy and adhere to all accessibility best practices covered in class. Remember, do not use div or span elements to structure your content! Ensure all media files are linked correctly from your HTML file

NOTE: when I tried to use AI copilot to generate a theme, this was the prompt I used (that didn't work):
here is the index html file code for context: Style this HTML file with CSS to create a professional, elegant personal portfolio website designed mobile-first for narrow screens. Use a light, pastel color palette (soft lavender, blush pink, mint, or warm cream tones, whatever is fitting) with enough contrast to ensure all text is clearly readable and meets accessibility standards. The design should feel clean and minimal with enough white space and no clutter. Use a modern sans-serif font pairing (a bold display font for headings and a lighter weight for body text). Navigation should appear below the page heading, stacked vertically as a simple menu. All content should be stacked in a single column as is fitting for mobile first designs. Images should be full width as is also fitting for mobile first designs. Cards or feature blocks (for projects or skills) should be full width with soft rounded corners and light shadows. Section layouts should feel structured and clear with subtle but visible visual separators between sections for readability and understanding. Avoid things like super bold colors, very heavy borders, etc. The overall feel should be calm, sophisticated, elegant, and easy to read like a polished and professional work and creative portfolio.



## References

### Collaborators
> List any persons you collaborated with on this project.

No collaborators.


### Reference Resources
> Did you use any resources not provided by this class to help you complete this assignment? (Do not list the course resources or the Mozilla documentation.)
> List any external resources you referenced in the creation of your project. (i.e. ChatGPT, etc.)
>
> Provide the URL to the resources you used and include a short description of how you used each resource. Include all prompts for any Ai usage.

These reference resources are available online and were also cited in the code:
- https://css-irl.info/css-halftone-patterns/ - used to help create the background dot pattern across pages
- https://htmlcolorcodes.com/colors/shades-of-white/ - html color codes for suggestions
- Used to help figure out background-image property: https://www.w3schools.com/css/css_background_image.asp

Additionally, some GenAI resources were used for design brainstorming and advice:
- Claude: prompt - How could I style an experience page for a personal project portfoliio that is clear, professional, and elegant? I have used the card format before but want ideas for more options.I just need ideas, not image generation. Additionally, consider only things for mobile-narrow screen devices, I will consider wide screens later.
  - Reflection: I used this to visually look at some standard options for what mobile designs could look like. However, I spent much more time looking at actual portfolio examples as there are many online, the reason I thought it coulld be helpful to use claude is that some of the online ones were way too busy/crowded or so interactive where it was hard to pick apart the layout. Additionally, the majority of online examples were mostly designed for wide screens not mobile. I used some elements of the claude generated layouts for mental guidance but didn't utilize most of it all (it included things that were too hard for me to implement, like timelines, or that I did not like the look of).
- Claude: prompt - I have some earthy green and pink tones that I'd like to include in my personal website portfoliio design. What are some other colors that could go in this theme/match? need color palette ideas with hex codes.
  - Reflection: This was extremely helpful and lots of different swatches of color were generated. I believe I'd try out a few of them but then tweak it using color picker to actually get what I wanted, but nonetheless this resource use was helpful for color guidance and ideas.
- Claude: prompt - What are some ways to change the opacity of an image in css? Can you do this using hexcodes to change the color?
  - I couldn't find what I wanted online well enough so I tried using this but didn't end up using the options given. Also I think you can't really use hexcodes to do this anyway.
- Claude: prompt - Is there a simple way to create some stylistic, asymmetrical overlays in CSS for different elements like a text box over an image?
  - I wanted to try to create this effect of having some of the text over the images and layered but it was too hard to achieve... and the majority of the claude code generated was not undersatndable to me so I did not want to use it. I now realized after class that you can use the z-indexes but at the time of me making these pages I didn't really know how to do that and still need to work on it more. Did not use this for the project but it was helpful in ruling out options.










[← Table of Contents](journal.md)
