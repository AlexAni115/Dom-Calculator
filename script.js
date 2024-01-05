

const division = document.createElement("div")
const div1 = document.createElement("div")
division.append(div1)
div1.setAttribute("class","div1")
const h1 = document.createElement("h1")
h1.setAttribute("id","title")
h1.innerText="Calculator"

div1.append(h1)
const para = document.createElement("p")
para.innerText= "Calculator created by DOM"
para.setAttribute("id","description")
div1.append(para)
const calculator = document.createElement("div")
const input = document.createElement("input")
division.append(calculator)
calculator.append(input)
document.body.append(division)




division.setAttribute("class","container")
calculator.setAttribute("class","calculator")
input.setAttribute("type","text")
input.setAttribute("placeholder","0")
input.setAttribute("id","result")

const btncl = document.createElement("button")
btncl.setAttribute("class","cl")
btncl.setAttribute("id","clear")
btncl.setAttribute("type","button")
btncl.innerText="CL"
calculator.append(btncl)

const btndel = document.createElement("button")
btndel.setAttribute("id","delete")
btndel.setAttribute("type","button")
btndel.innerText="Delete"
calculator.append(btndel)

const btnper = document.createElement("button")
btnper.setAttribute("id","%")
btnper.setAttribute("type","button")
btnper.setAttribute("class","button")
btnper.innerText="%"
calculator.append(btnper)

const btnslash = document.createElement("button")
btnslash.setAttribute("id","/")
btnslash.setAttribute("type","button")
btnslash.setAttribute("class","button")
btnslash.innerText="/"
calculator.append(btnslash)

const btnseven = document.createElement("button")
btnseven.setAttribute("id","7")
btnseven.setAttribute("type","button")
btnseven.setAttribute("class","button")
btnseven.innerText="7"
calculator.append(btnseven)

const btneight = document.createElement("button")
btneight.setAttribute("id","8")
btneight.setAttribute("type","button")
btneight.setAttribute("class","button")
btneight.innerText="8"
calculator.append(btneight)

const btnnine = document.createElement("button")
btnnine.setAttribute("id","9")
btnnine.setAttribute("type","button")
btnnine.setAttribute("class","button")
btnnine.innerText="9"
calculator.append(btnnine)

const btnstar = document.createElement("button")
btnstar.setAttribute("id","*")
btnstar.setAttribute("type","button")
btnstar.setAttribute("class","button")
btnstar.innerText="*"
calculator.append(btnstar)

const btnfour = document.createElement("button")
btnfour.setAttribute("id","4")
btnfour.setAttribute("type","button")
btnfour.setAttribute("class","button")
btnfour.innerText="4"
calculator.append(btnfour)

const btnfive = document.createElement("button")
btnfive.setAttribute("id","5")
btnfive.setAttribute("type","button")
btnfive.setAttribute("class","button")
btnfive.innerText="5"
calculator.append(btnfive)

const btnsix = document.createElement("button")
btnsix.setAttribute("id","6")
btnsix.setAttribute("type","button")
btnsix.setAttribute("class","button")
btnsix.innerText="6"
calculator.append(btnsix)

const btnminus = document.createElement("button")
btnminus.setAttribute("id","subtract")
btnminus.setAttribute("type","button")
btnminus.setAttribute("class","button")
btnminus.innerText="-"
calculator.append(btnminus)

const btnone = document.createElement("button")
btnone.setAttribute("id","1")
btnone.setAttribute("type","button")
btnone.setAttribute("class","button")
btnone.innerText="1"
calculator.append(btnone)

const btntwo = document.createElement("button")
btntwo.setAttribute("id","2")
btntwo.setAttribute("type","button")
btntwo.setAttribute("class","button")
btntwo.innerText="2"
calculator.append(btntwo)

const btnthree = document.createElement("button")
btnthree.setAttribute("id","3")
btnthree.setAttribute("type","button")
btnthree.setAttribute("class","button")
btnthree.innerText="3"
calculator.append(btnthree)


const btnplus = document.createElement("button")
btnplus.setAttribute("id","add")
btnplus.setAttribute("type","button")
btnplus.setAttribute("class","button")
btnplus.innerText="+"
calculator.append(btnplus)

const btndot = document.createElement("button")
btndot.setAttribute("id","dot")
btndot.setAttribute("type","button")
btndot.setAttribute("class","button")
btndot.innerText="."
calculator.append(btndot)

const btnzero = document.createElement("button")
btnzero.setAttribute("id","zero")
btnzero.setAttribute("type","button")
btnzero.setAttribute("class","button")
btnzero.innerText="0"
calculator.append(btnzero)

const btnequal = document.createElement("button")
btnequal.setAttribute("id","eq")
btnequal.setAttribute("type","button")
btnequal.setAttribute("class","equal")
btnequal.setAttribute("id","equal")
btnequal.innerText="="
calculator.append(btnequal)

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) =>
  button.addEventListener("click", () => inputDisplay(button.textContent))
);
function inputDisplay(num) {
  input.value += num;
}

const equal = document.querySelector(".equal");
equal.addEventListener("click", process);
function process() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    alert("only numbers are allowed");
  }
}

const clear = document.querySelector(".cl");
clear.addEventListener("click",clearfuction);
function clearfuction(){
    input.value = "";
}

const del = document.querySelector("#delete");
del.addEventListener("click", deleteFunction);
function deleteFunction() {
  input.value = input.value.slice(0, -1);
}