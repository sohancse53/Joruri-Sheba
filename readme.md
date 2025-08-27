## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 **sol:**
        1. getElementById returns only a  element which is  specified by the  id.
        2. getElementsByClassName returns the list of the elements that use the same class 
        3. querySelector returns only the first element by css selector
        4. querySelectorAll return the collection of elements that is called by css selector

## 2. How do you create and insert a new element into the DOM?
 **sol:**
        1. first of all i will do : const div = document.createElement("div"); <br>
        2. then add some innerText or InnerHtml inside it div.innerText="sohan"; <br>
        3. then append the div to its parent using parentDiv.appendChild(div);<br>
## 3. What is Event Bubbling and how does it work?
 **sol:**
       Event bubbling is a event propagation technique where event is propagated from child to parent. It is a bottom to top approach.
       It works like as an example: I have three div name first, second, and third. So we get the event order like third -> second -> first
## 4. What is Event Delegation in JavaScript? Why is it useful?
 **sol:**
    event delegation is a event propagation technique where we add event only on the parent element then we can catch or target any  child element inside the parent. <br>
    It is useful because we don't need to add event in all the element inside the parent. No need to use for loop, so the execution is very fast. 
## 5. What is the difference between preventDefault() and stopPropagation() methods?
 **sol:**
     1. preventDefault() stops the default behavior of the browser like form loading on submit button click. <br>
     2. stopPropagation() stops the event bubbling like it does not bubbled the event to its immediate parent.<br>
     3. the difference between preventDefault() and stopPropagation() is preventDefault() does not bubble the event, on the other hand stopPropagation() does not stops the default behavior.
