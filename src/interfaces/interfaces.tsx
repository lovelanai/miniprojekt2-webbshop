import { title } from "process";

export interface Product {
  id: number;
  title: string;
  longinfo: string;
  info1: string;
  info2: string;
  info3: string;
  price: number;
  quantity: number;
  image: string;
}

const Products: Product[] = [
  {
    id: 1,
    title: "Sony A7 III kamerahus",
    longinfo:
      "Sony A7 III är försedd med en nyutvecklad, bakbelyst Exmor R CMOS-sensor i fullformat och den har ärvt många funktioner och finesser från modellerna A7R III och A9 såsom bättre batteritid och joystick för att kontrollera autofokusen.",
    info1: "info1",
    info2: "info2",
    info3: "info3",
    price: 19990,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1038723.jpg?ref=9A7E5CB4A2&w=1920&h=1920&mode=max",
  },
  {
    id: 2,
    title: "Leica M-10R svart",
    longinfo:
      "Leica M10-R är den senaste versionen i M10-familjen. En klassisk kamera i avskalad design som fokuserar på det viktigaste, riktigt bra foto. Trots sin lilla storlek har Leica M10-R en upplösning på över 40 megapixlar och fångar alla detaljer du kan tänka dig. Sensorn hos M10-R levererar även ett lägre brus än de tidigare modellerna i M10-serien.",
    info1: "info1",
    info2: "info2",
    info3: "info3",
    price: 89900,
    quantity: 1,
    image:
      "	https://www.scandinavianphoto.se/globalassets/1049125.jpg?ref=9BD8741CE2&w=1920&h=1920&mode=max",
  },
  {
    id: 3,
    title: "Canon EOS R6",
    longinfo:
      "Oavsett vad du fotograferar så kommer Canon EOS R6 bli din nya bästa vän. Med en otrolig snabbhet, superb ljuskänslighet och en bildstabilisering som går upp till 8-steg så kommer du aldrig att missa ett ögonblick. Detta är kameran för dig som är redo att ta nästa steg inom fotografering. Detta är Canon EOS R6.",
    info1: "info1",
    info2: "info2",
    info3: "info3",
    price: 27490,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1048664_11.jpg?ref=C91E595A11&w=1920&h=1920&mode=max",
  },
  {
    id: 4,
    title: "Sony ZV-E10L + 16-50mm f/3,5-5,6",
    longinfo:
      "Kompakt vloggkamera med kreativitet i fokus. Sony ZV-E10 är kameran för dig som vill ha en smidig spegellös systemkamera med utbytbart objektiv, som är designad för vlogg, streaming och innehållskapande. Du kan enkelt skapa videor i 4K-upplösning, filma slowmotion i Full HD och använda smarta funktioner som Tally Light vid sändning, autoexponering av ansiktet och bokeh-läge för en mjuk oskarp bakgrund. Dessutom har kameran vinklingsbar pekskärm och en högkvalitativ inbyggd riktad mikrofon med medföljande vindskydd. Sony ZV-E10 är helt enkelt vloggkameran för dig som snabbt och smart vill skapa innehåll med professionellt resultat.",
    info1: "info1",
    info2: "info2",
    info3: "info3",
    price: 9490,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1052379_zv-e10-selp1650.jpg?ref=4F54BD9EA6&w=1920&h=1920&mode=max",
  },
  {
    id: 5,
    title: "Panasonic Lumix DC-G9 kamerahus",
    longinfo:
      "DC-G9 är en Micro 4/3-kamera med fokus på stillbild. Egenskaper som bland annat en toppdisplay, vädertätning, dubbla kortplatser och hög hastighet på seriebildtagningen gör G9 till en snabb och mångsidig kamera redo för äventyr!",
    info1: "info1",
    info2: "info2",
    info3: "info3",
    price: 11990,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1036886.jpg?ref=748AED7B91&w=1920&h=1920&mode=max",
  },
];
