"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { fadeIn } from '@/variants';
import { Button } from './ui/button';

const About = () => {
    return (
        <section id='about' className='grid grid-cols-1 xl:grid-cols-2 gap-x-[74px]
            p-8 md:p-12 xl:p-0 items-center'>
            {/* text */}
            <motion.div
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
                className='xl:pl-[135px]'
            >
                <h1 className='mb-9'>
                    Let's Talk About W'Food
                </h1>
                <p className='mb-8'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti doloremque eligendi commodi repudiandae dolorem
                    voluptas odit officiis minima natus totam, quo laudantium inventore.
                    Mollitia quo ab error, voluptatibus maxime eos magni dolorum.
                </p>
                <p className='mb-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    fuga error obcaecati soluta quae consectetur expedita assumenda,
                    aspernatur neque recusandae unde veniam perspiciatis suscipit
                    rerum tenetur aliquam odit incidunt voluptatum impedit nemo
                    voluptas odit officiis minima natus totam, quo laudantium inventore.
                    Mollitia quo ab error, voluptatibus maxime eos magni dolorum.
                </p>

                <Button>
                    Read more
                </Button>
            </motion.div>

            {/* img */}
            <motion.div
                variants={fadeIn('left', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.2 }}
            >
                <Image src='/about/img.png' alt='about' width={705} height={771}
                    className='hidden xl:flex' />
            </motion.div>
        </section>
    );
};

export default About;
