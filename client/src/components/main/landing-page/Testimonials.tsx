import { Clock, Coins, CreditCard, Medal, Scale, Shield } from 'lucide-react';
import BenefitCard from './BenefitCard';

const benefits = [
  {
    id: 1,
    icon: Clock,
    title: 'Industry Best Support',
    description: 'Get a reply in under 90 seconds from our friendly, in-house staff, 24/7.',
    highlight: false,
  },
  {
    id: 2,
    icon: Coins,
    title: 'Play To Earn',
    description: 'Earn our TXT tokens with every bet you make. TXT tokens can be profits.',
    highlight: true,
  },
  {
    id: 3,
    icon: Shield,
    title: 'Instant Payouts',
    description: 'Withdraw easily with instant payouts on over 99.4% withdrawals.',
    highlight: false,
  },
  {
    id: 4,
    icon: CreditCard,
    title: 'Free Withdrawals',
    description: 'Withdraw easily with instant payouts on over 99.4% withdrawals.',
    highlight: false,
  },
  {
    id: 5,
    icon: Scale,
    title: 'Prove-able Fairness',
    description: 'Withdraw easily with instant payouts on over 99.4% withdrawals.',
    highlight: false,
  },
  {
    id: 6,
    icon: Medal,
    title: 'Fully Licenced',
    description: 'Withdraw easily with instant payouts on over 99.4% withdrawals.',
    highlight: false,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full common-padding">
      <div className="w-full container common-padding !py-5 mx-auto max-w-6xl rounded-xl border border-zinc-800">
        <div className="flex flex-col ">
          <h1 className="font-thin leading-12 font-furore text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl tracking-wider text-white">
            Gaming To
          </h1>
          <h1 className="font-thin font-furore text-xs sm:text-sm md:text-xl lg:text-2xl xl:text-3xl tracking-wider text-white">
            the Next Level
          </h1>

          <div className="grid mt-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
