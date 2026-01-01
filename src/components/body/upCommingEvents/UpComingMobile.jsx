function UpComingMobile(props){
    return(
        <>
            {/* <section className="w-4/4 h-[600px] flex flex-col justify-center items-center"> */}

                {/* <Topic title="Up Coming Events" subtitle="Join us for exciting concerts, workshops, and recitals. Experience the joy of live music." /> */}

                <div className="w-[300px] h-fit bg-white border border-[#FDC700]  rounded-[7px] mt-10 flex flex-col justify-center items-center pl-3 pr-3 pt-4 pb-4 gap-[20.5px]">
                    <div className="w-4/4 h-[199px] bg-green-300 rounded-[7px]"></div>
                    <div className="w-4/4 h-[139px] flex flex-col gap-3">
                        <div className="flex flex-col gap-2">
                            <div className="w-full text-[1.25rem] font-semibold">{props.title}</div>
                            <div className="w-full flex flex-col gap-1">
                                <div className="flex flex-row items-center gap-3">
                                    <div className="w-4.5 h-4.5 bg-amber-800"></div>
                                    <div className="text-[1rem] text-[#454545]">2025 Oct 10</div>
                                </div>
                                <div className="flex flex-row items-center gap-3">
                                    <div className="w-4.5 h-4.5 bg-amber-800"></div>
                                    <div className="text-[1rem] text-[#454545]">Hilton Grounds</div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[37px] bg-[#FDC700] text-[1rem] font-medium  flex justify-center items-center rounded-[4px]">Read More</div>
                    </div>
                </div>
            {/* </section> */}
        </>
    )
}

export default UpComingMobile