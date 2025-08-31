const mongoose = require("mongoose");
const Profile = require("./models/profile");

// Load environment variables
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in .env");
  process.exit(1);
}

const seedData = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");

    // Clear old data
    await Profile.deleteMany();

    // Insert sample profiles
    const profiles = await Profile.insertMany([
      {
        name: "Prince Raj",
        email: "prince4339@nitnagaland.ac.in",
        education: "B.Tech, NIT Nagaland (2023 - 2027)",
        skills: [
          "Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript",
          "NodeJS", "Express JS", "React", "Tailwind CSS", "Bootstrap",
          "Git", "GitHub", "EJS", "Socket.io", "SQL (MySQL)", "NoSQL (MongoDB)",
        ],
        projects: [
          {
            title: "Iskcon Manipur",
            description:
              "Launched ISKCON Imphal’s first official website, attracting 2,000+ visitors within the first week and boosting community engagement. Developed admin dashboard with CRUD, role-based access, one-click secure image uploads (Multer + Cloudinary), redesigned front-end with EJS & Bootstrap, implemented RESTful APIs and modular MVC architecture.",
            link: "https://www.iskconmanipur.com/",
          },
          {
            title: "Ekarikthin",
            description:
              "Designed a responsive front-end interface using HTML, CSS, Bootstrap, and interactive features with JavaScript. Optimized frontend for accessibility & SEO, collaborated with stakeholders to ensure brand consistency and improved UX metrics.",
            link: "https://www.nitnagaland.ac.in/ekavi25/",
          },
        ],
        workExperience: [
          {
            jobTitle: "Web Developer Intern",
            company: "Besto Solutions",
            location: "Dimapur, Nagaland, IN / Mumbai, Maharashtra, IN",
            startDate: new Date("2023-08-01"),
            endDate: new Date("2027-05-31"),
            description:
              "Delivered 5+ client websites, boosted delivery efficiency, translated client requirements into functional websites, ensured 100% on-time project completion.",
          },
          {
            jobTitle: "Web Developer",
            company: "Coding Club, NIT Nagaland",
            location: "Dimapur, Nagaland, IN / Remote",
            startDate: new Date("2024-11-01"),
            endDate: null, // Present
            description:
              "Developed official website for Ekarikthin fest and Innovation & Incubation Centre. Implemented responsive design, enhanced accessibility, and maintained seamless user experience.",
          },
        ],
        links: {
          github: "https://github.com/princerxj",
          linkedin: "https://linkedin.com/in/princeraj",
          portfolio: "https://princerxj.me/",
        },
      },
    ]);

    console.log("Seed data inserted successfully!");
    console.log(profiles);
    process.exit();
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
};

seedData();
