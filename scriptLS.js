// let todoarr = [];
//let zz = [];
let flag2 = 100;
let localarr = [];
let itemsArray = [];
let items = "";
let flag1 = 5;
const ul = document.getElementById("list1");
const input1 = document.getElementById("item1");
const input2 = document.getElementById("item2");
const ultodo = document.getElementById("todo1");

function arxi() {
  ultodo.innerHTML = "";
  localarr = [];
  for (var i = 0, len = localStorage.length; i < len; ++i) {
    localarr.push(localStorage.key(i));
  }
  localarr.forEach(show11);
}

arxi();

function show11(text) {
  const deta = document.createElement("details");
  deta.innerHTML = "<summary >" + text + "</summary>"; //onclick='myfun2(\"" + text + "\")'
  ultodo.appendChild(deta);
}

const details = Array.from(document.querySelectorAll("details"));

details1();

function details1() {
  const details = Array.from(document.querySelectorAll("details"));

  details.forEach((targetDetail) => {
    targetDetail.addEventListener("click", () => {
      // Close all details that are not targetDetail
      details.forEach((detail) => {
        if (detail !== targetDetail && !targetDetail.open) {
          detail.removeAttribute("open");
        }
        if (detail == targetDetail) {
          todonotesopen(targetDetail.textContent);
        }
      });
    });
  });
}

function todonotesopen(z1) {
  document.getElementById("container").setAttribute("style", "display:block");
  document.getElementById("todoh1").innerHTML =
    "Items for Array:   <span id='span1'>" + z1 + "</span>";
  anyopen(z1);
  document.getElementById("todo2").style.visibility = "hidden";
  if (z1 == "Menu") {
    document.getElementById("item1").setAttribute("disabled", "");
    document.getElementById("item1").value = itemsArray.length;
  } else {
    document.getElementById("item1").removeAttribute("disabled");
    document.getElementById("item1").value = "";
  }
}

function myfun11() {
  let flag100 = 0;
  list: {
    let xyz = document.getElementById("text7").value;
    if (xyz == "") {
      flag100 = 1;
    }
    localarr.forEach((e) => {
      if (e == xyz) {
        flag100 = 1;
      }
    });
    if (flag100 == 1) {
      document.getElementById("alert-box").style.display = "block";
      setTimeout(() => {
        document.getElementById("alert-box").style.display = "none";
      }, "3000");
      document.getElementById("text7").value = "";
      document.getElementById("text7").focus();
      break list;
    }
    localarr.push(xyz);
    document.getElementById("text7").value = "";
    // todoarr.push(xyz);
    let mm = [["NewItem", "None"]];
    localStorage.setItem(xyz, JSON.stringify(mm));
    show11(xyz);
    xx = localarr.length - 1;
    details1();
    const details = Array.from(document.querySelectorAll("details"));
    details[xx].click();
  }
}

// ================= Combine ----------------------
function anyopen(z1) {
  items = z1;
  itemsArray = localStorage.getItem(items)
    ? JSON.parse(localStorage.getItem(items))
    : [];
  ul.innerHTML = "";
  itemsArray.forEach(addTask);
}

function addTask(text) {
  let x1 = ": ----->    ";
  const li = document.createElement("li");
  li.innerHTML = `
  <button class="delete-button" style="margin-right: 10px;">X</button>
  ${text[0]}  ${x1}     
  ${text[1]} 
  <button class="button1" style="float: right; font-size: 18px; background-color: green; color: white">Move</button>

`;
  ul.appendChild(li);
}

function add() {
  if (input1.value !== "" && input2.value != "") {
    itemsArray.push([input1.value, input2.value]);
    localStorage.setItem(items, JSON.stringify(itemsArray));
    addTask([input1.value, input2.value]);
    input1.value = "";
    input2.value = "";
  }
}

function del() {
  if (confirm("The Array will be Deleted") == true) {
    localStorage.removeItem(items);
    ul.innerHTML = "";
    itemsArray = [];
    document.getElementById("tododel").click();
    arxi();
    details1();
  }
}

