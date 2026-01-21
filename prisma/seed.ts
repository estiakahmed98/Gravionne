import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const email = "admin@example.com";
  const password = "admin123";

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    console.log("✅ Admin already exists");
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      email,
      name: "Admin Gravionne",
      role: "ADMIN",
      passwordHash,
      emailVerified: new Date(),
    },
  });

  console.log("✅ Admin created");
  console.log("📧 Email:", email);
  console.log("🔑 Password:", password);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
