import { FormEvent } from 'react';

import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverHandler,
  Textarea,
} from '@material-tailwind/react';

import { Section } from '../layout/Section';
import { createRequestAppointment } from '../lib';
import { Base } from '../templates/Base';

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log(e.target);
  // @ts-ignore
  const fullname = e.target.elements.fullname.value;
  // @ts-ignore
  const email = e.target.elements.email.value;
  // @ts-ignore
  const date = e.target.elements.date.value;
  // @ts-ignore
  const comments = e.target.elements.comments.value;
  console.log(fullname, email, date, comments);
  createRequestAppointment({ fullname, email, date, comments });
  // @ts-ignore
  e.target.elements.fullname.value = '';
  // @ts-ignore
  e.target.elements.email.value = '';
  // @ts-ignore
  e.target.elements.date.value = '';
  // @ts-ignore
  e.target.elements.comments.value = '';
};

const Appointments: any = () => {
  return (
    <Base>
      <Section yPadding="pt-20 pb-32 mt-20">
        <h1 className="text-2xl mb-20">Κλείστε ραντεβού</h1>
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
              <Input
                variant="static"
                label="Ημερομηνία και ώρα"
                name="date"
              ></Input>
            </div>
            <div>
              <Textarea variant="static" label="Σχόλια" name="comments" />
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
export default Appointments;
