import { portfolioData } from "./data.js";

(() => {
  /** --404 Not Found-- HTML */
  let error404HTML = `<div class="container Error-404">
    <div class="row">
      <div class="col-lg-6 offset-lg-3">
        <img src="./assets/img/404.png" class="img-fluid" alt="404 ERROR" />
      </div>
      <div class="col-lg-8 offset-lg-2">
        <p>Project Not Found may be because of ProjectID is Invalid or Not Found.</p>
        <p>Either you should visit our <a href="./index.html" rel="noopener noreferrer">Home Page</a> or <a
            href="./index.html#portfolio" rel="noopener noreferrer">Portfolio Section</a>.</p>
      </div>
    </div>
  </div>`;

  const params = new URLSearchParams(window.location.search);
  const portfolioDetailsBox = document.querySelector("#portfolio-details");

  if (params.has("pid")) {
    const pid = params.get("pid");
    let flag = false;
    portfolioData.map((item) => {
      if (pid === item.pid) {
        /** --Tech. Used-- HTML */
        let techUsedHTML = ``;
        [...item.technologies].map((skill) => {
          techUsedHTML += `<div class="chip">${skill}</div>`;
        });

        /** --Screenshot-- HTML */
        let screenshotHTML = ``;
        [...item.images].map((img, idx) => {
          screenshotHTML += `<div class="swiper-slide">
                      <img src="./assets/img/portfolio/${img}" alt="${
            item.name
          } -- ${idx + 1}" />
                  </div>`;
        });

        /** --Portfolio Details-- HTML */
        let portfolioDetailsHTML = `<div class="container" data-key="Project-${
          item.pid
        }">
  
              <div class="row gy-4">
                <div class="col-lg-8">
                  <div class="portfolio-details-slider swiper-container">
                    <div class="swiper-wrapper align-items-center">
                      ${screenshotHTML}
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
      
                  <div class="portfolio-description">
                    <h2>${item.name}</h2>
                    <p class="portfolio-project-url">
                      <strong>Project URL:</strong>
                      <a href="${item.demo_link}" target="_blank"
                        rel="noopener noreferrer">${item.demo_link}</a>
                    </p>
                    <p>${item.description}</p>
                  </div>
                </div>
      
                <div class="col-lg-4">
                  <div class="portfolio-info">
                    <h3>Project Information</h3>
                    <ul>
                      <li><strong>Category</strong>: ${item.category_name}</li>
                      <li><strong>Client</strong>: ${item.client}</li>
                      <li><strong>Project Date</strong>: ${
                        item.project_date
                      }</li>
                      <li><strong>Project Demo</strong>: <a href="${
                        item.demo_link
                      }" target="_blank" rel="noopener noreferrer">Click Here</a>
                      </li>
                      <li><strong>Source Code</strong>: 
                      ${
                        item.source_code !== ""
                          ? `<a href="${item.source_code}" target="_blank" rel="noopener noreferrer">Click Here</a>`
                          : "Not Available"
                      }
                      </li>
                      <li><strong>Tech. Used</strong><i class='bx bxs-chevron-down' style="transform: translateY(1px);"></i>
                        <br />
                        <div id="skills-chips" class="mt-1">
                          ${techUsedHTML}
                        </div>
                      </li>
                    </ul>
                  </div>
      
                </div>
              </div>
      
              <div class="row gy-4">
      
                <div class="col-lg-12 portfolio-overview">
                  ${
                    item.youtube_overview !== "" ||
                    item.homescreen_overview !== ""
                      ? `<div class="overview-heading">
                          <span>Overview</span>
                          <span></span>
                        </div>`
                      : ""
                  }
      
                  ${
                    item.youtube_overview !== ""
                      ? `${item.youtube_overview}`
                      : ""
                  }
      
                  ${
                    item.homescreen_overview !== ""
                      ? `<div class="homescreen_demo">
                            <img src="./assets/img/portfolio/${item.homescreen_overview}" alt="${item.name}" loading="lazy" />
                        </div>`
                      : ""
                  }
                </div>
      
              </div>
      
            </div>`;

        portfolioDetailsBox.innerHTML = portfolioDetailsHTML;
        flag = true;
        return false;
      }
    });

    // If couldn't found ProjectID
    if (!flag) {
      portfolioDetailsBox.innerHTML = error404HTML;
    }
  } else {
    portfolioDetailsBox.innerHTML = error404HTML;
  }
})();
