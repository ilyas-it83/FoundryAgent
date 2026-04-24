export type Category =
  | 'TRANSFER'
  | 'MATCH'
  | 'INTERVIEW'
  | 'INJURY'
  | 'ANALYSIS'
  | 'FAN_OPINION'
  | 'OTHER';

export interface News {
  id: number;
  title: string;
  content: string;
  category: Category;
  createdAt: string;
  updatedAt: string;
  imageUrl?: string | null;
}
