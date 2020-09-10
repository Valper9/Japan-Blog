const imgKanagawa = "https://mapitdata.blob.core.windows.net/img02/en/lush/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C(%E5%B8%82%E7%94%BA%E6%9D%91).png"
const imgHokkaido = ""




export const regions = [ 
    {id : "hokkaidō", prefectures : [{pref:"Hokkaidō", img: imgHokkaido}], imgRegion: "https://img.pngio.com/hokkaido-map-map-transparent-background-png-clipart-hiclipart-hokkaido-png-800_706.jpg"},
    {id: "tōhoku", prefectures : [{pref:"Aomori"}, {pref:"Iwate"}, {pref: "Miyagi"}, {pref:"Akita"}, {pref: "Yamagata"}, {pref:"Fukushima"}], imgRegion: "https://web-japan.org/kidsweb/explore/regions/images/r_02.gif"},
    {id: "kantō", prefectures : [{pref: "Ibaraki", img:""}, {pref: "Tochigi", img:""}, {pref:"Gunma",img:""}, {pref:"Saitama",img:""}, {pref:"Chiba", img:""}, {pref:"Tokyo",img:""}, {pref:"Kanagawa", img: imgKanagawa}], imgRegion: "https://uj-tours.com/wp-content/uploads/2019/09/map-kanto2-624x500.jpg"},
    {id: "chūbu", prefectures: [{pref:"Niigata"}, {pref: "Toyama"}, {pref:"Ishikawa"}, {pref: "Fukui"}, {pref: "Yamanashi"}, {pref: "Nagano"}, {pref: "Gifu"}, {pref: "Shizuoka"}, {pref: "Aichi"}], imgRegion: "https://web-japan.org/kidsweb/explore/regions/images/r_04.gif"},
    {id: "kansai", prefectures: [{pref:"Mie"}, {pref: "Shiga"}, {pref: "Kyoto"}, {pref: "Osaka"}, {pref: "Hyōgo"}, {pref: "Nara"}, {pref: "Wakayama"}], imgRegion: "https://www.kansai.meti.go.jp/english/img/meti_kankatu2.GIF"},
    {id: "chūgoku", prefectures : [{pref:"Tottori"}, {pref: "Shimane"}, {pref: "Okayama"}, {pref: "Hiroshima"}, {pref: "Yamaguchi"}], imgRegion: "https://www.chugoku.meti.go.jp/english-hp/english/chugoku1.jpg"},
    {id: "shikoku", prefectures: [{pref:"Tokushima"}, {pref:"Kagawa"}, {pref: "Ehime"}, {pref: "Kōchi"}], imgRegion: "https://shikoku-railwaytrip.com/images/home/map-shikoku.png"},
    {id: "kyūshū", prefectures: [{pref:"Fukuoka"}, {pref: "Saga"}, {pref: "Nagasaki"}, {pref:"Kumamoto"}, {pref: "Oita"}, {pref: "Miyazaki"}, {pref: "Kagoshima"}], imgRegion: "https://1.bp.blogspot.com/-Vh3lLNZO3fQ/XTaBMi7CS_I/AAAAAAABmaA/FMS4vXdI5v0nVhbZr8WUhws-qa26rXzSgCLcBGAs/s640/Kyushu%2Btravel%2Bmap.jpg"},
    {id: "okinawa", prefectures: [{pref:"Okinawa"}], imgRegion: "https://i.pinimg.com/originals/33/d8/47/33d8479cecfb258c82b367bf8f81aca5.jpg"}
]  

