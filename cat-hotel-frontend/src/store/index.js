import { createStore } from 'vuex'

export default createStore({
  state: {
    firstCards: [
      {
        id: 0,
        imgsrc: require('@/assets/img/temperature.png'),
        link: '#',
        imgalt: 'Комфортная температура',
        title: 'Комфортная температура',
        info: 'Во всех номерах поддерживается комфортная температура в пределах 23 - 25 градусов. В каждом номере можно дополнительно отрегулировать температуру. ',
        class: 'main-figure',
      },
      {
        id: 1,
        imgsrc: require('@/assets/img/camera.png'),
        link: '#',
        imgalt: 'Видеонаблюдение',
        title: 'Видеонаблюдение',
        info: 'Мы предоставляем доступ в нашу систему. Вы сможете следить за своим питомцем со своего смартфона или компьютера.',
        class: 'main-figure',
      },
      {
        id: 2,
        imgsrc: require('@/assets/img/avto.png'),
        link: '#',
        imgalt: 'Услуги Зоотакси',
        title: 'Услуги Зоотакси',
        info: 'Мы приедем за вашим питомцем в любой район Санкт-Петербурга.',
        class: 'main-figure',
      },
      {
        id: 3,
        imgsrc: require('@/assets/img/food.png'),
        link: '#',
        imgalt: 'Сбалансированное питание',
        title: 'Сбалансированное питание',
        info: 'Вы можете привезти свой корм или доверить рацион своего питомца нашим профессионалам.',
        class: 'main-figure',
      },
      {
        id: 4,
        imgsrc: require('@/assets/img/cat.png'),
        link: '#',
        imgalt: 'Ежедневные прогулки',
        title: 'Ежедневные прогулки',
        info: 'По вашему желанию мы выгуливаем вашего питомца два раза в день на специализированной закрытой территории.',
        class: 'main-figure',
      },
      {
        id: 5,
        imgsrc: require('@/assets/img/hand.png'),
        link: '#',
        imgalt: 'Лучшие ветеринары',
        title: 'Лучшие ветеринары',
        info: 'В гостинице 24 часа дежурит ветеринарный врач, который окажет любую помощь в случае необходимости.',
        class: 'main-figure',
      },
    ],

    roomCards: [
      {
        id: 0,
        imgsrc: require('@/assets/img/catEconom.png'),
        link: '#',
        imgalt: 'Эконом',
        title: 'Эконом',
        sizes: 'Размеры (ШхГхВ) - 90х70х180 см',
        square: 'Площадь - 0,63 м2',
        equipment: 'Оснащение номера: --',
        price: 'Цена за сутки: 100₽',
        class: 'main-figure',
      },
      {
        id: 1,
        imgsrc: require('@/assets/img/catEconomPlus.png'),
        link: '#',
        imgalt: 'Эконом плюс',
        title: 'Эконом плюс',
        sizes: 'Размеры (ШхГхВ) - 90х70х180 см',
        square: 'Площадь - 0,90 м2',
        equipment: 'Оснащение номера:',
        price: 'Цена за сутки: 200₽',
        class: 'main-figure',
      },
      {
        id: 2,
        imgsrc: require('@/assets/img/catComfort.png'),
        link: '#',
        imgalt: 'Комфорт',
        title: 'Комфорт',
        sizes: 'Размеры (ШхГхВ) - 100х125х180 см',
        square: 'Площадь - 1,13 м2',
        equipment: 'Оснащение номера:',
        price: 'Цена за сутки: 250₽',
        class: 'main-figure',
      },
      {
        id: 3,
        imgsrc: require('@/assets/img/catSiut.png'),
        link: '#',
        imgalt: 'Сьют',
        title: 'Сьют',
        sizes: 'Размеры (ШхГхВ) - 125х125х180 см',
        square: 'Площадь - 1,56 м2',
        equipment: 'Оснащение номера:',
        price: 'Цена за сутки: 350₽',
        class: 'main-figure',
      },
      {
        id: 4,
        imgsrc: require('@/assets/img/catLux.png'),
        link: '#',
        imgalt: 'Люкс',
        title: 'Люкс',
        sizes: 'Размеры (ШхГхВ) - 160х160х180 см',
        square: 'Площадь - 2,56 м2',
        equipment: 'Оснащение номера:',
        price: 'Цена за сутки: 500₽',
        class: 'main-figure',
      },
      {
        id: 5,
        imgsrc: require('@/assets/img/catSuperLux.png'),
        link: '#',
        imgalt: 'Супер люкс',
        title: 'Супер люкс',
        sizes: 'Размеры (ШхГхВ) - 180х160х180 см',
        square: 'Площадь - 2,88 м2',
        equipment: 'Оснащение номера:',
        price: 'Цена за сутки: 600₽',
        class: 'main-figure',
      },
    ],

    roomFacilities: [
      {
        id: 0,
        imgsrc: require('@/assets/img/Vector1.svg'),
        imgalt: 'Лежак',
        title: 'Лежак',
      },
      {
        id: 1,
        imgsrc: require('@/assets/img/Vector2.svg'),
        imgalt: 'Домик',
        title: 'Домик',
      },
      {
        id: 2,
        imgsrc: require('@/assets/img/Vector3.svg'),
        imgalt: 'Игровой комплекс - 3 яруса',
        title: 'Игровой комплекс - 3 яруса',
      },
      {
        id: 3,
        imgsrc: require('@/assets/img/Vector4.svg'),
        imgalt: 'Когтеточка',
        title: 'Когтеточка',
      },
    ],

    reviews: [
      {
        id: 0,
        imgsrc: require('@/assets/img/woman_6962114.png'),
        link: '<a href="https://ru.freepik.com/search">Источник иконки: June Design</a>',
        imgalt: 'Отзыв',
        name: 'Иванова Елена',
        text: 'Зоогостиница расположена очень удобно, все оборудовано под котиков, с питомцами играют и ухаживают должным образом) Спасибо большое котоняне Марине, распросила особенности нашей кошечки и узнала когда и чем кормим 😍 Оставляли нашу Боню на 6 дней из-за неотложной поездки в другой город. Наша кошечка очень контактная и ласковая, переживали как она будет без нас. Фото-отчет был каждый день утром и вечером, что позволяло оставаться спокойным за соего питомца) Характер Бони никак не изменился после того как забрали её 😄 Однозначно рекомендую 👍',
      },
      {
        id: 1,
        imgsrc: require('@/assets/img/avatar_11696612.png'),
        link: '<a href="https://ru.freepik.com/search">Источник иконки: June Design</a>',
        imgalt: 'Отзыв',
        name: 'Сидорова Оксана',
        text: 'Хочется сказать огромное спасибо и выразить благодарность за содержание нашей кошечки! все было очень организованно по времени, а для нас это было важно. так как были привязаны к поезду) в назначенное время приехали и забрали нашу кошечку и в обговоренное время привезли домой) то что есть услуга кототакси очень удобно) ну и конечно содержание на высоте) Еще раз спасибо большое, всем советуем и сами еще не раз обязательно воспользуемся вашими услугами!!!!',
      },
      {
        id: 2,
        imgsrc: require('@/assets/img/office_11696604.png'),
        link: '<a href="https://ru.freepik.com/search">Источник иконки: June Design</a>',
        imgalt: 'Отзыв',
        name: 'Назарова Татьяна',
        text: 'Оставляли котика на 12 дней, всё прошло отлично. Марина нашла подход к нашему питомцу, он был доволен. Каждый день утром и вечером фото и видео отчёт. Удобное расположение зоогостиницы, отличное отношение к питомцу, добрая, улыбчивая и с большой положительной энергией Мариночка. Буду всем рекомендовать.',
      },
      {
        id: 3,
        imgsrc: require('@/assets/img/woman_6962114.png'),
        link: '<a href="https://ru.freepik.com/search">Источник иконки: June Design</a>',
        imgalt: 'Отзыв',
        name: 'Петрова Екатерина',
        text: 'Отличное место для пушистого члена семьи) во время отпуска) Марине очень благодарна 💗👍🙏за заботу и тепло для моего кота. По Марине видно, что человек очень любит животных и относится сразу как к своим. Кот был окружен теплым приемом, играми и естественно необходимыми условиями, мы на долгое время оставляли кота у него была классная комната с огромным окном 😍',
      },
    ],
  },
})
