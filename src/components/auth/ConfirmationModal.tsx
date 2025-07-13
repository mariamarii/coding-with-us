'use client';

import styles from '@/styles/confirmationModal.module.css';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  email: string;
  onClose: () => void;
};

const ConfirmationModal = ({ email, onClose }: Props) => {
  const [code, setCode] = useState<string[]>(Array(6).fill(''));
  const [error, setError] = useState(false);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const router = useRouter();

  useEffect(() => {
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace') {
      const updatedCode = [...code];

      if (code[index]) {
        updatedCode[index] = '';
        setCode(updatedCode);
      } else if (index > 0) {
        inputsRef.current[index - 1]?.focus();
        updatedCode[index - 1] = '';
        setCode(updatedCode);
      }
    }
  };

  const handleConfirm = async () => {
    const secret = code.join('');
    if (secret.length < 6) return setError(true);

    try {
      const res = await fetch('https://localhost:7061/api/V1/users/confirm-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          usageType: 0,
          secret,
        }),
      });

      if (res.ok) {
        router.push('/');
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h3>Enter Confirmation Code</h3>
        <p className={styles.instructions}>We’ve sent a 6-digit code to <strong>{email}</strong>.</p>

        <div className={styles.codeInputs}>
          {code.map((digit, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              value={digit}
              ref={el => inputsRef.current[i] = el}
              className={`${styles.input} ${error ? styles.inputError : ''}`}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(e, i)}
            />
          ))}
        </div>

        {error && <p className={styles.error}>Invalid or incorrect code</p>}

        <div className={styles.actions}>
          <button onClick={onClose} className={styles.cancelBtn}>Cancel</button>
          <button onClick={handleConfirm} className={styles.confirmBtn}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
