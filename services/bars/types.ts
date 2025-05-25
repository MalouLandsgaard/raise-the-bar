export interface Location {
  longitude: number;
  latitude: number;
}

export interface Bar {
  id: string;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  location: Location;
}