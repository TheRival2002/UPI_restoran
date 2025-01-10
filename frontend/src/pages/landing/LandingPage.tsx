import Navbar from './Navbar';
import c from '@styles/landingPage.module.css';
import Section from './Section';
import HomeBanner from '@assets/images/landingPageImgs/home-banner-background.png';
import BannerFood from '@assets/images/landingPageImgs/home-banner-image.png';
export default function LandingPage(){
    return(
        <div className={c.landingPage}>
            <div className={c.homeBannerImg}>
                <img src={HomeBanner} alt="banner" />
            </div>  
            <Navbar/>
            <Section                 
                h3="Your Favourite Food
                    Delivered Hot &
                    Fresh"
                p="Healthy switcher chefs do all the prep work, like 
                    peeding, chopping & marinating, so you can cook
                    a fresh food."
                buttonText="Order Now"
                imgUrl={BannerFood}
            />

        </div>
    );
}