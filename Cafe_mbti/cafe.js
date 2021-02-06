const question = document.querySelector(".question");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");

const questionList = [
  "Q1.\n첫 출근날 면접 때 만났던 사람과 \n같은 팀이 되었다. \n당신은?",
  "Q2.\n업무처리 중\n 약간 어려운 업무가 생겼다. \n당신은?",
  "Q3.\n점심시간 입사동기들과 이야기 중\n 동기가 사수에 대한 험담을 늘어 놓는다 \n당신은?",
  "Q4.\n팀장님이 맡기신 업무를 하는 중에\n 대리님이 커피 심부름을 시킨다. \n당신은?",
  "Q5.\n첫 출근 기념으로 팀 회식을 왔는데\n 팀장님이 건배사를 하라고 하신다. \n 당신은?",
  "Q6.\n1차를 기분 좋게 마시고 더 마시고 싶은\n 사람은 2차를 가자고 하신다.\n 이미 주량을 넘긴 상태지만 오늘 따라 안취하고 재밌다! \n 당신은?",
  "Q7.\n집에 가는 버스에서\n 한 승객이 기사분에게 막말을 하며 시비를 건다. \n 당신은?",
  "Q8.\n집에 도착하니 \n 설거지 거리가 보인다. \n 당신은?"
];


const answerList = [
  {
    first: "먼저 반갑게 인사하며 친하게 지내자고 한다.",
    second:"먼저 인사하길 기다리며 눈치를 살핀다.",
  },
  {
    first: "어렵긴 하지만 할 수는 있으니 내가 해본다.",
    second:"사수에게 질문 해서 더 효율적으로 해결하는 법을 배운다.",
  },
  {
    first:  "사수의 입장에서 생각해보라고 말하며 다독인다.",
    second: "맞장구를 치며 동기를 달래 준다.",
  },
  {
    first:  "죄송하지만 팀장님이 맡긴 업무 때문에 못갈것 같다고 말씀드린다.",
    second: "빠르게 커피를 사온 후 다시 업무를 한다.",
  },
  {
    first:  "알고있는 건배사를 외치며 분위기를 띄운다.",
    second: "아는게 없다고 한다.",
  },
  {
    first:  "첫 회식인데 더 마시고 놀다 집에 간다.",
    second: "주량을 넘겼으니 실수하지 않도록 집에 간다.",
  },
  {
    first: "그만하라고 승객을 말리고 내리게 한다.",
    second:"누군가 제지해주길 기대하며 눈치를 본다.",
  },
  {
    first: "피곤하지만 지금해야 아침이 편하니까 하고 잔다.",
    second:"피곤하니까 자고 일어나서 한다.",
  }
];

let type1 = 0;
let type2 = 0;
let type3 = 0;
let type4 = 0;
let questionNum = 0;
let answerNum = 0;


function finalResult(userMbtiToString) {
  let result = 0;

  switch (userMbtiToString) {
    case "ISTP":
    case "ISFP":
    case "INFP":
      result = "IceAme";
      location.href = "iceame.php";
      break;
    case "ISTP":
    case "ISFP":
      result = "HotAme";
      location.href = "hotame.php";
      break;
    case "INFJ":
    case "INTP":
    case "INTJ":
      result = "Caramel";
      location.href = "caramel.php";
      break;
    case "ESTJ":
    case "ESTP":
    case "ENTJ":
      result = "CafeMoca";
      location.href = "final.php";
    case "ISFJ":
    case "ISTJ":
      result = "espresso";
      location.href = "final.php";
    case "ENFP":
    case "ENTP":
   	case "INFP":
   	  result = "yogurtsmoothy";
   	  location.href = "yogurt.php";
   	  
  }
  console.log(`당신은 : ${result}`);
}

function calcType() {
  let userMbti = [type1, type2, type3, type4];
  let userMbtiToString = "";

  type1 >= 2 ? (type1 = "E") : (type1 = "I");
  type2 >= 2 ? (type2 = "S") : (type2 = "N");
  type3 >= 2 ? (type3 = "T") : (type3 = "F");
  type4 >= 2 ? (type4 = "J") : (type4 = "P");

  userMbtiToString = userMbti.join("");
  console.log(userMbtiToString);
  finalResult(userMbtiToString);
}

function printQ() {
  if (questionNum <= 7) {
    question.innerText = questionList[questionNum];
    answer1.innerText = answerList[answerNum].first;
    answer2.innerText = answerList[answerNum].second;
  } else {
    calcType();
  }
}

function givePointToBox1() {
  if (questionNum < 8) {
    if (questionNum < 2) {
      type1++;
    } else if (questionNum < 4) {
      type2++;
    } else if (questionNum < 6) {
      type3++;
    } else {
      type4++;
    }
    questionNum++;
    answerNum++;
  }
  printQ();
}

function givePointToBox2() {
  if (questionNum < 8) {
    questionNum++;
    answerNum++;
  }
  printQ();
}

answer1.addEventListener("click", givePointToBox1);
answer2.addEventListener("click", givePointToBox2);

function init() {
  printQ();
}

init();
