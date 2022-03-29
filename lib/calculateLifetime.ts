import { CalculateLifetime, GetAverageFunction } from "./types";
import data from "../data/lifetime-data.json";
import { LifetimeData } from "../data/types";

const { DATA }: LifetimeData = data;

export const calculateLifetime: CalculateLifetime = ({ form, user }) => {
  const { username, setUsername } = user;
  const { watch } = form;

  const { country, birthday, gender } = watch();

  if (!country || !birthday || !gender)
    throw Error(
      `Country = ${country} | Birthday = ${birthday} | Gender = ${gender} are invalid values`
    );

  const averageLifeInYears = getAverageLifeInYears();
  const averageLifeInMonths = getAverageLifeInMonths();
  const averageLifeInHours = getAverageLifeInHours();
  const averageLifeInDays = getAverageLifeInDays();
  const averageLifeInMinutes = getAverageLifeInMinutes();

  setUsername({
    ...username,
    averageLifeInYears,
    averageLifeInMonths,
    averageLifeInHours,
    averageLifeInDays,
    averageLifeInMinutes,
  });
};

const getAverageLifeInYears: GetAverageFunction = () => {
  return undefined;
};

const getAverageLifeInMonths: GetAverageFunction = () => {
  return 0;
};

const getAverageLifeInWeeks: GetAverageFunction = () => {
  return 0;
};

const getAverageLifeInDays: GetAverageFunction = () => {
  return 0;
};

const getAverageLifeInHours: GetAverageFunction = () => {
  return 0;
};

const getAverageLifeInMinutes: GetAverageFunction = () => {
  return 0;
};
