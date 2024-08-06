'use client';
import { Spinner } from '@chakra-ui/react';
import React from 'react'
import {useFormStatus} from 'react-dom'
function SubmitButton({title}:{title:string}) {
    const {pending} = useFormStatus();
  return (
    <button className='max-w-fit flex items-center justify-center p-2 rounded-lg bg-black/80 text-white/80 text-lg' disabled={pending}>
        {title} {pending && `...`}
    </button>
  )
}

export default SubmitButton