export type BlogCategory =
  | 'system-thinking'
  | 'parents'
  | 'children'
  | 'society'
  | 'male-female'
  | 'self-realization'
  | 'money-business'
  | 'anxiety-depression'
  | 'physical-mental-health';

export type BlogContentType = 'Статья' | 'Пост' | 'Практика' | 'Разбор' | 'Книга';

export interface BlogCTA {
  label: string;
  action: string;
}
