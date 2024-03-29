import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    console.log(`${photo.body.firstName} ${user.body.firstName} ${user.body.lastName}`);
  } catch (error) {
    console.error('Signup system offline');
  }
}
