import React from "react";
import FocusBlock from "./FocusBlock";
import { contacts } from "../data/content";

export default function Footer() {
  return (
    <FocusBlock as="footer" className="footer" id="contact" minOpacity={0.35}>
      {contacts.map((contact) => (
        <a
          key={contact.label}
          className="contact-link"
          href={contact.href}
          target={contact.href.startsWith("http") ? "_blank" : undefined}
          rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <span>{contact.label}</span>
          <strong>{contact.value}</strong>
        </a>
      ))}
    </FocusBlock>
  );
}
