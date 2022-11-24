import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import Link from 'next/link';

import { Section } from '../layout/Section';
import { Base } from '../templates/Base';

const Blog = () => {
  return (
    <Base>
      <Section yPadding="pt-20 pb-32 mt-20 space-y-10">
        <h1 className="text-2xl mb-20 text-indigo-600 font-bold text-center">
          Τα νέα μας!
        </h1>
        <Card className="w-100 flex-row">
          <CardHeader className="relative h-56">
            <img
              src="/assets/images/physiotzaninis2.jpg"
              alt="img-blur-shadow"
              className="object-cover"
            />
          </CardHeader>
          <CardBody className="text-left">
            <Link href="">
              <a className="mb-2 text-2xl">Καλημέρα!</a>
            </Link>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-100 flex-row">
          <CardHeader className="relative h-56">
            <img
              src="/assets/images/physiotzaninis.jpg"
              alt="img-blur-shadow"
              className="object-cover"
            />
          </CardHeader>
          <CardBody className="text-left">
            <Link href="">
              <a className="mb-2 text-2xl">Καλημέρα!</a>
            </Link>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-100 flex-row">
          <CardHeader className="relative h-56">
            <img
              src="/assets/images/physiotzaninis3.jpg"
              alt="img-blur-shadow"
              className="object-cover"
            />
          </CardHeader>
          <CardBody className="text-left">
            <Link href="">
              <a className="mb-2 text-2xl">Καλημέρα!</a>
            </Link>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-100 flex-row">
          <CardHeader className="relative h-56">
            <img
              src="/assets/images/physiotzaninis2.jpg"
              alt="img-blur-shadow"
              className="object-cover"
            />
          </CardHeader>
          <CardBody className="text-left">
            <Link href="">
              <a className="mb-2 text-2xl">Καλημέρα!</a>
            </Link>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona...
            </Typography>
          </CardBody>
        </Card>
      </Section>
    </Base>
  );
};
export default Blog;
