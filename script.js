/* ===============================
   BOOT
================================ */
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("boot").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("boot").style.display = "none";
    }, 1000);
  }, 2300);
});

/* ===============================
   SCROLL REVEAL
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: .12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
});

/* ===============================
   TRUTH LAB
================================ */
function truthTest(answer) {
  const result = document.getElementById("truthResult");
  result.style.display = "block";

  if (answer === "verify") {
    result.style.background = "#102417";
    result.style.color = "#8cffb0";
    result.innerHTML =
      "✓ HUMAN UPDATE DETECTED<br><br>" +
      "Excellent. Slow down. Check the source, look for evidence, " +
      "compare reliable information and only then decide what to share.";
  } else if (answer === "forward") {
    result.style.background = "#281616";
    result.style.color = "#ff8b8b";
    result.innerHTML =
      "⚠ SYSTEM WARNING<br><br>" +
      "You reacted before verifying. The fastest action isn't always " +
      "the smartest action. Pause before you amplify information.";
  } else {
    result.style.background = "#211f13";
    result.style.color = "#ffd166";
    result.innerHTML =
      "◐ PARTIAL UPDATE<br><br>" +
      "Not sharing is safer than spreading something false, " +
      "but learning to verify information makes you more responsible.";
  }
}

/* ===============================
   EMPATHY
================================ */
function empathy(answer) {
  const result = document.getElementById("empathyResult");
  if (answer === "ask") {
    result.innerHTML =
      "❤️ EMPATHY MODULE ACTIVE — Sometimes the most powerful question is simply: " +
      "“Are you okay?”";
  } else {
    result.innerHTML =
      "Think again. You don't know the complete story behind someone's behaviour. " +
      "Understanding begins when we become curious instead of immediately judging.";
  }
}

/* ===============================
   ATTENTION
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const range = document.getElementById("attentionRange");
  if (range) {
    range.addEventListener("input", () => {
      let value = range.value;
      document.getElementById("attentionValue").innerText = value;
      let message = "";

      if (value < 25) {
        message = "A small protected space for yourself.";
      } else if (value < 60) {
        message = "Good. Intentional attention is a habit.";
      } else {
        message = "That's a significant amount of attention to reclaim.";
      }

      document.getElementById("attentionMessage").innerText = message;
    });
  }
});

/* ===============================
   ECO
================================ */
function ecoAction(button) {
  button.innerText = "✓ COMMITTED";
  button.style.background = "#8cffb0";
  button.style.color = "#07100b";
}

/* ===============================
   UPDATE INSTALL
================================ */
function installUpdate() {
  const progress = document.getElementById("updateProgress");
  const bar = document.getElementById("updateBar");
  const result = document.getElementById("updateResult");
  
  progress.style.display = "block";
  let value = 0;

  const interval = setInterval(() => {
    value += 2;
    bar.style.width = value + "%";

    if (value >= 100) {
      clearInterval(interval);
      result.innerHTML =
        "<br><span style='color:#8cffb0'>" +
        "✓ UPDATE INSTALLED.<br><br>" +
        "Version 1.1 — You are now aware that awareness " +
        "is only the beginning. The real update happens outside this screen." +
        "</span>";
    }
  }, 35);
}

/* ===============================
   PERSONAL UPDATE
================================ */
function createUpdate() {
  const input = document.getElementById("personalInput").value.trim();
  const result = document.getElementById("personalResult");

  if (!input) {
    result.innerText = "Write something first. Your update needs an instruction.";
    return;
  }

  result.innerHTML =
    "✓ PERSONAL UPDATE CREATED<br><br>" +
    "\"" + input + "\"<br><br>" +
    "Save it in your mind. Then prove it through your actions.";
}

/* ===============================
   DYNAMIC QR
================================ */
function generateQR() {
  const qr = document.getElementById("qrcode");
  if (!qr) return;
  qr.innerHTML = "";

  new QRCode(qr, {
    text: window.location.href,
    width: 220,
    height: 220,
    colorDark: "#07100b",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

window.addEventListener("load", generateQR);
