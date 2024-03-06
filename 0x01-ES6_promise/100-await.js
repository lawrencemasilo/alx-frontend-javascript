import { uploadPhoto, createUser } from '../utils';

export default async function asyncUploadUser() {
  try {
    const uploadPhotoPromise = uploadPhoto();
    const createUserPromise = createUser();

    const [uploadPhotoResponse, createUserResponse] = await Promise.all(
      [
        uploadPhotoPromise,
        createUserPromise,
      ],
    );

    return { photo: uploadPhotoResponse, user: createUserResponse };
  } catch (error) {
    console.error(error);
    return { photo: null, user: null };
  }
}
