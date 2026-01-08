import JSZip from "jszip";
import { saveAs } from "file-saver";

export const countryRules = {
  86: {
    // China: 3-digit segment + 8-digit number (e.g., 13812345678)
    country: "中国大陆",
    segments: [
      "130",
      "131",
      "132",
      "133",
      "134",
      "135",
      "136",
      "137",
      "138",
      "139",
      "150",
      "151",
      "152",
      "153",
      "155",
      "156",
      "157",
      "158",
      "159",
      "170",
      "171",
      "172",
      "173",
      "175",
      "176",
      "177",
      "178",
      "179",
      "180",
      "181",
      "182",
      "183",
      "184",
      "185",
      "186",
      "187",
      "188",
      "189",
    ],
    lastLength: 8,
  },
  852: {
    // Hong Kong: 8-digit number, segments typically 5-9 (e.g., 91234567)
    country: "香港",
    segments: [
      "46",
      "48",
      "49",
      "50",
      "51",
      "52",
      "53",
      "54",
      "55",
      "56",
      "57",
      "60",
      "61",
      "62",
      "63",
      "64",
      "65",
      "66",
      "67",
      "70",
      "71",
      "72",
      "73",
      "74",
      "75",
      "76",
      "77",
      "81",
      "82",
      "83",
      "84",
      "85",
      "86",
      "90",
      "91",
      "92",
      "93",
      "94",
      "95",
      "96",
      "97",
      "98",
      "99",
    ],
    lastLength: 6,
  },
  853: {
    // Macau: 8-digit number, segments usually start with 6
    country: "澳门",
    segments: [
      "630",
      "631",
      "632",
      "633",
      "634",
      "635",
      "636",
      "637",
      "638",
      "639",
      "660",
      "661",
      "662",
      "663",
      "664",
      "665",
      "666",
      "667",
      "668",
      "669",
      "680",
      "681",
      "682",
      "683",
      "684",
      "685",
      "686",
      "687",
      "688",
      "689",
    ],
    lastLength: 5,
  },
  // 81: {
  //   // Japan: e.g., 090, 080, 070 + 8 digits
  //   country: "Japan",
  //   segments: ["090", "080", "070", "050"],
  //   lastLength: 8,
  // },
  886: {
    // Taiwan: e.g., 09x + 8 digits
    country: "台湾",
    segments: [
      "901",
      "902",
      "903",
      "905",
      "906",
      "907",
      "908",
      "909",
      "911",
      "912",
      "913",
      "914",
      "915",
      "916",
      "917",
      "918",
      "919",
      "921",
      "922",
      "923",
      "924",
      "925",
      "926",
      "927",
      "928",
      "929",
      "931",
      "932",
      "933",
      "934",
      "935",
      "936",
      "937",
      "938",
      "939",
      "941",
      "942",
      "943",
      "944",
      "945",
      "946",
      "947",
      "948",
      "949",
      "950",
      "951",
      "952",
      "953",
      "954",
      "955",
      "956",
      "957",
      "958",
      "959",
      "961",
      "962",
      "963",
      "964",
      "965",
      "966",
      "967",
      "968",
      "969",
      "971",
      "972",
      "973",
      "974",
      "975",
      "976",
      "977",
      "978",
      "979",
      "981",
      "982",
      "983",
      "984",
      "985",
      "986",
      "987",
      "988",
      "989",
      "991",
      "992",
      "993",
      "994",
      "995",
      "996",
      "997",
      "998",
      "999",
    ],
    lastLength: 7,
  },
  34: {
    // Spain: 9-digit number, typically starts with 6, 7, or 9
    country: "西班牙",
    segments: [
      "600",
      "601",
      "602",
      "603",
      "604",
      "605",
      "606",
      "607",
      "608",
      "609",
      "640",
      "641",
      "642",
      "643",
      "644",
      "645",
      "646",
      "647",
      "648",
      "649",
      "700",
      "701",
      "702",
      "703",
      "704",
      "705",
      "706",
      "707",
      "708",
      "709",
      "720",
      "721",
      "722",
      "723",
      "724",
      "725",
      "726",
      "727",
      "728",
      "729",
    ],
    lastLength: 6, // after the country code, total digits = 9
  },
  61: {
    // Australia: Mobile numbers usually start with 4 (e.g., 04xx xxx xxx)
    country: "澳大利亚",
    segments: ["4"],
    lastLength: 8, // after the '4', 8 digits follow for mobile
  },
  373: {
    country: "摩尔多瓦",
    segments: [
      "6802",
      "6811",
      "7847",
      "6064",
      "7812",
      "7843",
      "6063",
      "6098",
      "6089",
      "6027",
      "6038",
      "7890",
      "6868",
      "7852",
      "6069",
      "6809",
      "7886",
      "7832",
      "7893",
      "7870",
      "7825",
      "6812",
      "6866",
      "6012",
      "6020",
      "6091",
      "7826",
      "6870",
      "7834",
      "6894",
      "6855",
      "6029",
      "6803",
      "6884",
      "6065",
      "6061",
      "6052",
      "7838",
      "7822",
      "6864",
      "6832",
      "6872",
      "7897",
      "6084",
      "6030",
      "6014",
      "6047",
      "7842",
      "6060",
      "6862",
      "6095",
      "6071",
      "6825",
      "7892",
      "6080",
      "7851",
      "6036",
      "7865",
      "6823",
      "7806",
      "6083",
      "6007",
      "7845",
      "6066",
      "7873",
      "6093",
      "7877",
      "7868",
      "6845",
      "7809",
      "6041",
      "7830",
      "6853",
      "6806",
      "6804",
      "6019",
      "6847",
      "6838",
      "6001",
      "6026",
      "6805",
      "7875",
      "7816",
      "6893",
      "6841",
      "6054",
      "6850",
      "7821",
      "6860",
      "6890",
      "7896",
      "6842",
      "7858",
      "7854",
      "7846",
      "6816",
      "6099",
      "6830",
      "6003",
      "6885",
      "6857",
      "6828",
      "7872",
      "6846",
      "7836",
      "6076",
      "7879",
      "7885",
      "6016",
      "7895",
      "6022",
      "6021",
      "6040",
      "7887",
      "6006",
      "7801",
      "6005",
      "6867",
      "6829",
      "7884",
      "6017",
      "6094",
      "6043",
      "6067",
      "6810",
      "7859",
      "6072",
      "6814",
      "6863",
      "6015",
      "7874",
      "6821",
      "7866",
      "7817",
      "6849",
      "7819",
      "6075",
      "6085",
      "7864",
      "6878",
      "7808",
      "6818",
      "6882",
      "6820",
      "7849",
      "6082",
      "7831",
      "6057",
      "6092",
      "7869",
      "6073",
      "7878",
      "6046",
      "6883",
      "6049",
      "7894",
      "6858",
      "6887",
      "6028",
      "6033",
      "6876",
      "7803",
      "6889",
      "7860",
      "7861",
      "6871",
      "6055",
      "7805",
      "6869",
      "6865",
      "7824",
      "6840",
      "7841",
      "6031",
      "7840",
      "6074",
      "6002",
      "6844",
      "6839",
      "7899",
      "6081",
      "6090",
      "6848",
      "6086",
      "6018",
      "6831",
      "7881",
      "7880",
      "7883",
      "6048",
      "6836",
      "7828",
      "7837",
      "7850",
      "6859",
      "6010",
      "6874",
      "6807",
      "6068",
      "6881",
      "6817",
      "7844",
      "6801",
      "6079",
      "6826",
      "6056",
      "7888",
      "6000",
      "6852",
      "6800",
      "7814",
      "6039",
      "6078",
      "6886",
      "6013",
      "6880",
      "6897",
      "7810",
      "6070",
      "6008",
      "7815",
      "6854",
      "6037",
      "6024",
      "6004",
      "6032",
      "6861",
      "7863",
      "6879",
      "7857",
      "6011",
      "6896",
      "7855",
      "6851",
      "6834",
      "7800",
      "6035",
      "6899",
      "6822",
      "6873",
      "6059",
      "7848",
      "7811",
      "6087",
      "7876",
      "6023",
      "6097",
      "6843",
      "7898",
      "6833",
      "6892",
      "7804",
      "6837",
      "6898",
      "6813",
      "6856",
      "7853",
      "7813",
      "7891",
      "6044",
      "7829",
      "7871",
      "7856",
      "7802",
      "6051",
      "7818",
      "6053",
      "6819",
      "6042",
      "7882",
      "6009",
      "6875",
      "6050",
      "7839",
      "7833",
      "7862",
      "6815",
      "6096",
      "7889",
      "6895",
      "6824",
      "6827",
      "6034",
      "7827",
      "6888",
      "6891",
      "6025",
      "7807",
      "6088",
      "6877",
      "7823",
      "6835",
      "7820",
      "6058",
      "7835",
      "6045",
      "7867",
      "6077",
      "6062",
      "6808",
    ],
    lastLength: 4,
  },
};

