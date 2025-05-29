import { LitElement, html } from "../../assets/js/vendor/lit.js";

export class Header extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="header-four-wrapper">
              <div class="nav-area">
                <nav>
                  <ul class='parent-nav'>
                  <li class="has-dropdown">
                      <a class="nav-link" href="#"
                        >Rates</a
                      >
                      <ul class="submenu parent-nav with-border">
                        <li>
                          <a href="rates.html"
                            ><i class="fa-sharp fa-regular fa-chevron-right"></i
                            >Greens Fees</a
                          >
                        </li>
                        <li>
                          <a href="lessons.html"
                            ><i class="fa-sharp fa-regular fa-chevron-right"></i
                            >Lessons</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="nav-link" href="membership.html">Membership </a>
                    </li>

                    <li>
                      <a class="nav-link" href="weddings.html">Weddings & Banquets</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div class="button-area-right-header">
                <div class="menu-btn-toggle">
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="14" width="20" height="2" fill="#1F1F25"></rect>
                    <rect y="7" width="20" height="2" fill="#1F1F25"></rect>
                    <rect width="20" height="2" fill="#1F1F25"></rect>
                  </svg>
                </div>
              </div>
              <a href="index.html" class="logo">
                <img
                  src="/assets/images/logo/copper-ridge-logo.svg"
                  alt=""
                  class="copper-ridge-logo"
                />

                <img
                  src="/assets/images/logo/copper-ridge-logo-long.svg"
                  alt=""
                  class="copper-ridge-logo-long"
                />
              
              </a>
              <div class="nav-area">
                <nav>
                  <ul class='parent-nav'>
                    <li class="has-dropdown">
                      <a class="nav-link" href="#"
                        >Events</a
                      >
                      <ul class="submenu parent-nav with-border">
                        <li>
                          <a href="tournaments.html"
                            ><i class="fa-sharp fa-regular fa-chevron-right"></i
                            >Tournaments</a
                          >
                        </li>
                        <li>
                          <a href="junior-golf-camp.html"
                            ><i class="fa-sharp fa-regular fa-chevron-right"></i
                            >Junior Golf Camp</a
                          >
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a class="nav-link" href="contact.html"> Contact </a>
                    </li>
                    <li>
                      <a
                        href="book-tee-time.html"
                        class="rts-btn btn-primary my-btn book-tee-time-btn"
                      >
                        Book Tee Time
                        <img
                          class="injectable"
                          src="assets/images/service/icons/13.svg"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("my-header", Header);
