'use client'
import { Accordion, AccordionItem, Button, Link } from "@nextui-org/react";
import Image from "next/image";
import 'remixicon/fonts/remixicon.css'
import { Ri24HoursLine, RiHeartFill, RiRocket2Line, RiShieldUserFill, RiShieldUserLine } from "@remixicon/react";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-sm opacity-50">
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className="mb-3 text-2xl font-semibold">
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    <>

      <main className='container h-full w-full max-w-screen-xl mx-auto'>

        {/* {/* JUMBOTRON */}
        <section className="min-h-[100svh] flex flex-col justify-center items-center gap-y-6">

          <div className="h-full flex flex-col justify-center items-center flex-1 self-stretch gap-y-10 px-6 pt-24">
            <div className="text-center grid items-stretch gap-y-2">
              <p className="uppercase">Atmapurwa is a place to</p>
              <h1 className="text-5xl">Having a Friend, Colleague, or <span className='text-transparent bg-clip-text bg-gradient-to-br from-primaryGradient-start to-primaryGradient-end'>Personal Mentor</span></h1>
              <p className="text-neutral">discuss your concerns without judgment.</p>
            </div>
            <div className="flex gap-2 justify-center">
              <Button className="capitalize bg-gradient-to-tl from-primaryGradient-start to-primaryGradient-end text-white" as={Link} href="https://api.whatsapp.com/send?phone=6285797338703" >Try Demo</Button>
              {/* <Button className="capitalize bg-[#ECE9F2]" variant="flat" as={Link} href="/"><span className='text-transparent bg-clip-text bg-gradient-to-tl from-primaryGradient-start to-primaryGradient-end'>try demo</span></Button> */}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center self-stretch">
            <Image
              src={'/assets/img/atmapurwa-mobile.webp'}
              alt="Prototype"
              width={1620}
              height={1080}
              className="w-2/3 h-fit"
              priority
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            />
          </div>
        </section>

        {/* DESCRIPTION */}
        <section className="px-6 py-20 grid gap-5">
          <h2 className="text-4xl text-center">Maintains quality and intimacy</h2>
          <Image
            src={'/assets/img/balloon.webp'}
            alt="Feature"
            width={699}
            height={655}
            quality={100}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
          />

          <div className="grid gap-y-6">
            <p className="uppercase"><span className='text-transparent bg-clip-text bg-gradient-to-tl from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end'>One click away</span></p>
            <h2 className="text-3xl">Reimagine Connection. Discover AI Companionship</h2>
            <p className="text-neutral">Receive unwavering emotional support and encouragement. Witness your AI partner evolve and learn alongside you, creating a bond that deepens over time.</p>
            <div>
              <Button className="capitalize bg-gradient-to-tl from-primaryGradient-start to-primaryGradient-end text-white" as={Link} href="https://api.whatsapp.com/send?phone=6285797338703" >Try Demo</Button>
            </div>
          </div>
        </section>

        {/* FEATURE */}
        <section className="px-6 py-20 grid gap-y-14">

          <div className="grid gap-y-2">
            <div className="flex items-center gap-x-6">
              <div className="rounded-full h-9 w-9 grid items-center justify-items-center bg-gradient-to-br from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end">
                <Ri24HoursLine
                  size={24} // set custom `width` and `height`
                  color="white" // set `fill` color
                  className="my-icon" // add custom class name
                />
                {/* <Image
          src={'/assets/images/landingpage/icon/360-degrees.png'}
          alt="360 views"
          width={512}
          height={512}
          className="mt-1.5 h-6 w-6"
          quality={100}
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        /> */}
              </div>
              <h3 className="text-xl">Available 24/7</h3>
            </div>
            <p className="text-neutral">Here, you can discuss yours openly and honestly, without fear of judgment. We&apos;re here to listen and have a productive conversation. Let&apos;s get started!.</p>
          </div>
          <div className="grid gap-y-2">
            <div className="flex items-center gap-x-6">
              <div className="rounded-full h-9 w-9 grid items-center justify-items-center bg-gradient-to-br from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end">
                <RiShieldUserLine
                  size={24} // set custom `width` and `height`
                  color="white" // set `fill` color
                  className="my-icon" // add custom class name
                />
                {/* <Image
          src={'/assets/images/landingpage/icon/conversations.png'}
          alt="Answer"
          width={512}
          height={512}
          className="h-6 w-6"
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
        /> */}
              </div>
              <h3 className="text-xl">Provides a safe space</h3>
            </div>
            <p className="text-neutral">You can express yourself freely and honestly, without judgment. We provide a safe space for everything you can&apos;t say to others. Share your story. Find comfort. Be heard..</p>
          </div>
          <div className="grid gap-y-2">
            <div className="flex items-center gap-x-6">
              <div className="rounded-full h-9 w-9 grid items-center justify-items-center bg-gradient-to-br from-primaryGradient-start via-primaryGradient-center to-primaryGradient-end">
                {/* <i className="ri-user-line ri-xl text-white"></i> */}
                <RiRocket2Line
                  size={24} // set custom `width` and `height`
                  color="white" // set `fill` color
                  className="my-icon" // add custom class name
                />
              </div>
              <h3 className="text-xl">Boost your confidence</h3>
            </div>
            <p className="text-neutral">We will help you silence your inner critic and replace it with unshakeable confidence. Let&apos;s build you up, together..</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20 grid gap-y-20">
          <div className="grid gap-y-6">
            <h2 className="capitalize text-4xl">Frequently Asked Questions</h2>
            <p className="text-neutral">Have a question that is not answered? You can contact us at <Link className="inline-block underline" href={'mailto:support@virtuwed.id'}>support@virtuwed.id</Link>.
            </p>
          </div>

          <Accordion variant="splitted" style={{ paddingLeft: 0, paddingRight: 0 }} className="grid gap-y-4">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="What is Virtuship and how does it work?"
              indicator={({ isOpen }) => (isOpen ? <i className="ri-add-line ri-xl"></i> : <i className="ri-subtract-line ri-xl"></i>)} >
              <p className="text-neutral">
                Virtuship is a unique online platform designed to facilitate diverse and romantic date invitations. Users can create personalized and intimate environments to enhance their dating experiences.
              </p>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Accordion 2"
              title="How can I use Virtuship to plan a romantic date?"
              indicator={({ isOpen }) => (isOpen ? <i className="ri-add-line ri-xl "></i> : <i className="ri-subtract-line ri-xl "></i>)} >
              <p className="text-neutral">
                Simply enter your crush name on Virtuship create menu, explore various features to create a romantic setting, and send an invitation to your date. The platform provides tools to customize the persuasive date invitation and make your date invitation special.
              </p>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Accordion 3"
              title="Can I invite someone on Virtuship even if they don't have an account?"
              indicator={({ isOpen }) => (isOpen ? <i className="ri-add-line ri-xl"></i> : <i className="ri-subtract-line ri-xl"></i>)} >
              <p className="text-neutral">
                Yes, you can send an invitation to someone even if they don&apos;t have a Virtuship account. The platform provides options for guests to access an invitation date without requiring a full account setup.
              </p>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Accordion 3"
              title="What kind of virtual settings can I create on Virtuship?"
              indicator={({ isOpen }) => (isOpen ? <i className="ri-add-line ri-xl"></i> : <i className="ri-subtract-line ri-xl"></i>)} >
              <p className="text-neutral">
                Virtuship offers a range of virtual environments, from campuss environtment to scenic landscapes. Users can customize the ambiance, invitation, and other elements to match their preferences and create a memorable setting.
              </p>
            </AccordionItem>
            <AccordionItem
              key="5"
              aria-label="Accordion 3"
              title="Are there any subscription plans or costs associated with Virtuship?"
              indicator={({ isOpen }) => (isOpen ? <i className="ri-add-line ri-xl"></i> : <i className="ri-subtract-line ri-xl"></i>)} >
              <p className="text-neutral">
                Virtuship offers both free and premium features. While basic functions are accessible without charge, premium subscriptions unlock additional customization options and exclusive features to enhance the overall dating invite experience.
              </p>
            </AccordionItem>

          </Accordion>
        </section>

      </main>

      <footer className="grid px-6 pt-16 pb-6 bg-[#ECE9F2] border-t border-white/10">
        <div className="mb-16">
          <Link href={'/'} className="inline-flex items-center gap-x-2">
            {/* <Image
              src={'/assets/images/logo/virtuship-white.png'}
              alt="Feature"
              width={40}
              height={40}
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
            /> */}
            <h2 className="text-4xl">Atmapurwa</h2>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-16">
          <div className="grid content-start gap-y-4">
            <h4 className="text-lg">Product</h4>
            <ul className="grid gap-y-4 text-secondary">
              <li><Link href={'/michelle'}>Atmapurwa</Link></li>
            </ul>
          </div>

          <div className="grid content-start gap-y-6">
            <h4 className="text-lg">Company</h4>
            <ul className="grid gap-y-4 text-secondary">
              <li><Link href={'/'}>About</Link></li>
              <li><Link className="inline-flex items-center gap-x-2.5" target="_blank" href={'https://api.whatsapp.com/send?phone=6285797338703'}>Contact Us<i className="ri-arrow-right-up-line"></i></Link></li>
            </ul>
          </div>

          <div className="grid content-start gap-y-6">
            <h4 className="text-lg">Follow us</h4>
            <ul className="grid gap-y-4 text-secondary">
              <li><Link className="inline-flex items-center gap-x-2.5" target="_blank" href={'https://www.linkedin.com/'}>LinkedIn<i className="ri-arrow-right-up-line"></i></Link></li>
              <li><Link className="inline-flex items-center gap-x-2.5" target="_blank" href={'https://instagram.com/'}>Instagram<i className="ri-arrow-right-up-line"></i></Link></li>
              <li><Link className="inline-flex items-center gap-x-2.5" target="_blank" href={'https://www.youtube.com/'}>Youtube<i className="ri-arrow-right-up-line"></i></Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-sm text-center text-neutral">© 2024 Atmapurwa. All rights reserved.</p>
        </div>
      </footer>

    </>




  );
}
