import jwt from 'jsonwebtoken';
export const verifyJwt = (token: string, SECRET: string) => {
  try {
    if (!SECRET) {
      throw new Error('please provide JWT SECRET KEY');
    }

    return jwt.verify(token, SECRET);
  } catch (error) {
    console.error('Error verifying token:', error);
    return null;
  }
};
