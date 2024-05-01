export interface IProducts {
  id: number;
  createdAt: string;
  updatedAt: string;
  category: string;
  name: string;
  translatedName: string;
  shortDescription: string;
  longDescription: string;
  productionYear: number;
  imdbCode: string;
  status: string;
  ages: string;
  owner: {
    id: number;
    createdAt: string;
    updatedAt: string;
    name: string;
    translatedName: string;
    slug: string;
    description: string;
  };
  directors: [
    {
      id: number;
      createdAt: string;
      updatedAt: string;
      name: string;
      translatedName: string;
      description: string;
      gender: string;
    }
  ];
  actors: [
    {
      id: number;
      createdAt: string;
      updatedAt: string;
      name: string;
      translatedName: string;
      description: string;
      gender: string;
    }
  ];
  images: [
    {
      id: number;
      createdAt: string;
      updatedAt: string;
      imageType: string;
      src: string;
    }
  ];
  countries: [
    {
      id: number;
      createdAt: string;
      updatedAt: string;
      code: string;
      name: string;
    }
  ];
  tags: [
    {
      id: string;
      name: string;
      translatedName: string;
      description: string;
      fixed: true;
      invisible: true;
    }
  ];
  vote: string;
  published: boolean;
}
