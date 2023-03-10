
///////////////////////////////////////////////////////////////////////////////
// MODULE xx : MODULE TEMPLATE  ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
// VARIABLES                    ///////////////////////////////////////////////
// Adding Events Listeners      ///////////////////////////////////////////////
// HTML DOM CONNECTION          ///////////////////////////////////////////////
// METHODS                      ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// MODULE 00 : GENERAL UI CONFIG  /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// COPIED-PASTED
// SIZING THE WINDOW //////////////////////////////////////////////////////////

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const toggleExpanderTool = (expander) => {
 expander.target.parentNode.parentNode.parentNode.classList.toggle('tool-closed')
}


// COPIED-PASTED
// SWIPE ACTIONS (Mobile) /////////////////////////////////////////////////////

let currentScreen = "main";
const mainMenu = document.getElementsByClassName("main-menu")[0];
const right = document.getElementsByClassName("right-sidebar")[0];
const left = document.getElementsByClassName("left-sidebar")[0];
const expanders = document.getElementsByClassName("expander");

for (expander of expanders) {
  expander.addEventListener("click", toggleExpanderTool);
}

document.addEventListener('swiped-left', function(e) {
  if (currentScreen == "main") {
    mainMenu.classList.add("open-main-menu")
    right.classList.add("open-right")

    currentScreen = "right"
    
  } else if (currentScreen == "left") {
    left.classList.remove("open-left")

    currentScreen = "main"
  }
});

document.addEventListener('swiped-right', function(e) {
  if (currentScreen == "main") {
    left.classList.add("open-left")

    currentScreen = "left"
  
  } else if (currentScreen == "right") {
    right.classList.remove("open-right")
    //mainMenu.classList.remove("open-main-menu")
    
    currentScreen = "main"
  }
});

// TOGGLE LEFT MENU

function handleLeftMenuToggle(evt){
  left.classList.toggle("open-left-desktp");
}
function handleExpandToggle (evt){
  isExpanded = !isExpanded;
  quranGrid.classList.toggle("expanded");
  imageLoaded();
}

function handleNightToggle (evt){
  imge.classList.toggle("night");
}
document.getElementById("left-menu-button").addEventListener('click', handleLeftMenuToggle, false);
document.getElementById("expan-toggle-button").addEventListener('click', handleExpandToggle, false);
document.getElementById("night-toggle-button").addEventListener('click', handleNightToggle, false);


///////////////////////////////////////////////////////////////////////////////
// MODULE 01 - 02 //  Configs diff  ///////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// Configs ////////////////////////////////////////////////////////////////////

// Normalized arabic characters (Needed pricipaly in search) : Mybe need to be moved to seach module
var arabicNormChar = {
  ??: "??",
  ???: "????",
  ????: "??",
  ??: "??",
  ??: "??",
  ??: "??",
  ??: "??",
  ??: "??",
  ??: "????",
  ??: "??",
  ??: "??",
  "??": "",
  "??": "",
  "??": "",
  "??": "",
  "??": "",
  "??": "",
  "??": "",
  "??": "",
  "??": "",
  "??": "",
  "??": "",
  "???": "",
};

// root folder for rawis folders
const rootSource = 'https:\\\\raw.githubusercontent.com\\the-ten-readings\\dataset\\data\\qurans';

// Availaible Quran Versions (Riwaiat or Torok) : Configurations

