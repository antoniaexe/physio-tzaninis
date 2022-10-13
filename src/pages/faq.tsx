import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Header } from '../templates/Header';

const faq = () => {
  return (
    <Background color="bg-gray-100">
      <Header />
      <Section yPadding="pt-20 pb-32">
        <dl>
          <dt>Πόσο κοστίζει η συνεδρία;</dt>
          <dd>100000 ευρώ</dd>
          <dt>Πρέπει να έχω κάποιο εξοπλισμό στο σπίτι μου;</dt>
          <dd>Όχι παρέχουμε εμείς ότι εξοπλισμό ενδέχεται να χρειαστεί</dd>
        </dl>
      </Section>
    </Background>
  );
};
export default faq;
