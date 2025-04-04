import { Component } from "react";
import AdminComments from "./admin-comments/AdminComments";

import styles from "./Admin.module.css";

export default class Admin extends Component {
  render() {
    return (
      <section className={styles["admin-section"]}>
        <h1>Admin Page</h1>
        <p>This is the admin page</p>
        <AdminComments />
      </section>
    );
  }
}

// export default function Admin() {
//   return (
//     <section>
//       <h1>Admin Page</h1>
//       <p>This is the admin page</p>
//     </section>
//   );
// }
