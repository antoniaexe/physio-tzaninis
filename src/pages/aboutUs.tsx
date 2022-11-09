import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Header } from '../templates/Header';

const AboutUs = () => {
  return (
    <Background color="bg-gray-100">
      <Header />
      <Section yPadding="pt-20 pb-32">
        <p className="text-2xl mb-5">
          At Kaizen Physical Therapy, we have a highly experienced team of
          Seattle, WA physical therapists who offer specialized treatment
          services for any pain, injury, or discomfort you may be feeling. Our
          patients have found high levels of success in our treatment services,
          due to our implementation of advanced technology and methods. We use
          sophisticated diagnostic methods, such as movement investigation and
          gait analysis, to help determine which services you will benefit from
          most. At Kaizen Physical Therapy, our thorough evaluations lead to
          successful treatment plans for your pain relief, healing, and future
          injury prevention needs. Kaizen Physical Therapy is located in
          Seattle, WA, with dedicated staff members that are eager to help you
          recover. Our office is situated on 5025 25th Ave NE #201 making it a
          commonly frequented spot for physical therapy Seattle, WA pain relief.
        </p>
      </Section>
    </Background>
  );
};
export default AboutUs;
