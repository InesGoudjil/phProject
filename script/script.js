let pdfLink =
  "https://drive.google.com/file/d/1NPut1-sg-IjEzMu2ftm72Lu2LTMeqnoP/view?usp=sharing";
let toggleBtn = document.getElementById("toggle-btn");
function toggleMenu() {
  if (toggleBtn.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }
}
function openMenu() {
  document.getElementById("nav-menu").classList.add("side-in");
  document.getElementById("nav-menu").classList.remove("side-out");
  document.getElementById("toggle-btn").classList.add("open");
}
function closeMenu(target) {
  if (window.innerWidth <= 768) {
    document.getElementById("nav-menu").classList.add("side-out");
    document.getElementById("nav-menu").classList.remove("side-in");
    document.getElementById("toggle-btn").classList.remove("open");
  }
}
let countries = {
  af: "+93",
  ax: "+35818",
  al: "+355",
  dz: "+213",
  as: "+1684",
  ad: "+376",
  ao: "+244",
  ai: "+1264",
  aq: "+672",
  ag: "+1268",
  ar: "+54",
  am: "+374",
  aw: "+297",
  au: "+61",
  at: "+43",
  az: "+994",
  bs: "+1242",
  bh: "+973",
  bd: "+880",
  bb: "+1246",
  by: "+375",
  be: "+32",
  bz: "+501",
  bj: "+229",
  bm: "+1441",
  bt: "+975",
  bo: "+591",
  ba: "+387",
  bw: "+267",
  bv: "+55",
  br: "+55",
  io: "+246",
  vg: "+1284",
  bn: "+673",
  bg: "+359",
  bf: "+226",
  bi: "+257",
  kh: "+855",
  cm: "+237",
  ca: "+1",
  cv: "+238",
  ky: "+1345",
  cf: "+236",
  td: "+235",
  cl: "+56",
  cn: "+86",
  cx: "+61",
  cc: "+61",
  co: "+57",
  km: "+269",
  cg: "+242",
  cd: "+243",
  ck: "+682",
  cr: "+506",
  ci: "+225",
  hr: "+385",
  cu: "+53",
  cy: "+357",
  cz: "+420",
  dk: "+45",
  dj: "+253",
  dm: "+1767",
  do: "+1849",
  ec: "+593",
  eg: "+20",
  sv: "+503",
  gq: "+240",
  er: "+291",
  ee: "+372",
  et: "+251",
  fk: "+500",
  fo: "+298",
  fj: "+679",
  fi: "+358",
  fr: "+33",
  gf: "+594",
  pf: "+689",
  tf: "+262",
  ga: "+241",
  gm: "+220",
  ge: "+995",
  de: "+49",
  gh: "+233",
  gi: "+350",
  gr: "+30",
  gl: "+299",
  gd: "+1473",
  gp: "+590",
  gu: "+1671",
  gt: "+502",
  gg: "+44",
  gn: "+224",
  gw: "+245",
  gy: "+595",
  ht: "+509",
  hm: "+672",
  hn: "+504",
  hk: "+852",
  hu: "+36",
  is: "+354",
  in: "+91",
  id: "+62",
  ir: "+98",
  iq: "+964",
  ie: "+353",
  im: "+44",
  il: "+972",
  it: "+39",
  jm: "+1876",
  jp: "+81",
  je: "+44",
  jo: "+962",
  kz: "+7",
  ke: "+254",
  ki: "+686",
  kw: "+965",
  kg: "+996",
  la: "+856",
  lv: "+371",
  lb: "+961",
  ls: "+266",
  lr: "+231",
  ly: "+218",
  li: "+423",
  lt: "+370",
  lu: "+352",
  mo: "+853",
  mk: "+389",
  mg: "+261",
  mw: "+265",
  my: "+60",
  mv: "+960",
  ml: "+223",
  mt: "+356",
  mh: "+692",
  mq: "+596",
  mr: "+222",
  mu: "+230",
  yt: "+262",
  mx: "+52",
  fm: "+691",
  md: "+373",
  mc: "+377",
  mn: "+976",
  me: "+382",
  ms: "+1664",
  ma: "+212",
  mz: "+258",
  mm: "+95",
  na: "+264",
  nr: "+674",
  np: "+977",
  nl: "+31",
  an: "+599",
  nc: "+687",
  nz: "+64",
  ni: "+505",
  ne: "+227",
  ng: "+234",
  nu: "+683",
  nf: "+672",
  kp: "+850",
  mp: "+1670",
  no: "+47",
  om: "+968",
  pk: "+92",
  pw: "+680",
  ps: "+970",
  pa: "+507",
  pg: "+675",
  py: "+595",
  pe: "+51",
  ph: "+63",
  pn: "+870",
  pl: "+48",
  pt: "+351",
  pr: "+1",
  qa: "+974",
  re: "+262",
  ro: "+40",
  ru: "+7",
  rw: "+250",
  bl: "+590",
  sh: "+290",
  kn: "+1869",
  lc: "+1758",
  mf: "+590",
  pm: "+508",
  vc: "+1784",
  ws: "+685",
  sm: "+378",
  st: "+239",
  sa: "+966",
  sn: "+221",
  rs: "+381",
  sc: "+248",
  sl: "+232",
  sg: "+65",
  sk: "+421",
  si: "+386",
  sb: "+677",
  so: "+252",
  za: "+27",
  gs: "+500",
  kr: "+82",
  es: "+34",
  lk: "+94",
  sd: "+249",
  sr: "+597",
  sj: "+47",
  sz: "+268",
  se: "+46",
  ch: "+41",
  sy: "+963",
  tw: "+886",
  tj: "+992",
  tz: "+255",
  th: "+66",
  tl: "+670",
  tg: "+228",
  tk: "+690",
  to: "+676",
  tt: "+1868",
  tn: "+216",
  tr: "+90",
  tm: "+993",
  tc: "+1649",
  tv: "+688",
  ug: "+256",
  ua: "+380",
  ae: "+971",
  gb: "+44",
  us: "+1",
  uy: "+598",
  uz: "+998",
  vu: "+678",
  va: "+39",
  ve: "+58",
  vn: "+84",
  wf: "+681",
  eh: "+212",
  ye: "+967",
  zm: "+260",
  zw: "+263",
};
let countriesId1 = document.getElementById("countries-1");
function fillList() {
  Object.keys(countries).map((item, index) => {
    {
      let html = `
    <li value="${countries[item]}">
      <img src="./assets/flags/${item}.png">
      <span>${countries[item]}</span>
    </li>
    `;
      countriesId1.innerHTML += html;
    }
  });
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach((dropdown) => {
    let dropdownOption = dropdown.querySelector(".dropdown-option");
    const dropdownHeader = dropdown.querySelector(".dropdown-header");
    const dropdownOptions = dropdown.querySelectorAll(".dropdown-option li");
    dropdownHeader.addEventListener("click", () => {
      dropdownOption.classList.toggle("dropdown-open");
    });
    dropdownOptions.forEach((option) => {
      option.addEventListener("click", () => {
        dropdown.setAttribute("value", option.getAttribute("value"));
        dropdownHeader.innerHTML = option.innerHTML;
        dropdownOption.classList.remove("dropdown-open");
        dropdownOption.scrollTop = 0;
      });
    });
  });
  document.addEventListener("click", (event) => {
    dropdowns.forEach((dropdown) => {
      if (!dropdown.contains(event.target)) {
        let dropdownOption = dropdown.querySelector(".dropdown-option");
        dropdownOption.classList.remove("dropdown-open");
        dropdownOption.scrollTop = 0;
      }
    });
  });
}
window.addEventListener("load", function () {
  setTimeout(() => {
    fillList();
  }, 2000);
});