export function isValidActiveDetect(taskName, file) {
  if (!taskName || !file) {
    return {
      message: "请填写所有必填字段。",
      valid: false,
    };
  } else {
    return {
      message: "",
      valid: true,
    };
  }
}

export function isValidCredit({
  name,
  oldPassword,
  newPassword,
  confirmPassword,
}) {
  if (!oldPassword || !newPassword || !confirmPassword || !name) {
    return {
      message: "请填写所有必填字段。",
      valid: false,
    };
  } else if (newPassword != confirmPassword) {
    return {
      message: "确认密码不正确",
      valid: false,
    };
  } else {
    return {
      message: "",
      valid: true,
    };
  }
}

export function isValidSocialDetect(taskName, file) {
  if (!taskName || !file) {
    return {
      message: "请填写所有必填字段。",
      valid: false,
    };
  } else {
    return {
      message: "",
      valid: true,
    };
  }
}

export function isValidGenerateParam(amount, countryCode, middleCode) {
  if (!amount || !countryCode || middleCode.size === 0) {
    return "请填写所有必填字段。";
  }
  return null;
}

export async function generatePhoneNumbers({
  file,
  amount,
  middleCode,
  countryCode,
}) {
  const rules = countryRules[countryCode];
  if (!rules) {
    throw new Error(`Unsupported country code: ${countryCode}`);
  }

  const { lastLength } = rules;
  const maxNumber = Math.pow(10, lastLength);
  const resultBatches = [];
  const currentBatch = new Set();

  // Read the file and store excluded numbers
  const excludedNumbers = new Set();
  if (file) {
    const text = await file.text();
    text
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line.length > 0)
      .forEach((number) => excludedNumbers.add(number));
  }

  while (currentBatch.size < amount) {
    const middleCodeArray = Array.from(middleCode);
    const segment =
      middleCodeArray[Math.floor(Math.random() * middleCodeArray.length)];
    const randomNumber = Math.floor(Math.random() * maxNumber);
    const lastPart = randomNumber.toString().padStart(lastLength, "0");

    if (lastPart === "0000000" || lastPart === "00000000") continue;

    const fullNumber = `${countryCode}${segment}${lastPart}`;
    if (excludedNumbers.has(fullNumber)) continue;
    currentBatch.add(fullNumber);
  }

  const phoneNumbers = Array.from(currentBatch);
  while (phoneNumbers.length) {
    resultBatches.push(phoneNumbers.splice(0, 200000));
  }

  return resultBatches;
}

export const downloadTextFile = async (result) => {
  const zip = new JSZip();

  result.forEach((text, i) => {
    const content = text.join("\n");
    zip.file(`phone${i}.txt`, content);
  });

  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, "phones.zip");
};

export function getSimplifiedDateTime(isoString) {
  const date = new Date(isoString);

  // Get the date components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is 0-indexed
  const day = String(date.getDate()).padStart(2, "0");

  // Get the time components
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  // Format the output as YYYY-MM-DD HH:mm:ss
  const simpleDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  return simpleDateTime;
}

export function getTimeStrHeader(social) {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  const formattedDate = `${social}_${year}_${month}_${day}`;
  return formattedDate;
}
