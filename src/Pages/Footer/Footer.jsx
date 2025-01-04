import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p className="text-royal-blue font-medium text-lg">
          Copyright © {new Date().getFullYear()} - All right reserved by Mehedi
          Hasan Munna
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
