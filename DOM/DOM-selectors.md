<!--DOM Selectors
--------------
getElementsByTagName
getElementsByClassName
getElementById

querySelector
querySelectorAll

getAttribute
setAttribute

##Changing Styles
style.{property} //ok

className //best
classList //best

classList.add
classList.remove
classList.toggle

##Bonus
innerHTML //DANGEROUS

parentElement
children

##It is important to CACHE selectors in variables -->

## DOM Selectors


```javascript
  document.getElementsByTagName("h1");
```

```javascript
  document.getElementsByClassName("second");
```


```javascript
  document.getElementById("first");
```
---
```javascript
  document.querySelector("h1");
```
```javascript
  document.querySelector("li");
```

```javascript
  document.querySelector("All");
```

```javascript
  document.querySelector("li,h1");
```
---

```javascript
  document.querySelector("li").getAttribute("random"); //23
```
```javascript
  document.querySelector("li").setAttribute("random","1000"); 
```
```javascript
  document.querySelector("li"); //1000
```
---
## Changing Styles
```javascript
  document.querySelector("h1").style;
```
```javascript
  document.querySelector("h1").style.background = "yellow";
```
---
## Inner HTML
```javascript
  document.querySelector("h1").innerHTML = "<strong>!!!</strong>";
```
## Parent/Children
```javascript
  document.querySelectorAll("li")[1].parentElement;
```
```javascript
  document.querySelectorAll("li")[1].parentElement.parentElement;
```
```javascript
  document.querySelectorAll("li")[1].parentElement.parentElement.children;
```