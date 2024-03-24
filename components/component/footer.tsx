"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white text-gray-600">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-6 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <Image
              alt="Company logo"
              className="h-10"
              height="40"
              src="/placeholder.svg"
              style={{
                aspectRatio: "160/40",
                objectFit: "cover",
              }}
              width="160"
            />
            <div className="flex space-x-2">
              <FacebookIcon className="h-6 w-6 text-blue-600" />
              <TwitterIcon className="h-6 w-6 text-blue-400" />
              <LinkedinIcon className="h-6 w-6 text-blue-500" />
              <InstagramIcon className="h-6 w-6 text-pink-500" />
              <YoutubeIcon className="h-6 w-6 text-red-600" />
            </div>
            <div className="mt-8 flex">
              <Input className="mr-4" placeholder="Email address" />
              <Button>Subscribe</Button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-4 xl:grid-cols-4">
            <div className="md:mt-0">
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About Us</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Who we are
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Management Team
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Client Testimonials
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Awards and Recognition
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Corporate Social Responsibility
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Residential
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Value Added Services
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Land Services
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Retail
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Investment Banking
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Hospitality
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    View All
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Technology</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    ACRM
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    ASTRA
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    ACP
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    ANACITY
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    myHQ
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Upflex India
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Projects</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Residential
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Commercial
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Trespect
                  </Link>
                </li>
              </ul>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mt-10">Insights</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Research Reports
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Knowledge Exchange
                  </Link>
                </li>
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    Blogs
                  </Link>
                </li>
              </ul>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mt-10">Media</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link className="text-base text-gray-500 hover:text-gray-900" href="#">
                    In the News
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            We value diversity within ANAROCK Group and are committed to offering equal opportunities in employment. We
            do not discriminate against any team member or applicant for employment on the basis of nationality, race,
            colour, religion, caste, gender identity / expression, sexual orientation, disability, social origin and
            status, indigenous status, political opinion, age, marital status or any other personal characteristics or
            status. ANAROCK Group values all talent and will do its utmost to hire, nurture and grow them.
          </p>
          <p className="mt-8 text-base text-gray-400 xl:text-center">
            © 2024 ANAROCK Property Consultants Pvt Ltd. All Rights Reserved. |{""}
            <Link className="text-gray-500 hover:text-gray-900" href="#">
              Privacy Policy
            </Link>{""}
            |{""}
            <Link className="text-gray-500 hover:text-gray-900" href="#">
              Terms of Use
            </Link>{""}
            |{""}
            <Link className="text-gray-500 hover:text-gray-900" href="#">
              RERA
            </Link>
          </p>
          <p className="mt-8 text-base text-gray-400 xl:text-center">
            Designed, Conceptualized and Developed by{""}
            <Link className="text-gray-500 hover:text-gray-900" href="#">
              Openspace Services Pvt. Ltd.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}


function FacebookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function TwitterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function InstagramIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function YoutubeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}
