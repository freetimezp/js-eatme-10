"use client"
import React, { useState } from 'react';
import Link from 'next/link';

import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Button } from './ui/button';
import { Label } from './ui/label';
import { Input } from './ui/input';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const StyleGuide = () => {
    const [date, setDate] = useState();

    return (
        <>
            {/* typography */}
            <div className='flex flex-col gap-y-4 p-24'>
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi voluptatum adipisci nemo vitae praesentium soluta,
                    error deleniti porro odit placeat voluptate, dolorem ex quos!
                    Iusto repudiandae odio at culpa ratione.
                </p>
            </div>

            <div className="bg-black p-24 flex flex-col gap-y-4">
                <Link href='/'>Link</Link>

                {/* buttons */}
                <Button variant='default'>Let's Eat</Button>
                <Button variant='orange'>Let's Eat</Button>
                <Button variant='orange' size='sm'>Let's Eat</Button>
                <Button variant='input'>Let's Eat</Button>

                {/* label & input */}
                <div>
                    <Label htmlFor='firstname'>First Name</Label>
                    <Input type='firstname' id='firstname' />
                </div>
                <div>
                    <Label htmlFor='lastname'>Last Name</Label>
                    <Input type='lastname' id='lastname' />
                </div>

                {/* calendar */}
                <div>
                    <Label htmlFor='firstname'>Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"input"}
                                className={cn("w-full justify-start text-left font-normal")}
                            >
                                <CalendarIcon className="mr-2 h-4 w-4" />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>

                {/* select */}
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Fruits</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>
                            <SelectItem value="blueberry">Blueberry</SelectItem>
                            <SelectItem value="grapes">Grapes</SelectItem>
                            <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </>
    );
};

export default StyleGuide;