const rawis = {
  R111: {
    label: "?????????? - ?????? ?????????????? ???????????? ??????????",
    folder: "NafiQalown1",
    lastPage: 630,
  },
  R112: {
    label: "?????????? - ?????? ?????????????? ???????? ?????? ??????????",
    folder: "NafiQalown2",
    lastPage: 630,
  },
  R113: {
    label: "?????????? - ???????? ?????????????? ???????????? ??????????",
    folder: "NafiQalown3",
    lastPage: 630,
  },
  R114: {
    label: "?????????? - ???????? ?????????????? ???????? ?????? ??????????",
    folder: "NafiQalown4",
    lastPage: 630,
  },
  R121: {
    label: "?????? - ???????? ????????????",
    folder: "NafiWarshALAzraq",
    lastPage: 635,
  },
  R122: {
    label: "?????? - ???????? ??????????????????",
    folder: "NafiWarshAspahani",
    lastPage: 630,
  },

  R2: {
    label: "??.?????? ????????",
    folder: "IbnKatheer",
    lastPage: 630,
  },
  R21: {
    label: "??????????",
    folder: "IbnKatheerAlBazzi",
    lastPage: 630,
  },
  R22: {
    label: "????????",
    folder: "IbnKatheerQunbol",
    lastPage: 630,
  },
  
  R3: {
    label: "?????? ???????? ????????????",
    folder: "AlBasri",
    lastPage: 636,
  },
  R311: {
    label: "???????????? - ?????????? ??????????????",
    folder: "AlBasriAlDoori1",
    lastPage: 636,
  },
  R312: {
    label: "???????????? - ???????? ??????????????",
    folder: "AlBasriAlDoori2",
    lastPage: 636,
  },
  R32: {
    label: "????????????",
    folder: "AlBasriAlSoosi",
    lastPage: 636,
  },

  R4: {
    label: "?????? ????????",
    folder: "IbnAmmer",
    lastPage: 631,
  },
  R41: {
    label: "???????? ???? ?????? ????????",
    folder: "IbnAmmerHisham",
    lastPage: 631,
  },
  R42: {
    label: "?????????? ???? ?????? ????????",
    folder: "IbnAmmerIbnthkwan",
    lastPage: 631,
  },

  R5: {
    label: "????????",
    folder: "Aseem",
    lastPage: 630,
  },
  R51: {
    label: "????????",
    folder: "Aseem1Shouba",
    lastPage: 626,
  },
  R521: {
    label: "?????? ?????? ??????????",
    folder: "AseemHafsa1",
    lastPage: 624,
  },
  R522: {
    label: "?????? ???????????? ????????",
    folder: "AseemHafsa2",
    lastPage: 624,
  },

  R6: {
    label: "???????? ????????????",
    folder: "Hamza",
    lastPage: 634,
  },
  R611: {
    label: "?????? - ???????? ?????????? ?????? ???????????? ??????????????",
    folder: "HamzaKhalf1",
    lastPage: 634,
  },
  R612: {
    label: "?????? - ???????????? ?????? ???????????? ??????????????",
    folder: "HamzaKhalf2",
    lastPage: 634,
  },
  R621: {
    label: "???????? - ???????? ?????? ?????????? ????????????",
    folder: "HamzaKhallad1",
    lastPage: 634,
  },
  R622: {
    label: "???????? - ???????? ?????????? ?????????????? ????",
    folder: "HamzaKhallad2",
    lastPage: 634,
  },
  
  R71: {
    label: "?????????????? ?????????????? ????????????????",
    folder: "ALKisaai1",
    lastPage: 631,
  },
  R711: {
    label: "??????????",
    folder: "ALKisaaiAlLayth1",
    lastPage: 631,
  },
  R712: {
    label: "????????????",
    folder: "ALKisaaiAlDoori1",
    lastPage: 631,
  },
  R72: {
    label: "?????????????? ?????????????? ????????????????",
    folder: "ALKisaai2",
    lastPage: 631,
  },
  R721: {
    label: "?????????? - ?????????????? ????????????????",
    folder: "ALKisaaiAlLayth2",
    lastPage: 631,
  },
  R722: {
    label: "???????????? - ?????????????? ????????????????",
    folder: "ALKisaaiAlDoori2",
    lastPage: 631,
  },

  R8: {
    label: "?????? ????????",
    folder: "AbuJaafar",
    lastPage: 632,
  },
  R81: {
    label: "?????? ??????????",
    folder: "AbuJaafarIbnWardan",
    lastPage: 632,
  },
  R82: {
    label: "?????? ????????",
    folder: "AbuJaafarIbnjamaz",
    lastPage: 632,
  },

  R9: {
    label: "?????????? ????????????",
    folder: "Yaqub",
    lastPage: 628,
  },
  R91: {
    label: "????????",
    folder: "YaqubRuways",
    lastPage: 628,
  },
  R92: {
    label: "??????",
    folder: "YaqubRooh",
    lastPage: 628,
  },

  R10: {
    label: "?????? ????????????",
    folder: "Khalaf10",
    lastPage: 626,
  },
  R101: {
    label: "??????????",
    folder: "Khalaf10Eshaq",
    lastPage: 627,
  },
  R1021: {
    label: "??????????",
    folder: "Khalaf10Idrees1",
    lastPage: 626,
  },
  R1022: {
    label: "?????????? ???????????? ??????????",
    folder: "Khalaf10Idrees2",
    lastPage: 627,
  },
}

// Availaible Quran Versions (Riwaiat or Torok) : Configurations - Up/Down Navigations
const rawArr = ["R111", "R112", "R113", "R114", "R121", "R122", "R2", "R21", "R22", "R3", "R311", "R312", "R32", "R4", "R41", "R42", "R5", "R51", "R521", "R522", "R6", "R611", "R612", "R621", "R622", "R71", "R711", "R712", "R72", "R721", "R722", "R8", "R81", "R82", "R9", "R91", "R92", "R10", "R101", "R1021", "R1022"];

