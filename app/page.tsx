import { BsFillMoonStarsFill } from "react-icons/bs";
import Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import deved from "../public/hello.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

export default function Home() {
  return (
    <main className=" px-10 bg-white">
      <section className=" min-h-screen">
        {/* navigation */}
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className=" text-xl font-burtons text-teal-600">GauravKh</h1>
          <ul className=" flex items-center">
            <li className="text-teal-600">
              <BsFillMoonStarsFill className="cursor-pointer" />
            </li>
            <li>
              <a
                className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* information */}
        <div className=" text-center p-10">
          <h2 className=" text-5xl py-2 text-teal-600 font-medium">
            Gaurav Khatiwada
          </h2>
          <h3 className=" text-2xl py-2">Developer and learner.</h3>
          <p className=" text-md py-5 leading-8 text-teal-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            mollitia earum, beatae maxime commodi pariatur optio et unde eius
            error! Minima voluptatum dolores, facere accusamus neque ad
            cupiditate ut architecto?
          </p>
        </div>

        {/* icnons */}
        <div className=" text-5xl flex justify-center gap-16 py-3 text-teal-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>

        {/* profile image */}
        <div className=" relative mx-auto bg-gradient-to-b from-teal-500 overflow-hidden rounded-full w-80 h-80 mt-20 ">
          <Image src={deved} alt="gauravkh" layout="fill" objectFit="cover" />
        </div>
      </section>

      {/* projects section */}
      <section>
        <div>
          <h3 className=" text-3xl py-1">My Projects</h3>
          <p className=" text-md py-5 leading-8 text-teal-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, accusamus! Delectus nam reprehenderit voluptatibus nobis
            explicabo voluptate enim, quam nemo iusto ipsam sit officiis
            pariatur a exercitationem sequi et!
            <span className="text-gray-500">Consequatur.</span> Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Asperiores, accusamus!
            Delectus nam reprehenderit voluptatibus nobis explicabo voluptate
            enim, quam <span className="text-gray-500">Consequatur.</span> nemo
            iusto ipsam sit officiis pariatur a exercitationem sequi et!
            Consequatur.
          </p>
          <p className=" text-md py-5 leading-8 text-teal-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Asperiores, accusamus! Delectus nam reprehenderit voluptatibus nobis
            explicabo voluptate enim, quam nemo iusto ipsam sit officiis
            pariatur a exercitationem sequi et!
            <span className="text-teal-500">Consequatur.</span> Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Asperiores, accusamus!
            Delectus nam reprehenderit voluptatibus nobis explicabo voluptate
            enim, quam <span className="text-teal-500">Consequatur.</span> nemo
            iusto ipsam sit officiis pariatur a exercitationem sequi et!
            Consequatur.
          </p>
        </div>

        {/* cards start */}
        <div>
          {/* card 1 */}
          <div className="yoyocard text-center shadow-lg p-10 rounded-xl my-10">
            <Image
              alt=""
              src={design}
              width={100}
              height={100}
              style={{
                margin: "auto",
              }}
            />
            <h3 className="text-lg font-medium pt-8 pb-2">Graphics</h3>
            <p className="py-2 text-teal-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <h4 className="py-4 text-teal-600">Tools I used</h4>
            <p className="py-1 text-teal-600">Photoshop</p>
            <p className="py-1 text-teal-600">Figma</p>
          </div>

          {/* card 2 */}
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image alt="" src={code} width={100} height={100}  style={{
                margin: "auto",
              }} />
            <h3 className="text-lg font-medium pt-8 pb-2">Graphics</h3>
            <p className="py-2 text-teal-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <h4 className="py-4 text-teal-600">Tools I used</h4>
            <p className="py-1 text-teal-600">Photoshop</p>
            <p className="py-1 text-teal-600">Figma</p>
          </div>

          {/* card 3 */}
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image alt="" src={consulting} width={100} height={100}  style={{
                margin: "auto",
              }} />
            <h3 className="text-lg font-medium pt-8 pb-2">Graphics</h3>
            <p className="py-2 text-teal-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <h4 className="py-4 text-teal-600">Tools I used</h4>
            <p className="py-1 text-teal-600">Photoshop</p>
            <p className="py-1 text-teal-600">Figma</p>
          </div>
        </div>
      </section>
    </main>
  );
}
