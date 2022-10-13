import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Header } from '../templates/Header';
const Question = ({children}:any)=>{
  return <dt className="font-medium hover:font-bold">{children}</dt>}
const Faq = () => {
  return (
    <Background color="bg-gray-100">
      <Header />
    
      <Section yPadding="pt-20 pb-32">
        
        <h1 className="text-2xl mb-5">Συχνά μας ρωτάτε:</h1>
        <dl className='pl-3'>
          <Question>Πόσο κοστίζει η συνεδρία;</Question>
          <dd>100000 ευρώ</dd>
          <Question>Πρέπει να έχω κάποιο εξοπλισμό στο σπίτι μου;</Question>
          <dd>Όχι παρέχουμε εμείς ότι εξοπλισμό ενδέχεται να χρειαστεί</dd>
        </dl>
      </Section>
    </Background>
  );
};
export default Faq;
