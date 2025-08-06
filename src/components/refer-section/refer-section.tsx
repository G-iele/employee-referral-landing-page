'use client';

import { saveEmail } from '@/app/actions/save-email';
import Image from 'next/image';

import styles from './refer-section.module.scss';
import { useActionState, useEffect, useRef } from 'react';

const ReferSection = () => {
  const [state, formAction] = useActionState(saveEmail, {
    message: '',
    success: false
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <>
      <h1>Refer Friends and Get Real Rewards</h1>
      <section className={styles.container}>
        <Image src="/savings.svg" alt="Savings" width={120} height={128} />
        <h2>Refer friends and get rewards</h2>
        <p>
          Refer your friends to us and earn hotel booking vouchers. We’ll give
          you 1 coin for each friend that installs our extension. Minimum
          cash-out at 20 coins.
        </p>

        <form ref={formRef} action={formAction}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            placeholder="Enter your email address"
          />

          {state.message && (
            <p className={state.success ? styles.success : styles.error}>
              {state.message}
            </p>
          )}

          <button type="submit" className={styles.submit}>
            Get Link
          </button>
        </form>
      </section>
    </>
  );
};

export default ReferSection;
