import fs from 'fs/promises'

const readDb = async () => {
    const data = await fs.readFile('./db.json', 'utf-8');
    return JSON.parse(data);
};

const writeDb = async (data) => {
    await fs.writeFile('./db.json', JSON.stringify(data, null, 2));
};

export default { readDb, writeDb };
