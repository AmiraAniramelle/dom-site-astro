/**
 * Данные welcome-попапа (лиды). Позже — из CMS / админки.
 */
export type PopupField = {
  name: string;
  placeholder: string;
  type: 'text' | 'email' | 'tel';
};

export const popupData = {
  enabled: true,
  triggerType: 'scroll' as const,
  scrollPercent: 60,
  eyebrow: 'ПОДАРОК ОТ DOM',
  title: 'Подарок для вашего первого шага',
  description:
    'Перед тем как продолжить навигацию, получите подарок от DOM: вводную практику и полезные материалы по системе.',
  subtitle: 'Оставьте имя и email, и мы отправим доступ, а также анонсы новых программ.',
  fields: [
    { name: 'name', placeholder: 'Ваше имя', type: 'text' },
    { name: 'email', placeholder: 'Email', type: 'email' },
  ] as PopupField[],
  submitText: 'ПОЛУЧИТЬ ПОДАРОК',
  disclaimer: 'Данные в безопасности. Можно отписаться в любой момент.',
  image: {
    src: '/dom-assets/anna-portrait.png',
    alt: 'Анна Камаллая Хефорс',
  },
} as const;
