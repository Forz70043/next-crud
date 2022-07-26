import Layout from "../components/layout";
import Homepage from "../components/homepage";
import { getUsers } from "../lib/users";

let users = getUsers();

export default function Home() {
  return (
    <Homepage />
  )
}
