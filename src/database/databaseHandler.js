import userStore from './users.json';
import reservationStore from './reservations.json';

export const logInUser = (username, password) => {
  const user = userStore[username];
  if (!user) return {};
  const isCorrect =
    username === userStore[username].username &&
    password === userStore[username].password;

  if (isCorrect) return userStore[username];
  else return {};
};

export const getReservations = (username) => {
  const reservationList = [];
  const storeEntries = Object.keys(reservationStore);

  storeEntries.forEach((key) => {
    if (username === reservationStore[key].username)
      reservationList.push(reservationStore[key]);
  });
  return reservationList;
};
