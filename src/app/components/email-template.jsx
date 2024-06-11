import * as React from 'react';

export const EmailTemplate = ({
  subject,message,
}) => (
  <div>
    <h1>{subject}</h1>
          <p>از اینکه با ما تماس گرفتید متشکریم!</p>
 <p>پیام جدید ارسال شد:</p>
          <p>{message}</p>
  </div>
);
