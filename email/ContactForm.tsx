import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import logo from "../public/image/logo.svg";

type ContactEmialProps = {
  message: string;
  name: string;
  senderEmail: string;
  number: string;
};

export const ContactForm = ({
  message,
  senderEmail,
  name,
  number,
}: ContactEmialProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-stone-900 text-gray-200">
          <Container>
            <Section>
              <Img src={logo} className="w-8 h-8" />
              <Heading>
                You received the following message from your portfolio form
              </Heading>
            </Section>
            <Text>message: {message}</Text>
            <Hr />
            <Text className="text-lg font-bold">
              The Sender's email is: {senderEmail}
            </Text>
            <Text className="text-lg font-bold">
              The Sender's name is: {name}
            </Text>
            {number && (
              <Text className="text-lg font-bold">
                The Sender's Tele is: {number}
              </Text>
            )}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default ContactForm;
