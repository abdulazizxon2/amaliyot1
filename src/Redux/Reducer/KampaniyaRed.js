let KampData={
   cardKomp:[
    {
      raqam:2003,
      nom:"Компания ООО «Стройоптторг» была зарегистрирована в реестре и получила свидетельство о регистрации 1 октября 2003 года.",
      ul1:"Общая площадь земельного участка составляла 10 000 м².",
      ul2:"площадь складских помещений 850 м².",
      ul3:"численность сотрудников 10 человек."
    },
    {
      raqam:2008,
      nom:"С годами компания динамично росла и развивалась и уже к 2008 г. мы достигли более высоких результатов:",
      ul1:"общая площадь базы составила 58 000 м²",
      ul2:"площадь складских помещений 5 200 м²",
      ul3:"численность коллектива возросла до 300 человек"
    },
    {
      raqam:2018,
      nom:"К своему 15-ти летнему юбилею компания расширила торговые площади до 17 805.3 м²",
      ul1:"Торговый центр №1 - 5 545 м²",
      ul2:"Торговый центр№2- 3 951,2 м²",
      ul3:"Складские помещения - 8 308,6 м²"
    }
   ]
}
export default function KampaniyaRed(state = KampData, { type, payload }) {
    switch (type) {
      default: return state
    }
  }