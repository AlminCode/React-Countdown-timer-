import i18next from 'i18next';

i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    lng: 'en', // 'en' | 'es'
    resources: {
      en: {
        translation: {
          seconds: { label: 'Seconds', },
          minutes: { label: 'Minutes', },
          hours: { label: 'Hours', },
          days: { label: 'Days', },
          months: { label: 'Months', }
          
        },
      },
      de: {
        translation: {
          seconds: { label: 'Sekunden', },
          minutes: { label: 'Minuten', },
          hours: { label: 'Stunden', },
          days: { label: 'Tage', },
          months: { label: 'Monate', }
        },
      },
    },
  })

export default i18next