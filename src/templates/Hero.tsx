import { Button } from '@material-tailwind/react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <div className="relative overflow-hidden ">
        <div className="heroimage" />
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10  pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Stay active & </span>
                  <span className="block text-indigo-600 xl:inline">
                    injury free
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-800 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                  Kaizen Physical Therapy Is Providing Quality Care In Seattle,
                  Washington.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <Button variant="filled" color="blue" size="lg" ripple>
                    ΚΛΕΙΣΤΕ ΡΑΝΤΕΒΟΥ
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