const linesCustomStyles = {
  p1l2: 'padding: 41.2% 23% 0 24%;',
  p1l3: 'padding: 0 16% ;',
  p1l4: 'padding: 0 11% ;',
  p1l5: 'padding: 0 9% ;',
  p1l6: 'padding: 0 12% ;',
  p1l7: 'padding: 0 21% ;',
  p1l8: 'padding: 0 34% 44% 34%',

  p2l3: 'padding: 50% 15% 0;',
  p2l4: 'padding: 0 11% 0 ;',
  p2l5: 'padding: 0 10% ;',
  p2l6: 'padding: 0 13% ;',
  p2l7: 'padding: 0 22% ;',
  p2l8: 'padding: 0 35% 42% 35%',
  
  p50l3: 'padding-top: 28.5%;',
  
  p76l14: 'padding-bottom: 15%',
  p77l2: 'padding-top: 15.5%;',
  p106l8: 'padding-top: 25.3%;', // middle sura + basmala
  
  p128l3: 'padding-top: 28.5%;', // header sura + basmala

  p151l3: 'padding-top: 28.5%;',

  p177l3: 'padding-top: 27.5%;',

  p187l2: 'padding-top: 15.5%;',

  p207l14: 'padding-bottom: 15.5%;', // header at the buttom

  p208l2: 'padding-top: 15%;', // basmala at the header

  p221l6: 'padding-bottom: 10%;', 

  p221l9 : 'padding-top: 16%;', 

  p235l8 : 'padding-bottom: 16.5%;', 
  p235l11 : 'padding-top: 8.5%;', 

  p249l3: 'padding-top: 28%;',
  
  p255l5: 'padding-top: 26%;',
  
  p262l3: 'padding-top: 27%;',
  
  p267l9: 'padding-top: 25%;',

  p282l3: 'padding-top: 28%;',

  p293l9: 'padding-bottom: 26%;',

  p305l3: 'padding-top: 27%;',
  
  p312l7: 'padding-top: 27%;',
  
  p322l3: 'padding-top: 28%;',

  p331l14: 'padding-bottom: 15%;',
  p332l2: 'padding-top: 15%;',
  
  p341l14: 'padding-bottom: 15%;',
  p342l2: 'padding-top: 15%;',

  p349l14: 'padding-bottom: 15%;',
  p350l2: 'padding-top: 15%;',

  p359l13: 'padding-top: 25%;',

  p366l14: 'padding-bottom: 15%;',
  p367l2: 'padding-top: 15%;',
  
  p376l14: 'padding-bottom: 15%;',
  p377l2: 'padding-top: 15%;',
  
  p385l10: 'padding-top: 27%;',
  
  p396l10: 'padding-top: 27%;',

  p404l12: 'padding-top: 25%;',
  
  p411l3: 'padding-top: 28%;',
  
  p414l14: 'padding-bottom: 15%;',
  p415l2: 'padding-top: 15%;',
  
  p417l14: 'padding-bottom: 13.7%;',
  p418l2: 'padding-top: 15%;',
  
  p428l3: 'padding-top: 27%;',

  p434l10: 'padding-top: 25%;',

  p440l6: 'padding-top: 27%;',

  p445l14: 'padding-bottom: 15%;',
  p446l2: 'padding-top: 15%;',

  p452l14: 'padding-bottom: 15%;',
  p453l2: 'padding-top: 15%;',

  p458l6: 'padding-top: 26%;',
  
  p467l5: 'padding-top: 27%;',

  p477l3: 'padding-top: 28%;',

  p483l3: 'padding-top: 28%;',
  
  p489l7: 'padding-top: 27.4%;',

  p496l3: 'padding-top: 28%;',

  p498l14: 'padding-bottom: 15%;',
  p499l2: 'padding-top: 15%;',

  p502l9: 'padding-top: 27.4%;',

  p506l14: 'padding-bottom: 15%;',
  p507l2: 'padding-top: 15%;',

  p511l3: 'padding-top: 28%;',

  p515l9: 'padding-top: 26%;',

  p518l3: 'padding-top: 28%;',
  
  p520l14: 'padding-top: 28%;',
  
  p523l10: 'padding-top: 25%;',

  p525l14: 'padding-bottom: 15%;',
  p526l2: 'padding-top: 15%;',

  p528l11: 'padding-top: 26%;',

  p531l7: 'padding-top: 26%;',
  
  p534l9: 'padding-top: 26%;',
  
  p537l13: 'padding-top: 26%;',

  p542l3: 'padding-top: 27%;',

  p545l9: 'padding-top: 25%;',

  p548l14: 'padding-bottom: 15%;',
  p549l2: 'padding-top: 15%;',

  p551l9: 'padding-top: 26%;',

  p553l3: 'padding-top: 27%;',

  p554l9: 'padding-top: 24%;',

  p555l14: 'padding-bottom: 15%;',
  p556l2: 'padding-top: 15%;',

  p557l14: 'padding-bottom: 15%;',
  p558l2: 'padding-top: 14%;',

  p560l3: 'padding-top: 27%;',
  
  p562l3: 'padding-top: 26%;',

  p564l8: 'padding-top: 25%;',

  p566l11: 'padding-top: 25%;',
  
  p568l11: 'padding-top:  25%;',
 
  p570l7: 'padding-top: 25%;',
  
  p572l3: 'padding-top: 26%;',
  
  p574l3: 'padding-top: 26%;',
  
  p575l10: 'padding-top: 25%;',

  p577l8: 'padding-top: 26%;',
  
  p578l11: 'padding-top: 25%;',
  
  p580l9: 'padding-top: 25%;',
  
  p582l3: 'padding-top: 28%;',
  
  p582l3: 'padding-top: 28%;',
 
  p583l10: 'padding-top: 26%;',

  p584l14: 'padding-bottom: 15%;',

  p585l2: 'padding-top: 15%;',
  
  p586l3: 'padding-top: 25.5%;',
  p586l14: 'padding-bottom: 15%;',
  
  p587l2: 'padding-top: 14%;',
  p587l13: 'padding-top: 25%;',

  p589l4: 'padding-top: 26%;',

  p590l3: 'padding-top: 26%;',
  p590l14: 'padding-bottom: 15%;',

  p591l2: 'padding-top: 14%;',
  p591l10: 'padding-top: 23%;',

  p592l5: 'padding-top: 25%;',
  p593l3: 'padding-top: 25%;',
  p594l6: 'padding-top: 24%;',
  p594l14: 'padding-bottom: 13%;',
  p595l2: 'padding-top: 13%;',
  p595l11: 'padding-top: 23%;',
  p596l6: 'padding-top: 22%;',
  p596l13: 'padding-top: 22%;',
  p597l3: 'padding-top: 25%;',
  p597l9: 'padding-top: 25%;',
  
  p598l3: 'padding-top: 27%;',
  p598l8: 'padding-top: 24%;',

  p599l5: 'padding-top: 23%;',
  p599l12: 'padding-top: 24%;',

  p600l4: 'padding-top: 23%;',
  p600l12: 'padding-top: 23%;',

  p601l3: 'padding-top: 25%;',
  p601l7: 'padding-top: 24%;',
  p601l13: 'padding-top: 22%;',

  p602l3: 'padding-top: 24%;',
  p602l8: 'padding-top: 22%;',
  p602l14: 'padding-top: 22%;',

  p603l3: 'padding-top: 23%;',
  p603l8: 'padding-top: 22%;',
  p603l13: 'padding-top: 22%;',
  
  p604l3: 'padding-top: 25%;',
  p604l7: 'padding-top: 22%;',
  p604l12: 'padding-top: 22%;',
  
}

