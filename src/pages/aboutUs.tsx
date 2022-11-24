import { Breadcrumbs } from '@material-tailwind/react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Base } from '../templates/Base';

const AboutUs = () => {
  return (
    <Base>
      <Section yPadding="pt-20 pb-32 ">
        <Breadcrumbs className="mb-20">
          <a href="" className="opacity-60">
            Αρχική
          </a>
          <a href="">About us</a>
        </Breadcrumbs>
        <Background>
          <p className="text-2xl mb-5 p-5 shadow-lg">
            At Kaizen Physical Therapy, we have a highly experienced team of
            Seattle, WA physical therapists who offer specialized treatment
            services for any pain, injury, or discomfort you may be feeling. Our
            patients have found high levels of success in our treatment
            services, due to our implementation of advanced technology and
            methods. We use sophisticated diagnostic methods, such as movement
            investigation and gait analysis, to help determine which services
            you will benefit from most. At Kaizen Physical Therapy, our thorough
            evaluations lead to successful treatment plans for your pain relief,
            healing, and future injury prevention needs. Kaizen Physical Therapy
            is located in Seattle, WA, with dedicated staff members that are
            eager to help you recover. Our office is situated on 5025 25th Ave
            NE #201 making it a commonly frequented spot for physical therapy
            Seattle, WA pain relief.
          </p>
        </Background>
      </Section>
    </Base>
  );
};
export default AboutUs;
