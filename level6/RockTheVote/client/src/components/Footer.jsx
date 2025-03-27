import React from "react";

export default function Footer() {
  function backToTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <footer>
        <p>© 2021 Issue Tracker</p>
        <p>All rights reserved.</p>
        <p>Powered by React, Node.js, and MongoDB</p>
        <button onClick={backToTop}>Back to Top</button>
      </footer>
    </div>
  );
}
