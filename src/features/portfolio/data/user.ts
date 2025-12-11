import type { User } from "@/features/portfolio/types/user";

export const USER: User = {
  firstName: "Dhwanan",
  lastName: "Bharadva",
  displayName: "Dhwanan Bharadva",
  username: "dkb73",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code.",
  flipSentences: [
    "Creating with code.",
    "Software Engineer",
    "Open Source Contributor",
  ],
  address: "Surat, Gujarat, India",
  phoneNumber: "KzkxIDk2NjQ2NzQyNTk=", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "ZGh3YW5hbmJjc2VAZ21haWwuY29t", // base64 encoded
  website: "",
  jobTitle: "Software Engineer",
  jobs: [
    {
      title: "Upcoming SDE intern",
      company: "Fintech Global Center",
      website: "https://simplamo.com?ref=IN-926722",
    },
    {
      title: "Ex- SDE intern",
      company: "Madhusudan Grp",
      website: "https://madhusudangroup.com/",
    },
  ],
  about: `
- **Software Engineer** with hands on experience in building scalable and reliable application.
- Skilled in **Node.js**, **React**, **JavaScript**, **Next**, **Kafka**, **AWS** and passionate in **System Design**.
- Passionate about exploring new technologies and turning ideas into reality through consistent efforts.
`,
  avatar: "/images/link-icons/profile_photo.jpg",
  ogImage:
    "/images/link-icons/profile_photo.jpg",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "Dhwanan Bharadva"
  ],
  dateCreated: "2025-12-09", // YYYY-MM-DD
};
