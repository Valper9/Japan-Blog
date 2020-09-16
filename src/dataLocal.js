import hokkaido from "./maps/hokkaido.svg";
import tohoku from "./maps/tohoku.svg";
import kanto from "./maps/kanto.svg";
import kansai from "./maps/kansai.svg";
import shikoku from "./maps/shikoku.svg";
import kyushu from "./maps/kyushu.svg";
import okinawa from "./maps/okinawa.svg";



const imagesCounties = {
  hokkaido: "https://d-maps.com/m/asia/japan/hokkaido/hokkaido73.svg",
  aomori: "https://d-maps.com/m/asia/japan/aomori/aomori73.svg",
  iwate: "https://d-maps.com/m/asia/japan/iwate/iwate73.svg",
  miyagi: "https://d-maps.com/m/asia/japan/miyagi/miyagi73.svg",
  akita: "https://d-maps.com/m/asia/japan/akita/akita73.svg",
  yamagata: "https://d-maps.com/m/asia/japan/yamagata/yamagata73.svg",
  fukushima: "https://d-maps.com/m/asia/japan/fukushima/fukushima73.svg",
  ibaraki: "https://d-maps.com/m/asia/japan/ibaraki/ibaraki73.svg",
  tochigi: "https://d-maps.com/m/asia/japan/tochigi/tochigi69.svg",
  gunma: "https://d-maps.com/m/asia/japan/gunma/gunma69.svg",
  saitama: "https://d-maps.com/m/asia/japan/saitama/saitama69.svg",
  chiba: "https://d-maps.com/m/asia/japan/chiba/chiba73.svg",
  tokyo: "https://d-maps.com/m/asia/japan/tokyo/tokyo73.svg",
  kanagawa: "https://d-maps.com/m/asia/japan/kanagawa/kanagawa73.svg",
  niigata: "https://d-maps.com/m/asia/japan/niigata/niigata73.svg",
  toyama: "https://d-maps.com/m/asia/japan/toyama/toyama73.svg",
  ishikawa: "https://d-maps.com/m/asia/japan/ishikawa/ishikawa73.svg",
  fukui: "https://d-maps.com/m/asia/japan/fukui/fukui73.svg",
  yamanashi: "https://d-maps.com/m/asia/japan/yamanashi/yamanashi69.svg",
  nagano: "https://d-maps.com/m/asia/japan/nagano/nagano69.svg",
  gifu: "https://d-maps.com/m/asia/japan/gifu/gifu69.svg",
  shizuoka: "https://d-maps.com/m/asia/japan/shizuoka/shizuoka73.svg",
  aichi: "https://d-maps.com/m/asia/japan/aichi/aichi73.svg",
  mie: "https://d-maps.com/m/asia/japan/mie/mie73.svg",
  shiga: "https://d-maps.com/m/asia/japan/shiga/shiga73.svg",
  kyoto: "https://d-maps.com/m/asia/japan/kyoto/kyoto73.svg",
  osaka: "https://d-maps.com/m/asia/japan/osaka/osaka73.svg",
  hyogo: "https://d-maps.com/m/asia/japan/hyogo/hyogo73.svg",
  nara: "https://d-maps.com/m/asia/japan/nara/nara69.svg",
  wakayama: "https://d-maps.com/m/asia/japan/wakayama/wakayama73.svg",
  tottori: "https://d-maps.com/m/asia/japan/tottori/tottori73.svg",
  shimane: "https://d-maps.com/m/asia/japan/shimane/shimane73.svg",
  okayama: "https://d-maps.com/m/asia/japan/okayama/okayama73.svg",
  hiroshima: "https://d-maps.com/m/asia/japan/hiroshima/hiroshima73.svg",
  yamaguchi : "https://d-maps.com/m/asia/japan/yamaguchi/yamaguchi73.svg",
  tokushima: "https://d-maps.com/m/asia/japan/tokushima/tokushima73.svg",
  kagawa: "https://d-maps.com/m/asia/japan/kagawa/kagawa73.svg",
  ehime: "https://d-maps.com/m/asia/japan/ehime/ehime73.svg",
  kochi: "https://d-maps.com/m/asia/japan/kochi/kochi73.svg",
  fukuoka: "https://d-maps.com/m/asia/japan/fukuoka/fukuoka73.svg",
  saga: "https://d-maps.com/m/asia/japan/saga/saga73.svg",
  nagasaki: "https://d-maps.com/m/asia/japan/nagasaki/nagasaki73.svg",
  kumamoto: "https://d-maps.com/m/asia/japan/kumamoto/kumamoto73.svg",
  oita: "https://d-maps.com/m/asia/japan/oita/oita73.svg",
  miyazaki: "https://d-maps.com/m/asia/japan/miyazaki/miyazaki73.svg",
  kagoshima: "https://d-maps.com/m/asia/japan/kagoshima/kagoshima73.svg",
  okinawa: "https://d-maps.com/m/asia/japan/okinawa/okinawa07.svg"
}
export const regions = [ 
    {id : "Hokkaidō", color: "rgb(247, 211, 167)", prefectures : [{pref:"Hokkaidō", img: imagesCounties.hokkaido}], imgRegion: hokkaido},
    {id: "Tōhoku", color: "rgb(252, 239, 197)", prefectures : [{pref:"Aomori", img: imagesCounties.aomori}, {pref:"Iwate", img: imagesCounties.iwate}, {pref: "Miyagi", img: imagesCounties.miyagi}, {pref:"Akita", img: imagesCounties.akita}, {pref: "Yamagata", img: imagesCounties.yamagata}, {pref:"Fukushima", img: imagesCounties.fukushima}], imgRegion: tohoku},
    {id: "Kantō", color: "rgb(242, 169, 153)", prefectures : [{pref: "Ibaraki", img: imagesCounties.ibaraki}, {pref: "Tochigi", img: imagesCounties.tochigi}, {pref:"Gunma",img: imagesCounties.gunma}, {pref:"Saitama",img: imagesCounties.saitama}, {pref:"Chiba", img: imagesCounties.chiba}, {pref:"Tokyo",img: imagesCounties.tokyo}, {pref:"Kanagawa", img: imagesCounties.kanagawa}], imgRegion: kanto},
    {id: "Chūbu", color: "rgb(187, 223, 175)", prefectures: [{pref:"Niigata", img: imagesCounties.niigata}, {pref: "Toyama", img: imagesCounties.toyama}, {pref:"Ishikawa", img: imagesCounties.ishikawa}, {pref: "Fukui", img: imagesCounties.fukui}, {pref: "Yamanashi", img: imagesCounties.yamanashi}, {pref: "Nagano", img: imagesCounties.nagano}, {pref: "Gifu", img: imagesCounties.gifu}, {pref: "Shizuoka", img: imagesCounties.shizuoka}, {pref: "Aichi", img: imagesCounties.aichi}], imgRegion: "https://web-japan.org/kidsweb/explore/regions/images/r_04.gif"},
    {id: "Kansai", color: "rgb(171, 195, 235)", prefectures: [{pref:"Mie", img: imagesCounties.mie}, {pref: "Shiga", img: imagesCounties.shiga}, {pref: "Kyoto", img: imagesCounties.kyoto}, {pref: "Osaka", img: imagesCounties.osaka}, {pref: "Hyōgo", img: imagesCounties.hyogo}, {pref: "Nara", img: imagesCounties.nara}, {pref: "Wakayama", img: imagesCounties.wakayama}], imgRegion: kansai},
    {id: "Chūgoku", color: "rgb(247, 226, 159)", prefectures : [{pref:"Tottori", img: imagesCounties.tottori}, {pref: "Shimane", img: imagesCounties.shimane}, {pref: "Okayama", img: imagesCounties.okayama}, {pref: "Hiroshima", img: imagesCounties.hiroshima}, {pref: "Yamaguchi", img: imagesCounties.yamaguchi}], imgRegion: "https://www.chugoku.meti.go.jp/english-hp/english/chugoku1.jpg"},
    {id: "Shikoku", color: "rgb(192, 186, 229)", prefectures: [{pref:"Tokushima", img: imagesCounties.tokushima}, {pref:"Kagawa", img: imagesCounties.kagawa}, {pref: "Ehime", img: imagesCounties.ehime}, {pref: "Kōchi", img: imagesCounties.kochi}], imgRegion: shikoku},
    {id: "Kyūshū", color: "rgb(171, 214, 214)", prefectures: [{pref:"Fukuoka", img: imagesCounties.fukuoka}, {pref: "Saga", img: imagesCounties.saga}, {pref: "Nagasaki", img: imagesCounties.nagasaki}, {pref:"Kumamoto", img: imagesCounties.kumamoto}, {pref: "Oita", img: imagesCounties.oita}, {pref: "Miyazaki", img: imagesCounties.miyazaki}, {pref: "Kagoshima", img: imagesCounties.kagoshima}], imgRegion: kyushu},
    {id: "Okinawa", color: "rgb(133, 168, 139)", prefectures: [{pref:"Okinawa", img: imagesCounties.okinawa}], imgRegion: okinawa}
]  

