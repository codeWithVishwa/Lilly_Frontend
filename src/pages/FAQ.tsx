import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const faqs = [
  {
    question: 'Are classes online, offline, or hybrid?',
    answer: 'We offer flexible formats based on the course. Many programs include both live online sessions and in-person practical workshops.',
  },
  {
    question: 'Do I get a certificate after completion?',
    answer: 'Yes. Students who complete required assignments and assessments receive a course completion certificate.',
  },
  {
    question: 'Can beginners join your training programs?',
    answer: 'Absolutely. We have beginner-friendly tracks and also advanced modules for experienced learners.',
  },
  {
    question: 'Do you provide placement or career guidance?',
    answer: 'We provide profile guidance, portfolio support, interview preparation, and freelance career direction.',
  },
  {
    question: 'How do I choose the right course?',
    answer: 'You can contact our team for a quick counseling call. We recommend a course based on your goals and previous experience.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <section className="mb-12 text-center">
          <p className="text-primary text-sm uppercase tracking-wider font-semibold mb-4">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Frequently Asked Questions</h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Quick answers to the most common questions from students and parents.
          </p>
        </section>

        <section className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article key={faq.question} className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    size={18}
                    className={cn('text-gray-400 transition-transform', isOpen && 'rotate-180 text-primary')}
                  />
                </button>
                {isOpen && <p className="px-6 pb-5 text-gray-500 leading-relaxed">{faq.answer}</p>}
              </article>
            );
          })}
        </section>
      </div>
    </div>
  );
}
