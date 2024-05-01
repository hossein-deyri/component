import userIcon from '@/public/img/statics/userIcon.svg';
import plusIcon from '@/public/img/statics/plusIcon.svg';
import ticketIcon from '@/public/img/statics/ticketIcon.svg';
import settingIcon from '@/public/img/statics/settingIcon.svg';
import paperIcon from '@/public/img/statics/paperIcon.svg';
import * as Yup from 'yup';

export const category = [
  { label: 'مجموعه', value: 'SERIES' },
  { label: 'فصل', value: 'SEASON' },
  { label: 'قسمت', value: 'EPISODE' },
  { label: 'فیلم', value: 'MOVIE' },
  { label: 'نوبینو', value: 'OTHER' }
];

export const ages = {
  OVER2YEARS: 2,
  OVER3YEARS: 3,
  OVER10YEARS: 10,
  OVER15YEARS: 15,
  OVER18YEARS: 18
};

export const profileNav = [
  {
    orderID: '1',
    name: 'اطلاعات کاربری',
    icon: userIcon
  },
  {
    orderID: '2',
    name: 'لیست علاقمندی‌ها',
    icon: plusIcon
  },
  {
    orderID: '3',
    name: 'خرید اشتراک',
    icon: ticketIcon
  },
  {
    orderID: '4',
    name: 'تنظیمات',
    icon: settingIcon
  },
  {
    orderID: '5',
    name: 'مدیریت حساب‌ها',
    icon: paperIcon
  }
];

export const infoBox = [
  {
    orderID: '1',
    modalTitle: ' ویرایش نام کاربری ',
    name: 'نام کاربری',
    info: 'لطفا نام کاربری خود را وارد نمایید',
    form: [
      {
        initialValues: {
          userName: ''
        },
        validation: Yup.object({
          userName: Yup.string()
            .min(2, 'تعداد حروف وارد شده مجاز نمیباشد')
            .required('لطفا نام کاربری را وارد کنید')
        }),
        inputs: [
          {
            name: 'userName',
            type: 'text',
            placeHolder: 'نام کاربری',
            autoFocus: true
          }
        ]
      }
    ]
  },
  {
    orderID: '2',
    modalTitle: 'ویرایش نام و نام خانوادگی',
    name: 'نام و نام خانوادگی',
    info: 'لطفا نام و نام خانوادگی خود را وارد نمایید',
    form: [
      {
        initialValues: {
          firstName: '',
          lastName: ''
        },
        validation: Yup.object({
          firstName: Yup.string()
            .min(2, 'تعداد حروف وارد شده مجاز نمیباشد')
            .required('لطفا نام خود را وارد نمایید')
            .matches(
              /^[\u0600-\u06FF\s]+$/,
              'لطفا نام خود را فارسی وارد نمایید'
            ),
          lastName: Yup.string()
            .min(2, 'تعداد حروف وارد شده مجاز نمیباشد')
            .required('لطفا نام خانوادگی خود را وارد نمایید')
            .matches(
              /^[\u0600-\u06FF\s]+$/,
              'لطفا نام خانوادگی خود را فارسی وارد نمایید'
            )
        }),
        inputs: [
          {
            name: 'firstName',
            type: 'text',
            placeHolder: 'نام (فارسی)',
            autoFocus: true
          },
          {
            name: 'lastName',
            type: 'text',
            placeHolder: 'نام خانوادگی (فارسی)'
          }
        ]
      }
    ]
  },
  {
    orderID: '3',
    modalTitle: 'ویرایش شماره تلفن همراه',
    name: 'شماره تلفن همراه',
    info: 'لطفا شماره تلفن همراه خود را وارد نمایید',

    form: [
      {
        initialValues: {
          phoneNumber: ''
        },
        validation: Yup.object({
          phoneNumber: Yup.string()
            .matches(
              /^(\+98|0098|98|0)?9\d{9}$/g,
              'فرمت شماره موبایل صحیح نمی باشد'
            )
            .required('لطفا شماره تلفن همراه خود را وارد نمایید')
        }),
        inputs: [
          {
            name: 'phoneNumber',
            type: 'text',
            placeHolder: 'شماره تلفن همراه',
            autoFocus: true
          }
        ]
      }
    ]
  },
  {
    orderID: '4',
    modalTitle: 'ویرایش پست الکترونیکی',
    name: 'پست الکترونیکی',
    info: 'لطفا پست الکترونیکی خود را وارد نمایید',
    form: [
      {
        initialValues: {
          email: ''
        },
        validation: Yup.object({
          email: Yup.string()
            .email('فرمت ایمیل وارد شده صحیح نمیباشد')
            .required('لطفا ایمیل خود را وارد نمایید')
        }),
        inputs: [
          {
            name: 'email',
            type: 'email',
            placeHolder: 'پست الکترونیک',
            autoFocus: true
          }
        ]
      }
    ]
  },
  {
    orderID: '5',
    modalTitle: 'ویرایش تاریخ تولد',
    name: 'تاریخ تولد',
    info: 'لطفا تاریخ تولد خود را وارد نمایید',
    form: [
      {
        initialValues: {},
        inputs: [
          {
            name: 'datePicker'
          }
        ]
      }
    ]
  },
  {
    orderID: '6',
    modalTitle: 'ویرایش رمز عبور',
    name: 'رمز عبور',
    info: 'رمز عبور حداقل باید شامل ۶ کارکتر باشد',
    form: [
      {
        initialValues: {
          oldPass: '',
          newPass: '',
          confirmNewPass: ''
        },
        validation: Yup.object({
          newPass: Yup.string()
            .min(6, 'رمز عبور کمتر از 6 حرف میباشد')
            .required('لطفا رمز عبور جدید را وارد نمایید'),
          confirmNewPass: Yup.string()
            .oneOf([Yup.ref('newPass'), null], 'رمز عبور یکسان وارد کنید')
            .required('لطفا تکرار رمز عبور جدید را وارد نمایید')
        }),
        inputs: [
          {
            name: 'oldPass',
            type: 'password',
            placeHolder: 'رمز عبور فعلی',
            autoFocus: true,
            eye: true
          },
          {
            name: 'newPass',
            type: 'password',
            placeHolder: 'رمز عبور جدید',
            eye: true
          },
          {
            name: 'confirmNewPass',
            type: 'password',
            placeHolder: 'تکرار رمز عبور جدید',
            eye: true
          }
        ]
      }
    ]
  }
];

export const navBar = [
  { orderID: 1, name: 'خانه' },
  { orderID: 2, name: 'سریال' },
  { orderID: 3, name: 'فیلم' },
  { orderID: 4, name: 'کودکان' },
  { orderID: 5, name: 'آموزشی' },
  { orderID: 6, name: 'دسته‌بندی محتوایی' },
  { orderID: 7, name: 'شبکه ‌ها' },
  { orderID: 8, name: 'پخش زنده' }
];
export const API_URL = 'www.google.com';
