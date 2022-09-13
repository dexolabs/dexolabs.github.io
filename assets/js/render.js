import { portfolioData, skillsData, testimonialsData } from "./data.js";

(() => {
  /** SKILLS Rendering */
  const skillsBox = document.querySelector("#skills-box");
  let skillsHTML = ``;
  skillsData.map((item) => {
    skillsHTML += `<div class="col-lg-6">
      <div class="progress">
        <span class="skill">${item.name} <i class="val">${item.progress}%</i></span>
        <div class="progress-bar-wrap">
          <div class="progress-bar" role="progressbar" aria-valuenow="${item.progress}" aria-valuemin="0" aria-valuemax="100">
          </div>
        </div>
      </div>
    </div>`;
  });
  skillsBox.innerHTML = skillsHTML;

  /** PORTFOLIO Rendering */
  const portfolioBox = document.querySelector("#portfolio-projects");
  let portfolioHTML = ``;
  portfolioData.map((item) => {
    portfolioHTML += `<div class="col-lg-4 col-md-6 portfolio-item ${item.category_classname}">
      <div class="portfolio-wrap">
        <img src="./assets/img/portfolio/${item.poster_path}" class="img-fluid" alt="${item.name}" />
        <div class="portfolio-links">
          <a href="./assets/img/portfolio/${item.poster_path}" data-gallery="portfolioGallery"
            class="portfolio-lightbox" title="${item.name}"><i class='bx bx-search-alt-2'></i></a>
          <a href="./portfolio-details.html?pid=${item.pid}" title="More Details"><i class="bx bx-link"></i></a>
        </div>
      </div>
    </div>`;
  });
  portfolioBox.innerHTML = portfolioHTML;

  /** TESTIMONIALS Rendering */
  const testimonialsBox = document.querySelector("#testimonials-item-box");
  let testimonailsHTML = ``;
  testimonialsData.map((item) => {
    testimonailsHTML += `<div class="swiper-slide">
      <div class="testimonial-item">
        <p>
          <i class="bx bxs-quote-alt-left quote-icon-left"></i>
          ${item.recommendation}
          <i class="bx bxs-quote-alt-right quote-icon-right"></i>
        </p>
        <img src="./assets/img/testimonials/${item.image_url}" class="testimonial-img" alt="${item.name} - ${item.role}" />
        <h3>${item.name}</h3>
        <h4>${item.role}</h4>
      </div>
    </div>`;
  });
  testimonialsBox.innerHTML = testimonailsHTML;
})();
