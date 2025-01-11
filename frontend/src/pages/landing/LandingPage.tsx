import Navbar from './Navbar';
import c from '@styles/landingPage.module.css';
import Section from './Section';
import HomeBanner from '@assets/images/landingPageImgs/home-banner-background.png';
import BannerFood from '@assets/images/landingPageImgs/home-banner-image.png';
import AboutFoodImg from '@assets/images/landingPageImgs/about-background-image.png';
import AboutBanner from '@assets/images/landingPageImgs/about-background.png';
import PickMeal from '@assets/images/landingPageImgs/food.png';
import AddToCart from '@assets/images/landingPageImgs/mobile-shopping.png';
import Delivery from '@assets/images/landingPageImgs/fast-delivery.png';

import WorkItem from './WorkItem';
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

            <Section      
                title='ABOUT US'           
                h3="Food Is An Important Part Of A Balanced Diet"
                p="Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam."
                buttonText="Learn More"
                imgUrl={AboutFoodImg}
            >             
                <div className={c.aboutDecoration}>
                    <img src={AboutBanner} alt="aboutbanner" />
                </div>
            </Section>

            <Section      
                title='WORK'           
                h3="How It Works"
                p="Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam."     
            >         
                <div className={c.workSection}>    
                    <WorkItem 
                        imgUrl={PickMeal}
                        header='Pick Meals'
                        description='Lorem ipsum dolor sit amet consectetur. Maecenas orci et '    
                    />
                    <WorkItem 
                        imgUrl={AddToCart}
                        header='Review cart and buy'
                        description='Lorem ipsum dolor sit amet consectetur. Maecenas orci et '    
                    />
                    <WorkItem 
                        imgUrl={Delivery}
                        header='Fast Deliveries'
                        description='Lorem ipsum dolor sit amet consectetur. Maecenas orci et '    
                    />
                </div>
            </Section>

        </div>
    );
}