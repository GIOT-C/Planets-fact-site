interface images {
  planet: string;
  internal: string;
  geology: string;
}

interface geology {
  content: string;
  source: string;
}

interface structure {
  content: string;
  source: string;
}

interface overview {
  content: string;
  source: string;
}

export interface DataInterface {
  name: string;
  overview: overview;
  structure: structure;
  geology: geology;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: images;
}
