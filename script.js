const messages = [
  "勉強頑張ろう！",
  "見過ぎに注意！",
  "ほどほどに",
  "切り替えて勉強！"
]

const now = new Date();
const hour = now.getHours();
if (hour < 12 || 14 <= hour) {
  window.location.replace("http://qiita.com/")
  const index = Math.floor(Math.random() * 4);
  alert(messages[index]);
};
