# APIs

## What is an API  
* ### API is a set of commands, functions, protocols and objects that programmers can use to create software or interact with an external system.. 
* ### Some people considers API to be the contract between the data provider and developer.
---


* ### Endpoints

* ### Paths
* ### Parameter
* ### Aunthentication
---
## Endpoints

* ### Every API that interacts with a external system, like a server will have an endpoint.
* ### Different API has different endpoints.

---

* ### there's also APIs path and parameters that we can use in order to narrow down on a specific piece of data that we want from an external server.
* ### In order to allow the API to be flexible enough usually API allows us to provide parameters. parameters go at the end of url after a question mark& then there's a key value pair that goes into the url 
* ### Key is called 'contains'.
* ### If we want to have more than one parameter, we separate each of the key value pairs with an ampersand.


---
## API Authentication
* ### Every time we make a request through the API, they have to able to identify us as the developer, and keep track of how often we are using the their server.
* ### When we are testing APIS we use a tool called postman
* ### When we make our request to the openweatherMap servers the data that we get back is in json format.

---
## JSON
* ### Javascript Object Notation

* ### Somewhat similar to js syntax, there are couple of difference though for eg when we create an actual object in js, we always have a var or let keyword in front, we have the  name of object without any quotation marks around it because it's not a string  and inside our objects keys are never strings, they are simply written as they are.
* ### The reason why we use JSON to pass data around the internet because it's in a format that can be readable by a human, but it can also be easily collapsed down to take up as little space as psbl.
* ### JSON is not the only format in which we can recieve data from APIs
* ### Various APIs provides multiple formats for us to get data from like XML or HTML.
* ### Currently JSON is most favoured format because it's much lighter weight then other two & also very easy to turn back into a js object.
* ### JSON Viewer Awesome - Chrome Extension

