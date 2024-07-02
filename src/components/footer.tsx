import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 lg:py-8 lg:px-0 text-zinc-600 lg:max-w-2xl w-full mx-auto flex items-center gap-3">
      <Link
        href="https://www.dmca.com/Protection/Status.aspx?ID=40e26100-615b-40a0-b601-8fbf47d55f30&refurl=https://www.hongducdev.com/"
        title="DMCA.com Protection Status"
        className="dmca-badge"
      >
        {" "}
        <Image
          src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=40e26100-615b-40a0-b601-8fbf47d55f30"
          alt="DMCA.com Protection Status"
          width={120}
          height={120}
        />
      </Link>{" "}
      © 2024 hongducdev
    </footer>
  );
};

export default Footer;
