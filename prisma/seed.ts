// app/prisma/seed.ts
import { faker } from "@faker-js/faker";
import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcrypt";
import { ObjectId } from "bson";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({}); // use with caution.

  const amountOfUsers = 20;

  const users: User[] = [];

  for (let i = 0; i < amountOfUsers; i++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const password = faker.internet.password();

    const user: User = {
      id: new ObjectId().toString(),
      image: faker.image.imageUrl(),
      name: firstName + " " + lastName,
      username: faker.internet.userName(),
      bio: faker.lorem.paragraph(),
      email: faker.internet.email(firstName, lastName),
      coverImage: `https://doodleipsum.com/700x394/abstract?bg=${faker.color
        .rgb({ format: "hex", casing: "lower" })
        .replace("#", "")}&n=${i}`,
      profileImage: `https://doodleipsum.com/700x700/avatar?bg=${faker.color
        .rgb({ format: "hex", casing: "lower" })
        .replace("#", "")}&n=${i}`,
      hashedPassword: await bcrypt.hash(password, 10),
      hasNotification: faker.datatype.boolean(),
      emailVerified: faker.date.past(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
      followingIds: [],
    };

    users.push(user);
  }

  const addUsers = async () => await prisma.user.createMany({ data: users });

  addUsers();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
