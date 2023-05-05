export interface Card {
  cardId?: number;
  photo: string;
  location?: string;
}

const firstSlideCards: Array<Card> = [
  {
    cardId: 0,
    photo: 'bang1.jpg',
  },
  {
    cardId: 1,
    photo: 'bang2.jpg',
  },

  {
    cardId: 2,
    photo: 'bang3.jpg',
  },
  {
    cardId: 3,
    photo: 'bang4.jpg',
  },
  {
    cardId: 4,
    photo: 'bang5.jpg',
  },
  {
    cardId: 5,
    photo: 'bang6.jpeg',
  },
];

const secondSlideCards: Array<Card> = [
  {
    cardId: 0,
    photo: 'sing1.jpg',
  },
  {
    cardId: 1,
    photo: 'sing2.jpg',
  },

  {
    cardId: 2,
    photo: 'sing3.jpg',
  },
  {
    cardId: 3,
    photo: 'sing4.jpeg',
  },
  {
    cardId: 4,
    photo: 'sing5.jpg',
  },
  {
    cardId: 5,
    photo: 'sing6.jpg',
  },
];

const thirdSlideCards: Array<Card> = [
  {
    cardId: 0,
    photo: 'saigon1.jpeg',
  },
  {
    cardId: 1,
    photo: 'saigon2.jpeg',
  },

  {
    cardId: 2,
    photo: 'saigon3.jpg',
  },
  {
    cardId: 3,
    photo: 'saigon4.jpg',
  },
  {
    cardId: 4,
    photo: 'saigon5.jpg',
  },
  {
    cardId: 5,
    photo: 'saigon6.jpg',
  },
];

const allCards: Array<Card> = [
  {
    cardId: 0,
    photo: 'bang1.jpg',
    location: 'Bangkok',
  },
  {
    cardId: 1,
    photo: 'bang2.jpg',
    location: 'Bangkok',
  },

  {
    cardId: 2,
    photo: 'bang3.jpg',
    location: 'Bangkok',
  },
  {
    cardId: 3,
    photo: 'bang4.jpg',
    location: 'Bangkok',
  },
  {
    cardId: 4,
    photo: 'bang5.jpg',
    location: 'Bangkok',
  },
  {
    cardId: 5,
    photo: 'bang6.jpeg',
    location: 'Bangkok',
  },

  {
    cardId: 6,
    photo: 'sing1.jpg',
    location: 'Singapore',
  },
  {
    cardId: 7,
    photo: 'sing2.jpg',
    location: 'Singapore',
  },

  {
    cardId: 8,
    photo: 'sing3.jpg',
    location: 'Singapore',
  },
  {
    cardId: 9,
    photo: 'sing4.jpeg',
    location: 'Singapore',
  },
  {
    cardId: 10,
    photo: 'sing5.jpg',
    location: 'Singapore',
  },
  {
    cardId: 11,
    photo: 'sing6.jpg',
    location: 'Singapore',
  },
  {
    cardId: 12,
    photo: 'saigon1.jpeg',
    location: 'Ho Chi Minh',
  },
  {
    cardId: 13,
    photo: 'saigon2.jpeg',
    location: 'Ho Chi Minh',
  },

  {
    cardId: 14,
    photo: 'saigon3.jpg',
    location: 'Ho Chi Minh',
  },
  {
    cardId: 15,
    photo: 'saigon4.jpg',
    location: 'Ho Chi Minh',
  },
  {
    cardId: 16,
    photo: 'saigon5.jpg',
    location: 'Ho Chi Minh',
  },
  {
    cardId: 17,
    photo: 'saigon6.jpg',
    location: 'Ho Chi Minh',
  },
];

export { firstSlideCards, secondSlideCards, thirdSlideCards, allCards };
