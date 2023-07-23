import type { ListingType } from "./types";

export type FormListing = {
  type: ListingType;
  title: String;
	country: String | null;
  year: String | null;
	format: String | null;
  runtime: String | null;
  language: String[];
  subs: String[];
  seriesId: String | null;
  director: String[];
  artist: String[];
  cast: String[];
  venueId: String | null;
};