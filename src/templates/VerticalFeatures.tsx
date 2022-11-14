import { Button } from '@material-tailwind/react';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { BackPainIcon } from '../images/BackpainIcon';
import { ShoulderPainIcon } from '../images/ShoulderPainIcon';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Your title here"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <div className="iconlist">
      <div className="icon">
        <a>
          <div className="pb-4">
            <Button color="white">
              <BackPainIcon />
            </Button>
          </div>
          <div>
            <h1>
              Back pain <br /> relief
            </h1>
          </div>
        </a>
      </div>
      <div className="icon">
        <a>
          <div className="pb-4">
            <Button color="white" size="lg">
              <ShoulderPainIcon />
            </Button>
          </div>
          <div>
            <h1>
              Shoulder pain <br /> relief
            </h1>
          </div>
        </a>
      </div>
      <div className="icon">
        <a>
          <div className="pb-4">
            <Button color="white">
              <BackPainIcon />
            </Button>
          </div>
          <div>
            <h1>Post-op rehab</h1>
          </div>
        </a>
      </div>
      <div className="icon">
        <a>
          <div className="pb-4">
            <Button color="white">
              <BackPainIcon />
            </Button>
          </div>
          <div>
            <h1>Knee pain relief</h1>
          </div>
        </a>
      </div>
      <div className="icon">
        <a>
          <div className="pb-4">
            <Button color="white">
              <BackPainIcon />
            </Button>
          </div>
          <div>
            <h1>Sports injuries</h1>
          </div>
        </a>
      </div>
    </div>
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Your title here"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images</div>/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
