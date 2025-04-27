
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Contact Us | Shri Balaji Agriculture Camp</title>
      </Helmet>
      
      {/* Hero Section */}
      <div className="bg-forest py-24 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Have questions or want to make a reservation? Get in touch with us!
          </p>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-dark">Send Us a Message</h2>
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-dark">Contact Information</h2>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-forest rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <p className="text-gray-700">+91 6377729307</p>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start">
                  <div className="bg-forest rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <p className="text-gray-700">sbagricamp@gmail.com</p>
                  </div>
                </div>
                
                {/* Address */}
                <div className="flex items-start">
                  <div className="bg-forest rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Address</h3>
                    <p className="text-gray-700">
                      Village Singod, Tehsil Govindgarh Chomu, Jaipur, Rajasthan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="mt-8 h-[300px] bg-gray-200 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.99973450298!2d75.6504698742281!3d26.88514167456319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1680876645903!5m2!1sen!2sin" 
                width="100%" 
                height="300" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shri Balaji Agriculture Camp Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
