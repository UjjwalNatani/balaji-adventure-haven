
import React from "react";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Terms & Conditions | Shri Balaji Agriculture Camp</title>
      </Helmet>
      
      {/* Hero Section */}
      <div className="bg-forest py-24 px-4 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Important guidelines and policies for visitors
          </p>
        </div>
      </div>
      
      {/* Terms Content */}
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2>General Terms</h2>
            <p>
              Welcome to Shri Balaji Agriculture Camp. By visiting our premises or booking our facilities, you agree to abide by the following terms and conditions:
            </p>
            
            <h3>Booking and Cancellations</h3>
            <ul>
              <li>Advance booking is required for all services and stays.</li>
              <li>A 50% advance payment is required to confirm your booking.</li>
              <li>Cancellations made 7 days before the scheduled date will receive a 75% refund.</li>
              <li>Cancellations made within 3-7 days will receive a 50% refund.</li>
              <li>Cancellations made less than 3 days before the scheduled date will not be eligible for a refund.</li>
            </ul>
            
            <h3>Property Usage</h3>
            <ul>
              <li>Guests are responsible for maintaining the cleanliness of the facility.</li>
              <li>Any damage to property will result in appropriate charges.</li>
              <li>Use of facilities is restricted to booked areas only.</li>
              <li>Bringing outside food and beverages may be subject to additional charges.</li>
              <li>Smoking is only allowed in designated areas.</li>
              <li>The management reserves the right to ask guests to leave in case of unruly behavior.</li>
            </ul>
            
            <h3>Safety Regulations</h3>
            <ul>
              <li>Children must be supervised by adults at all times.</li>
              <li>Swimming pool usage is at your own risk and only during designated hours.</li>
              <li>Participation in adventure activities requires signing a waiver form.</li>
              <li>Follow all safety instructions provided by our staff.</li>
              <li>The management is not liable for any accidents due to negligence of safety instructions.</li>
            </ul>
            
            <h3>Marriage Garden/Event Booking</h3>
            <ul>
              <li>The exact number of guests must be communicated at least 3 days before the event.</li>
              <li>Music and sound systems must be turned off by 10:00 PM.</li>
              <li>Additional hours may be subject to extra charges.</li>
              <li>Decorations should not damage the property.</li>
            </ul>
            
            <h3>Privacy Policy</h3>
            <p>
              We respect your privacy and will protect your personal information. Your contact details may be used for sending promotional information about our services but will not be shared with third parties without your consent.
            </p>
            
            <h3>Changes to Terms</h3>
            <p>
              Shri Balaji Agriculture Camp reserves the right to modify these terms at any time. Updated terms will be available on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
