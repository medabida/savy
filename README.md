# Savy
an ultra-light jQuery plugin that automatically saves form values in the client side (using HTML5 localStorage) and restore them on your next visit. A great solution to prevent data loss in case the browser is refreshed or the page is suddenly closed.

Supported elements:
-------------------------
- input (text/number/checkbox/radio)
- select (single/multiple)
- textarea

How to use:
-------------------------

1. Include jquery and Savy JS files

	```
	<script src="jquery.js"></script>
	<script src="savy.min.js"></script>
  	```

2. Create the following HTML element (each element must have a unique ID)

	```
    <form action="foo.php">
      First name:<br>
      <input id="fname" type="text" class="auto-save" name="firstname" value="Mickey">
      <br>
      Last name:<br>
      <input id="lname" type="text" class="auto-save" name="lastname" value="Mouse">
    </form>
	```

3. initialize Savy

	```
   $('.auto-save').savy('load');
   
   // you can pass a function to be called when savy is finished loading.
   $('.auto-save').savy('load',function(){
     console.log("All data from savy are loaded");
   });
	```

4. destroy Savy

	```
   $('.auto-save').savy('destroy');
   
   // you can pass a function to be called when savy is destroyed.
   $('.auto-save').savy('destroy',function(){
     console.log("All data from savy are destroyed");
   });
	```


TODO:
-------------------------
* ~~Support for single and multiple select~~
* ~~Support for checkbox and radiobutton~~
* ~~callback when savy data is loaded/destroyed~~
* add retention period for a value
* destroy a single value (currently: destroy will delete all Savy's data)
* reset user input when Savy is destroyed (currently: inputs will still contain their values)


Compatibility:
-------------------------

* IE8 and above, Firefox, Chrome, Safari and Opera


License:
-------------------------
Released under the MIT license
