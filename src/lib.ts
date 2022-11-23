import { createClient } from 'contentful-management';

const client = createClient({
  accessToken: 'CFPAT-IunrIisZjz5QLvsNfUm2iaJRJYLbMKnYgOpW_tTrTqI',
});

export const createContactForm = ({ fullname, message, email }: any) => {
  client
    .getSpace('yr79rkau45jt')
    .then((space) => space.getEnvironment('master'))
    .then((environment) =>
      environment.createEntry('contactForm', {
        fields: {
          email: { 'en-US': email },
          message: { 'en-US': message },
          fullName: { 'en-US': fullname },
        },
      })
    )
    .then((entry) => console.log(entry))
    .catch(console.error);
};
export const createRequestAppointment = ({
  fullname,
  comments,
  email,
  preferredDate,
}: any) => {
  client
    .getSpace('yr79rkau45jt')
    .then((space) => space.getEnvironment('master'))
    .then((environment) =>
      environment.createEntry('requestAppointment', {
        fields: {
          email: { 'en-US': email },
          fullName: { 'en-US': fullname },
          preferredDate: { 'en-US': preferredDate },
          comments: { 'en-US': comments },
        },
      })
    )
    .then((entry) => console.log(entry))
    .catch(console.error);
};
