const nameRegex = /^[A-Za-z ]+$/;
const mobileRegex = /^[0-9]{10}$/;
const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function showErr(id) {
  document.getElementById(id).style.display = "block";
}
function hideErr(id) {
  document.getElementById(id).style.display = "none";
}
function val(id) {
  return document.getElementById(id).value.trim();
}
function radio(name) {
  const r = document.querySelector(`input[name="${name}"]:checked`);
  return r ? r.value : null;
}

document.getElementById("name").addEventListener("input", function () {
  this.value = this.value.replace(/[^A-Za-z ]/g, "");
});

document.getElementById("mobile").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
});

document.getElementById("parentMobile").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9]/g, "").slice(0, 10);
});

function validateStep1() {
  let ok = true;
  if (!nameRegex.test(val("name"))) {
    showErr("nameError");
    ok = false;
  } else hideErr("nameError");
  if (!emailRegex.test(val("email"))) {
    showErr("emailError");
    ok = false;
  } else hideErr("emailError");
  if (!mobileRegex.test(val("mobile"))) {
    showErr("mobileError");
    ok = false;
  } else hideErr("mobileError");
  if (!radio("gender")) {
    showErr("genderError");
    ok = false;
  } else hideErr("genderError");
  if (!radio("nation")) {
    showErr("nationError");
    ok = false;
  } else hideErr("nationError");
  if (!val("dob")) {
    showErr("dobError");
    ok = false;
  } else hideErr("dobError");
  if (!mobileRegex.test(val("parentMobile"))) {
    showErr("parentMobileError");
    ok = false;
  } else hideErr("parentMobileError");
  if (!val("course")) {
    showErr("courseError");
    ok = false;
  } else hideErr("courseError");
  if (!val("address")) {
    showErr("addressError");
    ok = false;
  } else hideErr("addressError");
  return ok;
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");

// NEXT BUTTON (FORM SUBMIT)
document.getElementById("myForm2").addEventListener("submit", function (e) {
  e.preventDefault();

  if (!validateStep1()) return;

  // Show step 2
  step1.style.display = "none";
  step2.style.display = "block";

  // Button styles
  btn1.classList.remove("active");
  btn1.classList.add("inactive");

  btn2.classList.remove("inactive");
  btn2.classList.add("active");
});

// CLICK → PERSONAL INFO
btn1.addEventListener("click", function () {
  step1.style.display = "block";
  step2.style.display = "none";

  btn1.classList.add("active");
  btn1.classList.remove("inactive");

  btn2.classList.remove("active");
  btn2.classList.add("inactive");
});

// CLICK → QUESTION PAPER
btn2.addEventListener("click", function () {
  if (!validateStep1()) return;

  step1.style.display = "none";
  step2.style.display = "block";

  btn2.classList.add("active");
  btn2.classList.remove("inactive");

  btn1.classList.remove("active");
  btn1.classList.add("inactive");
});

// Questions
const questions = [
  {
    q: 'Synonym of “Rapid"',
    opts: ["Slow ", "Quick", "Weak", "Late"],
    ans: 1,
  },
  {
    q: "Antonym of “Victory”",
    opts: ["Win ", "Success ", "Defeat ", "Rise"],
    ans: 2,
  },
  {
    q: "She ___ to college daily",
    opts: ["go", "goes", "going ", "gone"],
    ans: 1,
  },
  {
    q: "Correct sentence",
    opts: [
      "He don’t know",
      "He doesn’t knows",
      "He doesn’t know",
      "He not know",
    ],
    ans: 2,
  },
  {
    q: "Meaning of “Abundant”",
    opts: ["Few ", "Plenty ", "Less ", "Small"],
    ans: 1,
  },
  {
    q: "Correct spelling",
    opts: ["Recieve ", "Receive ", "Receeve ", "Receve"],
    ans: 1,
  },
  {
    q: "I am interested ___ aviation",
    opts: ["on ", "in ", "at ", "for"],
    ans: 1,
  },
  {
    q: "Fear of heights",
    opts: ["Claustrophobia ", "Acrophobia ", "Hydrophobia ", "Xenophobia"],
    ans: 1,
  },
  { q: "They ___ playing now", opts: ["is ", "are ", "was ", "be"], ans: 1 },
  {
    q: "Opposite of “Expand”",
    opts: ["Grow ", "Extend ", "Contract ", "Increase"],
    ans: 2,
  },
  {
    q: "When you face a difficult problem, you usually:",
    opts: [
      "Avoid it",
      "Wait for someone else",
      "Try to solve step by step ",
      " Ignore",
    ],
    ans: 2,
  },
  {
    q: "If you are given a team project, you:",
    opts: [
      "Work alone",
      "Depend on others",
      "Coordinate with team members ",
      "Avoid responsibility",
    ],
    ans: 2,
  },
  {
    q: "When you receive criticism, you:",
    opts: ["Get angry", "Ignore it", "Learn and improve ", "Feel discouraged"],
    ans: 2,
  },
  {
    q: "Your approach to time management is:",
    opts: [
      "Delay work",
      "Do at last minute",
      "Plan and complete on time ",
      "Ignore deadlines",
    ],
    ans: 2,
  },
  {
    q: "When facing failure, you:",
    opts: [
      "Quit",
      "Blame others",
      "Try again with improvement ",
      "Avoid similar tasks",
    ],
    ans: 2,
  },
  {
    q: "If you don’t understand a topic, you:",
    opts: ["Ignore", "Copy others", "Ask and learn ", "Skip"],
    ans: 2,
  },
  {
    q: "In a group discussion, you:",
    opts: [
      "Stay silent",
      "Interrupt others",
      "Share ideas respectfully ",
      "Avoid participation",
    ],
    ans: 2,
  },
  {
    q: "Avoid participation",
    opts: ["Avoid it", "Delay it", "Take ownership ", "Pass to others"],
    ans: 2,
  },
  {
    q: "Your attitude towards learning new skills is:",
    opts: ["Not interested", "Only if forced", "Eager to learn ", "Avoid"],
    ans: 2,
  },
  {
    q: "Your career goal approach is:",
    opts: ["No plan", "Confused", "Clear and focused ", "Not sure"],
    ans: 2,
  },
  {
    q: "DGCA stands for",
    opts: [
      "Directorate General of Civil Aviation ",
      "Domestic Ground Control Authority",
      "Data Global Control Agency",
      "None",
    ],
    ans: 0,
  },
  {
    q: "What is the main role of cabin crew?",
    opts: [
      "Flying aircraft",
      "Passenger safety and service ",
      "Ticket booking",
      "Airport security",
    ],
    ans: 1,
  },
  {
    q: "What does a boarding pass allow?",
    opts: [
      "Luggage check",
      "Entry into aircraft ",
      "Security clearance",
      "Payment",
    ],
    ans: 1,
  },
  {
    q: " Airport code for Chennai is",
    opts: ["DEL", "BOM", "MAA ", "BLR"],
    ans: 2,
  },
  {
    q: "Runway is used for",
    opts: [
      "Parking aircraft",
      "Takeoff and landing ",
      "Passenger waiting",
      "Cargo storage",
    ],
    ans: 1,
  },
  {
    q: " What is check-in process?",
    opts: [
      "Buying ticket",
      "Confirming passenger presence & baggage ",
      "Boarding aircraft",
      "Security checking",
    ],
    ans: 1,
  },
  {
    q: " What is the full form of IATA?",
    opts: [
      "International Air Transport Association ",
      "Indian Air Travel Authority",
      "International Airport Travel Agency",
      " None",
    ],
    ans: 0,
  },
  {
    q: " What is baggage allowance?",
    opts: [
      "Ticket cost",
      "Weight limit for luggage ",
      "Boarding time",
      "Seat number",
    ],
    ans: 1,
  },
  {
    q: " What does “on-time performance” mean in airlines?",
    opts: [
      "Flight speed",
      "Flight arriving/departing as scheduled ",
      "Ticket booking time",
      "Fuel efficiency",
    ],
    ans: 1,
  },
  {
    q: " What is the role of ground staff?",
    opts: [
      "Flying aircraft",
      "Assisting passengers at airport ",
      "Managing cargo ships",
      "Cleaning runway",
    ],
    ans: 1,
  },
  {
    q: " Leadership is best defined as:",
    opts: [
      "Controlling employees",
      "Guiding and motivating a team towards goals ",
      "Giving orders only",
      "Working alone",
    ],
    ans: 1,
  },
  {
    q: " Effective communication means:",
    opts: [
      "Speaking loudly",
      "Sharing information clearly and understanding others ",
      "Talking continuously",
      "Ignoring feedback",
    ],
    ans: 1,
  },
  {
    q: " Time management helps to:",
    opts: [
      "Delay work",
      "Complete tasks efficiently within deadlines ",
      "Complete tasks efficiently within deadlines ",
      "Avoid planning",
    ],
    ans: 1,
  },
  {
    q: " A good team member should:",
    opts: [
      "Work alone",
      "Support and collaborate with others ",
      "Compete negatively",
      "Avoid responsibility",
    ],
    ans: 1,
  },
  {
    q: " Decision making involves:",
    opts: [
      "Ignoring problems",
      "Choosing the best possible solution ",
      "Waiting for others",
      "Avoiding responsibility",
    ],
    ans: 1,
  },
  {
    q: " When facing conflict in a team, you should:",
    opts: [
      "Argue",
      "Ignore",
      "Resolve it professionally through discussion ",
      "Leave the team",
    ],
    ans: 2,
  },
  {
    q: " Professional behavior includes:",
    opts: [
      "Being late",
      "Being irresponsible",
      "Being disciplined and respectful ",
      "Ignoring rules",
    ],
    ans: 2,
  },
  {
    q: " A positive attitude means:",
    opts: [
      "Negative thinking",
      "Confidence and willingness to learn ",
      "Fear of failure",
      "Avoiding challenges",
    ],
    ans: 1,
  },
  {
    q: " Motivation in management refers to:",
    opts: [
      "Forcing employees",
      "Encouraging people to perform better ",
      "Ignoring performance",
      "Punishing mistakes",
    ],
    ans: 1,
  },
  {
    q: " A successful manager should be:",
    opts: [
      "Rigid",
      "Poor communicator",
      "Flexible and problem-solving oriented ",
      "Isolated",
    ],
    ans: 2,
  },
];

function renderQuestions() {
  const c = document.getElementById("questionsContainer");
  c.innerHTML = "";
  questions.forEach((q, i) => {
    let html = `<div style="background:#f9f9f9;border:1px solid #ddd;border-radius:6px;padding:12px;margin-bottom:12px">
      <p style="font-weight:600;margin:0 0 8px">${i + 1}. ${q.q}</p>`;
    q.opts.forEach((o, j) => {
      html += `<label style="display:block;margin:4px 0"><input type="radio" name="q${i}" value="${j}"> ${o}</label>`;
    });
    html += `</div>`;
    c.innerHTML += html;
  });
}
renderQuestions();

// Next button
document.getElementById("myForm2").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validateStep1()) return;
  document.getElementById("step1").style.display = "none";
  document.getElementById("step2").style.display = "block";
  document.getElementById("btn1").classList.remove("active");
  document.getElementById("btn2").classList.add("active");
});

