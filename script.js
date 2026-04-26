
// ENTER DASHBOARD
function enterDashboard() {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 500);
}

/* MATRIX EFFECT */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
letters = letters.split("");

let fontSize = 14;
let columns = canvas.width / fontSize;

let drops = [];
for (let i = 0; i < columns; i++) drops[i] = 1;

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#00ffcc";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    let text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
      drops[i] = 0;

    drops[i]++;
  }
}

setInterval(draw, 33);



// Q1
function checkNumber() {
  let n = Number(document.getElementById("num1").value);
  let prime = true;

  if (n < 2) prime = false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) prime = false;
  }

  let type = (n % 2 === 0) ? "Even" : "Odd";

  document.getElementById("out1").innerText =
    type + " & " + (prime ? "Prime" : "Not Prime");
}

// Q2
function factorial() {
  let n = Number(document.getElementById("fact").value);
  let f = 1;
  for (let i = 1; i <= n; i++) f *= i;
  document.getElementById("out2").innerText = f;
}

// Q3
function fibonacci() {
  let n = Number(document.getElementById("fib").value);
  let a = 0, b = 1, res = "";
  for (let i = 0; i < n; i++) {
    res += a + " ";
    [a, b] = [b, a + b];
  }
  document.getElementById("out3").innerText = res;
}

// Q4
function secondLargest() {
  let arr = document.getElementById("arr").value.split(',').map(Number);
  arr.sort((a,b)=>b-a);
  document.getElementById("out4").innerText = arr[1];
}

// Q5
function removeDup() {
  let arr = document.getElementById("dup").value.split(',');
  let unique = [...new Set(arr)];
  document.getElementById("out5").innerText = unique;
}

// Q6
function palindrome() {
  let s = document.getElementById("pal").value;
  let rev = s.split('').reverse().join('');
  document.getElementById("out6").innerText =
    (s === rev) ? "Palindrome" : "Not Palindrome";
}

// Q7
function calc(op) {
  let a = Number(document.getElementById("a").value);
  let b = Number(document.getElementById("b").value);
  let result;

  if (op === '+') result = a + b;
  if (op === '-') result = a - b;
  if (op === '*') result = a * b;
  if (op === '/') result = a / b;

  document.getElementById("out7").innerText = result;
}

// Q8 VALIDATION
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let cpass = document.getElementById("cpass").value;
  let age = document.getElementById("age").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let terms = document.getElementById("terms").checked;

  if (!name.match(/^[A-Za-z]+$/)) return alert("Invalid Name");
  if (!email.match(/^\S+@\S+\.\S+$/)) return alert("Invalid Email");
  if (pass.length < 6) return alert("Password too short");
  if (pass !== cpass) return alert("Passwords not match");
  if (age < 1 || age > 100) return alert("Invalid Age");
  if (!gender) return alert("Select Gender");
  if (!terms) return alert("Accept Terms");

  document.getElementById("out8").innerText = "✅ Registered Successfully";
});

// Q9
function toggleText(){
  let p = document.getElementById("toggle");
  p.innerText = (p.innerText === "Hello, World!") ? "Goodbye, World!" : "Hello, World!";
}

// Q10 jQuery
$(document).ready(function(){
  $("#hover").hover(function(){
    $(this).css("color","red");
  }, function(){
    $(this).css("color","#00ffcc");
  });
});

function mark(btn, type) {
  let parent = btn.parentElement;

  parent.querySelectorAll("button").forEach(b => {
    b.classList.remove("correct", "wrong");
  });

  btn.classList.add(type);
}


function submitFeedback() {
  playClick();

  const msg = document.getElementById("finalMsg");

  msg.innerText = "🎉 Thank You Ma'am for Reviewing!";
  msg.style.textAlign = "center";

  document.getElementById("successSound").play();

  // ONLY runs after button click
  setTimeout(() => {
    document.body.classList.add("fade-out");

    setTimeout(() => {
      document.body.innerHTML = `
        <div style="
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          background:black;
          color:#00ffcc;
          font-size:26px;
          font-family:monospace;
        ">
          🚀 Session Ended
        </div>
      `;
    });

  }, 2000);
}

function sendMail(){
  let comment = document.getElementById("comment").value;
  let rating = document.getElementById("rating").value;

  window.location.href =
    `mailto:siddhantsengar08@gmail.com?subject=Assignment Review&body=Rating: ${rating}%0D%0AComment: ${comment}`;
}


function playClick(){
  document.getElementById("clickSound").play();
}



