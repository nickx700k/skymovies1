import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { orginalImageApi } from "../api/api";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function SimbleSlider({ items }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="slimbleslider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {items &&
          items.map((item) => (
            <SwiperSlide key={item?.id}>
              <img
                src={
                  item?.backdrop_path
                    ? `${orginalImageApi}${item?.backdrop_path}`
                    : `${orginalImageApi}${item?.poster_path}`
                }
              />
              <div className="swiper-slide--info">
                <div className="swiper-slide--info--part1">
                  <h3 className="swiper-slide--info--part1--h3">
                    {item?.title}
                  </h3>
                </div>
                <div className="swiper-slide--info--part2">
                  <div className="swiper-slide--info--part2--score">
                    <img
                      src="assets/images/imdb.png"
                      alt="imdb Logo"
                      className="swiper-slide--info--part2--score--image"
                    />
                    <span className="swiper-slide--info--part2--score--span">
                      {item?.vote_average}
                    </span>
                  </div>
                  <div className="swiper-slide--info--part2--lan">
                    <i class="bx bx-globe swiper-slide--info--part2--lan--image"></i>
                    <span className="swiper-slide--info--part2--lan--span">
                      {item?.original_language}
                    </span>
                  </div>
                </div>
                <div className="swiper-slide--info--part3">
                  <button className="swiper-slide--info--part3--button">
                    Watch
                  </button>

                  <span className="swiper-slide--info--part3--span">
                    {item?.release_date}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
}
