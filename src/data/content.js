export const SITE_DATA = {
  hero: {
    name: "Настя Сивец",
    title: "Парфюмерный исследователь, предприниматель, создатель ароматерапии SLUU",
    shortBio: "Погружаю в мир парфюмерии, редких композиций и ольфакторного искусства. Создаю ароматы для жизни и исследую невидимую эстетику запахов.",
    image: "https://static.tildacdn.com/tild3564-3133-4161-b432-373034306535/IMG_0059.JPG",
    badge: "SLUU • Perfume Researcher",
    birthday: "14 Ноября",
    editorialIssue: "ОЛЬФАКТОРНЫЙ АТЛАС",
    coordinates: "",
    cities: ["Москва", "Париж", "Милан", "Грас"],
    perfumeChords: [
      "Filippo Sorcinelli", "Zoologist", "ELDO", "Lactonic Accords", 
      "Iso E Super", "Orris Butter", "Ambroxan", "Byredo", "Niche Layering"
    ]
  },
  
  socials: [
    { name: "Telegram", handle: "@nastyasivets", url: "https://t.me/nastyasivets", icon: "Send", count: "48K+ подписчиков" },
    { name: "YouTube", handle: "@nastyasivets", url: "https://www.youtube.com/@nastyasivets", icon: "Youtube", count: "120K+ просмотров" },
    { name: "Instagram*", handle: "@sivets", url: "https://www.instagram.com/sivets/", icon: "Instagram", count: "Личный блог" },
    { name: "TikTok", handle: "@nastyasivets", url: "https://www.tiktok.com/@nastyasivets", icon: "Video", count: "Shorts & тренды" },
    { name: "VK Видео", handle: "@nastyasivets", url: "https://vkvideo.ru/@nastyasivets", icon: "PlaySquare", count: "Эксклюзивы" }
  ],

  manifesto: {
    quote: "Аромат — это не аксессуар. Это невидимая архитектура вашего присутствия, воспоминание, оживающее в воздухе, и самое интимное из всех искусств.",
    author: "Настя Сивец",
    role: "Парфюмерный исследователь"
  },

  olfactivePyramid: {
    title: "Ольфакторный атлас & Пирамида нот",
    subtitle: "Интерактивный атлас редких аккордов, которые исследует Настя Сивец",
    tiers: [
      {
        tierName: "Top Notes",
        tierRu: "Верхние ноты",
        timing: "Первые 15 минут звучания",
        notes: [
          {
            id: "pepper",
            name: "Розовый перец",
            latin: "Schinus Molle",
            color: "#f878b3",
            glowColor: "rgba(248, 120, 179, 0.45)",
            freq: 659,
            desc: "Искристый, сухой, пряно-ягодный аккорд. Взрывается на коже как капли шампанского и задает композиции дерзкий ритм.",
            nastyaNote: "Мой любимый прием в нише — когда перец звучит не брутально, а воздушно и холодно."
          },
          {
            id: "bergamot",
            name: "Калабрийский бергамот",
            latin: "Citrus Bergamia",
            color: "#a3e635",
            glowColor: "rgba(163, 230, 53, 0.45)",
            freq: 784,
            desc: "Аристократичный горьковатый цитрус с чайными нюансами эрл-грея. Чистый свет и утренняя прохлада Средиземноморья.",
            nastyaNote: "Фундамент классического одеколона, переосмысленный современной молекулярной химией."
          },
          {
            id: "saffron",
            name: "Красный шафран",
            latin: "Crocus Sativus",
            color: "#fbbf24",
            glowColor: "rgba(251, 191, 36, 0.45)",
            freq: 587,
            desc: "Драгоценная золотистая пряность с кожано-металлическим холодком. Визитная карточка восточного авангарда.",
            nastyaNote: "Создает статусную, гипнотическую ауру даже в микроскопических дозировках."
          }
        ]
      },
      {
        tierName: "Heart Notes",
        tierRu: "Ноты сердца",
        timing: "Раскрытие 2–4 часа",
        notes: [
          {
            id: "lactonic",
            name: "Лактонный аккорд (Молоко)",
            latin: "Lactones & Steamed Milk",
            color: "#fde047",
            glowColor: "rgba(253, 224, 71, 0.45)",
            freq: 528,
            desc: "Сливочный, телесный, медитативный аккорд теплого молока, рисового пара и пудрового миндаля — главный тренд последних лет.",
            nastyaNote: "Смотрите мой спецвыпуск «ТОП молочных ароматов» — это самый комплиментарный и уютный жанр."
          },
          {
            id: "iris",
            name: "Флорентийский ирис",
            latin: "Iris Pallida (Orris)",
            color: "#c084fc",
            glowColor: "rgba(192, 132, 252, 0.45)",
            freq: 494,
            desc: "Драгоценное масло корня ириса: прохладное, замшевое, интеллектуальное звучание высокой французской парфюмерии.",
            nastyaNote: "Килограмм чистого ирисового масла стоит дороже золота. В аромате дает ощущение шелка на коже."
          },
          {
            id: "incense",
            name: "Оманский ладан",
            latin: "Boswellia Sacra",
            color: "#e2e8f0",
            glowColor: "rgba(226, 232, 240, 0.45)",
            freq: 440,
            desc: "Мистический дымный штрих, воспевающий монументальные ароматы мастера Филиппо Сорчинелли.",
            nastyaNote: "Ладан умиротворяет, заземляет и собирает фокус. Главная нота для внутреннего дзена."
          }
        ]
      },
      {
        tierName: "Base Notes",
        tierRu: "Шлейф и база",
        timing: "Звучание 8–24+ часов",
        notes: [
          {
            id: "animalic",
            name: "Анималистичный мускус",
            latin: "Animalic Accord / Zoologist",
            color: "#fb923c",
            glowColor: "rgba(251, 146, 60, 0.45)",
            freq: 392,
            desc: "Чувственный, теплый, дикий ольфакторный вызов. Тот самый смелый нерв ниши, раздвигающий границы привычного.",
            nastyaNote: "В моем честном тесте 19 ароматов Zoologist мы исследовали этот аккорд до мельчайших нюансов."
          },
          {
            id: "isoe",
            name: "Молекула Iso E Super",
            latin: "Tetramethyl Acetyloctahydro",
            color: "#38bdf8",
            glowColor: "rgba(56, 189, 248, 0.45)",
            freq: 349,
            desc: "Прозрачная, бархатистая древесная аура. Появляется и исчезает волнами, сливаясь с собственной химией кожи.",
            nastyaNote: "Секрет шлейфа, на который все оборачиваются и спрашивают: «Чем от вас так невероятно пахнет?»."
          },
          {
            id: "vanilla",
            name: "Черная бурбонская ваниль",
            latin: "Vanilla Planifolia Bourbon",
            color: "#e879f9",
            glowColor: "rgba(232, 121, 249, 0.45)",
            freq: 330,
            desc: "Не кондитерская сладость, а темный, смолистый, алкогольный стручок с нюансами рома и выдержанного дуба.",
            nastyaNote: "База, которая согревает в холодные вечера и создает непреодолимое влечение."
          }
        ]
      }
    ],

    // Signature Layering Formulas for the Layering Lab
    layeringFormulas: [
      {
        id: "creamy-avantgarde",
        name: "Кремовый авангард",
        top: "pepper",
        heart: "lactonic",
        base: "vanilla",
        vibe: "Искристый пряный старт, мягкое сливочное сердце и теплая смолистая база. Абсолютный хит комплиментов.",
        rule: "Контраст температуры: холодный розовый перец не дает сливочной ванили уйти в приторность."
      },
      {
        id: "silk-mediterranean",
        name: "Средиземноморский шелк",
        top: "bergamot",
        heart: "iris",
        base: "isoe",
        vibe: "Утренний чай с бергамотом в старинном саду, пудровый ирисовый шелк и вибрирующий шлейф молекулы.",
        rule: "Интеллектуальная чистота: идеальная комбинация для деловых встреч и галерей современного искусства."
      },
      {
        id: "mystic-noir",
        name: "Мистический нуар",
        top: "saffron",
        heart: "incense",
        base: "animalic",
        vibe: "Дымный ладан соборов, шафрановый металл и чувственный животный шлейф. Посвящение эстетике Сорчинелли.",
        rule: "Дерзкий ольфакторный вызов: наносить микродозами для создания магнетической тайны."
      }
    ]
  },

  course: {
    title: "Онлайн курс по парфюмерии",
    subtitle: "Совместно с ведущим лекторием «Синхронизация»",
    description: "Большой практический курс: как понимать нишевые ароматы, строить свой ольфакторный гардероб, читать ноты и разбираться в парфюмерии на уровне эксперта.",
    image: "https://static.tildacdn.com/tild6164-3137-4362-b836-326238653934/Slide_16_9_-_43.png",
    discount: "-15%",
    link: "https://online.synchronize.ru/fashionanddesign/perfume?utm_source=instagram&utm_medium=social_video&utm_campaign=online&utm_content=perfume&utm_term=141026&promocode=%D0%BD%D0%B8%D1%88%D0%B5%D0%B2%D1%8B%D0%BC",
    badge: "Хит обучения • Синхронизация",
    modules: [
      { 
        num: "01", 
        title: "Ольфакторная карта", 
        desc: "Как устроен наш нос, почему мы слышим молекулы и как правильно тестировать флаконы без усталости рецепторов.",
        topics: ["Физиология обоняния", "Правило 3-х блоттеров", "Очищение рецепторов"]
      },
      { 
        num: "02", 
        title: "Анатомия пирамиды", 
        desc: "Разбор верхних, сердечных и базовых нот. Синтетические молекулы (Iso E, Ambroxan) vs натуральные абсолюты.",
        topics: ["Синтетика vs Натуральность", "Время раскрытия нот", "Химия шлейфа"]
      },
      { 
        num: "03", 
        title: "Архитектура ниши", 
        desc: "История великих домов: от старинных аптек до бунтарского авангарда Сорчинелли, Zoologist и ELDO.",
        topics: ["История парфюмерии", "Эпатажные концепты", "Инвестиции во флаконы"]
      },
      { 
        num: "04", 
        title: "Личный гардероб", 
        desc: "Как подбирать духи под времена года, события и стиль. Правила лееринга и стойкости без головной боли.",
        topics: ["Сезонная капсула", "Искусство лееринга", "Парфюмерный этикет"]
      }
    ]
  },

  merch: {
    title: "Оберег от хейтеров",
    tagline: "Лимитированный талисман & мерч",
    description: "Культовый оберег от Насти Сивец, заряженный на чистую энергию, защиту от токсичности и безупречный парфюмерный вкус.",
    image: "https://static.tildacdn.com/tild3838-3065-4364-b937-613836396339/Frame_1099.png",
    link: "https://nastyasivets.com/page217407809.html",
    price: "Лимитированный тираж",
    badge: "Limited Artifact",
    features: [
      "Защита от токсичного окружения и дурного ольфакторного вкуса",
      "Заряжен чистой энергией высокой парфюмерной эстетики",
      "Эксклюзивный коллекционный артефакт с авторским смыслом"
    ]
  },

  lectures: [
    {
      id: "layering",
      title: "Искусство лееринга ароматов",
      format: "2 лекции по 45 мин",
      description: "Как безошибочно смешивать парфюмы, создавать неповторимые слои и раскрывать индивидуальное звучание привычных флаконов.",
      price: "2 500 ₽",
      image: "https://static.tildacdn.com/tild3465-3134-4663-a638-353136306431/Frame_1055.png",
      link: "https://nastyasivets.com/layering",
      topics: ["Принципы сочетания молекул", "Контраст и гармония аккордов", "Авторские рецепты миксов"]
    },
    {
      id: "lecture-47",
      title: "Парфюмерный гардероб: основы и редкие находки",
      format: "Лекция 47 мин",
      description: "Глубокий разбор подбора ароматов под сезоны, настроение и ситуации. Инвестиции в флаконы, которые никогда не устареют.",
      price: "1 500 ₽",
      image: "https://static.tildacdn.com/tild6235-3766-4934-b836-623066633834/Frame_935.png",
      link: "https://nastyasivets.com/page115873806.html",
      topics: ["Базовый ольфакторный сет", "Вечерние и интимные шлейфы", "Флаконы-инвестиции"]
    }
  ],

  audioGuides: [
    {
      id: "audio-guide-1",
      title: "Парфюмерный аудиогид",
      format: "Продолжительность 30–40 мин",
      description: "Персональное аудиосопровождение: включай в наушниках при походе в парфюмерный бутик, чтобы сразу тестировать шедевры без суеты консультантов.",
      price: "990 ₽",
      oldPrice: "1 350 ₽",
      image: "https://static.tildacdn.com/tild3138-6561-4565-b365-643465643732/Frame_960.png",
      link: "https://nastyasivets.com/page128351466.html",
      tag: "In-Ear Boutique Companion"
    }
  ],

  outlet: {
    title: "Парфюмерный аутлет",
    badge: "Парфюмерное комьюнити",
    description: "Выгодно купить и безопасно продать оригинальную нишевую парфюмерию. Уютная проверенная площадка в Telegram для коллекционеров, ценителей и тех, кто ищет редкие ароматы.",
    link: "https://t.me/parfoutlet",
    buttonText: "Перейти в Telegram аутлет",
    image: "https://static.tildacdn.com/tild6362-6263-4333-b331-613034333964/a_fluffy_green_chara.jpeg",
    stats: [
      { value: "100%", label: "Проверка подлинности" },
      { value: "0% подделок", label: "Строгая модерация" },
      { value: "24/7", label: "Живое комьюнити" }
    ],
    communityPillars: [
      { name: "Редкие винтажи & снятости", desc: "Шанс найти легендарные формулы прошлых лет" },
      { name: "Отливанты от 2 до 10 мл", desc: "Удобный способ протестировать аромат на коже" },
      { name: "Полноразмерные флаконы", desc: "Оригинальные остатки во флаконах по честной цене" },
      { name: "Безопасные сделки", desc: "Отзывы участников и проверка репутации продавцов" }
    ],
    verificationSteps: [
      { title: "Проверка оригинальности", desc: "Сверка батч-кодов, качества полиграфии и геометрии флаконов" },
      { title: "Репутация продавцов", desc: "Прозрачная система отзывов от реальных участников сообщества" },
      { title: "Защита от подделок", desc: "Модерация каждого объявления и запрет реплик и подделок" }
    ]
  },

  sluuBrand: {
    title: "SLUU Aromatherapy",
    tagline: "Ароматерапия для дома и ритуалов заботы о себе",
    description: "Авторский бренд ароматерапии Насти Сивец. Натуральные бленды эфирных масел 100% терапевтического класса для восстановления ресурса, фокуса и эмоционального баланса.",
    heroImage: "https://static.tildacdn.com/tild6532-3036-4361-b835-306539623965/R7__6390_from-RAW_1.png",
    products: [
      {
        id: "focus",
        name: "Поймать фокус",
        type: "Бленд эфирных масел • 5 мл",
        desc: "Для концентрации внимания, ясности мысли и собранности.",
        price: "3 500 ₽",
        image: "https://static.tildacdn.com/tild3266-6334-4364-b538-333739343334/Frame_376-11_1.png",
        link: "https://sluu.club/shop?utm_source=site_nastya",
        badge: "Фокус & Энергия"
      },
      {
        id: "calm",
        name: "Снизить тревогу",
        type: "Бленд эфирных масел • 5 мл",
        desc: "Мягкое заземление, снятие эмоционального напряжения и внутренний покой.",
        price: "3 500 ₽",
        image: "https://static.tildacdn.com/tild3032-3863-4335-b831-393137633238/Frame_483.png",
        link: "https://sluu.club/shop?utm_source=site_nastya",
        badge: "Антистресс"
      },
      {
        id: "mood",
        name: "Поднять настроение",
        type: "Бленд эфирных масел • 5 мл",
        desc: "Искрящийся цитрусово-пряный заряд радости, вдохновения и легкости.",
        price: "3 500 ₽",
        image: "https://static.tildacdn.com/tild3663-3236-4263-b930-333565626234/Frame_376-1_1.png",
        link: "https://sluu.club/shop?utm_source=site_nastya",
        badge: "Настроение"
      },
      {
        id: "sleep",
        name: "Наладить сон",
        type: "Бленд эфирных масел • 5 мл",
        desc: "Глубокая вечерняя релаксация, ритуал замедления и спокойный сон.",
        price: "3 500 ₽",
        image: "https://static.tildacdn.com/tild3638-3934-4066-b833-643064343636/Frame_936.png",
        link: "https://sluu.club/shop?utm_source=site_nastya",
        badge: "Релакс & Сон"
      }
    ],
    links: [
      {
        name: "Интернет-магазин SLUU",
        url: "https://sluu.club/shop?utm_source=site_nastya",
        badge: "sluu.club",
        primary: true
      },
      {
        name: "SLUU на Ozon",
        url: "https://www.ozon.ru/seller/sluu-1528891/",
        badge: "Ozon",
        logo: "https://static.tildacdn.com/tild6564-3564-4764-a239-626132666235/ozon-icon-logo.png"
      },
      {
        name: "SLUU на WB",
        url: "https://www.wildberries.ru/brands/311263969-sluu",
        badge: "Wildberries",
        logo: "https://static.tildacdn.com/tild6233-3061-4731-b135-336538306161/wildberries-sign-log.png"
      }
    ]
  },

  videos: [
    {
      id: 1,
      title: "Подделки духов стали слишком хорошими? Парфюмерное расследование на Садоводе",
      image: "https://static.tildacdn.com/tild3662-6261-4365-b333-306264356631/-1.png",
      tag: "Расследование",
      category: "investigation",
      featured: true,
      stats: "Главное расследование года",
      youtube: "https://www.youtube.com/watch?v=rimD3fzqaak",
      vk: "https://vkvideo.ru/playlist/-231514931_3/video-231514931_456239197?linked=1"
    },
    {
      id: 2,
      title: "ТОП ароматов État Libre d’Orange (ELDO): честный рейтинг и дискавери тур",
      image: "https://static.tildacdn.com/tild3162-3432-4535-a236-363866383334/photo.png",
      tag: "Обзор бренда",
      category: "review",
      youtube: "https://www.youtube.com/watch?v=y0xxOC4qw9M&t=994s",
      vk: "https://vkvideo.ru/video-231514931_456239067"
    },
    {
      id: 3,
      title: "ТОП молочных ароматов: рейтинг самых уютных и комплиментарных духов",
      image: "https://static.tildacdn.com/tild6463-6230-4566-a530-343263333333/photo.png",
      tag: "Подборка",
      category: "selection",
      youtube: "https://www.youtube.com/watch?v=d12xnlEEv3g",
      vk: "https://vkvideo.ru/video-231514931_456239066"
    },
    {
      id: 4,
      title: "Интервью с Филиппо Сорчинелли — живой легендой нишевой парфюмерии",
      image: "https://static.tildacdn.com/tild3062-3331-4162-b237-363736666466/_2.png",
      tag: "Интервью",
      category: "interview",
      youtube: "https://www.youtube.com/watch?v=h-7BdP7gyZM&t=2s",
      vk: "https://vkvideo.ru/@nastyasivets"
    },
    {
      id: 5,
      title: "Будущие хиты нишевой парфюмерии: ТОП парфюмов с выставки Esxence Milano",
      image: "https://static.tildacdn.com/tild3465-6466-4966-b466-633135626233/Slide_16_9_-_16.png",
      tag: "Esxence Milano",
      category: "expo",
      youtube: "https://www.youtube.com/@nastyasivets",
      vk: "https://vkvideo.ru/@nastyasivets"
    },
    {
      id: 6,
      title: "Обзор 19 ароматов Zoologist максимально честно — стоят ли они своих денег?",
      image: "https://static.tildacdn.com/tild3534-6139-4863-b932-363832613136/Slide_16_9_-_14.png",
      tag: "Честный затест",
      category: "review",
      youtube: "https://www.youtube.com/@nastyasivets",
      vk: "https://vkvideo.ru/@nastyasivets"
    }
  ],

  collaboration: {
    title: "Сотрудничество & PR",
    description: "По вопросам коммерческих интеграций, лекций, ольфакторного консалтинга и спецпроектов для брендов свяжитесь с PR-командой Насти Сивец.",
    botUrl: "https://t.me/sivets_requestsbot",
    botLabel: "Оставить заявку в Telegram",
    email: "sivetspr@gmail.com",
    formats: [
      { title: "Ольфакторный консалтинг", desc: "Разработка ольфакторной идентичности для брендов и пространств" },
      { title: "Спецпроекты & Видео", desc: "Интеграции в расследования, обзоры и авторские подборки" },
      { title: "Лекции & Мастер-классы", desc: "Закрытые лекции для клиентов премиальных клубов и компаний" }
    ]
  },

  legal: {
    entity: "ИП Сивец Анастасия Викторовна",
    inn: "770705715731",
    email: "sivetspr@gmail.com",
    offerUrl: "http://nastyasivets.com/page116404066.html"
  }
};
