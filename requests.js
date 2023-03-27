import axios from "axios";

//`//calm-gold-angelfish-wig.cyclic.app`

export const getDailyToDos = () => {
  return axios
    .get(`https://calm-gold-angelfish-wig.cyclic.app/api/dailys`)
    .then((result) => {
      return result.data;
    });
};

export const deleteDailyToDo = (Id) => {
  return axios.delete(
    `https://calm-gold-angelfish-wig.cyclic.app/api/dailys/${Id}`
  );
};

export const postDailyToDo = (item, id) => {
  return axios.post(`https://calm-gold-angelfish-wig.cyclic.app/api/dailys`, {
    todo_id: id,
    todo_name: item,
  });
};

export const getWeeklyToDos = () => {
  return axios
    .get(`https://calm-gold-angelfish-wig.cyclic.app/api/weeklys`)
    .then((result) => {
      return result.data;
    });
};

export const deleteWeeklyToDo = (Id) => {
  return axios.delete(
    `https://calm-gold-angelfish-wig.cyclic.app/api/weeklys/${Id}`
  );
};

export const postWeeklyToDo = (item) => {
  return axios.post(`https://calm-gold-angelfish-wig.cyclic.app/api/dailys`, {
    todo_name: item,
  });
};

export const getMonthlyToDos = () => {
  return axios
    .get(`https://calm-gold-angelfish-wig.cyclic.app/api/monthlys`)
    .then((result) => {
      return result.data;
    });
};

export const deleteMonthlyToDo = (Id) => {
  return axios.delete(
    `https://calm-gold-angelfish-wig.cyclic.app/api/monthlys/${Id}`
  );
};

export const postMonthlyToDo = (item) => {
  return axios.post(`https://calm-gold-angelfish-wig.cyclic.app/api/dailys`, {
    todo_name: item,
  });
};
