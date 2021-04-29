/* eslint-disable prettier/prettier */
import React from "react";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function Signup() {
  return (
    <div>
  
    </div>
  )
}

export default Signup;

// import {
//   FormErrorMessage,
//   FormLabel,
//   FormControl,
//   Input,
//   Button,
// } from "@chakra-ui/react";

// function Signup() {
//   const { handleSubmit, errors, register, formState } = React.useForm();

//   function validateName(value) {
//     if (!value) {
//       return "Name is required";
//     } else if (value !== "Naruto") {
//       return "Jeez! You're not a fan 😱";
//     } else return true;
//   }

//   function onSubmit(values) {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         alert(JSON.stringify(values, null, 2));
//         resolve();
//       }, 3000);
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <FormControl isInvalid={errors.name}>
//         <FormLabel htmlFor="name">First name</FormLabel>
//         <Input
//           name="name"
//           placeholder="name"
//           ref={register({ validate: validateName })}
//         />
//         <FormErrorMessage>
//           {errors.name && errors.name.message}
//         </FormErrorMessage>
//       </FormControl>
//       <Button
//         mt={4}
//         colorScheme="teal"
//         isLoading={formState.isSubmitting}
//         type="submit"
//       >
//         Submit
//       </Button>
//     </form>
// //   );
// }


