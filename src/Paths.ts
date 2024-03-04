import React from "react";

export class Paths extends React.Component {
  static User = "/user";
  static UserProfile = `${Paths.User}/profile`;
  static UserEducation = `${Paths.User}/education`;
  static UserWorkExperience = `${Paths.User}/work`;
}
