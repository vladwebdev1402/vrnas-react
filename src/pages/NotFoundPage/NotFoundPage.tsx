import { useWindowToTop } from "@/hooks/useWindowToTop";
import st from "./NotFoundPage.module.scss";
import React from "react";
import { useNavigate } from "react-router-dom";
import BgShadowButton from "@/components/UI/button/BgShadowButton/BgShadowButton";
import { routerPaths } from "@/components/Router";
import man from "@/assets/man/man-in-vr-look.png";
import ImgCircleBg from "@/components/UI/ImgCircleBg/ImgCircleBg";

const NotFoundPage = () => {
  const navigate = useNavigate();
  useWindowToTop();
  return (
    <section className={`bounding-container ${st.notFound}`}>
      <div className={st.notFound__body}>
        <span className={`gradient_txt`}>404 Error</span>
        <h1 className={st.notFound__title}>Page Not Found</h1>
        <div className={`subtitle ${st.notFound__subtitle}`}>
          Oops! It looks like the page you were looking for is not here. Here
          are some possible reasons why:
          <ul>
            <li>The page may have been moved or deleted.</li>
            <li>You may have mistyped the URL.</li>
            <li>There may be a temporary problem with our server.</li>
          </ul>
          You can try the following options to find what you're looking for:
          <ul>
            <li>Check the URL for typos or errors and try again.</li>
            <li>Go back to our homepage and browse from there.</li>
          </ul>
          <br />
          If you believe there's an issue with our website, please contact us
          using the information provided on our contact page.
        </div>
        <BgShadowButton
          onClick={() => navigate(routerPaths.main)}
          className={st.notFound__btn}
        >
          back home
        </BgShadowButton>
      </div>

      <ImgCircleBg img={man} className={`${st.notFound__img}`} />
    </section>
  );
};

export default NotFoundPage;
