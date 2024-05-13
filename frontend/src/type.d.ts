export interface IArtist {
    _id: string,
    name: string,
    image: string | null,
    info: string,
    isPublished: boolean
}

export interface ITrack {
  _id: string,
  name: string,
  album: IAlbum,
  duration: string,
  number: number,
  artist: string,
  date: string,
  isPublished: boolean
}

export interface TrackHistoryMutation {
  track: string;
}

export interface ITrackHistory {
  _id: string;
  trackName: string;
  artist: {
    name: string;
    _id: string;
  };
  date: string;
}

export interface RegisterMutation {
  email: string,
  password: string,
}

export interface ValidationError {
  errors: {
    [key: string]: {
      name: string,
      message: string,
    }
  },
  message: string,
  name: string,
  _message: string,
}

export interface RegisterResponse {
  message: string,
  user: IUser,
}

export interface LoginMutation {
  email: string,
  password: string,
}

export class GlobalError {
  error: string
}
export interface AlbumMutation {
  name: string;
  date: string;
  artist: string;
  image: File | null;
}

export interface IAlbum {
  _id: string,
  name: string,
  artist: IArtist,
  date: number,
  image: string | null,
  isPublished: boolean
}

export interface ArtistMutation {
  name: string;
  info: string;
  image: File | null;
}

export interface TrackMutation {
  name: string;
  duration: string;
  album: string;
  number: number;
}

export interface IUser {
  _id: string;
  email: string;
  password: string;
  token: string;
  role: string;
  displayName: string;
  image: string | null;
  googleID: string;
}