// HTML DOM CONNECTION  ///////////////////////////////////////////////////////

// page
const privouos = document.getElementById("privouos");
const next = document.getElementById("next");
const page = document.getElementById("page");

const raw = document.getElementsByClassName("raw");
const imge = document.getElementById("imge");

// search : controls
const search = document.getElementById("search");
const searchbox = document.getElementById("searchbox");
const searchboxInput = document.getElementById("searchbox-input");

// search : filter
const filter = document.getElementById("filter");
const filterAndSelector = document.getElementById("filterAndSelector");
const filterParts = document.getElementById("filter-parts");
const isJuzaChecked = document.getElementById("part-juza");
const isHizbChecked = document.getElementById("part-hizb");
const isSuraChecked = document.getElementById("mart-sura");

// search : results
const results = document.getElementById("results");
const resultsButtons = document.getElementsByClassName("result_button");

// riwaiat filter (right menu)
const imamsList = document.getElementById("imams-list");

// quran grid layout
const quranGrid = document.getElementById("quran-grid");

// advanced work
const selectedRawiLabel = document.getElementById("selectedRawiLabel");
const alert = document.getElementById("alert");
const tafsirElement = document.getElementById("tafsir");

///////////////////////////////////////////////////////////////////////////////
// MODULE 02 : Init App  //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// VARIABLES  /////////////////////////////////////////////////////////////////

var isPageLoaded = false;
var selectedRawi = "R111";
var selectedPage = -3//;79; // -3
var isSearchOpen = true;
var isExpanded = false;

// METHODS  ///////////////////////////////////////////////////////////////////

// update attribute value
const updateElement = (element, prop, value) => {
  if (element) element[prop] = value;
};

const getPath = () => {
  var decalage = parseInt(selectedPage) + 4;
  return `${rootSource}\\${rawis[selectedRawi].folder}\\${("0000" + decalage).slice(-4)}.jpg`;
};

// Adding Events Listeners  ///////////////////////////////////////////////////

// Dom loaded
window.addEventListener("DOMContentLoaded", (e) => {
  isPageLoaded = true;
  filterIndexCmd(); // To hide the lines showed based on DOM loaded elements based on the checked options
  
  // restore saved settings : rawi and page
  let savedRawi = window.localStorage.getItem('rawi')
  if (savedRawi != null && savedRawi != ''){
    selectedRawi = savedRawi
  }
  raw[selectedRawi].classList.add("raw-selected");

  let savedPage = window.localStorage.getItem('page')
  if (savedPage){
    selectedPage = savedPage
  }

  // update the selected rawi label
  selectedRawiLabel.innerHTML = rawis[selectedRawi].label

  updatePage();
});

///////////////////////////////////////////////////////////////////////////////
// MODULE 02 : Quran page  ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// METHODS  ///////////////////////////////////////////////////////////////////

const toggleLoading = (status) => {
  // loading on
  if (status == true){
    // loading tag :
    loading.classList.add("loading-on")
    quranGrid.classList.add("quranGrid-closed");
  }
  // loading off
  else{
    // loading tag :
    loading.classList.remove("loading-on")
    quranGrid.classList.remove("quranGrid-closed");
  }
}

