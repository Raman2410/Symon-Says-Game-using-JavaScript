"use strict";

var gameSeq = [];
var userSeq = [];
var color = ["red", "green", "pink", "purple"];
var started = false;
var level = 0;
var h3 = document.querySelector('h3');
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = "Level ".concat(level); // random btn choose

  var randIndex = Math.floor(Math.random() * 4);
  var randColor = color[randIndex];
  var randBtn = document.querySelector(".".concat(randColor)); //  alert(randColor);

  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1500);
    }
  } else {
    h3.innerHTML = "Game Over Your Score was<b>".concat(level, "</b>.<br> Press Any key to Start.");
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector('body').style.backgroundColor = "#b408083b";
    }, 150);
    reset();
  }
}

function btnPress() {
  var btn = this;
  btnFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);
  checkAns(userSeq.length - 1);
}

var allBtn = document.querySelectorAll(".button");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = allBtn[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    btn = _step.value;
    btn.addEventListener("click", btnPress);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function reset() {
  started = false;
  userSeq = [];
  gameSeq = [];
  level = 0;
}

;