export const counties = [
    { id: "JP-01", title: "Hokkaidō", region: "Hokkaidō", zones: [{zone: "Hokkaidō", img: ""}], imgCounty: imagesCounties.hokkaido },
    { id: "JP-02", title: "Aomori", region: "Tōhoku", zones: [{zone: ""}], imgCounty: imagesCounties.aomori },
    { id: "JP-03", title: "Iwate", region: "Tōhoku", zones: [{zone: ""}], imgCounty: imagesCounties.iwate },
    { id: "JP-04", title: "Miyagi", region: "Tōhoku", zones: [{zone: ""}], imgCounty: imagesCounties.miyagi },
    { id: "JP-05", title: "Akita", region: "Tōhoku", zones: [{zone: ""}], imgCounty: imagesCounties.akita },
    { id: "JP-06", title: "Yamagata", region: "Tōhoku", zones: [{zone: ""}], imgCounty: imagesCounties.yamagata },
    { id: "JP-07", title: "Fukushima", region: "Tōhoku", zones: [{zone: ""}], imgCounty: imagesCounties.fukushima },
    { id: "JP-08", title: "Ibaraki", region: "Kantō", zones: [{zone: ""}], imgCounty: imagesCounties.ibaraki },
    { id: "JP-09", title: "Tochigi", region: "Kantō", zones: [{zone: ""}], imgCounty: imagesCounties.tochigi },
    { id: "JP-10", title: "Gunma", region: "Kantō", zones: [{zone: ""}], imgCounty: imagesCounties.gunma },
    { id: "JP-11", title: "Saitama", region: "Kantō", zones: [{zone: ""}], imgCounty: imagesCounties.saitama },
    { id: "JP-12", title: "Chiba", region: "Kantō", zones: [{zone: ""}], imgCounty: imagesCounties.chiba },
    { id: "JP-13", title: "Tokyo", region: "Kantō", zones: [{zone: ""}], imgCounty: imagesCounties.tokyo },
    { id: "JP-14", title: "Kanagawa", region: "Kantō", zones: [{zone: "Atsugi", img:"", blog:"caca"}, {zone: "Yokohama", img:""}, {zone: "Fujisawa", img:""}, {zone: "Hakone", img:""}, {zone: "Atami", img:""}, {zone: "Izu", img:""}, {zone: "Kamakura", img:""}, {zone: "Odawara", img:""}, {zone: "Yugawara", img:""}, {zone: "Kawasaki", img:""}], imgCounty: imagesCounties.kanagawa},
    { id: "JP-15", title: "Niigata", region: "Chūbu", zones: [{zone: ""}], imgCounty: imagesCounties.niigata },
    { id: "JP-16", title: "Toyama", region: "Chūbu", zones: [{zone:"" }], imgCounty: imagesCounties.toyama},
    { id: "JP-17", title: "Ishikawa", region: "Chūbu", zones: [{zone: ""}], imgCounty: imagesCounties.ishikawa },
    { id: "JP-18", title: "Fukui", region: "Chūbu", zones: [{zone: ""}], imgCounty: imagesCounties.fukui },
    { id: "JP-19", title: "Yamanashi", region: "Chūbu", zones: [{zone: ""}], imgCounty: imagesCounties.yamanashi },
    { id: "JP-20", title: "Nagano", region: "Chūbu", zones: [{zone: ""}], imgCounty: imagesCounties.nagano },
    { id: "JP-21", title: "Gifu", region: "Chūbu", zones: [{zone: ""}], imgCounty: imagesCounties.gifu },
    { id: "JP-22", title: "Shizuoka", region: "Chūbu", zones: [{zone: ""}], imgCounty: imagesCounties.shizuoka },
    { id: "JP-23", title: "Aichi", region: "Chūbu", zones: [{zone: ""}], imgCounty: imagesCounties.aichi },
    { id: "JP-24", title: "Mie", region: "Kansai", zones: [{zone: ""}], imgCounty: imagesCounties.mie },
    { id: "JP-25", title: "Shiga", region: "Kansai", zones: [{zone: ""}], imgCounty: imagesCounties.shiga },
    { id: "JP-26", title: "Kyoto", region: "Kansai", zones: [{zone: ""}], imgCounty: imagesCounties.kyoto },
    { id: "JP-27", title: "Osaka", region: "Kansai", zones: [{zone: ""}], imgCounty: imagesCounties.osaka },
    { id: "JP-28", title: "Hyogo", region: "Kansai", zones: [{zone: ""}], imgCounty: imagesCounties.hyogo },
    { id: "JP-29", title: "Nara", region: "Kansai", zones: [{zone: ""}], imgCounty: imagesCounties.nara },
    { id: "JP-30", title: "Wakayama", region: "Kansai", zones: [{zone: ""}], imgCounty: imagesCounties.wakayama },
    { id: "JP-31", title: "Tottori", region: "Chūgoku", zones: [{zone: ""}], imgCounty: imagesCounties.tottori },
    { id: "JP-32", title: "Shimane", region: "Chūgoku", zones: [{zone: ""}], imgCounty: imagesCounties.shimane},
    { id: "JP-33", title: "Okayama", region: "Chūgoku", zones: [{zone: ""}], imgCounty: imagesCounties.okayama },
    { id: "JP-34", title: "Hiroshima", region: "Chūgoku", zones: [{zone: ""}], imgCounty: imagesCounties.hiroshima },
    { id: "JP-35", title: "Yamaguchi", region: "Chūgoku", zones: [{zone: ""}], imgCounty: imagesCounties.yamaguchi },
    { id: "JP-36", title: "Tokushima", region: "Shikoku", zones: [{zone: ""}], imgCounty: imagesCounties.tokushima },
    { id: "JP-37", title: "Kagawa", region: "Shikoku", zones: [{zone: ""}], imgCounty: imagesCounties.kagawa },
    { id: "JP-38", title: "Ehime", region: "Shikoku", zones: [{zone: ""}], imgCounty: imagesCounties.ehime },
    { id: "JP-39", title: "Kochi", region: "Shikoku", zones: [{zone: ""}], imgCounty: imagesCounties.kochi },
    { id: "JP-40", title: "Fukuoka", region: "Kyūshū", zones: [{zone: ""}], imgCounty: imagesCounties.fukuoka },
    { id: "JP-41", title: "Saga", region: "Kyūshū", zones: [{zone: ""}], imgCounty: imagesCounties.saga },
    { id: "JP-42", title: "Nagasaki", region: "Kyūshū", zones: [{zone: ""}], imgCounty: imagesCounties.nagasaki },
    { id: "JP-43", title: "Kumamoto", region: "Kyūshū", zones: [{zone: ""}], imgCounty: imagesCounties.kumamoto },
    { id: "JP-44", title: "Oita", region: "Kyūshū", zones: [{zone: ""}], imgCounty: imagesCounties.oita },
    { id: "JP-45", title: "Miyazaki", region: "Kyūshū", zones: [{zone: ""}], imgCounty: imagesCounties.miyazaki },
    { id: "JP-46", title: "Kagoshima", region: "Kyūshū", zones: [{zone: ""}], imgCounty: imagesCounties.kagoshima },
    { id: "JP-47", title: "Okinawa", region: "Okinawa", zones: [{zone: ""}], imgCounty: imagesCounties.okinawa },
  ];


  const blogZone = {
    time: "(1 à 2 jours)",
    p1: "Au pied du Mont Oyama, on trouve deux rues commerçantes : Tofu-dori, une petite rue très calme composée uniquement de restaurants de Tofu (grande spécialité d’Oyama), et Koma-sando, une rue plus animée remplie de commerces et restaurants. Koma signifie toupie et c’est également une spécialité d’Oyama, on en trouve plein dans les boutiques et on peut même fabriquer sa propre toupie pour 500 yen (3,5€).",
    
    p2: "Au bout de la rue Koma-sando, on arrive à une station de téléphérique qui nous mène au sanctuaire principal du Mont Oyama : Afuri-jinja. C’est un sanctuaire qui date d’il y a plus de 2000 ans et la divinité des lieux est Oyamatsumi, le père de la princesse Konohana Sakuya, déesse du Mont Fuji. Il était donc autrefois courant de se rendre en pèlerinage dans ces deux montagnes.",
    
    p3:"À partir du sanctuaire Afuri-jinja, on peut effectuer une randonnée d’environ 1h30 jusqu’au bâtiment secondaire du sanctuaire situé au sommet du Mont Oyama. Il faut donc compter environ 2h40 avec le retour. Le point de départ est la porte Tohaimon. Elle restait autrefois fermée sauf pendant l’été, période durant laquelle le pèlerinage était autorisé. C’est pourquoi aujourd’hui elle est constamment ouverte mais à moitié.",
    
    p4: "Après la randonnée, j’ai repris le téléphérique et je suis repassé par la rue Koma-sando afin de rejoindre l’endroit où je dormais le soir. Et sur le chemin (juste à côté de là où je passais la nuit), j’ai été attiré par Enshuya, une boutique de Sake assez particulière tenue par une maman adorable. Elle confectionne elle-même des sortes de Kimono pour habiller les bouteilles de Sake. J’ai trouvé ça très joli et je suis donc reparti avec plusieurs bouteilles (3000 yen soit 23€ la bouteille).",
    
    p5: "Contrairement à mon dernier passage durant lequel je n’étais venu qu’une journée, je suis cette fois resté passer une nuit dans un Shukubo, c’est-à-dire un sanctuaire dans lequel on peut passer la nuit. On en trouve plein au Mont Oyama et ils sont vraiment authentiques contrairement à d’autres endroits au Japon qui ont cédé au côté business à cause du tourisme de masse.",
    
    p6: "J’ai donc passé la nuit à Tougakubou (https://www.tougakubou.com/ ; 35.422453,139.253535), un sanctuaire qui est également fabricant de tofu. J’y ai donc fait l’expérience de fabriquer du tofu que j’ai ensuite mangé pour le dîner. L’auberge compte également un Onsen extérieur et, le matin, on peut se faire purifier par le prêtre du sanctuaire.", 
    
    p7: "Depuis Shinjuku, il suffit de prendre un train Odakyu durant 1 heure jusqu’à la station Isehara. À la sortie de la gare, un bus emmène ensuite au pied du Mont Oyama en 20-30 minutes. L’intégralité du trajet est compris dans le Tanzawa-Oyama Freepass qui permet également de prendre le téléphérique et de bénéficier de réductions dans pas mal de boutiques et restaurants (https://www.odakyu.jp/french/)",
    
    p8: "Restaurant: かんき楼"
}


  export const zones = [
      {prefecture: "Kanagawa", name: "Atsugi", img: "", blog: blogZone},
      {prefecture: "Kanagawa", name: "Yokohama", img: "", blog:"pipi"},
      {prefecture: "Kanagawa", name: "Fujisawa", img: "", blog:"caca"},
      {prefecture: "Kanagawa", name: "Hakone", img: "", blog:"caca"},
      {prefecture: "Kanagawa", name: "Atami", img: "", blog:"caca"},
      {prefecture: "Kanagawa", name: "Izu", img: "", blog:"caca"},
      {prefecture: "Kanagawa", name: "Kamakura", img: "", blog:"caca"},
      {prefecture: "Kanagawa", name: "Odawara", img: "", blog:"caca"},
      {prefecture: "Kanagawa", name: "Yugawara", img: "", blog:"caca"},
      {prefecture: "Kanagawa", name: "Kawasaki", img: "", blog:"caca"}
  ]


  