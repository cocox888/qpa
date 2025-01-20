// Import Prisma Client
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Define the main function that will handle database operations
async function main() {
    // Create a new user in the database using Prisma Client

    const password = "!Mountain123$Starfish^";
    const saltRounds = 10;  // Adjust the cost (work factor) as needed
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // const user1 = await prisma.user.create({
    //     data: {
    //         email: 'johnDoe@gmail.com',
    //         first_name: 'velarde',
    //         last_name: 'alyssa',
    //         full_name: 'john hhh',
    //         password: hashedPassword, // Note: In a real application, ensure passwords are hashed!
    //         phone: '00123123',
    //         position: 'Lead Man',
    //         role: 'client',
    //         dob: '2023-12-31T23:59:59.000Z',
    //         address: 'usa',
    //         city: 'new york',
    //         state: 'los',
    //         country: 'usa',
    //         zip_code: '0090',
    //         status: 'online',

    //     },
    // });

    const client1 = await prisma.client.create({
        data: {
            full_name: 'Jennifer Thompson',
            password: hashedPassword, // Note: In a real application, ensure passwords are hashed!
            personal_address:"new york 1092",
            position:"cfo",
            email: 'Jenifier@gmail.com',
            phone:'01231-123',
            timezone:'UTC',
            digital_sign:'vel',
            sign_date:'2023-12-31T23:59:59.000Z'
        },
    });

    // const project = await prisma.project.create({
    //     data: {
    //         project_name: "projectName1",
    //         clientId:1,
    //         package_type: "va",
    //         monthly_hours: 32,
    //         rate: 22,
    //         start_date: "123",
    //         rollover: false,
    //         platforms: ["face"],
    //         duration: "m3",
    //         package_level: "basic",
    //         services: ["service"],
    //         project_type: "website",
    //         technology: ["tech"],
    //         additional_setting: ["additional"],
    //         portal_access: ["portals"],
    //     },
    // });

    // Output the email of the newly created user
    console.log(`Created user: ${user1.email}`);
}

// Execute the main function and handle disconnection and errors
main()
    .then(() => prisma.$disconnect()) // Disconnect from the database on successful completion
    .catch(async (e) => {
        console.error(e); // Log any errors
        await prisma.$disconnect(); // Ensure disconnection even if an error occurs
        process.exit(1); // Exit the process with an error code
    });