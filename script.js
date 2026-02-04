const correctPassword = "moment";

const story = [
  {
    text: "You were noticed.\n\nDo you want to know how?",
    choices: [
      { label: "Yes", next: 1 },
      { label: "Maybe later", next: 2 }
    ]
  },
  {
    text: "Some people pass by.\nSome people stay.",
    choices: [
      { label: "Continue", next: 3 }
    ]
  },
  {
    text: "That’s okay.\nSome stories wait.",
    choices: [
      { label: "Read anyway", next: 1 }
    ]
  },
  {
    text: "A crowd.\nLaughter.\nA white dress.",
    choices: [
      { label: "That moment?", next: 4 }
    ]
  },
  {
    text: "Yes.\nA TEDx event.\nYou were laughing with your friends.",
    choices: [
      { label: "Why tell me this?", next: 5 }
    ]
  },
  {
    text: "Because some smiles feel calm.\nAnd yours did.",
    choices: [
      { label: "And then?", next: 6 }
    ]
  },
  {
    text: "I wanted to talk.\nI didn’t.\nBut I remembered.",
    choices: [
      { label: "Why now?", next: 7 }
    ]
  },
  {
    text: "Because finding you again\nfelt like a second chance.",
    choices: [
      { label: "What is this?", next: 8 }
    ]
  },
  {
    text: "This is just honesty.\nAnd a little courage.",
    choices: [
      { label: "Say one last thing", next: 9 }
    ]
  },
  {
    text: "If you ever feel like talking,\nthis story doesn’t have to end here.",
    choices: []
  }
];

let current = 0;
const textEl = document.getElementById("storyText");
const buttonsEl = document.getElementById("buttons");
const replyBtn = document.getElementById("replyBtn");

function checkPassword() {
  const input = document.getElementById("passwordInput").value.toLowerCase();
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("storyScreen").classList.remove("hidden");
    render();
  } else {
    error.innerText = "Not yet.";
  }
}

function vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate(30);
  }
}

function render() {
  textEl.innerText = "";
  buttonsEl.innerHTML = "";
  replyBtn.classList.add("hidden");

  let i = 0;
  const typing = setInterval(() => {
    if (i < story[current].text.length) {
      textEl.innerText += story[current].text.charAt(i);
      i++;
    } else {
      clearInterval(typing);
      showChoices();
    }
  }, 35);
}

function showChoices() {
  if (story[current].choices.length === 0) {
    setTimeout(() => {
      replyBtn.classList.remove("hidden");
    }, 1500);
    return;
  }

  story[current].choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice.label;
    btn.onclick = () => {
      vibrate();
      current = choice.next;
      render();
    };
    buttonsEl.appendChild(btn);
  });
}
