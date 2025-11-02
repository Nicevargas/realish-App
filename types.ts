
export enum Screen {
  Creation = 'creation',
  Album = 'album',
  Plans = 'plans',
  Profile = 'profile',
}

export type NavigateFunc = (screen: Screen) => void;

export interface Creation {
  id: number;
  type: 'image' | 'video';
  src: string;
  alt: string;
}
