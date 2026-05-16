/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Destinations } from './components/Destinations';
import { Packages } from './components/Packages';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { BookingAndContact } from './components/BookingAndContact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-ocean text-sand min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Destinations />
      <WhyChooseUs />
      <Packages />
      <Gallery />
      <Testimonials />
      <BookingAndContact />
      <Footer />
    </div>
  );
}
