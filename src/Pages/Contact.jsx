import React from "react";

const Contact = () => {
  return (
    <main id="contact">
      <section class="intro">
        <h2>Say Hello!</h2>
      </section>
      <section class="content">
        <section class="description">
          <p>
            Hi there! Interested in working on a project? Have some feedback on
            anything you’ve seen here? Drop me a line below, or reach out to me
            on socials!
          </p>
        </section>
        {/* <!-- formatted by contact.scss --> */}
        <section class="contact-form">
          <form name="contact" method="POST" data-netlify="true">
            <div class="form-name">
              <label for="name">Name:</label>
              <br />
              <input
                id="name"
                type="text"
                name="name"
                placeholder="You're Name here"
                required
              />
            </div>
            <div class="form-email">
              <label for="email">Return Email Address:</label>
              <br />
              <input
                id="email"
                type="email"
                name="email"
                placeholder="You're email address here"
                required
              />
            </div>
            <div class="form-message">
              <label for="message">Message:</label>
              <br />
              <textarea
                id="message"
                name="message"
                placeholder="You're message here"
              ></textarea>
            </div>
            <div class="form-submit">
              <button type="submit">Submit</button>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Contact;
