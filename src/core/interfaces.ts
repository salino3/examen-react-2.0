export interface PictureInfo {
  id: string;
  picUrl: string;
  title: string;
  selected: boolean;
}

export interface MyState {
  pets: PictureInfo[];
  setPets: React.Dispatch<React.SetStateAction<PictureInfo[]>>;
  CheckboxChange: (id: string) => void;
}

