import { LitElement, html } from "../../assets/js/vendor/lit.js";

export class CTA extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="rts-cts-area">
        <div class="container">
          <div class="row">
            <div class="col-gl-12">
              <div class="cta-one-wrapper">
                <div class="left-area">
                  <h3 class="title">
                    Have 2 or More Players?
                  </h3>
                  <p>
                    Click here to book online and save.
                  </p>
                  <a
                    href="book-tee-time.html"
                    class="rts-btn btn-primary cta-button no-underline"
                    
                  >
                    Book Tee Time
                    <img
                      class="injectable"
                      src="assets/images/service/icons/13.svg"
                      alt=""
                    />
                  </a>
                </div>
                <div class="right" >
                 <div class="right-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("my-cta", CTA);
