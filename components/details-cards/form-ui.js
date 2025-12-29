
"use client"

import {userSchema} from "@/lib/user-schema";
import {zodResolver} from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

import {
    Form, FormField, 
    FormItem,FormLabel, FormControl,
    FormMessage} from "../ui/form";
import { Input } from "../ui/input";


const FormInput = ()=>{
    const form = useForm({
        resolver:zodResolver(userSchema),
        defaultValues: {
            name:"Fnu Dorjee",
            email:'fnu@gmail.com',
            phone: "000-000-0000",
            location: "unknown",
            password: "..........",
            role: "student"
        }
    });

    const onSubmit = (data)=>{
        console.log(data);

        form.reset();
    }
    return (
        <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField 
                    control={form.control}
                    name= "name"
                    render={({field})=> (
                        <FormItem>
                            <FormLabel>User Name</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                />
                <FormField 
                    control={form.control}
                    name= "email"
                    render={({field})=> (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                
                />

                <FormField 
                    control={form.control}
                    name= "password"
                    render={({field})=> (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                
                />

                <FormField 
                    control={form.control}
                    name= "phone"
                    render={({field})=> (
                        <FormItem>
                            <FormLabel>Contact</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                
                />

                <FormField 
                    control={form.control}
                    name= "location"
                    render={({field})=> (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                
                />

                <FormField 
                    control={form.control}
                    name= "role"
                    render={({field})=> (
                        <FormItem>
                            <FormLabel>Role</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )
                    }
                
                />
                <Button 
                    type='submit' 
                    className="w-full"
                    >Submit</Button>
            </form>
    
        </Form>
    )
};


export default FormInput;