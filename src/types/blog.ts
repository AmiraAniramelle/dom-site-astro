export type BlogCategory =
  | 'science'
  | 'system-thinking'
  | 'spiritual-development'
  | 'life-meanings'
  | 'parents'
  | 'children'
  | 'male-female'
  | 'money-business'
  | 'anxiety-depression';

export type BlogContentType = 'Статья' | 'Книга';

export interface BlogCTA {
  label: string;
  action: string;
}
