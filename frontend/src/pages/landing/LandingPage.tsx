import Navbar from './Navbar';
import c from '@styles/landingPage.module.css';
import Section from './Section';
import InfoItem from './InfoItems';
import Footer from './Footer';
import HomeBanner from '@assets/images/landingPageImgs/home-banner-background.png';
import BannerFood from '@assets/images/landingPageImgs/home-banner-image.png';
import AboutFoodImg from '@assets/images/landingPageImgs/about-background-image.png';
import AboutBanner from '@assets/images/landingPageImgs/about-background.png';
import PickMeal from '@assets/images/landingPageImgs/food.png';
import AddToCart from '@assets/images/landingPageImgs/mobile-shopping.png';
import Delivery from '@assets/images/landingPageImgs/fast-delivery.png';
import Phone from '@assets/images/landingPageImgs/telephone (2).png';
import Mail from '@assets/images/landingPageImgs/mail.png';
import Clock from '@assets/images/landingPageImgs/clock.png';
import Location from '@assets/images/landingPageImgs/pin-icon.png';

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
                    <InfoItem 
                        imgUrl={PickMeal}
                        header='Pick Meals'
                        description='Lorem ipsum dolor sit amet consectetur. Maecenas orci et '    
                    />
                    <InfoItem 
                        imgUrl={AddToCart}
                        header='Review cart and buy'
                        description='Lorem ipsum dolor sit amet consectetur. Maecenas orci et '    
                    />
                    <InfoItem 
                        imgUrl={Delivery}
                        header='Fast Deliveries'
                        description='Lorem ipsum dolor sit amet consectetur. Maecenas orci et '    
                    />
                </div>
            </Section>
            <Section
                title='CONTACT'           
                h3="You need more info?"
                p="Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam."  
            >
                <div className={c.contactItems}>
                    <InfoItem 
                        imgUrl={Phone}
                        header='Phone'
                        description='Lorem ipsum dolor sit amet consectetur. Maecenas orci et '    
                    />
                    <InfoItem 
                        imgUrl={Mail}
                        header='E-mail'
                        description='Lorem ipsum dolor sit amet consectetur. Maecenas orci et '    
                    />
                    <InfoItem 
                        imgUrl={Location}
                        header='Location'
                        description='Lorem ipsum dolor sit amet consectetur. Maecenas orci et '    
                    />
                    <InfoItem 
                        imgUrl={Clock}
                        header='Working hours'
                        description='Lorem ipsum dolor sit amet consectetur. Maecenas orci et '    
                    />
                </div>

            </Section>
            <Footer></Footer>

        </div>
    );
}