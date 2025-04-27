
import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactBanner = () => {
  return (
    <section className="py-16 bg-forest text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Item */}
          <div className="flex flex-col items-center text-center">
            <Phone className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-lg">+91 6377729307</p>
          </div>

          {/* Contact Item */}
          <div className="flex flex-col items-center text-center">
            <Mail className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-lg">sbagricamp@gmail.com</p>
          </div>

          {/* Contact Item */}
          <div className="flex flex-col items-center text-center">
            <MapPin className="h-10 w-10 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-lg">Village Singod, Tehsil Govindgarh Chomu, Jaipur</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-block bg-white text-forest hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg hover-grow"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
