export type User = {
  id: String;
  name: String;
  email: String;
  password: String;
  roles: UserRole[];
  venues: Venue[];
  listings: Listing[];
};

export enum UserRole {
  ADMIN = "ADMIN",
  EDITOR = "EDITOR",
  VENUE = "VENUE",
}

export enum ListingType {
  Screening = "Screening",
  Exhibition = "Exhibition",
}

export type Listing = {
  id: String;
  type: ListingType;
  title: String;
	country: String | null;
  year: String | null;
	format: String | null;
  runtime: String | null;
  language: String[];
  subs: String[];
  series: Series | null;
  seriesId: String | null;
  director: String[];
  artist: String[];
  cast: String[];
  venue: Venue | null;
  venueId: String | null;
  showtimes: Showtime[];
  listingUrl: String | null;
  createdBy: User | null;
  createdById: String;
  updatedAt: Date | null;
  createdAt: Date | null;
};

export type Series = {
  id: String;
  title: String;
  listings: Listing[] | null;
  seriesUrl: String | null;
  description: String | null;
};

export type Showtime = {
  id: String;
  date: Date;
  endDate: Date;
  time: Date;
  endTime: Date;
  listing: Listing | null;
  listingId: String;
  showtimeUrl: String | null;
};

export type Venue = {
  id: String;
  name: String;
  address: String | null;
  phone: String | null;
  hours: String | null;
  url: String | null;
  listings: Listing[] | null;
  listers: User[] | null;
};
