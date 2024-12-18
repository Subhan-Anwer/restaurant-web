import React from 'react'

const Members = () => {
  return (
    <section className="w-full min-h-[686px] relative justify-self-center">
      {/* Background */}
      <div className="absolute w-full h-[460px] z-[1] bg-[url('/Team.jpg')] bg-center bg-cover">
        <div className="w-full h-full bg-[rgba(255,159,13,0.85)]"></div>
      </div>

      {/* Container */}
      <div className="relative w-full h-auto mt-[88px] z-10 flex flex-col items-center justify-between gap-6 text-center text-black">
        {/* Text */}
        <div className="sm:w-[418px] w-[310px] h-[176px] mt-[88px] text-center flex flex-col items-center justify-center gap-4">
          <h3 className="sm:text-5xl text-4xl font-bold">Team Member</h3>
          <p className="text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </p>
        </div>

        {/* Cards */}
        <div className="w-full max-w-[1320px] min-h-[398px] mx-auto gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* Card 1 */}
          <div className="w-[312px] h-[398px] xl:scale-100 scale-95 bg-[url('/member.jpg')] bg-center bg-cover bg-no-repeat flex items-end mx-auto">
            <div className="w-full h-[88px] bg-white shadow-[0px_0px_80px_rgba(205,205,205,0.25)] text-center flex flex-col justify-evenly">
              <h3 className="text-xl font-bold text-[#4F4F4F]">Mark Henry</h3>
              <p className="text-base text-[#828282]">Owner</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[312px] h-[398px] xl:scale-100 scale-95 bg-[url('/member.jpg')] bg-center bg-cover bg-no-repeat flex items-end mx-auto">
            <div className="w-full h-[88px] bg-white shadow-[0px_0px_80px_rgba(205,205,205,0.25)] text-center flex flex-col justify-evenly">
              <h3 className="text-xl font-bold text-[#4F4F4F]">Lucky Helen</h3>
              <p className="text-base text-[#828282]">Chef</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[312px] h-[398px] xl:scale-100 scale-95 bg-[url('/member.jpg')] bg-center bg-cover bg-no-repeat flex items-end mx-auto">
            <div className="w-full h-[88px] bg-white shadow-[0px_0px_80px_rgba(205,205,205,0.25)] text-center flex flex-col justify-evenly">
              <h3 className="text-xl font-bold text-[#4F4F4F]">Moon Henry</h3>
              <p className="text-base text-[#828282]">Founder</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="w-[312px] h-[398px] xl:scale-100 scale-95 bg-[url('/member.jpg')] bg-center bg-cover bg-no-repeat flex items-end mx-auto">
            <div className="w-full h-[88px] bg-white shadow-[0px_0px_80px_rgba(205,205,205,0.25)] text-center flex flex-col justify-evenly">
              <h3 className="text-xl font-bold text-[#4F4F4F]">Tom Monrow</h3>
              <p className="text-base text-[#828282]">Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Members