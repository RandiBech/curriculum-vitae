import axios from "axios";
import dayjs from "dayjs";
import * as testData from "./testUserData.json";

export class Education {
  school: string;
  start: dayjs.Dayjs;
  education: string;
  major?: string;
  description: string;

  constructor(
    school: string,
    start: dayjs.Dayjs,
    education: string,
    major: string,
    description: string
  ) {
    this.school = school;
    this.start = start;
    this.education = education;
    this.major = major;
    this.description = description;
  }
}

export class WorkExperience {
  company: string;
  start: dayjs.Dayjs;
  title: string;
  skills: string;
  description: string;

  constructor(
    company: string,
    start: dayjs.Dayjs,
    title: string,
    skills: string,
    description: string
  ) {
    this.company = company;
    this.start = start;
    this.title = title;
    this.skills = skills;
    this.description = description;
  }
}

export class Address {
  zipCode: string;
  city: string;
  country: string;

  constructor(zipCode: string, city: string, country: string) {
    this.zipCode = zipCode;
    this.city = city;
    this.country = country;
  }
}

export class User {
  name: string;
  email: string;
  title: string;
  aboutMe: string;
  address: Address;
  education: Education[];
  workExperience: WorkExperience[];

  constructor(
    name: string,
    email: string,
    title: string,
    aboutMe: string,
    address: Address,
    education: Education[],
    workExperience: WorkExperience[]
  ) {
    this.name = name;
    this.email = email;
    this.title = title;
    this.aboutMe = aboutMe;
    this.address = address;
    this.education = education;
    this.workExperience = workExperience;
  }
}

export class UserClient {
  /**
   *
   */
  constructor() {}

  getAllUsers = async () => {
    const response = await axios
      .get(
        "https://curriculum-vitae-39869-default-rtdb.firebaseio.com/users.json?print=pretty"
      )
      .then((data) => {
        return data;
      });
    console.log("response", response.data);
    return new User(
      response.data.name,
      response.data.email,
      response.data.title,
      response.data.aboutMe,
      response.data.address,
      response.data.education,
      response.data.workExperience
    );
  };

  getUser = async (userId: string) => {
    // const response = await axios
    //   .get(
    //     `https://curriculum-vitae-39869-default-rtdb.firebaseio.com/users/${userId}.json?print=pretty`
    //   )
    //   .then((data) => {
    //     return data;
    //   });
    const response = testData;
    if (!response) return null;

    const educations: Education[] = [];
    response.data.education.forEach((education: any) => {
      educations.push(
        new Education(
          education.school,
          dayjs(education.start),
          education.education,

          education.major,
          education.description
        )
      );
    });

    const workExperiences: WorkExperience[] = [];
    response.data.workExperience.forEach((work: any) => {
      workExperiences.push(
        new WorkExperience(
          work.company,
          dayjs(work.start),
          work.title,
          work.skills,
          work.description
        )
      );
    });

    const address = new Address(
      response.data.address.zipCode,
      response.data.address.city,
      response.data.address.country
    );

    return new User(
      response.data.name,
      response.data.email,
      response.data.title,
      response.data.aboutMe,
      address,
      educations,
      workExperiences
    );
  };
}