const imageLoaded = () => {
  const sWidth = isExpanded ? 781 : 1025
  const sHeight = 1305
  ctx.canvas.width = sWidth
  ctx.canvas.height = sHeight

  // quranGrid.style.height = sHeight / 100 + "px"
  // quranGrid.style.width = sWidth / 100 + "px"

  // TODO: to be cleaned later: pnly for test  

  // setTimeout(() => {
  //   ctx.drawImage(currentImage,isMobile ? 40 : 0, 0, sWidth, sHeight, 0,0, sWidth,sHeight);
  //   // close the loading block
  //   toggleLoading(false)
  // }, 1000)

  ctx.drawImage(currentImage, isExpanded ? 37 : 0, 0, sWidth, sHeight, 0,0, sWidth,sHeight);

  // close the loading block
  toggleLoading(false)
};


const handelSelectedAya = (targetAyaKey) => {
  let result = ''
  tafsir.forEach((i)=>{
    if(i.id === targetAyaKey){
      result = i.tafsir
      return
    }
  })

  if (result != '') {
    tafsirElement.innerHTML = result
  } else {
    tafsirElement.innerHTML = "?????? ???????????? ???? ?????? ???????????????? ???? ???????? ???????? ?????? ??????"
  }
}

const imageCantBeLoaded = () => {
  updateImgDisplay('404')

  // close the loading block
  toggleLoading(false)
  quranGrid.classList.add("quranGrid-closed");
};

const updateImgDisplay = (type = null) => {
  if (type == "404") {
    currentImage.src = ".\\src\\assets\\images\\peace-be-upon-him.jpg"
    toggleLoading(true)
    return;
  }
  toggleLoading(true)
  currentImage.src = getPath();
};



const getLastPageForRawiOrCurrentOne = (rawi = null) => {
  if (rawi != null){
    return rawis[rawi].lastPage - 4
  }
  return rawis[selectedRawi].lastPage - 4
}

var ab = []
const bc = []

const updatePage = (updateDisplay = true) => {

  // only for div /////////////////////////

  // for (a of document.getElementsByClassName("range")){
  //   ab.push(a.value)
  // }

  // bc.push({page: selectedPage - 1, width : ab })
  // ab = []
  // console.log(bc)

  // only for dev ended ///////////////////
  
  // save data
  window.localStorage.setItem('page', selectedPage);

  /* -!- */

  // update the current page number
  if (isPageLoaded) {
    updateElement(page, "value", selectedPage);
  }

  // update the image source
  if (updateDisplay) {
    updateImgDisplay();
  }

  // gridQuran managment :
  updateGridDisplay();

  // update fahras selections according the current page
  for (option of filterAndSelector.options) {
    if(option.selected && option.value != selectedPage) {
      option.selected = false;
    }
    if(!option.selected && option.value == selectedPage) {
      option.selected = true;
    }
  }

  // update the alert mail data
  alert.href = `mailto:obidatm@gmail.com;nooralhouda.contact@gmail.com?subject=???????? ?????????? (???? ???????? the-ten-readings.github.io) &body=????????: ${rawis[selectedRawi].label} - ????????????: ${selectedPage}%0D%0A______________%0D%0A`
};

const nextCB = () => {
  //debugger;

  if (selectedPage == getLastPageForRawiOrCurrentOne()) {
    selectedPage = -3;
  } else {
    selectedPage = parseInt(selectedPage) + 1;
  }
  updatePage();
};

const privCB = () => {

  // if the page is the last page of the current Rawi Moshaf version then :
  if (selectedPage == -3) {
    selectedPage = getLastPageForRawiOrCurrentOne();
  } else {
    selectedPage = selectedPage - 1;
  }
  updatePage();
};

const goToPageCmd = (e) => {
  const value = parseFloat(e.target.value);
  const lPage = getLastPageForRawiOrCurrentOne()

  // ! update the page if the user don't play with the input ie : if not let the last correct displayed page
  if (value >= -3 && value <= lPage) {
    selectedPage = value;
  }
  // if the input is empty told the user
  else if (isNaN(value) || value == "" || value == "-"){
    updateImgDisplay("404")
    selectedPage = -3;
    updateGridDisplay()
    return;
  }

  // if the request comes from the left menu (when chooseing something from fahras) 
  // and we are in a mobile screen then close the bar 
  if (e.code == undefined && left.classList.contains("open-left") && currentScreen == "left"){
    currentScreen = "main"
    left.classList.remove("open-left")
  }

  updatePage();
};

const goToPageFromSearchCmd = (e) => {
  const page = parseFloat(e.target.dataset.page);
  const aya = parseFloat(e.target.dataset.targetaya);
  const lPage = getLastPageForRawiOrCurrentOne()

  // even if we assume the the glassory values are correct but I will check the values !
  
  if (page >= -3 && page <= lPage) {
    selectedPage = page;
    selectedAya = aya;
    handelSelectedAya(e.target.dataset.targetayakey)
  }
  // if the input is empty told the user
  else if (isNaN(page) || page == "" || page == "-"){
    updateElement(imge, "src", "404.jpg");
    selectedPage = -3;
    updateGridDisplay()
    return;
  }

  // close the left side bar where the page updated from search 
  if(left.classList.contains("open-left") && currentScreen == "left"){
    currentScreen = "main"
    left.classList.remove("open-left")
  }

  updatePage();
};

