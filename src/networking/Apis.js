export class Apis {
  static BASE_PATH = 'https://fdhosting.ca/sahtu/';
  static BASE_URL = `${this.BASE_PATH}api/v1/`;

  static GET_MENU= `${this.BASE_URL}getMenu`;
  static GET_NEWS = `${this.BASE_URL}getBreakingNews`;
  static GET_MACKENZIE_VALLEY = `${this.BASE_URL}getCategories`;
  static GET_SCHLOARSHIPS = `${this.BASE_URL}getScholarships`;
  static GET_CLMATE_CHANGE = `${this.BASE_URL}getClimateChange`;
  static GET_RECLAMATION_CENTER = `${this.BASE_URL}getReclamationCentre`;
  static GET_SAHTU_HERITAGE = `${this.BASE_URL}getSahtuHeritage`;
  static GET_CALENDAR = `${this.BASE_URL}getCalendar`;
  static GET_DIRECTORY = `${this.BASE_URL}getDirectories`;
  static POST_HELP = `${this.BASE_URL}addContactUs`;
  static GET_FAQS = `${this.BASE_URL}getFAQs`;
  static GET_GREAT_BEAR = `${this.BASE_URL}getMackenzieValley`;
  static GET_NEWS_DETAIL=`${this.BASE_URL}getBreakingNewDetail`;
  static NOTIFICATION=`${this.BASE_URL}getNotifications`;
  static STORE_FIREBASE_ID=`${this.BASE_URL}storeFirebaseIds`;
  static GET_SETTINGS=`${this.BASE_URL}getSettings`;
}

export const Request_Type = {
  post: 'POST',
  get: 'GET',
};
