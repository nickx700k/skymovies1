import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { orginalImageApi } from "../api/api";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function MovieList({ items, title }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="movielist">
      <div className="slimbleslider">
        <h3 className="page_title">{title}</h3>
        <Swiper
          slidesPerView={5}
          spaceBetween={10}
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
                <div className="movielist--movie">
                  <img
                    src={
                      item?.poster_path
                        ? `${orginalImageApi}${item?.poster_path}`
                        : `${orginalImageApi}${item?.backdrop_path}`
                    }
                    className="movielist--movie--poster"
                  />
                  <div className="movielist--movie--info">
                    <span className="movielist--movie--info--rating">
                      {item?.vote_average}
                    </span>
                    <i class="bx bxs-chevron-right-circle movielist--movie--info--icon"></i>
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
    </div>
  );
}
