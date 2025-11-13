import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
// import { prisma } from '@/lib/prisma';

async function up() {
  const demoUserId = 'eb48d991-393c-43a2-91b5-f08c901f158e';

  // Create sample products
  await prisma.product.createMany({
    data: Array.from({ length: 125 }).map((_, i) => ({
      userId: demoUserId,
      name: `Product ${i + 1}`,
      price: (Math.random() * 90 + 10).toFixed(2),
      quantity: Math.floor(Math.random() * 20),
      lowStockAt: 5,
      createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * (i * 5)),
    })),
  });
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
