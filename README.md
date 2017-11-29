# savy
Auto-Save your content when editing in HTML input/textarea/single select/multiple select And restore values after refreshing

How to use:
-------------------------

1. Include jquery and savy JS files

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

3. initialize savy()

	```
   $('.auto-save').savy('load');
	```

4. destroy savy()

	```
   $('.auto-save').savy('destroy');
	```


TODO:
-------------------------
* callback when savy data is loaded
* add retention period for a value

Compatibility:
-------------------------

* IE8 and above, Firefox, Chrome, Safari and Opera


License:
-------------------------
Released under the MIT license
