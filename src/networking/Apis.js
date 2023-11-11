export class Apis {
  static BASE_PATH = 'https://fdstaging.com/taqwa/';
  static BASE_URL = `${this.BASE_PATH}api/v1/`;

  static GET_NEWS = `${this.BASE_PATH}`;
  static GET_MACKENZIE_VALLEY = `${this.BASE_URL}`;
  static GET_SCHLOARSHIPS = `${this.BASE_URL}`;
  static GET_CLMATE_CHANGE = `${this.BASE_URL}`;
  static GET_RECLAMATION_CENTER = `${this.BASE_URL}`;
  static GET_SAHTU_HERITAGE = `${this.BASE_URL}`;
  static GET_CALENDAR = `${this.BASE_URL}`;
  static GET_DIRECTORY = `${this.BASE_URL}getOrganizations`;
  static POST_HELP = `${this.BASE_URL}`;
  static GET_FAQS = `${this.BASE_URL}`;
}

export const Request_Type = {
  post: 'POST',
  get: 'GET',
};
