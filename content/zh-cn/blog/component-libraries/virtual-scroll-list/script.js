var container = document.getElementsByClassName("container")[0];
var containerHeight = container.getBoundingClientRect().height;
var overlay = document.getElementsByClassName("overlay")[0];
var list;
var _onScroll;

var generateList = function() {
  var count = document.getElementsByClassName("items-input")[0].value;
  list = document.createElement("ul");
  list.classList.add("list");
  list.classList.add("posAbs");
  container.appendChild(list);
  
  for (var i = 0; i < count; i++) {
    var li = document.createElement("li");
    li.classList.add("item");
    li.innerHTML = `item ${i}`
    list.appendChild(li);
  }
  
  overlay.classList.remove("visible");
}

var magic = function() {
  container.scrollTop = 0;
  var items = document.getElementsByClassName("item");
  var itemsLength = items.length;
  var itemHeight = items[0].getBoundingClientRect().height;

  var itemsObj = []

  Array.prototype.forEach.call(items, function(item, index) {
    itemsObj.push(item.innerHTML);
  });

  var scroller = document.createElement("div");
  scroller.classList.add("scroller");
  scroller.style.setProperty("height", itemsLength * itemHeight + "px", "");
  container.insertBefore(scroller, list);

  var maxItemsDisplayed = Math.ceil(containerHeight / itemHeight);

  var frag = document.createDocumentFragment();

  for (var i = 0; i < maxItemsDisplayed + 1; i++) {
    var li = document.createElement("li");
    li.classList.add("item");
    li.classList.add("posAbs");
    li.style.setProperty("top", i * itemHeight + "px", "");
    li.style.setProperty("height", itemHeight + "px", "");
    li.innerHTML = itemsObj[i];
    frag.appendChild(li);
  }

  list.innerHTML = "";
  list.appendChild(frag);
  list.style.height = containerHeight + "px";
  items = document.getElementsByClassName("item");
  itemsLength = items.length;

  _onScroll = function(e) {
    var scrollTop = e.target.scrollTop;
    var maxScroll = scroller.getBoundingClientRect().height - itemsLength * itemHeight;
    
    list.style.setProperty("top", scrollTop + "px", "");

    if (scrollTop > maxScroll) {
      for (var i = 0; i < items.length; i++) {
        items[i].innerHTML = itemsObj[itemsObj.length - (itemsLength - i)];

        /*
        * Dear future developer.
        * Because of an IE11 and MS-Edge bug with transform: translateY on list items and overflow: auto
        * on the container (the container's overflow values and thus the vertical scroll bar, is not
        * recalculated, if list items inside the container use both an absolute positioning
        * (e.g. top: 100px) and a translation in the opposite direction (e.g. translate(0, -50%)),
        * instead of simply setting the Y translation here, like this:
        *
        * items[i].style.setProperty("transform", "translate(0, -" + (scrollTop - maxScroll) + "px)", "important");
        *
        * we have to do the following:
        */

        items[i].style.setProperty("transform", "translate(0, 0)", "important");
        items[i].style.setProperty("top", i * itemHeight - (scrollTop - maxScroll) + "px", "important");
      }
      
      return
    }
    
    for (var j = 0; j < items.length; j++) {
      items[j].innerHTML = itemsObj[j + Math.min(Math.floor(scrollTop / itemHeight), (itemsObj.length - maxItemsDisplayed))];

      /*
      * The same IE bug, as above, is the reason, we cannot use this here:
      *
      * items[j].style.setProperty("transform", "translate(0, -" + scrollTop % itemHeight + "px)", "important");
      *
      * but instead have to use this:
      */

      items[j].style.setProperty("transform", "translate(0, -" + scrollTop % itemHeight + "px)", "important");
      items[j].style.setProperty("top", j * itemHeight + "px", "important");
    }
  }

  container.addEventListener("scroll", _onScroll);
  overlay.classList.remove("visible");
}

var reset = function() {
  var scroller = document.getElementsByClassName("scroller")[0];
  if (scroller) container.removeChild(scroller);
  container.removeChild(list);
  container.removeEventListener("scroll", _onScroll);
}

document.getElementsByClassName("magic-button")[0].addEventListener("click", function() {
  overlay.classList.add("visible");
  
  setTimeout(function() {
    magic();
  },1);
});

document.getElementsByClassName("items-input")[0].addEventListener("keydown", function(e) {
  var key = e.which || e.keyCode;
  if (key === 13) {
    overlay.classList.add("visible");
    
    setTimeout(function() {
      generateList();
    },1);
  }
});

document.getElementsByClassName("generate-button")[0].addEventListener("click", function() {
  overlay.classList.add("visible");
  
  setTimeout(function() {
    generateList();
  },1);
});

document.getElementsByClassName("reset-button")[0].addEventListener("click", function() {
  reset();
});