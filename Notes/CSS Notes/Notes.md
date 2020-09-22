# Notes

------

### CSS syntactic rules:

```css
selector 
{
	property: value;
}
```

------

### Useful website

https://css-tricks.com/almanac - CSS properties

https://www.w3schools.com/cssref/css_selectors.asp - CSS selectors

https://specificity.keegan.st/ - Specificity calculator

https://css-tricks.com/snippets/css/a-guide-to-flexbox/ - Flexbox guide

https://www.w3schools.com/cssref/css3_browsersupport.asp - CSS browser support references

https://caniuse.com/ - To decide whether I can use the properties or not (for future webpages)

------

### Basic concepts

* If there are more than one change of context, the CSS file will take the last input it receives for the specific selector.
* While building the style in the CSS file, we wanna keep in mind that we want to build from the top to the bottom. For example: The <body> in the HTML file is the parent of almost everything, would be the top. And then, when we get more specific with the details, the lower we go towards the bottom. 

------

### Link the HTML file to CSS file

In the <head> element , link the CSS and HTML files. This is done through the <link> tag. This <link> tag allows us to link this HTML file to something else.

The prototype for <link>:

```html
<link rel="stylesheet" type "text/css" href="">
```

With an example from the lecture:

```html
<head>
    <title>My first website!</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

------

### CSS Units

CSS has several different units for expressing a length. Many CSS properties take "length" values, such as width, margin, padding, font-size, border-width, etc. Length is a number followed by a length unit, such as 10px, 2em, etc.



#### Absolute Lengths

The absolute length units are fixed and a length expressed in any of these will appear as exactly that size. They are not recommended for use on screen, because the screen sizes can vary a lot. However, they can be used if the output medium is known, such as for print layout.

* cm - centimeters
* mm - millimeters
* in - inches (1in = 96px = 2.54cm)
* px * - pixels (1px = 1/96th of 1in)
* pt - points (1pt = 1/72 of 1in)
* pc - picas (1pc = 12 pt)

Note: *Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.*



#### Relative Lengths

Relative length units specify a length relative to another length property. Relative length units scales better between different rendering mediums.

* em - relative to the font-size of the element (2em means 2 times the size of the current font)
* ex - relative to the x-height of the current font (rarely used)
* ch - relative to width of the "0" (zero)
* rem - relative to font-size of the root element
* vw - relative to 1% of the width of the viewport*
* vh - relative to 1% of the height of the viewport*
* vmin - relative to 1% of viewport's* smaller dimension
* vmax - relative to 1% of viewport's* larger dimension
* % - relative to the parent element

Note: *The em and the rem units are practical in creating perfectly scalable layout.*

*Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.*

------

### Cascading Style Sheet

Cascading style sheets at the most basic level it indicates that the order of CSS rules matter.

* .class - Selects the elements that are specified: class="specify".
* "#id" - Selects the elements that are specified: id="specify
* "*" - Selects all elements
* element1 - Selects all element1 elements.
* element1, element2 - Selects all element1's and all element2's
* element1 element2 - Selects all element2's inside element1's
* element1 > element2 - Selects all element2's where the parent is a element1
* element1+ element2 - Selects all element2's that are placed immediately after element1's
* :hover - Makes the hover effect on the specified element
* :last-child - Chooses the last element of its parent
* :first-child - Chooses the first element of its parent
* !important (not recommended) - Specifies the element is important and it overrides any other changes of that element.

What selectors win in the cascade depends on:

- Specificity - A useful website is posted on the tab [Useful website].
- Importance
- Source order

