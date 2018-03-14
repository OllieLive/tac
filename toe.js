
var xButton = document.querySelector('.x');
var oButton = document.querySelector('.o');
var ticBox = document.getElementById('#ticBox');
console.log(xButton);

var a1 = document.querySelector('#a1');
var a2 = document.querySelector('#a2');
var a3 = document.querySelector('#a3');
var b1 = document.querySelector('#b1');
var b2 = document.querySelector('#b2');
var b3 = document.querySelector('#b3');
var c1 = document.querySelector('#c1');
var c2 = document.querySelector('#c2');
var c3 = document.querySelector('#c3');
console.log(oButton); 
$ (function () {
  $("#x").draggable({revert: "invalid",
  contaiment:"document",
  helper: "clone",
  cursor: "move"
});
$("#ticBox").droppable({activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      var newClone = $(ui.helper).clone();
      $(this).after(newClone);}})
  $("#o").draggable({
    revert: "invalid",
    helper: "clone",
    cursor: "move"
  });
  $("#ticBox").droppable({
    activeClass: "ui-state-default",
    hoverClass: "ui-state-hover",
    drop: function (event, ui) {
      var newClone = $(ui.helper).clone();
      $(this).after(newClone);
    }
  })
});
