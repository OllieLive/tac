var xButton = document.querySelector('.x');
var oButton = document.querySelector('.o');
var ticBox = document.getElementById('#ticBox');

console.log(xButton);

var xando = [a1, a2, a3, b1, b2, b3, c1, c2, c3]
a1 = document.querySelector('.a1').id;
a2 = document.querySelector('.a2').id;
a3 = document.querySelector('.a3').id;
b1 = document.querySelector('.b1').id;
b2 = document.querySelector('.b2').id;
b3 = document.querySelector('.b3').id;
c1 = document.querySelector('.c1').id;
c2 = document.querySelector('.c2').id;
c3 = document.querySelector('.c3').id;
console.log(oButton);
// xando.forEach(element => {
//   // http://api.jqueryui.com/droppable/
//   // option(optionName, value)Returns: jQuery(plugin only)
//   // Sets the value of the droppable option associated with the specified optionName.

//   //   Note: For options that have objects as their value, you can set the value of just one property by using dot notation for optionName.For example, "foo.bar" would update only the bar property of the foo option.


// });
$(function () {
  $("#x").draggable({
    revert: "invalid",
    contaiment: "document",
    helper: "clone",
    cursor: "move"
  });
  $("#o").draggable({
    revert: "invalid",
    helper: "clone",
    cursor: "move"
  });
  $('#' + a1).droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      var newClone = $(ui.helper).clone();
      $(this).after(newClone);
    }
  })
  console.log(xButton);
  $('#' + a2).droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      var newClone = $(ui.helper).clone();
      $(this).after(newClone);
    }
  })
  console.log(xButton);
  $('#' + a3).droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      var newClone = $(ui.helper).clone();
      $(this).after(newClone);
    }
  })
  $('#' + b1).droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      var newClone = $(ui.helper).clone();
      $(this).after(newClone);
    }
  })
  $('#' + b2).droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      var newClone = $(ui.helper).clone();
      $(this).after(newClone);
    }
  })
  $('#' + b3).droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      var newClone = $(ui.helper).clone();
      $(this).after(newClone);
    }
  })
  $('#' + c1).droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      var newClone = $(ui.helper).clone();
      $(this).after(newClone);
    }
  })
  $('#' + c2).droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      var newClone = $(ui.helper).clone();
      $(this).after(newClone);
    }
  })
  $('#' + c3).droppable({
      activeClass: "ui-state-default",
      hoverClass: "ui-state-hover",
      drop: function (event, ui) {
        var newClone = $(ui.helper).clone();
        $(this).after(newClone);
      }

    })
    
      if (a1 == '#x') {
        console.log("win");
      } else if (a1 == '#o') {
        console.log("no");
      }
    

});