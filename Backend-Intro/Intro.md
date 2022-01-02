# BackEnd Development

## Back-End developer  
* ### They are the ones that are in charge of working with servers and databases. 
---
## To work with the Back-End,

* ### The main goal is to make sure that when we make a HTTP request from the Front-End then we get a response back as fast as possible with correct data.

* ### To make sure that we return those resources so that our Front-End team can be confident that we are going to receive exactly what we need.
---
## Server

* ### A server is just a computer; a computer that's somewhere in the world just listening to this HTTP connection.
* ### Server is responsible for whatever we get in the browser. 
* ### We can ask from the browser anything; such as "Go to google.com". 
* ### We just makes the request and the server gives us what we asked for. 

### The most basic of servers Hostgator a hosting site  It uses something called a 'LAMP STACK'.
### Apache is also a server, a program written by somebody that is good at accepting requests and sending out responses of files.
---
## **"Can we just download Apache server and run in our own server from our computer?"**
* ### Yes we can. But without having a server software,our computer is unreachable. 
* ### Nobody over the Internet can access our computer because our computer is not a server, (it) has no code that tells it "Hey, if I get a request, send this out." 
* ### But  we can create fake servers to test our websites. this was the old way of doing things.
---
* ### Now a new stack something we call an application server, an application server is different than our previous example because unlike using Apache server that is very simple and just does request response, just give files there and back. 

* ### With a Node server where we have Node.js running, we can write a script and say "If I receive a request for a log in then check the user's username in the database. If it matches then let me know and then send a response through JSON to the Front-End application. 

* ### So far we've only been able to use JavaScript on the web. But now, with Node.js, we can use it on a server, on a computer that isn't running a web browser.

---
* ### We're going to create a Node Server using a Express, We're going to create our own database where we store user information. And we're going to be using AJAX and JSON to constantly create, sign in, update user information.
---
## Load Balancer
* ### We have something called a 'Load Balancer'. And this is similar to what Apache or NginX would do. Where it listens for an HTTP request and it just balances the load of the servers. and it can keep growing this having more and more servers as you have more and more users. And finally you can even have multiple databases.

* ### These squares each represent a computer; a computer that's running a database, a computer that's running a server, a computer that's running a load balancer. And you can have multiple databases, again,so that they don't get overwhelmed with all these requests.


