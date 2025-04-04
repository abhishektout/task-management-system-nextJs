import { LogoImage } from "@/assets";
import { Facebook, Globe, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

  return <>
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-8 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <Image className="w-10 h-10 mr-2" alt="logo" src={LogoImage} />
              <span className="text-xl font-medium md:text-3xl">
              Task Management Tool
              </span>
            </div>

            <p
              className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left"
            >
              Stay Organized, Stay Ahead – Manage Your Tasks Seamlessly with Throughout Task Management!
            </p>


            <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
              <li>
                <Link
                  href="https://www.facebook.com/throughouttechnologies/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span className="sr-only">Facebook</span>
                  <Facebook />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/throughout_technologies/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span className="sr-only">Instagram</span>
                  <Instagram />
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.linkedin.com/company/throughouttechnologiespvt.ltd./?originalSubdomain=in"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span className="sr-only">Linkedin</span>
                  <Linkedin />
                </Link>
              </li>

              <li>
                <Link
                  href="https://throughouttechnologies.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span className="sr-only">Website</span>
                  <Globe />
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4"
          >
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Us</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      Our Mission
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      How It Works
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      Meet the Team
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      User Guide
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      Careers
                    </Link>
                  </li>
                </ul>

              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      Task Scheduling
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      Team Collaboration
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      Time Tracking
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      Project Management
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      Workflow Automation
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      Reporting & Analytics
                    </Link>
                  </li>
                </ul>
              </nav>

            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      Help Center
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      User Documentation
                    </Link>
                  </li>

                  <li>
                    <Link className="text-white transition hover:text-white/75" href="/">
                      Contact Support
                    </Link>
                  </li>

                  <li>
                    <Link className="flex group justify-center sm:justify-start gap-1.5" href="/">
                      <span className="text-white transition group-hover:text-white/75">
                        Live Chat
                      </span>

                      <span className="relative flex w-2 h-2 -mr-2">
                        <span
                          className="absolute inline-flex w-full h-full bg-teal-400 rounded-full opacity-75 animate-ping"
                        ></span>
                        <span
                          className="relative inline-flex w-2 h-2 bg-teal-500 rounded-full"
                        ></span>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>

            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>
              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    className="flex items-center justify-center sm:justify-start gap-1.5 group"
                    href="mailto:support@throughouttasks.com"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>

                    <span className="text-white transition group-hover:text-white/75">
                      throughouttasks.com
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    className="flex items-center justify-center sm:justify-start gap-1.5 group"
                    href="tel:+18001234567"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-white shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>

                    <span className="text-white transition group-hover:text-white/75">
                      +1 800 123 4567
                    </span>
                  </Link>
                </li>

                <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-white shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>

                  <address className="-mt-0.5 not-italic text-white">
                    103, Sanghi Manor, Yeshwant Niwas Rd, Maan Sarovar, Indore, Madhya Pradesh 452003
                  </address>
                </li>
              </ul>

            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>

              <Link
                className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                href="/"
              >
                Terms & Conditions
              </Link>

              <span>&middot;</span>

              <Link
                className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                href="/"
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2022 Throughout Technologies
            </p>
          </div>
        </div>
      </div>
    </footer>

  </>
}