import db from '@/app/lib/db';

export async function FindAll(model) {
  return await db[model].findMany();
}

export async function FindById(model, id) {
  return await db[model].findUnique({ where: { id } });
}

export async function Create(model, data) {
  return await db[model].create({ data });
}

export async function Update(model, id, data) {
  return await db[model].update({ where: { id }, data });
}

export async function Delete(model, id) {
  return await db[model].delete({ where: { id } });
}

//Other methods:
export async function FindSpecificOptions(model, selectFields) {
  const queryOptions = {};

  if (selectFields) {
    queryOptions.select = selectFields;
  }

  return await db[model].findMany(queryOptions);
}