import Navbar from '../../components/navbar/Navbar';
import c from '@styles/landingPage.module.css';
import Section from '../../sections/landingPage/Section';
import InfoCard from '../../components/card/InfoCard';
import Footer from '../../components/footer/Footer';
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
import { useNavigate } from 'react-router';
import { paths } from '@routes/paths.ts';

export default function Landing(){
    const navigate = useNavigate();
    const openAllMealsPage = () =>{        
        navigate(paths.auth.login);
    };
    return(
        <div className={c.landingPage}>
            
            <div className={c.homeBannerImg}>
                <img src={HomeBanner} alt="banner" />
            </div>  

            <Navbar />

            <div className={c.spaceFromNav}>
                <Section                 
                    heading="Your Favourite Food
                        Delivered Hot &
                        Fresh"
                    description="Healthy switcher chefs do all the prep work, like 
                        peeding, chopping & marinating, so you can cook
                        a fresh food."
                    buttonText="Order Now"
                    buttonAction={openAllMealsPage}
                    imgUrl={BannerFood}
                    id="home-section"
                />
            </div>           

            <Section      
                title='ABOUT US'           
                heading="Bringing Flavor to Your Table"
                description="We are passionate about providing an unforgettable dining experience with every meal. 
                Our mission is to deliver high-quality, delicious food made from fresh, locally sourced ingredients."
                buttonText="Explore Our Menu"
                buttonAction={openAllMealsPage}
                imgUrl={AboutFoodImg}
                id="about-section"
            >             
                <div className={c.aboutDecoration}>
                    <img src={AboutBanner} alt="aboutbanner" />
                </div>
            </Section>

            <Section      
                title='WORK'           
                heading="How It Works"
                description="Browse our menu to explore a wide range of delicious options. Once you've found your favorites, select them and proceed to place your order. 
                After that, just sit back and relax as we prepare your meal, and enjoy it delivered hot and fresh right to your door."   
                id="work-section"  
            >         
                <div className={c.workSection}>    
                    <InfoCard 
                        imgUrl={PickMeal}
                        heading='Pick Meals'
                        description='Browse our menu, and select your favourites.'    
                    />
                    <InfoCard 
                        imgUrl={AddToCart}
                        heading='Review cart and buy'
                        description='Add to cart and view before closing the order'    
                    />
                    <InfoCard 
                        imgUrl={Delivery}
                        heading='Fast Deliveries'
                        description="Once you see confirmation screen only thing you can do 
                        is relax and wait for your delivery to arrive hot and fresh at your door." 
                    />
                </div>
            </Section>

            <Section
                title='CONTACT'           
                heading="You need more info?"
                description="Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                    magna non et elit. Dolor  turpis molestie dui
                    magnis facilisis at fringilla quam."  
                id="contact-section"
            >
                <div className={c.contactItems}>
                    <InfoCard 
                        imgUrl={Phone}
                        heading='Phone'
                        description='+385 91 900 9000'    
                    />
                    <InfoCard 
                        imgUrl={Mail}
                        heading='E-mail'
                        description='foodhub@info.com'    
                    />
                    <InfoCard 
                        imgUrl={Location}
                        heading='Location'
                        description='Split, Ruđera Boškovića 32'    
                    />
                    <InfoCard 
                        imgUrl={Clock}
                        heading='Working hours'
                        description='08:00 - 22:00'    
                    />
                </div>
            </Section>

            <Footer />
        </div>
    );
}