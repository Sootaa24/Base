// swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: ".testimonial-next",
    prevEl: ".testimonial-prev",
  },
});

try {
  if (typeof Isotope !== "undefined") {
    var projectsWrapper = document.querySelector(".projects-wrapper");
    if (projectsWrapper) {
      var iso = new Isotope(projectsWrapper, {
        itemSelector: ".project-item",
        layoutMode: "masonry",
        masonry: {
          columnWidth: ".project-sizer",
        },
      });

      // Wait for images to load before laying out
      if (typeof imagesLoaded !== "undefined") {
        imagesLoaded(projectsWrapper, function () {
          iso.layout();
        });
      }

      var projectTabBTN = document.querySelectorAll(".project-tab-btn");

      projectTabBTN.forEach(function (btn) {
        btn.addEventListener("click", function () {
          projectTabBTN.forEach((el) => {
            el.style.backgroundColor = "";
            el.style.color = "";
            el.removeAttribute("data-active");
          });
          btn.style.backgroundColor = "#4e6bff";
          btn.style.color = "white";
          btn.setAttribute("data-active", "true");
          var selector = btn.getAttribute("data-filter");
          iso.arrange({ filter: selector });
          // Re-layout after filter
          if (typeof imagesLoaded !== "undefined") {
            imagesLoaded(projectsWrapper, function () {
              iso.layout();
            });
          }
        });

        if (btn.getAttribute("data-filter") === "*") {
          btn.style.backgroundColor = "#4e6bff";
          btn.style.color = "white";
          btn.setAttribute("data-active", "true");
        }
      });
    }
  } else console.error("Isotope is not defined. Check CDN link.");
} catch (e) {
  console.error("Error initializing Isotope:", e);
}

if (typeof refreshFsLightbox === "function") {
  try {
    refreshFsLightbox();
  } catch (e) {
    console.error("Error refreshing fslightbox:", e);
  }
} else
  console.error(
    "refreshFsLightbox is not defined. Check fslightbox initialization."
  );

function setup() {
  return {
    isNavOpen: false,
    billPlan: "monthly",
    plans: [
      {
        name: "Starter",
        price: { monthly: 29, annually: 29 * 12 - 199 },
        features: [
          "400 GB Storaget",
          "Unlimited Photos & Videos",
          "Exclusive Support",
        ],
      },
      {
        name: "Growth Plan",
        price: { monthly: 59, annually: 59 * 12 - 100 },
        features: [
          "400 GB Storaget",
          "Unlimited Photos & Videos",
          "Exclusive Support",
        ],
      },
      {
        name: "Business",
        price: { monthly: 139, annually: 139 * 12 - 100 },
        features: [
          "400 GB Storaget",
          "Unlimited Photos & Videos",
          "Exclusive Support",
        ],
      },
    ],
  };
}
