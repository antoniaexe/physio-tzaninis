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
export const getBlogPosts = () => {
  return client
    .getSpace('yr79rkau45jt')
    .then((space) => space.getEnvironment('master'))
    .then((environment) =>
      environment.getEntries({ content_type: 'blogPost' })
    );
};
export const waitFor = (delay, text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (text === '') {
        reject('no text');
      } else {
        resolve(text);
      }
    }, delay * 1000);
  });
};

// const text = waitFor(2, "bob")

waitFor(2, 'Bob')
  .then((text) => {
    console.log(text);
  })
  .catch((err) => {
    console.error(err);
  });
