import React from "react";
import Title from "../Title/Title";
import { FaLocationDot, FaPhone, FaWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const message = e.target.message.value;
    e.target.reset();
    toast.success("Message Sent Successfully");
  };
  const email = "mehedihasanmunna516@gmail.com";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  const whatsappNumber = "+8801826673496";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  return (
    <>
      <Title title="Contact"></Title>
      <div className="md:flex items-center justify-evenly mb-12 mt-10">
        <div className="space-y-5 md:w-5/12">
          <div className="flex items-center text-xl gap-3 font-bold">
            <FaLocationDot></FaLocationDot>{" "}
            <h1 className="text-royal-blue">Uttara, Dhaka ,Bangladesh</h1>
          </div>
          <div className="flex items-center text-xl gap-3 font-bold">
            <FaWhatsapp className="text-2xl"></FaWhatsapp>{" "}
            <a
              className="text-royal-blue cursor-pointer hover:underline"
              href={whatsappUrl}
              target="_blank"
            >
              01826673496
            </a>
          </div>
          <div className="flex items-center text-xl gap-3 font-bold">
            <MdEmail className="text-2xl"></MdEmail>{" "}
            <a
              className="text-royal-blue cursor-pointer hover:underline"
              href={gmailUrl}
              target="_blank"
            >
              mehedihasanmunna516@gmail.com
            </a>
          </div>

          <div className="flex items-center text-xl gap-3 font-bold">
            <FaPhone className="text-2xl"></FaPhone>
            <a className="text-royal-blue cursor-pointer">01826673496</a>
          </div>
        </div>
        {/* divider */}
        <div className="divider md:divider-horizontal md:w-2/12">OR</div>
        {/* Form */}
        <div className="md:w-5/12">
          <form onSubmit={handleSubmit}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-navy font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-navy font-medium">
                  Message
                </span>
              </label>
              <input
                type="text"
                name="message"
                placeholder="message"
                className="input input-bordered"
                required
              />
            </div>
            <input
              className="btn bg-royal-blue text-white hover:bg-navy-light mt-3"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
