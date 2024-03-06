import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [
    signUpUser(firstName, lastName).then((value) => ({ status: 'fulfilled', value })),
    uploadPhoto(fileName).then((value) => ({ status: 'fulfilled', value })),
  ];

  try {
    return await Promise.all(promises);
  } catch (error) {
    return [{ status: 'rejected', value: error }];
  }
}
