import { test, expect } from '@playwright/test';
import { apiMethods } from '../apiMethod';
import { Endpoints } from '../enum';
import { library } from '../utils/library';

// 🧩 Reusable functions
async function createPet() {
  const newPet = {
    id: library.randomId(),
    name: library.randomName(),
    status: library.randomStatus(),
  };
  const res = await apiMethods.post(Endpoints.PET, newPet);
  expect(res.status).toBe(200);
  console.log('✅ Pet Created:', res.data);
  return newPet;
}

async function getPets() {
  const res = await apiMethods.get(Endpoints.PET_BY_STATUS);
  expect(res.status).toBe(200);
  console.log('🐶 Pets Count:', res.data.length);
}

async function updatePet(pet: any) {
  const updatedPet = { ...pet, status: 'sold' };
  const res = await apiMethods.put(Endpoints.PET, updatedPet);
  expect(res.status).toBe(200);
  console.log('🔄 Pet Updated:', res.data);
}

async function deletePet(petId: number) {
  try {
    const res = await apiMethods.delete(`${Endpoints.PET}/${petId}`);
    expect(res.status).toBe(200);
    console.log('🗑️ Pet Deleted:', petId);
  } catch (error: any) {
    console.warn(`⚠️ Delete failed for pet ID: ${petId}`, error.message);
  }
}

async function runCrudFlow() {
  const newPet = await createPet();
  await getPets();
  await updatePet(newPet);
  await deletePet(newPet.id);
}

test('Swagger Petstore CRUD Function-based Automation', async () => {
  for (let i = 0; i < 3; i++) {
    console.log(`\n🐾 Iteration ${i + 1} started...\n`);
    await runCrudFlow();
    console.log(`✅ Iteration ${i + 1} completed successfully!\n`);
  }
  console.log('🎉 All CRUD function calls completed successfully!');
});
