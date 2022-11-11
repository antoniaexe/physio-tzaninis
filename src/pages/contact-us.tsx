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
import { Base } from '../templates/Base';

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(e.target);
};
const ContactUs = () => {
  return (
    <Base>
      <Section yPadding="pt-20 pb-32">
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
                  <Button variant="gradient" type="submit">
                    Αποστολή
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
