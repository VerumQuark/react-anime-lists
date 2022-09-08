import React from "react";
import { theme } from "../../styles/index.styled";

const NoTelegram = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: theme.colors.primary,
      color: theme.colors.text,
    }}
  >
    <h1>
      You must enter this site from telegram bot{" "}
      <a
        href="https://t.me/lapis_lazuri_bot"
        style={{
          textDecoration: "none",
          color: "blue",
        }}
      >
        @lapis_lazuri_bot
      </a>
    </h1>
  </div>
);

export default NoTelegram;
