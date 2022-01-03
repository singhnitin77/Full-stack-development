# NodeJS

## What is an NodeJs  
* ### Until Node was created we could only run JavaScript in the browser because the browsers were the only ones that had a JavaScript engine like V8 and Node JS was created with the V8 engine in order to be able to run JavaScript anywhere including your computer including on robots and anywhere as long as you had Node JS.
* ### Node JS is probably most popular for building servers.
* ### It's fast and more and more companies are using it now as a back-end server because of the way that it's built.
* ### Node JS is probably the server of choice for any web apps or mobile apps out there that want to create an API or a server. 
* ### it's also really really good at building chat applications and realtime communication.

---
* ### To check Node,'node -v' 

* ### Johnny-5 is a JavaScript library that we can use with Node and if we have something like a Raspberry Pi, it helps us build functions using JavaScript that robots can perform.
* ### if we type 'node' and press Enter we'll see that the prompt changes now, and we can run Node in the terminal. If I do 'console.log('hi')' I get 'hi'. If I do '4 + 5' I get 9 and if we do'Boolean(3)'
* ### We're just running JavaScript but there is a bit of a difference here.
---
## Window & Document Object 
* ### If we type 'window' we get a 'ReferenceError: window is not defined'.
* ### This is because when we run Node we don't have the window object; the window object was provided to us by the browser.
* ### We also don't have the 'document' object,
* ### if we do 'document' again we get a reference error. 
```Javascript
document
Uncaught ReferenceError: document is not defined
```

```Javascript
window
Uncaught ReferenceError: window is not defined
```
---
* ### Node comes with 'global'. 
* ### 'global' has just like the window object had, a bunch of things that we can use but it won't have browser-specific things.

* ### For example we won't be able to have 'global.fetch' – it's undefined because it doesn't exist. That was provided to us by the browser.

* ### Node comes with its own properties and methods that we use but other than browser-specific things,

* ### One of the global objects that we have is called 'process'.

* ### In Node, 'process' means 'this process' – what we're running right now in the Terminal is the process, what the computer is doing.


* ### 'process.exit' exit this process and I'm back to Terminal.

---


