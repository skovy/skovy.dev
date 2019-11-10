import React from "react";
import styled from "styled-components";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../../config/colors";
import { rhythm, scale } from "../../utils/typography";

const TINYLETTER_URL = "https://tinyletter.com/skovy";

const Form = styled.form`
  width: 300px;
  margin: 0;
`;

const Subtext = styled.p`
  color: ${colors.muted};
  margin: 0;
  ${scale(-1 / 2)}
`;

const EmailInput = styled.input`
  display: block;
  width: 100%;
  padding: ${rhythm(1 / 3)};
  margin: ${rhythm(1 / 4)} 0;
  border-radius: ${rhythm(1 / 4)};
  border: 2px solid ${colors.lightGray};
  transition: border-color 200ms ease;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    border-color: ${colors.primary};
    outline: none;
  }
`;

const Subscribe = styled.input`
  display: block;
  width: 100%;
  padding: ${rhythm(1 / 3)};
  margin: 0 0 ${rhythm(1)};
  border-radius: ${rhythm(1 / 4)};
  border: none;
  color: ${colors.white};
  background-color: ${colors.primary};
  transition: background-color 200ms ease;

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${colors.secondary};
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: ${rhythm(1 / 4)};
`;

export const Newsletter = () => {
  return (
    <Form
      action="https://tinyletter.com/skovy"
      method="post"
      target="popupwindow"
      id="newsletter"
      onSubmit={() => {
        window.open(
          TINYLETTER_URL,
          "popupwindow",
          "scrollbars=yes,width=800,height=600"
        );
        return true;
      }}
    >
      <h3>
        <Icon icon={faEnvelopeOpen} /> Join the Newsletter.
      </h3>
      <EmailInput
        type="text"
        name="email"
        placeholder="Your email address"
        aria-label="Your emaila address"
      />
      <input type="hidden" value="1" name="embed" />
      <Subscribe type="submit" value="Subscribe" />
      <Subtext>
        Subscribe to get my latest content by email.
        <br />
        <em>(infrequent, no spam, unsubscribe whenever)</em>
      </Subtext>
    </Form>
  );
};