function cancel1() {
  document.getElementById("container1").style.display = "none";
  document.getElementById("container").style.display = "block";
}
function ok1() {
  document.getElementById("container1").style.display = "none";
  document.getElementById("container").style.display = "block";
  xx = document.getElementById("item4").value;
  yy = document.getElementById("item3").value;
  itemsArray[flag1] = [yy, xx];
  localStorage.setItem(items, JSON.stringify(itemsArray));
  ul.innerHTML = "";
  itemsArray.forEach(addTask);
}

const li1 = document.querySelector(".list1");

li1.addEventListener("click", function (e) {
  if (e.target.nodeName == "BUTTON") {
    var parent = e.target.parentNode;
    const li2 = Array.from(document.querySelectorAll("li"));
    li2.forEach((li3) => {
      li3.style.backgroundColor = "white";
    });
  }

  if (e.target.nodeName !== "LI") {
    var parent = e.target.parentNode;
    var parent1 = parent.parentNode;
    var index = Array.prototype.indexOf.call(parent1.children, parent);
  }

  if (e.target.nodeName == "BUTTON") {
    if (e.target.textContent == "X") {
      this.removeChild(parent);
      itemsArray.splice(index, 1);
      localStorage.setItem(items, JSON.stringify(itemsArray));
    } else {
      flag2 = index;
      document.querySelectorAll(".mve").forEach(function (elw) {
        elw.style.visibility = "visible";
      });
      document.querySelectorAll(".cnt").forEach(function (elw) {
        elw.style.visibility = "hidden";
        parent.style.backgroundColor = "lightgreen";
      });
    }
  }
});

li1.addEventListener("dblclick", function (el1) {
  if (el1.target.nodeName == "LI") {
    var parent = el1.target.parentNode;
    var index = Array.prototype.indexOf.call(parent.children, el1.target);
    document.getElementById("container1").style.display = "block";
    document.getElementById("container").style.display = "none";
    document.getElementById("item3").value = itemsArray[index][0];
    document.getElementById("item4").value = itemsArray[index][1];
    flag1 = index;
    if (items == "Menu") {
      document.getElementById("item3").setAttribute("disabled", "");
    } else {
      document.getElementById("item3").removeAttribute("disabled");
    }
  }
});

function todonotesclose() {
  document.getElementById("todo2").style.visibility = "visible";
  document.getElementById("container").setAttribute("style", "display:none");
  const details = Array.from(document.querySelectorAll("details"));
  details.forEach((detail) => {
    if (detail.open == true) {
      detail.removeAttribute("open");
    }
  });
  input1.value = "";
  input2.value = "";
  Move(3);
}

function Move(kk) {
  const li2 = Array.from(document.querySelectorAll("li"));
  li2.forEach((li3) => {
    li3.style.backgroundColor = "white";
  });
  if (flag2 != 100) {
    li2[flag2].style.backgroundColor = "lightgreen";
  }
  // console.log(flag2);
  // console.log(li2.length);
  if (kk == 3) {
    document.querySelectorAll(".mve").forEach(function (elw) {
      elw.style.visibility = "hidden";
    });
    document.querySelectorAll(".cnt").forEach(function (elw) {
      elw.style.visibility = "visible";
    });
    if (flag2 != 100) {
      li2[flag2].style.backgroundColor = "white";
    }
  }
  if (kk == 1) {
    if (flag2 != 0) {
      moveElement(itemsArray, flag2, flag2 - 1);
      localStorage.setItem(items, JSON.stringify(itemsArray));
      flag2 = flag2 - 1;
      anyopen(items);
      const li2 = Array.from(document.querySelectorAll("li"));
      li2[flag2].style.backgroundColor = "lightgreen";
    }
  }
  if (kk == 2) {
    if (flag2 != itemsArray.length - 1) {
      moveElement(itemsArray, flag2, flag2 + 1);
      localStorage.setItem(items, JSON.stringify(itemsArray));
      flag2 = flag2 + 1;
      anyopen(items);
      const li2 = Array.from(document.querySelectorAll("li"));
      li2[flag2].style.backgroundColor = "lightgreen";
    }
  }
}

function moveElement(array, fromIndex, toIndex) {
  const element = array.splice(fromIndex, 1)[0];
  // console.log(element);
  array.splice(toIndex, 0, element);
  // console.log(array);
  if (items == "Menu") {
    newarithmos();
  }
}

function newarithmos() {
  for (i = 0; i <= itemsArray.length - 1; i++) {
    itemsArray[i][0] = i;
  }
}
