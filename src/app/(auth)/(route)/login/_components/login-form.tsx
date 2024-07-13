// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { signIn } from "next-auth/react";
// import { RiGithubFill } from "react-icons/ri";

// const LoginForm = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSignIn = () => {
//     setLoading(true);
//     signIn("github", { callbackUrl: "/" });
//   };

//   return (
//     <div className="flex items-center justify-center h-[calc(100vh-260px)]">
//       <Card className="mx-auto max-w-sm w-full">
//         <CardHeader>
//           <CardTitle>
//             Login
//           </CardTitle>
//           <CardDescription>
//             Login with your Github account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Button
//             variant="outline"
//             className="w-full flex items-center space-x-3"
//             onClick={handleSignIn}
//             disabled={loading}
//           >
//             {loading ? (
//               <span>Loading...</span>
//             ) : (
//               <>
//                 <RiGithubFill className="text-2xl" />
//                 <span>
//                   Login with Github
//                 </span>
//               </>
//             )}
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default LoginForm;
import React from 'react'

const LoginForm = () => {
  return (
    <div>LoginForm</div>
  )
}

export default LoginForm