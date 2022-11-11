import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Base } from '../templates/Base';

const Question = ({ children }: any) => {
  return <dt className="font-medium hover:font-bold">{children}</dt>;
};
const Faq = () => {
  return (
    <Base>
      <Background color="bg-gray-100">
        <Section yPadding="pt-20 pb-32">
          <h1 className="text-2xl mb-5">Συχνά μας ρωτάτε:</h1>
          <dl className="pl-3">
            <Question>Πόσο κοστίζει η συνεδρία;</Question>
            <dd>100000 ευρώ</dd>
            <Question>Πρέπει να έχω κάποιο εξοπλισμό στο σπίτι μου;</Question>
            <dd>Όχι παρέχουμε εμείς ότι εξοπλισμό ενδέχεται να χρειαστεί</dd>
          </dl>
        </Section>
      </Background>
    </Base>
  );
};
export default Faq;
