import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <section id="about">
        <div class="about-me">
          <h2>About Me</h2>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam. "
          </p>
        </div>
        <div class="contact-details">
          <h2>Contact details</h2>
          <p>
            <span>Jonathan Doe</span>
            <br />
            <span>
              1600 Amphitheatre Parkway
              <br />
              Mountain View, CA 94043 US
            </span>
            <br />
            <span>(123)456-7890</span>
            <br />
            <span>anyone@website.com</span>
          </p>
        </div>
        <div class="download">
          <p>
            <a href="#" class="button">
              <i class="fa fa-download"></i>Download Resume
            </a>
          </p>
        </div>
      </section>
    );
  }
}
