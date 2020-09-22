# Notes

### Basics

##### DOM selector:

* querySelector - Selects the properties it is specified to find and then show the elements of that. However it picks the very first one it finds.
* querySelectorAll - Selects ALL the properties it is specified to find and then shows the elements of them.
* getAttribute
* setAttribute

##### Changing styles:

* style.{property}
* className
* classList
* classList.add
* classList.remove
* classList.toggle

------

### Dom events

##### Event.target

The target event property returns the element that triggered the event. 

The target property gets the element on which the event originally occurred, opposed to the [currentTarget](https://www.w3schools.com/jsref/event_currenttarget.asp) property, which always refers to the element whose event listener triggered the event. 

Example:

```javascript
var x = event.target.tagName; //Using the event.target property together with the element.tagName property to find out which element triggered a specified event
```

------

##### appendChild()

The appendChild() method appends a node as the last child of a node. 

**Tip:** If you want to create a new paragraph, with text, remember to create the text as a Text node which you append to the paragraph, *then* append the paragraph to the document. 

Example:

```javascript
// Append an item in a list:
var node = document.createElement("LI"); // Create a <li> node
var textnode = document.createTextNode("Water"); // Create a text node
node.appendChild(textnode); // Append the text to <li>
document.getElementById("myList").appendChild(node); // Append <li> to <ul> with id="myList"
```

