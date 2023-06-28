let itemsArray1 = [];
let itemsArray2 = [];
function fun1(z) {
  if (z == 1) {
    window.open("localstorage.html", "_self");
  } else {
    if (z == 0) {
      document.getElementById("calendar1").style.display = "none";
      document.getElementById("weather").style.display = "block";
      document.getElementById("areth").style.display = "block";
      document.getElementById("areth2").style.display = "block";
      document.getElementById("sakhs1").style.display = "none";
      document.getElementById("sakhs").style.display = "block";
    } else {
      document.getElementById("weather").style.display = "none";
      document.getElementById("areth").style.display = "none";
      document.getElementById("areth2").style.display = "none";
      document.getElementById("calendar1").style.display = "none";
      document.getElementById("sakhs").style.display = "none";
      document.getElementById("sakhs1").style.display = "none";
    }
    var indiv = document.getElementById("div1");
    indiv.innerHTML = "";
    zz = itemsArray1[z][1] + "_LOT";
    itemsArray2 = localStorage.getItem(zz)
      ? JSON.parse(localStorage.getItem(zz))
      : [];
    // console.log(itemsArray2);
    for (i = 0; i <= itemsArray2.length - 1; i++) {
      btn1 = itemsArray2[i];

      var newbtn = document.createElement("input");
      newbtn.setAttribute(
        "onclick",
        "window.open('" + btn1[1] + "', '_blank')"
      );
      newbtn.setAttribute("type", "button");
      newbtn.setAttribute("value", btn1[0]);
      indiv.appendChild(newbtn);
    }
  }
}

function fun2() {
  var inMenu = document.getElementById("nav");
  itemsArray1 = localStorage.getItem("Menu_LOT")
    ? JSON.parse(localStorage.getItem("Menu_LOT"))
    : [];

  for (i = 0; i <= itemsArray1.length - 1; i++) {
    var newli = document.createElement("li");
    newli.innerHTML =
      "<a onclick='fun1(" + i + ")'>" + itemsArray1[i][1] + "</a>";
    inMenu.appendChild(newli);
  }
}

function fun3() {
  var element = document.getElementById("weather");
  var classes = element.className;
  z = 1 + parseInt(classes);
  //alert(z);
  if (z == 4) {
    z = 0;
  }
  element.className = z;
  element.src =
    "https://www.meteoblue.com/el/καιρός/widget/daily/" +
    Weather1[z] +
    "?geoloc=fixed&days=5&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&precipunit=MILLIMETER&coloured=coloured&pictoicon=0&pictoicon=1&maxtemperature=0&maxtemperature=1&mintemperature=0&mintemperature=1&windspeed=0&windspeed=1&windgust=0&winddirection=0&winddirection=1&uv=0&humidity=0&precipitation=0&precipitation=1&precipitationprobability=0&precipitationprobability=1&spot=0&pressure=0&layout=light";
}

function myfuncalendar() {
  //fun1(Clear);
  const targetdiv5 = document.getElementById("calendar1");
  if (targetdiv5.style.display !== "none") {
    targetdiv5.style.display = "none";
  } else {
    document.getElementById("calendar1").style.display = "block";
  }
}

function eortes1() {
  document.getElementById("calendar1").style.display = "none";
  eorte1 = document.getElementById("sakhs1").style.display;
  if (eorte1 == "block") {
    document.getElementById("sakhs1").style.display = "none";
  } else {
    document.getElementById("sakhs1").style.display = "block";
  }
}

window.addEventListener("click", function (event) {
  const target = event.target; // what you clicked on
  if (target.tagName !== "A") {
    return; // not a <div>, stop the function
  }
  var x = document.querySelectorAll("a");
  for (var i = 0; i < x.length; i++) {
    x[i].style.color = "white";
  }
  //const color = target.style.color;
  if (target.text !== "Clear") {
    target.style.color = "red";
  }
});

const Weather1 = [
  "Περιστέρι_Ελλάδα_255524",
  "Αίγινα_Ελλάδα_265502",
  "Θεσσαλονίκη_Ελλαδα_734077",
  "Skopje_Βόρεια-Μακεδονία_831122",
];

// const Menu = [
//   [0, "Clear"],
//   [1, "News"],
//   [2, "Aegina"],
//   [3, "Servs"],
//   [4, "Utils"],
//   [5, "TV"],
//   [6, "MySites"],
//   [7, "Sports"],
// ];

// const Clear = [];

// const News = [];
// News[1] = ["iEfm", "https://www.iefimerida.gr/"];
// News[2] = ["PrThm", "https://www.protothema.gr/"];
// News[3] = ["the Toc", "https://www.thetoc.gr/"];
// News[4] = ["NBst", "https://www.newsbeast.gr/"];
// News[5] = ["Protgn", "https://www.protagon.gr/"];
// News[6] = ["Efmrs", "https://www.frontpages.gr/"];
// News[7] = ["EfSyn", "https://www.efsyn.gr/"];
// News[8] = ["Hleia", "https://www.ilialive.gr/"];
// News[9] = ["Patris", "https://www.patrisnews.com/"];
// News[10] = ["Vima", "https://www.tovima.gr/"];
// News[11] = ["Ingr", "https://www.in.gr/"];
// News[12] = ["EfEu", "https://www.efimerides.eu/index.html"];
// News[13] = ["Lifo", "https://www.lifo.gr/"];
// News[14] = ["Kathni", "https://www.kathimerini.gr/"];
// News[15] = ["Sport24", "https://www.sport24.gr/"];
// News[16] = ["902.gr", "https://www.902.gr/"];
// News[17] = ["Katiusa", "https://www.katiousa.gr/"];
// News[18] = ["Hmerod", "https://www.imerodromos.gr/"];

