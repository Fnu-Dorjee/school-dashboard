
'use client'

import {

    SheetDescription,
    SheetHeader,
    SheetTitle,
   
  } from "@/components/ui/sheet"

  import FormInput from "./form-ui";

const EditUser = ()=>{
    return (
        <SheetHeader>
            <SheetTitle className='mb-4'>Edit User</SheetTitle>
            <SheetDescription>
                <FormInput />
            </SheetDescription>
        </SheetHeader>
    )
};

export default EditUser;