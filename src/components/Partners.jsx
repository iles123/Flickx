import Border from '../assets/Logo.png';
import Border1 from '../assets/SterlingLogo.png';
import Border2 from '../assets/Group.png';
import Border3 from '../assets/fifalogo.png';
import Border4 from '../assets/donjuliologo.png';

const Partners = () => {
    return ( 
        <div className="bg-[#F8FAFC] py-12 px-8 overflow-hidden">
            <div className="flex items-center justify-center max-w-7xl mx-auto">
                {/* Text section - aligned left */}
                <div className="text-left mr-16 flex-shrink-0">
                    <p className="text-sm font-medium text-black leading-tight">
                        Trusted by innovators<br />
                        worldwide
                    </p>
                </div>

                {/* Animated logos section */}
                <div className="overflow-hidden">
                    <div className="flex items-center gap-16 animate-slide hover:[animation-play-state:paused] min-w-max">
                        {/* Original logos */}
                        <img src={Border} alt="Logo" className="h-16 w-auto object-contain" />
                        <img src={Border1} alt="Sterling Logo" className="h-16 w-auto object-contain" />
                        <img src={Border2} alt="Group" className="h-16 w-auto object-contain" />
                        <img src={Border3} alt='FIFA Logo' className="h-16 w-auto object-contain" />
                        <img src={Border4} alt='Don Julio Logo' className="h-16 w-auto object-contain" />
                        
                        {/* Duplicate logos for seamless infinite animation */}
                        <img src={Border} alt="Logo" className="h-16 w-auto object-contain" />
                        <img src={Border1} alt="Sterling Logo" className="h-16 w-auto object-contain" />
                        <img src={Border2} alt="Group" className="h-16 w-auto object-contain" />
                        <img src={Border3} alt='FIFA Logo' className="h-16 w-auto object-contain" />
                        <img src={Border4} alt='Don Julio Logo' className="h-16 w-auto object-contain" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Partners;