// const TV = [];
// TV[1] = ["Prog", "http://www.ishow.gr/programma_tv.asp?agroup=1"];
// TV[2] = ["Movies", "https://tv.pathfinder.gr/"];
// TV[3] = ["Twra", "https://programmatileorasis.gr/tv.php"];
// TV[4] = ["TVLive", "https://www.efimerides.eu/tv.html"];
// TV[5] = ["DwrnTV", "https://www.dwrean.net/2016/05/Ellinikakanalia.html"];
// TV[6] = ["stasinos", "http://www.stasinos.tv/"];
// TV[7] = [
//   "Channels",
//   "https://ellinikakanalialive.blogspot.com/2020/02/red-star-panathinaikos-live-streaming-5.html",
// ];
// TV[8] = ["megatv", "https://www.megatv.com/"];
// TV[9] = ["antenna", "https://vod.antenna.gr/#/"];
// TV[10] = ["starLive", "https://www.star.gr/"];
// TV[11] = ["star", "https://www.star.gr/tv"];
// TV[12] = ["skaitv", "https://www.skaitv.gr/"];
// TV[13] = ["alphatv", "https://www.alphatv.gr/"];
// TV[14] = ["tvopen", "https://www.tvopen.gr/"];
// TV[15] = ["maktv", "https://www.maktv.gr/"];
// TV[16] = ["action", "https://action24.gr/"];
// TV[17] = ["ORT", "http://www.patrisnews.com/ort-live/"];
// TV[18] = ["ERTFlix", "https://www.ertflix.gr/epg/now-on-tv"];
// TV[19] = ["Archive", "https://archive.ert.gr/arxiki/sylloges/"];
// TV[20] = ["ERTEcho", "https://www.ertecho.gr/"];
// TV[21] = ["e-Radio", "https://www.e-radio.gr/"];
// TV[22] = ["JAZZ", "https://www.jazzradio.com/"];

// const Aegina = [];
// Aegina[1] = ["Saronic", "https://www.sf.gr/ell/"];
// Aegina[2] = ["Anes", "https://www.anes.gr/"];
// Aegina[3] = [
//   "Traffic",
//   "https://www.marinetraffic.com/el/ais/home/centerx:23.4/centery:37.8/zoom:11",
// ];
// Aegina[4] = ["Portal", "https://www.aeginaportal.gr/"];
// Aegina[5] = ["Dhmos", "https://www.aegina.gr/web/"];
// Aegina[6] = ["FbAeg", "https://www.facebook.com/groups/925023594263299"];
// Aegina[7] = ["FBSouv", "https://www.facebook.com/groups/souvala.aigina"];
// Aegina[8] = ["FBAeg1", "https://www.facebook.com/groups/113384866005338"];

// const Servs = [];
// Servs[1] = ["Dwrean", "https://www.dwrean.net/"];
// Servs[2] = ["Trellas", "https://trellas.net/?p=torrents&pid=10&page=1"];

// const MySites = [];
// MySites[1] = ["Areth", "https://areth.netlify.app/"];
// MySites[2] = ["Sakhs", "https://dionrou.netlify.app/"];
// MySites[3] = ["DRou", "http://dionrou.website2.me/"];
// MySites[4] = ["Soimou", "https://www.facebook.com/groups/201792640030488"];
// MySites[5] = ["XimMix", "https://www.facebook.com/groups/687599655263120"];
// MySites[6] = ["Pirgos", "https://www.facebook.com/groups/408433304454433"];

// const Utils = [];
// Utils[1] = [
//   "Help",
//   "https://www.helppost.gr/agenda/xrisima-tilefona-ektaktis-anagkis/",
// ];
// Utils[2] = [
//   "11888",
//   "https://www.11888.gr/efhmereuonta-farmakeia/?location=Περιστέρι-Ελλάδα&lat=38.0109715&lng=23.6887439",
// ];
// Utils[3] = ["Vrisko", "https://www.vrisko.gr/"];
// Utils[4] = ["Cosmos", "https://www.mykosmos.gr/loc_mk/Default.asp"];
// Utils[5] = ["Maps", "https://www.google.com/maps/@38.0035699,23.6906788,16z"];
// Utils[6] = [
//   "Trafic",
//   "https://www.google.com/maps/@37.9920457,23.7729872,12z/data=!5m1!1e1",
// ];
// Utils[7] = ["Transl", "https://translate.google.com/?sl=en&tl=el&op=translate"];
// Utils[8] = ["Diodia", "https://vriskoapostasi.gr/el/"];
// Utils[9] = ["My IP", "https://www.whatismyip.com/"];
// Utils[10] = ["Speed", "https://fast.com/el/"];
// Utils[11] = ["Park", "https://www.parkaround.gr/"];
// Utils[12] = ["Cmpre", "https://text-compare.com/"];
// Utils[13] = ["Speech", "https://speechnotes.co/#"];
// Utils[14] = ["Voice", "https://dictation.io/speech"];

// const Sports = [];
// Sports[1] = ["Agones", "https://www.sport24.gr/tvprogram/"];
// Sports[2] = ["eScores", "https://www.livescore.in/gr/"];
// Sports[3] = ["Flash", "https://www.flashscore.gr/"];
// Sports[4] = ["Fotmob", "https://www.fotmob.com/"];
// Sports[5] = ["Sport24", "https://www.sport24.gr/matchcenter/"];
// Sports[6] = ["Ticket", "https://pamestoixima.opap.gr/"];
// Sports[7] = ["Stoixima", "https://www.stoiximan.gr/live/"];
// Sports[8] = ["Novibet", "https://www.novibet.gr/stoixima"];
// Sports[9] = ["Gazeta", "https://www.gazzetta.gr/"];
