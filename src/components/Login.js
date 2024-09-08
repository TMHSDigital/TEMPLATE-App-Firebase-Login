import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [step, setStep] = useState('phone');

  const handleSendCode = async (e) => {
    e.preventDefault();
    try {
      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      const confirmationResult = await firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
      setVerificationId(confirmationResult.verificationId);
      setStep('code');
    } catch (error) {
      console.error('Error sending verification code:', error);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
      await firebase.auth().signInWithCredential(credential);
    } catch (error) {
      console.error('Error verifying code:', error);
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      {step === 'phone' ? (
        <form onSubmit={handleSendCode}>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
            required
          />
          <div id="recaptcha-container"></div>
          <button type="submit">Send Verification Code</button>
        </form>
      ) : (
        <form onSubmit={handleVerifyCode}>
          <input
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            placeholder="Enter verification code"
            required
          />
          <button type="submit">Verify Code</button>
        </form>
      )}
    </div>
  );
};

export default Login;
