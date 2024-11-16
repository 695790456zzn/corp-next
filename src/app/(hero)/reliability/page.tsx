import React from "react";
import reliabilitySrc from '/public/reliability.jpg'
import Hero from '@/components/hero'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Reliability",
};

export default function Page() {
  return (
    <Hero
      imgUrl={reliabilitySrc}
      altTxt="Reliability"
      content="Reliability~~"
    />
  );
}
