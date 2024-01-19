import React from "react";
import "./Inquiry.css";
import { useForm, ValidationError  } from '@formspree/react';
function InquiryForm() {
  const [state, handleSubmit] = useForm("mzblzpjy");
  if (state.succeeded) {
    return <h1>Thank you for your inquiry!</h1>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input type="text" name="name" required />
      </label>
      <label>
        Email
        <input type="email" name="email" required />
      </label>
      <label>
        Message
        <textarea name="message" required />
      </label>
      <ValidationError prefix="Error" field="name" errors={state.errors} />
      <ValidationError prefix="Error" field="email" errors={state.errors} />
      <ValidationError prefix="Error" field="message" errors={state.errors} />
      <button type="submit">Submit</button>
    </form>
  );
}

function Inquiry() {
  return (
    <InquiryForm/>
  );
}


// const Inquiry = () => {
//   const sendInquiry = () => {
//     window.Email.send({
//       Host: "smtp.elasticemail.com",
//       Username: "elasticmailuser@mail.com",
//       Password:
//         "87E3378D32BFC823FA3ACBC23E8D167D790153EFFEA9A1C3A7EDC07CBE86793DA96032B07D823E544110CF521388802F",
//       To: "belkaid.abdulah@gmail.com",
//       From: "your username",
//     }).then((message) => alert("Message send succesfully!"));
//   };

//   return (
//     <div>
//       <h1>Inquiry Form</h1>
//       <form className='cf'>
//         <div className='half left cf'>
//           <input type='text' placeholder='Name' name='user_name' />
//           <input type='email' placeholder='Email address' name='user_email' />
//         </div>
//         <div className='half right cf'>
//           <textarea name='message' type='text' placeholder='Message'></textarea>
//         </div>
//         <input type='submit' value='Submit' id='input-submit' />
//       </form>
//     </div>
//   );
// };

export default Inquiry;