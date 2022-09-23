# LocalStorage and Event Delegation
`Localstorage()` , `e.preventDefault()`


e.preventDefault()  cancels the event without stopping future propagation of the event

this.reset() used to clear the input

localStorage.getItem('items', items)   - **this returns a 'string'**

so we need to change our object to a string using

  localStorage.setItem('items', JSON.stringify(items));
