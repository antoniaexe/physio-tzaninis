import { Fragment, SetStateAction, useState } from 'react';

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

import { Section } from '../layout/Section';
import { Base } from '../templates/Base';

export default function Faq() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value: SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Base>
      <Section yPadding="pt-20 pb-32 mt-20">
        <h1 className="text-2xl mb-20 text-indigo-600">Συχνά μας ρωτάτε</h1>
        <Fragment>
          <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              How to use Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We're not always in the position that we want to be at. We're
              constantly growing. We're constantly making mistakes. We're
              constantly trying to express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
        </Fragment>
      </Section>
    </Base>
  );
}