const updateRawCmd = (e) => {
  const newRawId = e.target.id;

  // if selected page for the old rawi is sup then the last page for new rawi
  // (that means the new rawi does not have the equivalent number page)
  // then change the page number
  let lpfNewRawi = getLastPageForRawiOrCurrentOne(newRawId)
  if (selectedPage > lpfNewRawi){
    selectedPage = lpfNewRawi
    updatePage(null,false) // we will update the Image only once using the updateImgDisplay() func
  }

  // remove privous selected effect
  raw[selectedRawi].classList.remove("raw-selected");
  selectedRawi = newRawId;
  window.localStorage.setItem('rawi', newRawId)
  // add selected effect
  raw[selectedRawi].classList.add("raw-selected");

  // update the selected rawi label
  selectedRawiLabel.innerHTML = rawis[selectedRawi].label

  // close the riht side bar where the rawi have been choosed
  if(right.classList.contains("open-right") && currentScreen == "right"){
    currentScreen = "main"
    right.classList.remove("open-right")
  }


  updateImgDisplay();
};

const updateRawArrICmd = (newRaw) => {
  raw[selectedRawi].classList.remove("raw-selected");
  selectedRawi = newRaw;
  window.localStorage.setItem('rawi', newRaw)
  raw[selectedRawi].classList.add("raw-selected");

  // update the selected rawi label
  selectedRawiLabel.innerHTML = rawis[selectedRawi].label

  updateImgDisplay();
};

// Adding Events Listeners  ///////////////////////////////////////////////////

// rawi of rawis when click declanch updateRawCmd
for (rawi of raw) {
  rawi.addEventListener("click", updateRawCmd);
}

privouos.addEventListener("click", privCB);
// when click on next button
next.addEventListener("click", nextCB);

// when write new page in buttom page bar
page.addEventListener("keyup", goToPageCmd);

// VARIABLES  /////////////////////////////////////////////////////////////////
const loading = document.getElementById("loading");
const currentImage = new Image();
currentImage.onload = imageLoaded;
currentImage.onerror = imageCantBeLoaded;

const ctx = document.getElementById("imge").getContext("2d");




///////////////////////////////////////////////////////////////////////////////
// MODULE 03 : Search & Filter search request  ////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// VARIABLES  /////////////////////////////////////////////////////////////////

// METHODS  ///////////////////////////////////////////////////////////////////


// simplify text before using it in search
const simplifyArabic = (str) => {
  return str
    .replace(/[^\u0000-\u007E]/g, function (a) {
      var retval = arabicNormChar[a];
      if (retval == undefined) {
        retval = a;
      }
      return retval;
    })
    .normalize("NFKD")
    .toLowerCase();
};

// search for Aya and update the result menu
const searchAya = (text) => {
  const normalized = simplifyArabic(text);
  results.innerHTML = "";

  QURAN.find((line) => {
    let r = line.contentSimple.search(normalized);
    if (r != -1) {
      // console.log(line)
      results.insertAdjacentHTML(
        "beforeend",
        `
      <div>
        <p><b>???</b> ${line.content} <b>???</b> <br><span>(${chapters['c'+line.suraNumber].name}</span>:<span>${line.number})</span></p>
        <button class="result_button" data-page="${line.pageNumber}" data-targetAya="${line.id}" data-targetAyaKey="${line.suraNumber}:${line.number}">?????????? ???????????? <span>${line.pageNumber}</span> </button>
      </div>
      `
      );
    }
  });
};

// write search string and control search string and add click (links) events in the result
const searchboxInputUpdatedCmd = (e) => {
  // console.log("ok", e)
  const value = !e ? null : e.target.value;
  // validation : we will escape it for now
  
  if (!value || value.length < 5) {
    searchboxInputCleanCmd()
    return;
  }
  // search
  searchAya(value);

  for (resultButton of resultsButtons) {
    resultButton.addEventListener("click", goToPageFromSearchCmd);
  }
};

const searchboxInputCleanCmd = (e) => {
  results.innerHTML = "";
}

// filtering search request //

// search for keyword in a string (with simplification)
const matchFilter = (string, keyword) => {
  const normalized_keyword = simplifyArabic(keyword);
  const normalized_string = simplifyArabic(string);
  const result = normalized_string.search(normalized_keyword);
  if (result != -1) {
    return true;
  }
  return false;
};

