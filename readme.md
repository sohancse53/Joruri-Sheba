1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Sol: 

     1.getElementById returns only a  element which is  specified by the  id.
     2.getElementsByClassName returns the list of the elements that use the same class 
     3.querySelector returns only the first element by css selector
     4.querySelectorAll return the collection of elements that is called by css selector
2.How do you create and insert a new element into the DOM?
sol:

    1.first of all i will do : const div = document.createElement("div");
    2.then add some innerText or InnerHtml inside it div.innerText="sohan";
    3,then append the div to its parent using parentDiv.appendChild(div);
3.What is Event Bubbling and how does it work?
sol:

     Event bubbling is a event propagation technique where event is propagated from child to parent. It is a bottom to top approach.
     It works like as an example: I have three div name first, second, and third. So we get the event order like third -> second -> first
4.What is Event Delegation in JavaScript? Why is it useful?
sol:

    event delegation is a event propagation technique where we add event only on the parent element then we can catch or target any  child element inside the parent.
    It is useful because we don't need to add event in all the element inside the parent. No need to use for loop, so the execution is very fast. 
5.What is the difference between preventDefault() and stopPropagation() methods?
sol:

     preventDefault() stops the default behavior of the browser like form loading on submit button click.
     
     stopPropagation() stops the event bubbling like it does not bubbled the event to its immediate parent.
      