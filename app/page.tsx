'use client';
import { TextGenerateEffect } from '@/app/components/ui/text-generate-effect';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="flex justify-between items-center w-full py-3 px-2"
      >
        <Image src="white_logo.svg" width="80" height="80" alt={''} />
      </motion.header>
      <main className="flex flex-col min-h-screen overflow-hidden pl-8">
        <section className="w-full flex flex-col flex-grow items-center justify-end py-8">
          <div className="">
            <TextGenerateEffect
              words={'This site is currently going through some changes. 👷🏽‍♂️ 🚧'}
            />
          </div>
        </section>
        <section className="w-full flex flex-col flex-auto items-center py-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col gap-5 items-center"
          >
            <p className="dark:text-white text-black text-center text-lg md:text-2xl flex-shrink leading-none p-0">
              Need to get in touch with me?
            </p>
            <p className="dark:text-white text-black text-center text-lg md:text-2xl">
              Feel free to connect.
            </p>
            <ul className="flex gap-4 mt-4 flex-grow text-base md:text-lg">
              <li>
                <a
                  className="dark:text-white text-gray-400 transition-all duration-500 text-white hover:text-linkedin-blue"
                  href="https://linkedin.com/in/klaven-jones"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition-all duration-500 text-white hover:text-gray-500"
                  href="https://github.com/klavenjones"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition-all duration-500 text-white hover:text-twitter-blue"
                  href="https://twitter.com/Klavenj"
                  target="_blank"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="text-gray-400 transition-all duration-500 text-white hover:text-email-red"
                  href="mailto:hey@klavenjones.com"
                >
                  Email
                </a>
              </li>
            </ul>
          </motion.div>
        </section>
      </main>
    </>
  );
}