// Hide/show the index lines based on the checked options
const filterIndexCmd = (e) => {
  // when check and unckeck

  // reset : show every line
  for (option of filterAndSelector.options) {
    option.classList.remove("hide");
  }

  // hide / show
  for (option of filterAndSelector.options) {
    if (option.dataset.part == "juza" && !isJuzaChecked.checked) {
      option.classList.add("hide");
    }

    if (option.dataset.part == "hizb" && !isHizbChecked.checked) {
      option.classList.add("hide");
    }

    if (option.dataset.part == "sura" && !isSuraChecked.checked) {
      option.classList.add("hide");
    }
  }

  // when search using keyboard

  if (e && e.type == "keyup") {
    // if text is null or empty
    if (!e.target.value) {
      return;
    }
    // after passing by checkbox filter, in this pipe we filter the rest by checking if its match the text
    for (option of filterAndSelector.options) {
      if (!option.classList.contains("hide") && !matchFilter(option.innerHTML, e.target.value)) {
        option.classList.add("hide");
      }
    }
  }
};

// Adding Events Listeners && handlers  ///////////////////////////////////////////////////


searchboxInput.addEventListener("input", searchboxInputUpdatedCmd);
searchboxInput.onsearch  = searchboxInputCleanCmd;
filterAndSelector.addEventListener("change", goToPageCmd);
isJuzaChecked.addEventListener("change", filterIndexCmd);
isHizbChecked.addEventListener("change", filterIndexCmd);
isSuraChecked.addEventListener("change", filterIndexCmd);
filterParts.addEventListener("keyup", filterIndexCmd);

///////////////////////////////////////////////////////////////////////////////
// MODULE 03 : Quran Versions / Riwaiat filter  ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// VARIABLES  /////////////////////////////////////////////////////////////////

// METHODS  ///////////////////////////////////////////////////////////////////

// Adding Events Listeners  ///////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// MODULE 99 : LAST : Windows Keyboard binding  ///////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// when click up down prevent the default scroll bar behavoir (so we can keep under the eye what the selected rawi)
window.addEventListener("keydown", (e) => {
  // return;/* TOBEREMVOED */

  if ((e.code == "ArrowUp" || e.code == "ArrowDown") && e.target !="input.range") {
    e.preventDefault();
    imamsList.scroll(0, raw[selectedRawi].getBoundingClientRect().top);
  }
});

// when click on a button :
window.addEventListener("keyup", (e) => {
  
  // close the left menu search in non large desktops if it was opened
  if (e.code == "Escape") {
    left.classList.remove("open-left-desktp");
  }
  
  // console.log(e.code)
  // open search 
  if ((e.code == "ShiftLeft" || e.code == "ShiftRight")) {
    left.classList.toggle("open-left-desktp");
    if (!left.classList.contains("open-left-desktp")){
      searchboxInput.focus();
    }
  }

  // right / left => change the page
  if (e.code == "ArrowRight") {
    privCB();
  } else if (e.code == "ArrowLeft") {
    nextCB();
  } 
  
  // return;/* TOBEREMVOED */
  
  // up down switch between Quran Versions / or riwiat / or rawis
  if (e.code == "ArrowDown") {
    // get the following rawi
    let nextItem = "a1";

    let index = rawArr.indexOf(selectedRawi);
    if (index >= 0 && index < rawArr.length - 1) {
      nextItem = rawArr[index + 1];
    } else {
      nextItem = rawArr[0];
    }
    // update selected rawi button
    updateRawArrICmd(nextItem);
  } else if (e.code == "ArrowUp") {
    // get the following rawi
    let index = rawArr.indexOf(selectedRawi);
    let privousItem = "a1";

    if (index > 0 && index <= rawArr.length - 1) {
      privousItem = rawArr[index - 1];
    } else {
      privousItem = rawArr[rawArr.length - 1];
    }
    // update selected rawi button
    updateRawArrICmd(privousItem);
  } else if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].includes(e.key)) {
    /* -!- */
    // need to detec the zone when its have been writed if not a text box => then change the page
  } else {
    /* -!- */
    // need to detec the zone when its have been writed if not a text box => search in Quran
    // if (isSearchOpen){
    //     searchboxInput.focus();
    // }
  }
});

///////////////////////////////////////////////////////////////////////////////
/////////////////////////// END OF WORKING FUATURES ///////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
///////////////////////// NEW MODULES : IN DEV PHASE //////////////////////////
///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////
// MODULE 04 : Page Grid Overlay  /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// VARIABLES  /////////////////////////////////////////////////////////////////

var currentPageAyats;
var selectedAya;

// var currentPageLines = document.querySelectorAll("[data-aya-number=12]");
var selectedLine = null;

// Adding Events Listeners  ///////////////////////////////////////////////////