// Submit quiz
document
  .getElementById("submitBtn")
  .addEventListener("click", async function () {
    let allAnswered = true;
    const userAnswers = [];

    for (let i = 0; i < questions.length; i++) {
      const r = document.querySelector(`input[name="q${i}"]:checked`);
      if (!r) {
        allAnswered = false;
        break;
      }
      userAnswers.push(parseInt(r.value));
    }

    if (!allAnswered) {
      document.getElementById("quizError").style.display = "block";
      return;
    }
    document.getElementById("quizError").style.display = "none";

    let score = 0;
    let answersText = "";
    questions.forEach((q, i) => {
      const correct = q.opts[q.ans];
      const chosen = q.opts[userAnswers[i]];
      const isCorrect = userAnswers[i] === q.ans;
      if (isCorrect) score++;
      answersText += `Q${i + 1}: ${q.q}\nYour Answer: ${chosen} ${isCorrect ? "✅" : "❌ (Correct: " + correct + ")"}\n\n`;
    });

    const messageBody = `
SCHOLARSHIP TEST RESULT
========================
Score: ${score} / 40
 
PERSONAL INFORMATION
---------------------
Name: ${val("name")}
Email: ${val("email")}
Mobile: ${val("mobile")}
Gender: ${radio("gender")}
Nationality: ${radio("nation")}
DOB: ${val("dob")}
Parent Mobile: ${val("parentMobile")}
Course: ${val("course")}
Address: ${val("address")}
 
QUIZ ANSWERS
-------------
${answersText}`;

    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").innerText = "Submitting...";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "8328d9ae-273c-491f-b60f-03e4deef2618",
          subject: `Scholarship Test - ${val("name")} | Score: ${score}/40`,
          from_name: val("name"),
          email: val("email"),
          message: messageBody,
        }),
      });

      const data = await res.json();
      const msg = document.getElementById("formMessage2");

      if (data.success) {
        msg.style.color = "green";
        msg.innerText = `Test submitted successfully! `;
        document.getElementById("questionsContainer").style.opacity = "0.4";
        document.getElementById("submitBtn").style.display = "none";
      } else {
        msg.style.color = "red";
        msg.innerText = "Submission failed. Try again.";
        document.getElementById("submitBtn").disabled = false;
        document.getElementById("submitBtn").innerText = "SUBMIT TEST";
      }
    } catch (e) {
      document.getElementById("formMessage2").style.color = "red";
      document.getElementById("formMessage2").innerText =
        "Network error. Try again.";
      document.getElementById("submitBtn").disabled = false;
      document.getElementById("submitBtn").innerText = "SUBMIT TEST";
    }
  });

// PopUp Script js

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("applyPopup");
  const closeBtn = popup.querySelector(".popup-close");

  function showPopup() {
    popup.classList.add("show");
    setTimeout(() => popup.classList.remove("show"), 8000); // Hide after 8s
  }

  // Initial show after 10s
  setTimeout(showPopup, 500);
  // Repeat every 30s
  setInterval(showPopup, 10000);

  // Click opens modal
  popup.addEventListener("click", (e) => {
    if (!e.target.classList.contains("popup-close")) {
      popup.classList.remove("show");
      applyModal.show();
    }
  });

  // Close button
  closeBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    popup.classList.remove("show");
  });
});
