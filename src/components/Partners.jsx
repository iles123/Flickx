import Border from '../assets/Logo.png';
import Border1 from '../assets/SterlingLogo.png';
import Border2 from '../assets/Group.png';
import Border3 from '../assets/fifalogo.png';
import Border4 from '../assets/donjuliologo.png';

const Partners = () => {
    return ( 
      <div className="bg-[#F8FAFC] py-10 sm:py-12 md:py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10 lg:gap-16">
                    <div className="text-center mr-16 flex-shrink-0">
                    <p className="text-lg font-semibold text-[#0057A0] leading-tight">
                        Trusted by innovators<br />
                        worldwide
                    </p>
                </div>

                {/* Animated logos section */}
                <div className="overflow-hidden">
                    <div className="flex items-center gap-16 animate-slide hover:[animation-play-state:paused] min-w-max">
                        {/* Original logos */}
                        <img src={Border} alt="Logo" className="h-12 w-auto object-contain" />
                        <img src={Border1} alt="Sterling Logo" className="h-12 w-auto object-contain" />
                        <img src={Border2} alt="Group" className="h-12 w-auto object-contain" />
                        <img src={Border3} alt='FIFA Logo' className="h-12 w-auto object-contain" />
                        <img src={Border4} alt='Don Julio Logo' className="h-12 w-auto object-contain" />
                        
                        {/* Duplicate logos for seamless infinite animation */}
                        <img src={Border} alt="Logo" className="h-12 w-auto object-contain" />
                        <img src={Border1} alt="Sterling Logo" className="h-12 w-auto object-contain" />
                        <img src={Border2} alt="Group" className="h-12 w-auto object-contain" />
                        <img src={Border3} alt='FIFA Logo' className="h-16 w-auto object-contain" />
                        <img src={Border4} alt='Don Julio Logo' className="h-12 w-auto object-contain" />
                    </div>    
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default Partners;