const handelAyaPart = (element) => {
  // better to add all event listents in one loop
  element.addEventListener("mouseenter", (e) => {
    currentPageAyats.forEach((aya) => {
      // console.log(aya)
      if (aya.dataset.ayaid == e.target.dataset.ayaid) {
        aya.classList.add("aya-hovered");
      }
    });
  });

  element.addEventListener("mouseleave", (e) => {
    currentPageAyats.forEach((aya) => {
      if (aya.dataset.ayaid == e.target.dataset.ayaid) {
        aya.classList.remove("aya-hovered");
      }
    });
  });

  element.addEventListener("click", (e) => {
    currentPageAyats.forEach((aya) => {
      if (aya.dataset.ayaid == e.target.dataset.ayaid) {
        if (selectedAya) {
          // clear the privous selection
          currentPageAyats.forEach((aya) => {
            if (aya.dataset.ayaid == selectedAya) {
              aya.classList.remove("aya-selected");
            }
          });
        }

        /*
        if (selectedLine) {
          // clear the privous selection
          currentPageLines.forEach((line) => {
            if (line.dataset.line == selectedLine) {
              line.classList.remove("line-selected");
            }
          });
          selectedLine = null;
        }*/
        currentPageAyats.forEach((aya) => {
          if (aya.dataset.ayaid == e.target.dataset.ayaid) {
            aya.classList.add("aya-selected");
          }
        });
        selectedAya = aya.dataset.ayaid;
        handelSelectedAya(`${e.target.dataset.ayasuranumber}:${e.target.dataset.ayanumber}`)
      }
    });
  });

  // element.children[0].children[0].addEventListener('input', e => {
  //   element.children[0].children[0].value = e.target.value
  //   // element.children[0].children[1].max = e.target.value
  //   element.dataset.ayaendposition = e.target.value// element.children[0].children[2]. = e.target.value
  // })
};

// const hamish = document.getElementById("hamish").addEventListener("click", ()=>{
// })

// METHODS  ///////////////////////////////////////////////////////////////////
// line template
const lineTemplate = (lineNumber, ayaParts) => {
  let cs = linesCustomStyles[`p${selectedPage}l${lineNumber}`]
           &&  linesCustomStyles[`p${selectedPage}l${lineNumber}`]
  return cs ? `<div id="${lineNumber}" style="${cs}">${ayaParts}</div>`:
   `<div id="${lineNumber}">${ayaParts}</div>`;
}

// ayaPart template
const linePartTemplate = (data) => 
{
  return `<div  
  id="${data.ayaId}-${data.ayaNumber}-${data.lineNumber}" 
  ${(selectedAya && data.ayaId == selectedAya) && "class='aya-selected'"}
  data-aya
  data-ayaId="${data.ayaId}" 
  data-ayaNumber="${data.ayaNumber}"
  data-ayaSuraNumber="${data.suraNumber}" 
  data-ayaLineNumber="${data.lineNumber}"
  data-ayaEndPosition="${data.lineWidth}">
</div>`;
}
// <div class="meter">
//   <input class="range" type='number' min="0" max="100" value="${data.lineWidth}">
// </div>

// update the Grid UI
const updateGrid = (ayat) => {

  // reset template content
  quranGrid.innerHTML = "";

  const newLines = {};

  for (aya of ayat) {
    for (coveredLine of aya.coveredLines) {
      if (!newLines[coveredLine.lineId]) {
        newLines[coveredLine.lineId] = [{ ayaId: aya.id, ayaNumber: aya.number, suraNumber: aya.suraNumber, lineNumber: coveredLine.lineId, lineWidth: coveredLine.width }];
      } else {
        newLines[coveredLine.lineId].push({ ayaId: aya.id, ayaNumber: aya.number, suraNumber: aya.suraNumber, lineNumber: coveredLine.lineId, lineWidth: coveredLine.width });
      }
    }
  }

  // prepare html to render
  for (const line in newLines) {
    var lineParts = "";
    for (lineParte of newLines[line]) {
      lineParts += linePartTemplate(lineParte);
    }
    // insertion
    quranGrid.insertAdjacentHTML("beforeend", lineTemplate(line, lineParts));
  }

  /*
  // insert the ayats data
  var lineNumber = null;
  var lineParts = ''

  for (aya of ayat) {
    // if we detect that we passed to a new line, therefore insert the current line
    if(lineNumber != aya.lineNumber && lineNumber != null){
      // insertion
      quranGrid.insertAdjacentHTML(
        "beforeend",
        line(lineNumber, lineParts)
        );
      
      // reset variables
      lineParts = ''
    }
    
    lineNumber = aya.coveredLines;
    lineParts += ayaPart(aya.id, aya.suraNumber, aya.coveredLines, aya.aya_part_width)
  }
  */
};

// updating the grid logic
const updateGridDisplay = () => {
  
  // by default : no grid (turn the light off, nothing to select) 
  if (!quranGrid.classList.contains("quranGrid-closed")) {
    quranGrid.classList.add("quranGrid-closed");
  }
  
  // update the grid layout for the current page ayat
  const ayat = QURAN.filter((aya) => {
    return aya.pageNumber == selectedPage;
  });

  // remove the check on ayat number in order to reset the content only one time in one place 
  // also in case of ayat.lenght is 0 loops will turn on 0 ! 
  // the grid display is handeled by the toggleLoading func
  updateGrid(ayat);
  currentPageAyats = document.querySelectorAll("[data-aya]");
  for (ayaOrAyaPart of currentPageAyats) {
    handelAyaPart(ayaOrAyaPart);
  }
};
