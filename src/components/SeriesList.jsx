import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { orginalImageApi } from "../api/api";
import { largeImageApi } from "../api/api";
import { UtilityContext } from "../utilities/Provider";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { useContext } from "react";

export default function MovieList({ items, title }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const { color } = useContext(UtilityContext);

  return (
    <div className="serieslist">
      <div className="slimbleslider">
        <h3 className={`page_title ${color}`}>{title}</h3>
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
                <div className="serieslist--series">
                  <img
                    src={
                      item?.poster_path
                        ? `${orginalImageApi}${item?.poster_path}`
                        : `${largeImageApi}${item?.backdrop_path}`
                    }
                    className="serieslist--series--poster"
                  />
                  <div className="serieslist--series--info">
                    <span className="serieslist--series--info--rating">
                      {item?.vote_average}
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
    </div>
  );
}
