import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea
} from "@chakra-ui/react";

const Form = () =>  {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert("Message Sent!");
        resolve();
      }, 3000);
    });
  }

  return (
    <form className="formx" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input _focus={{
        ring: '4px',
        ringColor: 'purple.100',
        ringOffset: '0px',
        ringOffsetColor: 'purple.300'

      }}
          id="name"
          ringColor="purple"

          placeholder="name"
          {...register("name", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" }
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Email</FormLabel>
        <Input _focus={{
        ring: '4px',
        ringColor: 'purple.100',
        ringOffset: '0px',
        ringOffsetColor: 'purple.300'

      }}
        colorScheme="purple"
          ringColor="purple"

          id="email"
          placeholder="email"
          {...register("name", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" }
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
    <div className="message">
    <FormControl isInvalid={errors.name}>
        <FormLabel htmlFor="name">Message</FormLabel>
        <Textarea _focus={{
        ring: '4px',
        ringColor: 'purple.100',
        ringOffset: '0px',
        ringOffsetColor: 'purple.300'

      }}
         colorScheme="purple"
          ringColor="purple"
          id="message"
          placeholder="Message"
          {...register("message", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" }
          })}
        />
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      {/* <Textarea> </Textarea> */}

    </div>

      <Button _focus={{
        ring: '4px',
        ringColor: 'purple.100',
        ringOffset: '3px',
        ringOffsetColor: 'purple.300'

      }}
      mt={4} colorScheme="purple" isLoading={isSubmitting} type="submit">
        Submit
      </Button>
    </form>
  );
}


export default Form;