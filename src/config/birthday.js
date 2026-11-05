// Personalise the whole site here.
// Uploaded images from src/Images are imported directly below.
import imgPinkSaree from '@/Images/WhatsApp Image 2026-11-05 at 8.21.27 PM (1).jpeg';
import imgPalace from '@/Images/WhatsApp Image 2026-11-05 at 8.21.27 PM.jpeg';
import imgFestiveWhite from '@/Images/WhatsApp Image 2026-11-05 at 8.21.26 PM.jpeg';
import imgBeach from '@/Images/WhatsApp Image 2026-11-05 at 8.21.30 PM.jpeg';
import imgSelfie from '@/Images/WhatsApp Image 2026-11-05 at 8.21.26 PM (2).jpeg';
import imgMonochrome from '@/Images/WhatsApp Image 2026-11-05 at 8.21.26 PM (1).jpeg';

export const birthday = {
  name: 'Madam Ji',
  nickname: 'Madam Jiii 🥺💗',
  welcomeGreeting: 'Hiii Madam Jiii! 🥺💗',
  welcomeQuestion: 'Do you want your special gift? 🎁',

  noPleadings: [
    {
      text: 'Pleaseee lelo gift 🥺👉👈',
      subtext: 'Aise mat karo na, bohot pyaar se banaya hai!',
      emoji: '😿',
    },
    {
      text: 'Pleaseee lelo Madam Jiiii! 🥹💗',
      subtext: 'Pakka bohot pasand aayega aapko, promise!',
      emoji: '🥺',
    },
    {
      text: 'Aise na nakhre dikhao Madam Ji! 🙈✨',
      subtext: 'Bas ek baar YES daba ke toh dekho!',
      emoji: '🐱',
    },
    {
      text: 'Nahi bologe toh main sach me ro dunga! 😭💔',
      subtext: 'Ek chotu sa YES bol do na please?',
      emoji: '😿',
    },
    {
      text: 'Dekho kitna pyara surprise wait kar raha hai! 🎁🌸',
      subtext: 'Chalo ab maan bhi jao! 💖',
      emoji: '🥹',
    },
  ],

  // 5 COMPLETELY REDESIGNED MYSTERY GIFTS (Changes-3.MD)
  // Distinct concepts, visual identities, and heartfelt messages
  gifts: [
    {
      id: 'gift-safe-place',
      number: 1,
      title: 'My Safe Place',
      concept: 'comfort & understanding',
      quote: 'With you, I can just be myself without hiding anything.',
      message:
        'Thank you for being my safe space where every worry fades away. Whenever I talk to you, everything feels calm, gentle, and peaceful. You understand me in ways nobody else does, and having you in my life is the greatest comfort.',
      closing: 'Your peaceful sanctuary',
      emoji: '🏡',
      accent: 'bear',
      pattern: 'dots',
      palette: {
        body: '#ffd6e3',
        lid: '#fbc4d5',
        ribbon: '#e0526f',
        knot: '#d43f63',
        pattern: '#ffffff',
      },
    },
    {
      id: 'gift-warm-hugs',
      number: 2,
      title: 'Warm Hugs',
      concept: 'cute virtual hug until we meet',
      quote: 'Sending you the biggest, warmest virtual hug across the miles! 🧸🫂',
      message:
        "We haven't met in person yet, but my heart is right there with you. Here is an endless supply of warm, cuddly virtual hugs for every time you feel tired, happy, or just need a little extra love. Consider yourself tightly squeezed!",
      closing: 'A million warm hugs for you',
      emoji: '🫂',
      accent: 'kitten',
      pattern: 'stripes',
      palette: {
        body: '#cfe9f7',
        lid: '#bfe3f5',
        ribbon: '#f08cab',
        knot: '#d9557a',
        pattern: '#ffffff',
      },
    },
    {
      id: 'gift-quiet-magic',
      number: 3,
      title: 'Quiet Magic',
      concept: 'everyday calls and chats',
      quote: 'The happiest part of my routine is hearing your voice.',
      message:
        "Those late-night calls, the funny random texts, and the quiet moments between our laughs—that's where true magic lives. You turn the most ordinary day into pure joy, and I wouldn't trade our conversations for anything in the world.",
      closing: 'Magic in every little conversation',
      emoji: '✨',
      accent: 'sparkle',
      pattern: 'checks',
      palette: {
        body: '#fff0c2',
        lid: '#ffe7a3',
        ribbon: '#f08cab',
        knot: '#e0526f',
        pattern: '#ffffff',
      },
    },
    {
      id: 'gift-forever-yours',
      number: 4,
      title: 'Forever Yours',
      concept: 'more conversations and memories',
      quote: "Here's to endless conversations, shared dreams, and forever memories.",
      message:
        'I cherish every story you share, every laugh we exchange, and every dream we talk about. I wish for countless more calls, deeper conversations, and a lifetime of happiness beside you, step by step.',
      closing: 'Wishing for a lifetime of memories',
      emoji: '🌷',
      accent: 'butterfly',
      pattern: 'stripes',
      palette: {
        body: '#d6f2e3',
        lid: '#b9e6cc',
        ribbon: '#f7b6c9',
        knot: '#e0526f',
        pattern: '#ffffff',
      },
    },
    {
      id: 'gift-precious-heart',
      number: 5,
      title: 'Precious Heart',
      concept: 'special birthday surprise',
      quote: 'You are truly one of a kind, Madam Ji.',
      message:
        'You have the most pure, genuine, and precious heart I have ever known. Never forget how deeply loved, valued, and cherished you are today and on all the days to come. Happy Birthday, Madam Ji! 🎉💖',
      closing: 'Celebrating your beautiful heart',
      emoji: '💖',
      accent: 'heart',
      pattern: 'dots',
      palette: {
        body: '#f7b6c9',
        lid: '#f08cab',
        ribbon: '#d43f63',
        knot: '#b92f52',
        pattern: '#fde3ea',
      },
    },
  ],

  // 5 SECRET LETTERS (Changes-2.MD + Updated Letter #4 from Changes-3.MD)
  letters: [
    {
      id: 'letter-1',
      number: 1,
      title: 'Little Magic',
      quote: 'You make ordinary moments feel magical.',
      message:
        'Even on the heaviest days, just having you around makes everything a little lighter and softer. You bring a special kind of magic into my world.',
      closing: 'A sweet reminder for you',
      accent: 'sparkle',
    },
    {
      id: 'letter-2',
      number: 2,
      title: 'Favourite Smile',
      quote: 'Your smile is my absolute favorite sight.',
      message:
        "No matter what you've gone through, seeing you happy means more to me than anything. I'll always do whatever it takes to keep that smile alive.",
      closing: 'Always keeping you happy',
      accent: 'flower',
    },
    {
      id: 'letter-3',
      number: 3,
      title: 'Endless Happiness',
      quote: 'You deserve a lifetime of pure peace and love.',
      message:
        "Life hasn't always been easy, but you carry so much grace. I hope your heart is always full of warmth, comfort, and soft moments.",
      closing: 'Wishing you endless joy',
      accent: 'heart',
    },
    {
      // LETTER #4 EXACT UPDATE FROM Changes-3.MD
      id: 'letter-4',
      number: 4,
      title: 'Endless Moments',
      quote: 'Endless calls, endless chats, and moments I never want to end. 💗',
      message:
        "We haven't met in person yet, but somehow you've become such a special part of my everyday life. From our endless calls to those little chats, every conversation with you makes me smile. I don't know how time flies when we're talking, but I know one thing — I never get tired of talking to you. I hope we get to create many more beautiful memories together. ❤️",
      closing: 'My favourite person to talk to, always 💌',
      accent: 'butterfly',
    },
    {
      id: 'letter-5',
      number: 5,
      title: 'Sweetest Surprise',
      quote: 'You are the sweetest part of my entire life.',
      message:
        'I never expected to find someone as gentle, kind, and precious as you. You hold a piece of my heart that belongs only to you, forever.',
      closing: 'With all my love',
      accent: 'kitten',
    },
  ],

  // Real photos of Madam Ji from src/Images
  photos: [
    {
      id: 1,
      src: imgPinkSaree,
      alt: 'Madam Ji looking radiant in a pink saree with fairy lights in the garden',
      caption: 'Radiant in pink & fairy lights ✨',
      objectPosition: 'center 20%',
    },
    {
      id: 2,
      src: imgPalace,
      alt: 'Madam Ji in mint green outfit inside the grand palace hall',
      caption: 'Royalty in every single step 🏰🌸',
      objectPosition: 'center 35%',
    },
    {
      id: 3,
      src: imgFestiveWhite,
      alt: 'Madam Ji in white and gold ethnic dress with a gorgeous smile',
      caption: 'That priceless, luminous smile 💖',
      objectPosition: 'center 20%',
    },
    {
      id: 4,
      src: imgBeach,
      alt: 'Madam Ji enjoying the ocean waves at the beach',
      caption: 'Sunshine, ocean breezes & free spirit 🌊☀️',
      objectPosition: 'center 20%',
    },
    {
      id: 5,
      src: imgSelfie,
      alt: 'Sweet selfie of Madam Ji with glasses and traditional embroidery',
      caption: 'The sweetest selfie ever taken 🌸',
      objectPosition: 'center 25%',
    },
    {
      id: 6,
      src: imgMonochrome,
      alt: 'Artistic black and white portrait of Madam Ji smiling with grace',
      caption: 'Timeless elegance & grace 🎞️✨',
      objectPosition: 'center 20%',
    },
  ],

  // Background audio settings
  music: {
    src: '/music.mp3',
    title: 'Romantic Birthday Melody',
  },

  finalTitle: 'Happy Birthday, K! 🎉🎂',
  finalSubtitle: 'Wishing you a day as wonderfully special as you are ✨',
  finalMessage: [
    'I honestly don’t know how to fully put my feelings into words today, but you are the most precious and irreplaceable person in my life. 💖',
    'From wo poore din ki non-stop chats to wo lambi lambi calls par baatein, every single memory with you is something I treasure deeply. 📞💬',
    'I know I’ve made my share of mistakes along the way, and I am so deeply sorry for all of them. Thank you for your patience and for being my constant through it all. 🥺❤️',
    'May this year bring you endless peace, warm smiles, strength, and all the happiness your heart can hold. You deserve every beautiful thing in this world. 🌸✨',
  ],
  signature: 'With all my love and warmest wishes, always 💕',
};
