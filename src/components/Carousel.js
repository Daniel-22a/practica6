import {Autoplay, Navigation} from "swiper/modules";
import {Pagination} from "@mui/material";
import {Swiper} from "swiper";
import {SwiperSlide} from "swiper/vue";

const Carousel = () => {
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true}}
        autoplay={{ delay: 3000}}
    >
        <SwiperSlide>
            <img src="diapositiva1.jpg" alt="Slide 1" className="slide"/>
        </SwiperSlide>

    </Swiper>

}
export default Carousel;
