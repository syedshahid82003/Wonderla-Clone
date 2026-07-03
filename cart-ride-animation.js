

(function () {
  // Injected once, styles the coaster car + track
  const style = document.createElement("style");
  style.textContent = `
    .ride-track {
      position: fixed;
      left: 0; top: 0;
      width: 100vw; height: 100vh;
      pointer-events: none;
      z-index: 9998;
    }
    .ride-track path {
      fill: none;
      stroke: rgba(0,0,0,0.15);
      stroke-width: 2;
      stroke-dasharray: 6 6;
    }
    .ride-coaster {
      position: fixed;
      left: 0; top: 0;
      z-index: 9999;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .ride-coaster .ride-thumb {
      width: 34px; height: 34px;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.15);
      margin-bottom: -4px;
      background: #fff;
    }
    .ride-coaster .ride-thumb img {
      width: 100%; height: 100%; object-fit: cover; display: block;
    }
    .ride-coaster .ride-car {
      width: 38px; height: 16px;
      border-radius: 8px;
      background: #d97757;
    }
    .ride-coaster .ride-wheels {
      display: flex;
      justify-content: space-between;
      width: 28px;
      margin-top: 1px;
    }
    .ride-coaster .ride-wheels div {
      width: 7px; height: 7px;
      border-radius: 50%;
      background: #444;
    }
  `;
  document.head.appendChild(style);

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function bezier(t, p0, p1, p2, p3) {
    const mt = 1 - t;
    return {
      x: mt * mt * mt * p0.x + 3 * mt * mt * t * p1.x + 3 * mt * t * t * p2.x + t * t * t * p3.x,
      y: mt * mt * mt * p0.y + 3 * mt * mt * t * p1.y + 3 * mt * t * t * p2.y + t * t * t * p3.y
    };
  }

  /**
   * Rides an image from `startEl` to `endEl` along a hill-shaped track.
   * @param {HTMLElement} startEl  element to launch from (e.g. the clicked product card)
   * @param {HTMLElement} endEl    element to land on (e.g. the cart icon, #cartBtn)
   * @param {string} imageSrc      thumbnail shown riding the coaster
   * @param {Function} onComplete  called once the ride finishes (e.g. actually add to cart, bump the badge)
   */
  window.rideToCart = function (startEl, endEl, imageSrc, onComplete) {
    const startRect = startEl.getBoundingClientRect();
    const endRect = endEl.getBoundingClientRect();

    const p0 = { x: startRect.left + startRect.width / 2, y: startRect.top + Math.min(40, startRect.height * 0.2) };
    const p3 = { x: endRect.left + endRect.width / 2, y: endRect.top + endRect.height / 2 };
    const liftY = Math.min(p0.y, p3.y) - 140;
    const p1 = { x: p0.x + (p3.x - p0.x) * 0.25, y: liftY };
    const p2 = { x: p0.x + (p3.x - p0.x) * 0.75, y: liftY + 40 };

    // draw the dashed track guide
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "ride-track");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `M ${p0.x} ${p0.y} C ${p1.x} ${p1.y}, ${p2.x} ${p2.y}, ${p3.x} ${p3.y}`
    );
    svg.appendChild(path);
    document.body.appendChild(svg);

    // build the coaster car + riding thumbnail
    const coaster = document.createElement("div");
    coaster.className = "ride-coaster";
    coaster.innerHTML = `
      <div class="ride-thumb"><img src="${imageSrc}" alt=""></div>
      <div class="ride-car"></div>
      <div class="ride-wheels"><div></div><div></div></div>
    `;
    document.body.appendChild(coaster);

    const duration = 1200;
    let start = null;

    function frame(ts) {
      if (!start) start = ts;
      const raw = Math.min((ts - start) / duration, 1);
      const t = easeInOutCubic(raw);
      const pt = bezier(t, p0, p1, p2, p3);
      const pt2 = bezier(Math.min(t + 0.02, 1), p0, p1, p2, p3);
      const angle = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * (180 / Math.PI);
      coaster.style.transform = `translate(${pt.x - 19}px, ${pt.y - 30}px) rotate(${angle}deg)`;

      if (raw < 1) {
        requestAnimationFrame(frame);
      } else {
        const thumb = coaster.querySelector(".ride-thumb");
        thumb.style.transition = "transform 200ms ease, opacity 200ms ease";
        thumb.style.transform = "translateY(10px) scale(0.3)";
        thumb.style.opacity = "0";

        setTimeout(() => {
          coaster.style.transition = "opacity 180ms ease";
          coaster.style.opacity = "0";
        }, 160);

        setTimeout(() => {
          coaster.remove();
          svg.remove();

          // bump the cart icon
          endEl.style.transition = "transform 220ms cubic-bezier(.4,1.8,.5,1)";
          endEl.style.transform = "scale(1.2)";
          setTimeout(() => {
            endEl.style.transform = "scale(1)";
          }, 220);

          if (typeof onComplete === "function") onComplete();
        }, 380);
      }
    }
    requestAnimationFrame(frame);
  };
})();