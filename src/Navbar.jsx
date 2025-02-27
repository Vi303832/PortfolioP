import React from 'react'






function Navbar() {
    return (
        <div className='h-[84px] w-[100%] font-Poppins '>
            <div className='flex justify-between items-center h-full w-full overflow-hidden px-10'>
                <div className='text-4xl  p-3 font-bold'>
                    A.T
                </div>

                <div className='flex text-b gap-2'>
                    <div>
                        Home,
                    </div>
                    <div>
                        About Me,
                    </div>
                    <div>
                        Skills,
                    </div>
                    <div>
                        Works,
                    </div>
                    <div>
                        Contact,
                    </div>



                </div>


            </div>


        </div>
    )
}

export default Navbar