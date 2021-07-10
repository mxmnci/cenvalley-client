import React from "react";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ContactUs = (props) => {
  return (
    <Layout>
      <article>
        {typeof window !== "undefined" && (
          <MapContainer
            center={[38.73317, -121.29422]}
            zoom={6}
            scrollWheelZoom={false}
            className="h-96 z-0"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[38.73317, -121.29422]}>
              <Popup>
                <div className="text-center">
                  <h3 className="font-bold">
                    Central Valley Engineering & Asphalt, Inc.
                  </h3>
                  <a
                    href="https://www.google.com/maps/place/Central+Valley+Engineering+%26+Asphalt,+Inc./@38.733264,-121.2976137,17z/data=!3m1!4b1!4m5!3m4!1s0x809b206ef068de6d:0xdc824931346be5ee!8m2!3d38.733264!4d-121.295425"
                    className="italic"
                  >
                    216 Kenroy Lane, Roseville, CA 95678
                  </a>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </article>
      <Wrapper>
        <section className="py-16">
          <ContactForm />
        </section>
      </Wrapper>
    </Layout>
  );
};

export default ContactUs;
