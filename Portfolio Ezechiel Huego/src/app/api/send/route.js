// import { NextResponse } from "next/server";
// import { Resend } from "resend";
// // import emailjs from "@emailjs/browser"

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json();
//   console.log(email, subject, message);
//   try {
//     // const data = await resend.emails.send({
//     //   from: fromEmail,
//     //   to: [fromEmail, email],
//     //   subject: subject,
//     //   react: (
//     //     <>
//     //       <h1>{subject}</h1>
//     //       <p>Thank you for contacting us!</p>
//     //       <p>New message submitted:</p>
//     //       <p>{message}</p>
//     //     </>
//     //   ),
//     // });

//     const data = await emailjs.send(
//       "service_7eik3tc",
//       "template_8ehur1h",
//       {
//         from_email: email,
//         subject: subject,
//         message: message

//       },
//       "liEyiqOY7Xj8SJOwu"
      
//     )
//     // .then((reponse )=>{
//     //   console.log(reponse);
      
//     // })d
//     const re = await data.json()

//     return NextResponse.json({re});
//   } catch (error) {
//     return NextResponse.json({ error });
//   }
// }
