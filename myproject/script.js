const cheerButton = document.getElementById("cheerButton");
const cheerMessage = document.getElementById("cheerMessage");

const messages = [
  "Mood Thik Karlo Ji 🌞",
  "Mujhe Meri Dost Upset Achhi Nahi Lagti💖",
  " Sorry Meri Galtiyon K Liye Pagal Hu Main To✨",
  "Chhota Sa To Dimag H Tera, Itna Sochegi To Or Kam Hojayega 💐",
  "Haste Raha Karo! 🌈",
  "Apki Ek Smile Se Kisi Ka Din Ban Jata Hai ❤️",
  "Upset Mat Hua Kro  💕",
  "Has Bhi Do Miss Nalva 💫"
];

cheerButton.addEventListener("click", () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  cheerMessage.textContent = randomMessage;
});
