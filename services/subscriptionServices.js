import { endpoint } from 'endpoint';
import { toast } from 'react-toastify';
import { http } from 'services/httpService';

export const getPlans = async () => {
  try {
    const { data, status } = await http.get(endpoint.PAYMENT.PLANS);

    if (status !== 200)
      throw new Error('There was an error in fetching the plans data.');

    return Promise.resolve(data.data);
  } catch (err) {
    return Promise.reject(err.message);
  }
};

export const getSinglePlan = async (id) => {
  try {
    const { data, status } = await http.get(
      endpoint.PAYMENT.READ_PLAN.replace(':id', id)
    );

    if (status !== 200)
      throw new Error('There was an error in fetching the plans data.');

    return Promise.resolve(data.data);
  } catch (err) {
    return Promise.reject(err.message);
  }
};

export const postSubscriptionData = async (payload) => {
  try {
    const { data, status } = await http.post(
      endpoint.PAYMENT.SUBSCRIPTIONS['/'],
      payload
    );

    if (status !== 200)
      throw new Error('There was an error in fetching the subscription data.');

    return Promise.resolve(data.data);
  } catch (err) {
    return Promise.reject(err.message);
  }
};

export const getBankCallback = async (payload) => {
  try {
    const { data, status } = await http.get(
      endpoint.PAYMENT.SUBSCRIPTIONS.BANKS.CALLBACK,
      { params: payload }
    );

    if (status !== 200)
      throw new Error('There was a problem in fetching bank callback');

    return Promise.resolve(data.data);
  } catch (err) {
    return Promise.reject(err.message);
  }
};

export const getSubInfo = async () => {
  const { data } = await http.get(endpoint.PAYMENT.SUBSCRIPTIONS['/'], {
    params: { current: true }
  });
  return data;
};

export const getStatusPayment = async () => {
  const { data } = await http.get(endpoint.PAYMENT.JUST_SUBSCRIPTIONS);
  return data;
};

export const getDiscountReadByCode = async (id) => {
  try {
    const { data, status } = await http.get(
      `${endpoint.PAYMENT.DISCOUNT}${id}?fetch=code`
    );

    if (status !== 200)
      throw new Error('There was an error in fetching the plans data.');

    toast.success('کد تخفیف اعمال شد.');
    return Promise.resolve(data.data);
  } catch (err) {
    toast.error('کد تخفیف وارد شده صحیح نمی باشد یا قبلا استفاده شده است.');
    return Promise.reject(err.message);
  }
};
