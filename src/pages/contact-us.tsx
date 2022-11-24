import { FormEvent } from 'react';

import {
  Input,
  Textarea,
  Button,
  Popover,
  PopoverHandler,
  PopoverContent,
} from '@material-tailwind/react';

import { Section } from '../layout/Section';
import { createContactForm } from '../lib';
import { Base } from '../templates/Base';

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(e.target);
  // @ts-ignore
  const fullname = e.target.elements.fullname.value;
  // @ts-ignore
  const email = e.target.elements.email.value;
  // @ts-ignore
  const message = e.target.elements.message.value;
  console.log(fullname, email, message);
  createContactForm({ fullname, email, message });
  // @ts-ignore
  e.target.elements.fullname.value = '';
  // @ts-ignore
  e.target.elements.email.value = '';
  // @ts-ignore
  e.target.elements.message.value = '';
};

const ContactUs = () => {
  return (
    <Base>
      <Section yPadding="pt-20 pb-32 mt-20">
        <h1 className="text-2xl mb-20 text-indigo-600 font-bold">
          Επικοινωνήστε μαζί μας
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-9">
            <div className="flex w-full items-end gap-4">
              <Input
                variant="static"
                label="Ονοματεπώνυμο"
                name="fullname"
              ></Input>
              <Input
                variant="static"
                label="e-mail"
                type="email"
                name="email"
              ></Input>
            </div>
            <div>
              <Textarea variant="static" label="Message" name="message" />
            </div>
            <div>
              <Popover>
                <PopoverHandler>
                  <Button className="bg-indigo-600" type="submit">
                    Αποστολη
                  </Button>
                </PopoverHandler>
                <PopoverContent>Επιτυχής αποστολή</PopoverContent>
              </Popover>
            </div>
          </div>
        </form>
      </Section>
    </Base>
  );
};

export default ContactUs;
