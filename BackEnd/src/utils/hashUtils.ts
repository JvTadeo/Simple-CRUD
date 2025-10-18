import bcrypt from 'bcrypt';

async function generateHash(password: string) {
    const saltRoundes = parseInt(process.env.SALT_ROUNDS as string);
    return await bcrypt.hash(password, saltRoundes);
}

async function compareHash(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
}

export const HashUtils = { generateHash, compareHash };