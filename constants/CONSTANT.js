export const mobileRegExp = new RegExp('^(\\+98|0)?9\\d{9}$');

export const categories = {
  SERIES: 'مجموعه',
  SEASON: 'فصل',
  EPISODE: 'قسمت',
  MOVIE: 'فیلم',
  OTHER: 'سایر'
};

export const authModalType = {
  LOGIN: 'login',
  SIGN_UP: 'signUp',
  FORGOT_PASSWORD: 'forgotPassword',
  MEMBER_LIST: 'memberList',
  CHILD_MEMBER: 'childMember',
  EDIT_AVATAR: 'editAvatar'
};

export const authSteps = {
  NUMBER: 0,
  VALIDATE: 1,
  GET_TOKEN: 2
};

// Group Enum Int Id
export const GROUP_TYPE_ENUM_INT = {
  LIVE: { id: 0, label: 'LIVE' },
  MAIN: { id: 1, label: 'MAIN' }
};

export const QUALITY_LEVEL = {
  3840: '4K',
  2560: 'QHD',
  1920: '1080p',
  1280: '720p',
  854: '480p',
  640: '360p',
  426: '240p'
};

export const PAYMENT_STATUS_ENUM = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export const AGE_RANGE = {
  AGE_3_TO_10: '3 تا 10 سال',
  AGE_10_TO_15: '10 تا 15 سال',
  AGE_15_TO_18: '15 تا 18 سال',
  AGE_18_ABOVE: '18 سال به بالا'
};

const toRatio = (horizontal = 1, vertical = 1) => ({
  HORIZONTAL: horizontal,
  VERTICAL: vertical
});
export const IMAGES_RATIO = {
  /** The slider in the landing page */
  SLIDER: {
    /** 1920x960 */
    SITE: toRatio(2, 1),
    /** 960x1152 */
    MOBILE: toRatio(5, 6)
  },

  /** Movie and serie background banner */
  BANNER: {
    /** 1920x640 */
    SITE: toRatio(3, 1),
    /** 960x1152 */
    MOBILE: toRatio(5, 6)
  },

  /**
   * - Movie and serie portrait poster cover
   * - 500x750
   */
  POSTER: toRatio(2, 3),

  /** The single serie preview box in the landing page */
  LANDING_SERIES_BANNER: {
    /** 1920x640 */
    SITE: toRatio(3, 1)
  },

  /** Landing's long banners in the middle of the page */
  LANDING_SPECIAL_BANNER: {
    /** 1920x384 */
    SITE: toRatio(5, 1),
    /** 576x324 */
    MOBILE: toRatio(16, 9)
  },

  /**
   * - The Category Banner in Category Page
   * - 314×176
   */
  CATEGORY_BANNER: toRatio(16, 9),

  /**
   * - Episode single trailer preview image
   * - 800x480
   */
  EPISODE_BANNER: toRatio(5, 3),

  /** 360x360 */
  ACTOR: toRatio(1, 1)
};
