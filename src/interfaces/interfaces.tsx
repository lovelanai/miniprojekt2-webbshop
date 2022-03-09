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
  image2: string;
  image3: string;
}

export const mockedProducts: Product[] = [
  {
    id: 1,
    title: "Sony A7 III kamerahus",
    longinfo:
      "Sony A7 III är försedd med en nyutvecklad, bakbelyst Exmor R CMOS-sensor i fullformat och den har ärvt många funktioner och finesser från modellerna A7R III och A9 såsom bättre batteritid och joystick för att kontrollera autofokusen.",
    info1: "Avancerad AF med följande ögonautofokus",
    info2: "10 bilder per sekund med aktiv autofokus",
    info3: "Dubbla minneskortsplatser för extra säkerhetskopiering",
    price: 19990,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1038723.jpg?ref=9A7E5CB4A2&w=1920&h=1920&mode=max",
    image2:
      "https://www.scandinavianphoto.se/globalassets/1038723_1.jpg?ref=1145D98FC7&w=1920&h=1920&mode=max",
    image3:
      "https://www.scandinavianphoto.se/globalassets/1038723_2.jpg?ref=36400AFD1E&w=1920&h=1920&mode=max",
  },
  {
    id: 2,
    title: "Leica M-10R svart",
    longinfo:
      "Leica M10-R är den senaste versionen i M10-familjen. En klassisk kamera i avskalad design som fokuserar på det viktigaste, riktigt bra foto. Trots sin lilla storlek har Leica M10-R en upplösning på över 40 megapixlar och fångar alla detaljer du kan tänka dig. Sensorn hos M10-R levererar även ett lägre brus än de tidigare modellerna i M10-serien.",
    info1: "40 megapixel mätsökarsensor",
    info2: "Tyst slutare som passar perfekt vid street-photo",
    info3: "3” touchskärm med Gorilla-glas",
    price: 89900,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1049125.jpg?ref=9BD8741CE2&w=1920&h=1920&mode=max",
    image2:
      "https://www.scandinavianphoto.se/globalassets/1049125_3.jpg?ref=131E56B2CE&w=1920&h=1920&mode=max",
    image3:
      "https://www.scandinavianphoto.se/globalassets/1049125_1.jpg?ref=821387DCD1&w=3840&h=3840&mode=max",
  },
  {
    id: 3,
    title: "Canon EOS R6",
    longinfo:
      "Oavsett vad du fotograferar så kommer Canon EOS R6 bli din nya bästa vän. Med en otrolig snabbhet, superb ljuskänslighet och en bildstabilisering som går upp till 8-steg så kommer du aldrig att missa ett ögonblick. Detta är kameran för dig som är redo att ta nästa steg inom fotografering. Detta är Canon EOS R6.",
    info1: "20,1 MP för högkvalitativa bilder och effektiv lagring",
    info2: "Upp till 8 stegs bildstabilisering med RF-optik",
    info3: "Upp till 20 bilder per sekund i seriebildstagning",
    price: 27490,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1048664_11.jpg?ref=C91E595A11&w=1920&h=1920&mode=max",
    image2:
      "https://www.scandinavianphoto.se/globalassets/1048664_12.jpg?ref=1A2B604F61&w=1920&h=1920&mode=max",
    image3:
      "https://www.scandinavianphoto.se/globalassets/1048664_13.jpg?ref=6BF35CDA79&w=3840&h=3840&mode=max",
  },
  {
    id: 4,
    title: "Sony ZV-E10L + 16-50mm f/3,5-5,6",
    longinfo:
      "Kompakt vloggkamera med kreativitet i fokus. Sony ZV-E10 är kameran för dig som vill ha en smidig spegellös systemkamera med utbytbart objektiv, som är designad för vlogg, streaming och innehållskapande. Du kan enkelt skapa videor i 4K-upplösning, filma slowmotion i Full HD och använda smarta funktioner som Tally Light vid sändning, autoexponering av ansiktet och bokeh-läge för en mjuk oskarp bakgrund. Dessutom har kameran vinklingsbar pekskärm och en högkvalitativ inbyggd riktad mikrofon med medföljande vindskydd. Sony ZV-E10 är helt enkelt vloggkameran för dig som snabbt och smart vill skapa innehåll med professionellt resultat.",
    info1: "24,3MP APS-C-sensor",
    info2: "Filma i 4K (30p) och slowmotion i Full HD (120P)",
    info3: "Vinklingsbar pekskärm med touch focus",
    price: 9490,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1052379_zv-e10-selp1650.jpg?ref=4F54BD9EA6&w=1920&h=1920&mode=max",
    image2:
      "https://www.scandinavianphoto.se/globalassets/1052379_zv-e10-selp1650_right.jpg?ref=756435196C&w=1920&h=1920&mode=max",
    image3:
      "https://www.elgiganten.se/image/dv_web_D180001002784843/330001/sony-digital-vlogg-kamera-zv-e10l--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: 5,
    title: "Panasonic Lumix DC-G9 kamerahus",
    longinfo:
      "DC-G9 är en Micro 4/3-kamera med fokus på stillbild. Egenskaper som bland annat en toppdisplay, vädertätning, dubbla kortplatser och hög hastighet på seriebildtagningen gör G9 till en snabb och mångsidig kamera redo för äventyr!",
    info1: "Väldigt hög seriebildtagning utan blackout.",
    info2: "80 mp RAW-bilder högupplöst läge.",
    info3: "Toppdisplay, bra ergonomi och vädertätning.",
    price: 11990,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1036886.jpg?ref=748AED7B91&w=1920&h=1920&mode=max",
    image2:
      "https://www.scandinavianphoto.se/globalassets/1036886_3.jpg?ref=8F1C2DC18B&w=1920&h=1920&mode=max",
    image3:
      "https://www.scandinavianphoto.se/globalassets/1036886_2.jpg?ref=45097BE295&w=3840&h=3840&mode=max",
  },
  {
    id: 6,
    title: "OM SYSTEM OM-1",
    longinfo:
      "OM SYSTEM OM-1 - En flaggskeppskamera som når helt nya nivåer gentemot föregångarna. Med dess nya processor, TruePicX, är den 3x snabbare jämfört med Olympus OM-D E-M1X och med 60x starkare datorkraft. Men det slutar inte där utan OM SYSTEM OM-1 är fullmatad med förbättringar gentemot föregångaren så som en ny BSI live mos-sensor, förbättrad bildstabilisering och Cross Quad Pixel AF för 3x snabbare autofokusberäkning. OM SYSTEM OM-1 kan tas med var som helst när som helst, så att vem som helst kan dra nytta av dess höga prestanda för att fånga mångsidiga bilduttryck med hög bildkvalitet. Detta är nästa generations Micro Four Thirds-kamera från OM SYSTEM.",
    info1: "Stackad 20mp Micro 4/3 BSI Live MOS Sensor.",
    info2: "TruePicX processor - 3x snabbare än hos föregångaren.",
    info3:
      "Vädertätad med IP53-klassning – För att klara de tuffaste väderförhållandena.",
    price: 22490,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1054659.jpg?ref=550E52B9B6&w=1920&h=1920&mode=max",
    image2:
      "https://www.scandinavianphoto.se/globalassets/1054659_1.jpg?ref=A4E6F0B8D4&w=1920&h=1920&mode=max",
    image3:
      "https://www.scandinavianphoto.se/globalassets/1054659_2.jpg?ref=5F0C4D9C3E&w=1920&h=1920&mode=max",
  },
  {
    id: 7,
    title: "Canon EOS R5",
    longinfo:
      "Med en 45mp-sensor, 20 bilder per sekund och en intern 8K RAW filminspelning är denna kamera början på nästa generation av professionella kameror. Framtiden är här för spegellös teknologi och den stavas Canon EOS R5.",
    info1: "Högupplöst 45mp-sensor för otroligt skarpa bilder",
    info2: "Filma internt i 8K RAW med 30fps för superb videokvalitet",
    info3:
      "5-axlig bildstabilisering och upp till 8 stegs bildstabilisering med Canon RF-optik för långa slutartider handhållet",
    price: 49990,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1047603.jpg?ref=348324CCD8&w=1920&h=1920&mode=max",
    image2:
      "https://www.scandinavianphoto.se/globalassets/1047603_4.jpg?ref=88DB3CCEC9&w=960&h=960&mode=max",
    image3:
      "https://www.scandinavianphoto.se/globalassets/1047603_2.jpg?ref=0B65D6ADE3&w=960&h=960&mode=max",
  },
  {
    id: 8,
    title: "Engångskamera Fun Saver 27",
    longinfo:
      "Det enkla sättet att fotografera dina minnen! Om du letar efter ett roligt och enkelt sätt att ta bra bilder, inomhus eller utomhus, är Kodak Fun Saver 27 engångskamera ett utmärkt val. Kameran ger 27 bilder och är laddad med Kodakfilm med ISO 800.",
    info1: "Perfekt för semester",
    info2: "Vattentät! Fungerar bra i plurret!",
    info3: "Rymmer 27st bilder",
    price: 149,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1027465.jpg?ref=6EB92BE8F3&w=1920&h=1920&mode=max",
    image2:
      "https://www.scandinavianphoto.se/globalassets/1027465_1.jpg?ref=94B293D9B9&w=1920&h=1920&mode=max",
    image3:
      "https://www.scandinavianphoto.se/globalassets/1027465_2.jpg?ref=DE00B8E67C&w=1920&h=1920&mode=max",
  },
  {
    id: 9,
    title: "Fujifilm X-T3 Body black",
    longinfo:
      "X-T3 är en snabb kamera med riktigt hög seriebildtagning, bra autofokus och 4K video. De lättåtkomliga reglagen och dubbla kortplatserna gör kameran till smidig kamera för viktiga jobb.",
    info1: "Bakbelyst 26mp X-Trans bildsensor",
    info2:
      "Hög seriebildtagning och pre-shot. Upp till 30 fps med elektronisk slutare",
    info3: "Ögon-AF tillsammans med AF-C gör det lätt att fotografera porträtt",
    price: 11990,
    quantity: 1,
    image:
      "https://www.scandinavianphoto.se/globalassets/1053456.jpg?ref=6C795A6B04&w=1920&h=1920&mode=max",
    image2:
      "https://www.scandinavianphoto.se/globalassets/1053456_1.jpg?ref=160BDE0533&w=960&h=960&mode=max",
    image3:
      "https://www.scandinavianphoto.se/globalassets/1053456_3.jpg?ref=92FA1DBF61&w=960&h=960&mode=max",
  },
];