export const counties = [
    { id: "JP-01", title: "Hokkaidō", region: "hokkaidō", img: "https://thumbs.dreamstime.com/z/administrative-political-vector-map-japanese-prefecture-hokkaido-flag-administrative-political-vector-map-146894022.jpg" },
    { id: "JP-02", title: "Aomori", region: "tōhoku" },
    { id: "JP-03", title: "Iwate", region: "tōhoku" },
    { id: "JP-04", title: "Miyagi", region: "tōhoku" },
    { id: "JP-05", title: "Akita", region: "tōhoku" },
    { id: "JP-06", title: "Yamagata", region: "tōhoku" },
    { id: "JP-07", title: "Fukushima", region: "tōhoku" },
    { id: "JP-08", title: "Ibaraki", region: "kantō" },
    { id: "JP-09", title: "Tochigi", region: "kantō" },
    { id: "JP-10", title: "Gunma", region: "kantō" },
    { id: "JP-11", title: "Saitama", region: "kantō" },
    { id: "JP-12", title: "Chiba", region: "kantō" },
    { id: "JP-13", title: "Tokyo", region: "kantō" },
    { id: "JP-14", title: "Kanagawa", region: "kantō", img: "https://mapitdata.blob.core.windows.net/img02/en/lush/%E7%A5%9E%E5%A5%88%E5%B7%9D%E7%9C%8C(%E5%B8%82%E7%94%BA%E6%9D%91).png", zones: [{zone: "Atsugi", img:"", blog:"caca"}, {zone: "Yokohama", img:""}, {zone: "Fujisawa", img:""}, {zone: "Hakone", img:""}, {zone: "Atami", img:""}, {zone: "Izu", img:""}, {zone: "Kamakura", img:""}, {zone: "Odawara", img:""}, {zone: "Yugawara", img:""}, {zone: "Kawasaki", img:""}] },
    { id: "JP-15", title: "Niigata", region: "chūbu" },
    { id: "JP-16", title: "Toyama", region: "chūbu" },
    { id: "JP-17", title: "Ishikawa", region: "chūbu" },
    { id: "JP-18", title: "Fukui", region: "chūbu" },
    { id: "JP-19", title: "Yamanashi", region: "chūbu" },
    { id: "JP-20", title: "Nagano", region: "chūbu" },
    { id: "JP-21", title: "Gifu", region: "chūbu" },
    { id: "JP-22", title: "Shizuoka", region: "chūbu" },
    { id: "JP-23", title: "Aichi", region: "chūbu" },
    { id: "JP-24", title: "Mie", region: "kansai" },
    { id: "JP-25", title: "Shiga", region: "kansai" },
    { id: "JP-26", title: "Kyoto", region: "kansai" },
    { id: "JP-27", title: "Osaka", region: "kansai" },
    { id: "JP-28", title: "Hyogo", region: "kansai" },
    { id: "JP-29", title: "Nara", region: "kansai" },
    { id: "JP-30", title: "Wakayama", region: "kansai" },
    { id: "JP-31", title: "Tottori", region: "chūgoku" },
    { id: "JP-32", title: "Shimane", region: "chūgoku" },
    { id: "JP-33", title: "Okayama", region: "chūgoku" },
    { id: "JP-34", title: "Hiroshima", region: "chūgoku" },
    { id: "JP-35", title: "Yamaguchi", region: "chūgoku" },
    { id: "JP-36", title: "Tokushima", region: "shikoku" },
    { id: "JP-37", title: "Kagawa", region: "shikoku" },
    { id: "JP-38", title: "Ehime", region: "shikoku" },
    { id: "JP-39", title: "Kochi", region: "shikoku" },
    { id: "JP-40", title: "Fukuoka", region: "kyūshū" },
    { id: "JP-41", title: "Saga", region: "kyūshū" },
    { id: "JP-42", title: "Nagasaki", region: "kyūshū" },
    { id: "JP-43", title: "Kumamoto", region: "kyūshū" },
    { id: "JP-44", title: "Oita", region: "kyūshū" },
    { id: "JP-45", title: "Miyazaki", region: "kyūshū" },
    { id: "JP-46", title: "Kagoshima", region: "kyūshū" },
    { id: "JP-47", title: "Okinawa", region: "okinawa" },
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


  