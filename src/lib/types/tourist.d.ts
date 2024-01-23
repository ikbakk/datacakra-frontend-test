export type Tourist = {
  $id: string;
  createdat: string;
  id: string;
  tourist_email: string;
  tourist_profilepicture: string;
  tourist_location: string;
  tourist_name: string;
};

export type TouristResponse = {
  page: string;
  per_page: number;
  totalrecord: number;
  total_pages: number;
  data: Tourist[];
};
