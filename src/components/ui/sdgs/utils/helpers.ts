import { SdgsVariant } from './types';

export function sdgsVariant(variant?: SdgsVariant) {
  switch (variant) {
    case 'affordable and clean energy': {
      return {
        src: './assets/Image-6.svg',
        alt: 'affordable and clean energy',
        color: 'bg-guide-7',
      };
    }
    case 'clean water and sanitation': {
      return {
        src: './assets/Image-5.svg',
        alt: 'clean water and sanitation',
        color: 'bg-guide-6',
      };
    }
    case 'climate action': {
      return {
        src: './assets/Image-12.svg',
        alt: 'climate action',
        color: 'bg-guide-13',
      };
    }
    case 'decent work and economic growth': {
      return {
        src: './assets/Image-7.svg',
        alt: 'decent work and economic growth',
        color: 'bg-guide-8',
      };
    }
    case 'gender equality': {
      return {
        src: './assets/Image-4.svg',
        alt: 'gender equality',
        color: 'bg-guide-5',
      };
    }
    case 'good health and well-being': {
      return {
        src: './assets/Image-2.svg',
        alt: 'good health and well-being',
        color: 'bg-guide-3',
      };
    }
    case 'industry inovation infrastrucuture': {
      return {
        src: './assets/Image-8.svg',
        alt: 'industry inovation infrastrucuture',
        color: 'bg-guide-9',
      };
    }
    case 'life below water': {
      return {
        src: './assets/Image-13.svg',
        alt: 'life below water',
        color: 'bg-guide-14',
      };
    }
    case 'life on land': {
      return {
        src: './assets/Image-14.svg',
        alt: 'life on land',
        color: 'bg-guide-15',
      };
    }
    case 'no poverty': {
      return {
        src: './assets/Image.svg',
        alt: 'no poverty',
        color: 'bg-guide-1',
      };
    }
    case 'partnership for the goals': {
      return {
        src: './assets/Image-16.svg',
        alt: 'partnership for the goals',
        color: 'bg-guide-17',
      };
    }
    case 'peace justice and strong institutions': {
      return {
        src: './assets/Image-15.svg',
        alt: 'peace justice and strong institutions',
        color: 'bg-guide-16',
      };
    }
    case 'quality education': {
      return {
        src: './assets/Image-3.svg',
        alt: 'quality education',
        color: 'bg-guide-4',
      };
    }
    case 'reduced inequalities': {
      return {
        src: './assets/Image-9.svg',
        alt: 'reduced inequalities',
        color: 'bg-guide-10',
      };
    }
    case 'responsible consumption and production': {
      return {
        src: './assets/Image-11.svg',
        alt: 'responsible consumption and production',
        color: 'bg-guide-12',
      };
    }
    case 'sustainable cities and communities': {
      return {
        src: './assets/Image-10.svg',
        alt: 'sustainable cities and communities',
        color: 'bg-guide-11',
      };
    }
    case 'zero hunger': {
      return {
        src: './assets/Image-1.svg',
        alt: 'zero hunger',
        color: 'bg-guide-2',
      };
    }
    default: {
      return {
        src: '',
        alt: 'default',
        color: 'bg-brand-main-500',
      };
    }
  }
}
