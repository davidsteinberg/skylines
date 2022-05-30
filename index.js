// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const __default = JSON.parse(`[
  "Abidjan",
  "Abu Dhabi",
  "Abuja",
  "Accra",
  "Adamstown",
  "Addis Ababa",
  "Aden",
  "Algiers",
  "Alofi",
  "Amman",
  "Amsterdam",
  "Andorra la Vella",
  "Ankara",
  "Antananarivo",
  "Apia",
  "Ashgabat",
  "Asmara",
  "Asunción",
  "Athens",
  "Avarua",
  "Baghdad",
  "Baku",
  "Bamako",
  "Bandar Seri Begawan",
  "Bangkok",
  "Bangui",
  "Banjul",
  "Basseterre",
  "Beijing",
  "Beirut",
  "Belgrade",
  "Belmopan",
  "Berlin",
  "Bern",
  "Bishkek",
  "Bissau",
  "Bloemfontein",
  "Bogotá",
  "Brades",
  "Brasília",
  "Bratislava",
  "Brazzaville",
  "Bridgetown",
  "Brussels",
  "Bucharest",
  "Budapest",
  "Buenos Aires",
  "Bujumbura",
  "Cairo",
  "Canberra",
  "Cape Town",
  "Caracas",
  "Castries",
  "Cetinje",
  "Charlotte Amalie",
  "Chișinău",
  "Cockburn Town",
  "Colombo",
  "Conakry",
  "Copenhagen",
  "Cotonou",
  "Dakar",
  "Damascus",
  "Dar es Salaam",
  "Dhaka",
  "Dili",
  "Djibouti",
  "Dodoma",
  "Doha",
  "Douglas",
  "Dublin",
  "Dushanbe",
  "El Aaiún",
  "Flying Fish Cove",
  "Freetown",
  "Funafuti",
  "Gaborone",
  "George Town",
  "Georgetown",
  "Georgetown",
  "Gibraltar",
  "Gitega",
  "Guatemala City",
  "Gustavia",
  "Hagåtña",
  "Hamilton",
  "Hanoi",
  "Harare",
  "Hargeisa",
  "Havana",
  "Helsinki",
  "Honiara",
  "Islamabad",
  "Jakarta",
  "Jamestown",
  "Jerusalem",
  "Juba",
  "Kabul",
  "Kampala",
  "Kathmandu",
  "Khartoum",
  "Kigali",
  "King Edward Point",
  "Kingston",
  "Kingston",
  "Kingstown",
  "Kinshasa",
  "Kuala Lumpur",
  "Kuwait City",
  "Kyiv",
  "La Paz",
  "Libreville",
  "Lilongwe",
  "Lima",
  "Lisbon",
  "Ljubljana",
  "Lobamba",
  "Lomé",
  "London",
  "Luanda",
  "Lusaka",
  "Luxembourg",
  "Madrid",
  "Majuro",
  "Malabo",
  "Malé",
  "Managua",
  "Manama",
  "Manila",
  "Maputo",
  "Mariehamn",
  "Marigot",
  "Maseru",
  "Mata Utu",
  "Mbabane",
  "Mexico City",
  "Minsk",
  "Mogadishu",
  "Monaco",
  "Monrovia",
  "Montevideo",
  "Moroni",
  "Moscow",
  "Muscat",
  "N'Djamena",
  "Nairobi",
  "Nassau",
  "Naypyidaw",
  "New Delhi",
  "Ngerulmud",
  "Niamey",
  "Nicosia",
  "Nouakchott",
  "Nouméa",
  "Nukuʻalofa",
  "Nur-Sultan",
  "Nuuk",
  "Oranjestad",
  "Oslo",
  "Ottawa",
  "Ouagadougou",
  "Pago Pago",
  "Palestine",
  "Palikir",
  "Panama City",
  "Papeete",
  "Paramaribo",
  "Paris",
  "Philipsburg",
  "Phnom Penh",
  "Plymouth",
  "Podgorica",
  "Port Louis",
  "Port Moresby",
  "Port of Spain",
  "Port Vila",
  "Port-au-Prince",
  "Porto-Novo",
  "Prague",
  "Praia",
  "Pretoria",
  "Pristina",
  "Putrajaya",
  "Pyongyang",
  "Quito",
  "Rabat",
  "Ramallah",
  "Reykjavík",
  "Riga",
  "Riyadh",
  "Road Town",
  "Rome",
  "Roseau",
  "Saipan",
  "San José",
  "San Juan",
  "San Marino",
  "San Salvador",
  "Sana'a",
  "Santiago",
  "Santo Domingo",
  "Sarajevo",
  "Seoul",
  "Singapore",
  "Skopje",
  "Sofia",
  "South Tarawa",
  "Sri Jayawardenepura Kotte",
  "St. George's",
  "St. Helier",
  "St. John's",
  "St. Peter Port",
  "St. Pierre",
  "Stanley",
  "Stepanakert",
  "Stockholm",
  "Sucre",
  "Sukhumi",
  "Suva",
  "São Tomé",
  "Taipei",
  "Tallinn",
  "Tashkent",
  "Tbilisi",
  "Tegucigalpa",
  "Tehran",
  "The Hague",
  "The Valley",
  "Thimphu",
  "Tifariti",
  "Tirana",
  "Tiraspol",
  "Tokyo",
  "Tripoli",
  "Tskhinvali",
  "Tunis",
  "Tórshavn",
  "Ulaanbaatar",
  "Vaduz",
  "Valletta",
  "Valparaíso",
  "Vatican City",
  "Victoria",
  "Vienna",
  "Vientiane",
  "Vilnius",
  "Warsaw",
  "Washington, D.C.",
  "Wellington",
  "West Island",
  "Willemstad",
  "Windhoek",
  "Yamoussoukro",
  "Yaoundé",
  "Yaren",
  "Yerevan",
  "Zagreb"
]
`);
const buildMetadataForNames = (names)=>{
    const startChars = [];
    const charMap = {};
    let maxNameLength = 0;
    let maxWordLength = 0;
    for (const name of names){
        const { length  } = name;
        maxNameLength = Math.max(maxNameLength, length);
        maxWordLength = Math.max(maxWordLength, ...name.split(" ").map((word)=>word.length
        ));
        let previousChar = name[0];
        startChars.push(previousChar);
        for(let i = 1; i < length; i += 1){
            const __char = name[i];
            if (!(previousChar in charMap)) {
                charMap[previousChar] = [];
            }
            charMap[previousChar].push(__char);
            previousChar = __char;
        }
        if (!(previousChar in charMap)) {
            charMap[previousChar] = [];
        }
        charMap[previousChar].push(null);
    }
    return {
        maxLength: {
            name: maxNameLength,
            word: maxWordLength
        },
        chars: {
            start: startChars,
            map: charMap
        }
    };
};
const getNextName = (p)=>{
    const { makeName: makeName1 , metadata , randomElement , unique , usedNames , retryCount ,  } = p;
    if (!unique) {
        return makeName1(metadata, randomElement);
    }
    for(let i = 0; i < retryCount; i += 1){
        const name = makeName1(metadata, randomElement);
        if (!usedNames.includes(name)) {
            usedNames.push(name);
            return name;
        }
    }
    return false;
};
const makeName = (metadata, randomElement)=>{
    const { maxLength , chars  } = metadata;
    const { name: maxNameLength , word: maxWordLength  } = maxLength;
    const { start , map  } = chars;
    let __char = randomElement(start);
    let name = __char;
    let lastWord = __char;
    for(let i = 0; i < maxNameLength; i += 1){
        __char = randomElement(map[__char]);
        if (__char === null) {
            break;
        }
        name += __char;
        if (name.length === maxNameLength) {
            break;
        }
        if (__char === " ") {
            lastWord = "";
        } else {
            lastWord += __char;
            if (lastWord.length >= maxWordLength) {
                name += " ";
                __char = " ";
                lastWord = "";
            }
        }
    }
    return name;
};
const coin = ()=>{
    return Math.random() < 0.5;
};
const __int = (low, high)=>{
    const min = Math.ceil(low);
    const max = Math.floor(high);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const rgb = (low = 0, high = 255)=>{
    const r = __int(low, high);
    const g = __int(low, high);
    const b = __int(low, high);
    return {
        r,
        g,
        b
    };
};
const color = (low = 0, high = 255)=>{
    const { r , g , b  } = rgb(low, high);
    return `rgb(${r}, ${g}, ${b})`;
};
const element = (array)=>{
    const high = array.length - 1;
    const index = __int(0, high);
    return array[index];
};
const __default1 = {
    coin,
    int: __int,
    rgb,
    color,
    element
};
const makeGenerator = (names, options = {
    unique: false
})=>{
    if (names.length === 0) {
        throw new Error("At least one name must be supplied to generate names");
    }
    const metadata = buildMetadataForNames(names);
    const { unique  } = options;
    const usedNames = [];
    const retryCount = names.length * 2;
    const parameters = {
        makeName,
        metadata,
        randomElement: __default1.element,
        unique,
        usedNames,
        retryCount
    };
    const nameGenerator = function*() {
        while(true){
            const name = getNextName(parameters);
            if (name === false) {
                throw new Error(`Failed to generate unused name after ${retryCount} times`);
            }
            yield name;
        }
    };
    return nameGenerator();
};
const generator = makeGenerator(__default, {
    unique: true
});
const generateName = ()=>generator.next().value
;
const xmlns = "http://www.w3.org/2000/svg";
const colors = [
    "white",
    "lightgray",
    "gray",
    "darkgray",
    "black"
];
const createSVGElement = (tag, attributes)=>{
    const element1 = document.createElementNS(xmlns, tag);
    if (attributes !== undefined) {
        for (const [key, value] of Object.entries(attributes)){
            element1.setAttribute(key, value.toString());
        }
    }
    return element1;
};
const windows = [];
const generateWindow = (p)=>{
    const { x , y , side  } = p;
    const window = createSVGElement("rect", {
        class: "window",
        x,
        y,
        height: side,
        width: side,
        fill: __default1.element(colors)
    });
    windows.push(window);
    return window;
};
const generateBuilding = (p)=>{
    const { maxX , ground , window: { side , count  }  } = p;
    const width = side * (2 * count.x + 1);
    const height = side * (2 * count.y + 1);
    const x1 = __default1.int(side, maxX - width - side);
    const y2 = ground - height;
    const points = [
        {
            x: x1,
            y: y2 + height
        },
        {
            x: x1,
            y: y2
        },
        {
            x: x1 + width,
            y: y2
        },
        {
            x: x1 + width,
            y: y2 + height
        }, 
    ];
    const outline = createSVGElement("polyline", {
        class: "building-outline",
        points: points.map(({ x , y  })=>`${x},${y}`
        ).join(" ")
    });
    const y1 = y2 + height;
    const bottom = createSVGElement("line", {
        class: "building-bottom",
        x1: x1,
        y1,
        x2: x1 + width,
        y2: y1
    });
    const building = createSVGElement("g", {
        class: "building"
    });
    building.append(bottom, outline);
    for(let wx = 0; wx < count.x; wx += 1){
        for(let wy = 0; wy < count.y; wy += 1){
            const window = generateWindow({
                x: x1 + wx * side * 2 + side,
                y: y2 + wy * side * 2 + side,
                side
            });
            building.append(window);
        }
    }
    return building;
};
const generateSkyline = (p)=>{
    const { width , height  } = p;
    const window = Math.ceil(Math.min(width, height) / 75);
    const stroke = width > 700 ? 2 : 1;
    const ground = height - stroke;
    const skyline = createSVGElement("g", {
        "stroke-linejoin": "round",
        "stroke-width": stroke,
        rx: stroke
    });
    const line = createSVGElement("line", {
        class: "ground",
        x1: 0,
        y1: ground,
        x2: width,
        y2: ground
    });
    const buildings = createSVGElement("g");
    skyline.append(line, buildings);
    windows.length = 0;
    const buildingMax = Math.floor(width / 100);
    const buildingCount = __default1.int(1, Math.max(10, buildingMax));
    for(let i = 0; i < buildingCount; i += 1){
        const windowCountX = __default1.int(1, Math.floor(width / window / 5));
        const windowCountY = __default1.int(1, Math.floor(height / window / 2.3));
        const building = generateBuilding({
            maxX: width,
            ground: ground + stroke,
            window: {
                side: window,
                count: {
                    x: windowCountX,
                    y: windowCountY
                }
            }
        });
        buildings.append(building);
    }
    return skyline;
};
const select = document.querySelector.bind(document);
const ui = {
    theme: select('meta[name="theme-color"]'),
    sun: select("#sun"),
    skyline: select("#skyline"),
    svg: select("svg"),
    infoButton: select("#infoButton"),
    name: select("#name"),
    refreshButton: select("#refreshButton")
};
const LIGHT_MODE_PREF_KEY = "light-mode";
let inDarkMode = true;
const toggleMode = ()=>{
    if (inDarkMode) {
        setLightMode();
    } else {
        setDarkMode();
    }
};
const setLightMode = ()=>{
    ui.theme.setAttribute("content", "white");
    document.body.classList.add("light-mode");
    window.localStorage.setItem(LIGHT_MODE_PREF_KEY, "");
    ui.sun.textContent = "☼";
    inDarkMode = false;
};
const setDarkMode = ()=>{
    ui.theme.setAttribute("content", "black");
    document.body.classList.remove("light-mode");
    window.localStorage.removeItem(LIGHT_MODE_PREF_KEY);
    ui.sun.textContent = "☽";
    inDarkMode = true;
};
const useLightMode = window.localStorage.getItem(LIGHT_MODE_PREF_KEY) !== null || window.matchMedia("(prefers-color-scheme: light)").matches;
if (useLightMode) {
    setLightMode();
} else {
    setDarkMode();
}
let intervalID = null;
const getIntervalMS = ()=>{
    const ms = 80_000 / windows.length;
    return Math.min(ms, 1000);
};
const startLights = ()=>{
    intervalID = setInterval(()=>{
        const window = __default1.element(windows);
        window.setAttribute("fill", __default1.element(colors));
    }, getIntervalMS());
};
const stopLights = ()=>{
    if (intervalID === null) {
        return;
    }
    clearInterval(intervalID);
    intervalID = null;
};
const refreshSkyline = ()=>{
    stopLights();
    const { clientWidth , clientHeight  } = ui.skyline;
    const skyline = generateSkyline({
        width: clientWidth,
        height: clientHeight
    });
    ui.svg.replaceChildren(skyline);
    startLights();
};
const refreshFooter = ()=>{
    let tag = "h2";
    if (document.body.clientWidth > 700) {
        tag = "h1";
    }
    const element2 = document.createElement(tag);
    element2.id = "name";
    element2.textContent = generateName();
    ui.name.replaceWith(element2);
    ui.name = element2;
};
const refresh = ()=>{
    refreshFooter();
    refreshSkyline();
};
refresh();
const goToGitHub = ()=>{
    window.open("https://github.com/davidsteinberg/skylines", "_blank");
};
ui.sun.addEventListener("click", toggleMode);
ui.refreshButton.addEventListener("click", refresh);
ui.infoButton.addEventListener("click", goToGitHub);
