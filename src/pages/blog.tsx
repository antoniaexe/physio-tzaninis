import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from '@material-tailwind/react';
import Link from 'next/link';

import { Section } from '../layout/Section';
import { Base } from '../templates/Base';

const Blog = () => {
  return (
    <Base>
      <Section yPadding="pt-20 pb-32 mt-20 space-y-10">
        <Card className="w-100">
          <CardHeader color="blue" className="relative h-56">
            <img
              src="/img/blog.jpg"
              alt="img-blur-shadow"
              className="h-full w-full"
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
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">$899/night</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Barcelona, Spain
            </Typography>
          </CardFooter>
        </Card>
        <Card className="w-100">
          <CardHeader color="blue" className="relative h-56">
            <img
              src="/img/blog.jpg"
              alt="img-blur-shadow"
              className="h-full w-full"
            />
          </CardHeader>
          <CardBody className="text-left">
            <Link href="">
              <a className="mb-2 text-2xl">Καλημέρα!</a>
            </Link>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">$899/night</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Barcelona, Spain
            </Typography>
          </CardFooter>
        </Card>
        <Card className="w-100">
          <CardHeader color="blue" className="relative h-56">
            <img
              src="/img/blog.jpg"
              alt="img-blur-shadow"
              className="h-full w-full"
            />
          </CardHeader>
          <CardBody className="text-left">
            <Link href="">
              <a className="mb-2 text-2xl">Καλημέρα!</a>
            </Link>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">$899/night</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Barcelona, Spain
            </Typography>
          </CardFooter>
        </Card>
        <Card className="w-100">
          <CardHeader color="blue" className="relative h-56">
            <img
              src="/img/blog.jpg"
              alt="img-blur-shadow"
              className="h-full w-full"
            />
          </CardHeader>
          <CardBody className="text-left">
            <Link href="">
              <a className="mb-2 text-2xl">Καλημέρα!</a>
            </Link>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter
            divider
            className="flex items-center justify-between py-3"
          >
            <Typography variant="small">$899/night</Typography>
            <Typography variant="small" color="gray" className="flex gap-1">
              <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
              Barcelona, Spain
            </Typography>
          </CardFooter>
        </Card>
      </Section>
    </Base>
  );
};
export default Blog;