function makeRequest() {
  let button = document.getElementById("submit-btn");
  let hint = document.getElementById("hint");
  let name = document.getElementById("name");
  let phone = document.getElementById("phone");
  let email = document.getElementById("email");
  let message = document.getElementById("message");
  let countryCode = document.querySelector(".dropdown-header span").textContent;

  if (name.value.trim() === "" || phone.value.trim() === "") {
    hint.classList.add("shown");
    setTimeout(() => {
      hint.classList.remove("shown");
    }, 2000);
  } else {
    let data = {
      fullName: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
      countryCode: countryCode,
    };
    button.textContent = "Sending ...";
    axios
      .post("https://www.gulflandproperty.com/api/email", data)
      .then((response) => {
        // Handle success
        name.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
        button.textContent = "Submit";
        setTimeout(() => {
          window.open(pdfLink);
        }, 500);
      })
      .catch((error) => {
        button.textContent = "Submit";
        console.error("Error:", error);
      });
  }
}
function according() {
  let accordingTitle = document.querySelectorAll(".panel .panel-title");
  for (let index = 0; index < accordingTitle.length; index++) {
    accordingTitle[index].addEventListener("click", () => {
      let isOpen = accordingTitle[index].getAttribute("data-opened") === "true";
      accordingTitle[index].setAttribute(
        "data-opened",
        isOpen ? "false" : "true"
      );
    });
  }
}
// true
according();
function showFAQS(element) {
  element.classList.add("d-none");
  let panels = document.getElementsByClassName("panel");
  for (let index = 0; index < panels.length; index++) {
    panels[index].classList.remove("d-none");
  }
}
var lastScrollTop = 0;
let nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  function () {
    forceCloseMenu();
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      nav.classList.add("slide-up");
    } else {
      nav.classList.remove("slide-up");
    }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
function forceCloseMenu() {
  document.getElementById("nav-menu").classList.remove("side-in");
  document.getElementById("toggle-btn").classList.remove("open");
}
