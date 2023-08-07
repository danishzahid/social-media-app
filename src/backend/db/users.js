import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Mamta",
    lastName: "Manoj",
    username: "mamtamanoj",
    password: "mamtaManoj123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Samar",
    lastName: "Firdaus",
    username: "samarfirdaus",
    password: "samarFirdaus123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Danish",
    lastName: "Zahid",
    username: "danishzahid",
    password: "danishZahid123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Seema",
    lastName: "Soni",
    username: "seeamsoni",
    password: "seeamSoni123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
