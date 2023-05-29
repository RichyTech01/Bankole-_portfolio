const Resume = () => {
    return ( 
        <div className="mt-5">
            <h1 className="text-3xl font-semibold">Resume</h1>
            <article>
                <h2 className="mt-6 text-2xl font-medium leading-6">Work <br/> Experience</h2>
                <div className="mt-8 space-y-12">
                    <div>
                        <p className="font-extralight">2023 - Present </p>
                        <p className="font-medium text-[1.1rem]">Frontend/Software developer</p>
                        <p className="mt-2 font-extralight">Frontend/Sofware developer at Betacodings Software Company.</p>
                    </div>

                    <div>
                        <p className="font-extralight">2023 - Present </p>
                        <p className="font-medium text-[1.1rem]">Web Designer</p>
                        <p className="mt-2 font-extralight">Web designing at Mrbarnk Web Tech, a freelancer.</p>
                    </div>
                </div>
            </article>
            <hr className="mt-10 bg-black h-[1px] opacity-[0.3] border-none"/>
            <article className="mt-7 ">
                     <h1 className="text-3xl font-semibold">Education</h1>
                <div className="space-y-12 mt-8">
                        <div>
                            <p className="font-extralight">2021 - 2022</p>
                            <p className="font-medium text-[1.1rem]">HTML & CSS3 For Beginners</p>
                            <p className="mt-2 font-extralight">Studied html and css crash course from Bucky Robert Videos</p>
                        </div>

                        <div>
                            <p className="font-extralight">2021 - 2022</p>
                            <p className="font-medium text-[1.1rem]">Frontend Development</p>
                            <p className="mt-2 font-extralight">Studied core programming from Vishwas at Code Evolution Youtube channel.</p>
                        </div>
                </div>
            </article>
        </div>
     );
}
 
export default Resume;