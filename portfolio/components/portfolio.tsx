import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"

export default function Portfolio() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white py-4 px-6 md:px-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            alt="Aymen Bensoltana"
            className="rounded-full"
            height={40}
            src="./next.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width={40}
          />
          <h1 className="text-2xl font-bold">Aymen Bensoltana</h1>
        </div>

        <Button className="md:hidden" variant="outline">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="md:hidden" size="icon" variant="ghost">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-gray-900 text-white p-6" side="left">
          <div className="flex flex-col gap-6">
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Experience
            </Link>
            <Link className="hover:underline" href="#">
              Skills
            </Link>
            <Link className="hover:underline" href="#">
              Projects
            </Link>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <main className="flex-1">
        <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 md:px-10" id="about">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Hi, I'm Aymen Bensoltana, a passionate and versatile full-stack developer with a diverse range of skills
                in web development, mobile development, desktop applications, data science, and machine learning. I'm
                dedicated to creating innovative and user-friendly solutions that solve real-world problems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I hold a Bachelor's degree in Computer Science from the University of California, Berkeley, where I
                honed my technical skills and developed a deep understanding of computer science principles. Throughout
                my academic and professional journey, I've had the opportunity to work on a wide range of projects, from
                building responsive web applications to developing cutting-edge machine learning models.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I'm constantly exploring new technologies and techniques to stay ahead of the curve, and I'm passionate
                about sharing my knowledge with the community. In my free time, you can find me contributing to
                open-source projects, attending tech meetups, or exploring the great outdoors.
              </p>
              <div className="mt-4 flex gap-4">
                <Button variant="outline">
                  <GlobeIcon className="h-4 w-4 mr-2" />
                  English
                </Button>
                <Button variant="outline">
                  <GlobeIcon className="h-4 w-4 mr-2" />
                  Français
                </Button>
                <Button variant="outline">
                  <GlobeIcon className="h-4 w-4 mr-2" />
                  العربية
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
                <video
                  className="rounded-lg shadow-md"
                  height={300}
                  width={600}
                  style={{
                    objectFit: "cover",
                  }}
                  autoPlay
                  loop
                  muted
                >
                  <source src="./avatar.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            </div>
          </div>
        </section>
        <section className="py-16 px-6 md:px-10" id="experience">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
            <div className="grid gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">MedicalPortfolio </p>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>
                    Developed and maintained responsive web applications using React, Node.js, and various supporting
                    technologies.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to design and implement scalable and secure backend
                    systems.
                  </li>
                  <li>Optimized application performance and implemented best-in-class user experiences.</li>
                  <li>
                    Participated in agile development processes, including sprint planning, code reviews, and continuous
                    integration.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">AI Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">MedicalPortfolio </p>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>Developed and implemented machine learning models to analyze complex datasets.</li>
                  <li>
                    Collaborated with cross-functional teams to identify business insights and data-driven solutions.
                  </li>
                  <li>Presented findings and recommendations to stakeholders in a clear and concise manner.</li>
                  <li>Gained experience in data preprocessing, feature engineering, and model evaluation.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">ChartFrog </p>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>
                    Developed and maintained responsive web applications using React, Node.js, and various supporting
                    technologies.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to design and implement scalable and secure backend
                    systems.
                  </li>
                  <li>Optimized application performance and implemented best-in-class user experiences.</li>
                  <li>
                    Participated in agile development processes, including sprint planning, code reviews, and continuous
                    integration.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">StellaHeyStella </p>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>
                    Developed and maintained responsive web applications using React, Node.js, and various supporting
                    technologies.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to design and implement scalable and secure backend
                    systems.
                  </li>
                  <li>Optimized application performance and implemented best-in-class user experiences.</li>
                  <li>
                    Participated in agile development processes, including sprint planning, code reviews, and continuous
                    integration.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Intern AI Research</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">CDTA </p>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>Developed and implemented machine learning models to analyze complex datasets.</li>
                  <li>
                    Collaborated with cross-functional teams to identify business insights and data-driven solutions.
                  </li>
                  <li>Presented findings and recommendations to stakeholders in a clear and concise manner.</li>
                  <li>Gained experience in data preprocessing, feature engineering, and model evaluation.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Head of Dev Department</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">CSCClub </p>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>
                    Managed and led a team of developers to build and maintain various web and mobile applications.
                  </li>
                  <li>Collaborated with stakeholders to define project requirements and roadmaps.</li>
                  <li>Implemented agile development practices and ensured efficient project delivery.</li>
                  <li>Provided technical guidance and mentorship to junior developers.</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Full Stack Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">Needder </p>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>
                    Developed and maintained responsive web applications using React, Node.js, and various supporting
                    technologies.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to design and implement scalable and secure backend
                    systems.
                  </li>
                  <li>Optimized application performance and implemented best-in-class user experiences.</li>
                  <li>
                    Participated in agile development processes, including sprint planning, code reviews, and continuous
                    integration.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-16 px-6 md:px-10" id="skills">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Front End Development</h3>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Tailwind</li>
                  <li>Bootstrap</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Backend Development</h3>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>PHP</li>
                  <li>Python with Flask</li>
                  <li>Python with Django</li>
                  <li>Python with FastAPI</li>
                  <li>Node.js with Express</li>
                  <li>Adonis</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Mobile Development</h3>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>React Native</li>
                  <li>Python with Kivy</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Desktop Development</h3>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>Python</li>
                  <li>C++</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Database Management</h3>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>SQLite</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>Prisma</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold mb-4">Data Science and Machine Learning</h3>
                <ul className="text-gray-600 dark:text-gray-400 list-disc pl-6 space-y-2">
                  <li>TensorFlow</li>
                  <li>Pandas</li>
                  <li>NumPy</li>
                  <li>Scikit-learn</li>
                  <li>Keras</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function GlobeIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function MenuIcon(props : React.SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
