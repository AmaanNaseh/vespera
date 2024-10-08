import React from 'react'
import backgroundHeading from './assets/backgroundHeading.png'
import backgroundspeakers from './assets/backgroundspeakers.png'
import speakerBorder from './assets/speakerBorderDesign.png'
import Speaker from './assets/speaker.jpeg';

const speakersData=[
  {
    image:`${Speaker}`,
    name:'Mr. Obama',
    description:'Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus.'
  },
  {
    image:`${Speaker}`,
    name:'Mr. Obama',
    description:'Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus.'
  },
  {
    image:`${Speaker}`,
    name:'Mr. Obama',
    description:'Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus.'
  },
  {
    image:`${Speaker}`,
    name:'Mr. Obama',
    description:'Sit viverra tincidunt pharetra sit ornare posuere sapien diam. Nisl orci ut scelerisque vitae. Integer pretium dignissim vel tortor interdum libero at netus.'
  }
];

//style={{background: 'rgba(24, 24, 24, 1)'}} taken from top section

function Speakers() {
  return (
    <section className='flex flex-col items-center bg-black w-full h-[1000px] sm:h-[1500px] md:h-[1600px] lg:h-[2100px] 2xl:h-[2400px] xl:h-[2400px]'>
      <div className='flex justify-center items-center mt-[20px] sm:mt-[40px] w-[60%] sm:w-[40%] md:w-[50%] h-[250px] sm:h-[250px] md:h-[300px]' style={{backgroundImage:`url(${backgroundHeading})`, backgroundSize:'contain', backgroundRepeat:'no-repeat', backgroundPosition:"center"}}>
        <h1 className='font-fogLighten text-5xl text-glow text-white sm:text-8xl md:text-8xl'>Speakers</h1>
      </div>
      <div className='bg-gray-300 mt-[-70px] sm:mt-[-70px] md:mt-[-50px] w-full h-[0.5px]'></div>
      <div className='relative mt-[50px] sm:mt-[50px] md:mt-[100px] ml-[10%] w-[80%] lg:w-[90%] h-[800px] sm:h-[1000px] md:h-[1100px] lg:h-[1700px] opacity-60' style={{backgroundImage: `url(${backgroundspeakers})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'top'}}>
        <div className='w-full'>
          <div className='top-[-32px] sm:top-[-32px] md:top-[-40px] lg:top-[-40px] xl:top-[-3.7%] 2xl:top-[-3.5%] left-[5%] sm:left-[5%] md:left-[5%] lg:left-[5%] xl:left-[9%] 2xl:left-[15%] absolute flex justify-center items-center w-[170px] sm:w-[200px] md:w-[250px] lg:w-[300px] 2xl:w-[400px] xl:w-[400px] h-[170px] sm:h-[200px] md:h-[250px] lg:h-[300px] 2xl:h-[400px] xl:h-[400px]' style={{backgroundImage: `url(${speakerBorder})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', transform: 'translateX(-50%)'}}>
            <div className='mt-[65px] sm:mt-[75px] md:mt-[95px] lg:mt-[110px] 2xl:mt-[150px] xl:mt-[150px] ml-[30px] sm:ml-[35px] md:ml-[40px] lg:ml-[50px] 2xl:ml-[65px] xl:ml-[65px] rounded-[50%] w-[80px] sm:w-[95px] md:w-[120px] lg:w-[140px] 2xl:w-[190px] xl:w-[190px] h-[75px] sm:h-[90px] md:h-[115px] lg:h-[130px] 2xl:h-[180px] xl:h-[180px]' 
            // style={{backgroundImage:`url(${speakersData[0]['image']})`, backgroundPosition:'center', backgroundSize:'cover'}}
            >

            </div>
          </div>
          {/* <div className='flex flex-col justify-center items-center mt-[150px] sm:mt-[170px] md:mt-[220px] lg:mt-[270px] 2xl:mt-[350px] xl:mt-[350px] ml-[-14%] sm:ml-[-14%] md:ml-[-14%] lg:ml-[-6%] xl:ml-[-50px] 2xl:ml-[50px] rounded-xl sm:rounded-3xl w-[160px] sm:w-[220px] md:w-[270px] lg:w-[300px] 2xl:w-[380px] xl:w-[380px] h-[80px] sm:h-[120px] md:h-[120px] lg:h-[150px] 2xl:h-[200px] xl:h-[200px]' style={{border: '0.5px solid rgba(45, 45, 45, 1)', backgroundColor:'rgb(52, 52, 52)'}}>
            <h1 className='font-bold text-white sm:text-xl md:text-xl lg:text-3xl 2xl:text-4xl xl:text-4xl' style={{ fontFamily: 'SpaceGrotesk'}}>
              {speakersData[0]['name']}
              </h1>
            <p className='p-0 sm:p-2 md:p-2 lg:p-3 2xl:p-4 xl:p-4 text-[8px] text-center text-white sm:text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[15px] xl:text-[15px]'>
              {speakersData[0]['description']}
            </p>
          </div> */}
        </div>
        <div className='w-full' >
          <div className='top-[110px] sm:top-[175px] md:top-[210px] lg:top-[20%] 2xl:top-[22%] xl:top-[22%] right-[-28%] sm:right-[-20%] md:right-[-22%] lg:right-[-13%] 2xl:right-[-4%] xl:right-[-14%] absolute flex justify-center items-center w-[160px] sm:w-[200px] md:w-[250px] lg:w-[300px] 2xl:w-[400px] xl:w-[400px] h-[160px] sm:h-[200px] md:h-[250px] lg:h-[300px] 2xl:h-[400px] xl:h-[400px]' style={{backgroundImage: `url(${speakerBorder})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', transform: 'translateX(-50%) rotateY(180deg)'}}>
            <div className='mt-[60px] sm:mt-[75px] md:mt-[95px] lg:mt-[110px] 2xl:mt-[150px] xl:mt-[150px] ml-[25px] sm:ml-[35px] md:ml-[40px] lg:ml-[50px] xl:ml-[65px] 2xl:ml-[65px] rounded-[50%] w-[75px] sm:w-[95px] md:w-[120px] lg:w-[140px] 2xl:w-[190px] xl:w-[190px] h-[69px] sm:h-[90px] md:h-[115px] lg:h-[130px] 2xl:h-[180px] xl:h-[180px]' 
            // style={{backgroundImage:`url(${speakersData[1]['image']})`, backgroundPosition:'center', backgroundSize:'cover'}}
            >

            </div>
          </div>
          {/* <div className='float-right flex flex-col justify-center items-center mt-[35px] sm:mt-[90px] md:mt-[120px] lg:mt-[220px] xl:mt-[240px] 2xl:mt-[240px] mr-[-2%] sm:mr-[2%] md:mr-[2%] lg:mr-[6%] xl:mr-[7%] 2xl:mr-[13%] 2xl:ml-[-85px] rounded-xl sm:rounded-3xl w-[160px] sm:w-[220px] md:w-[270px] lg:w-[300px] 2xl:w-[380px] xl:w-[380px] h-[80px] sm:h-[120px] md:h-[120px] lg:h-[150px] xl:h-[200px] 2xl:h-[200px]' style={{border: '0.5px solid rgba(45, 45, 45, 1)', backgroundColor:'rgb(52, 52, 52)'}}>
            <h1 className='font-bold text-white sm:text-xl md:text-xl lg:text-3xl 2xl:text-4xl xl:text-4xl' style={{ fontFamily: 'SpaceGrotesk'}}>{speakersData[1]['name']}</h1>
            <p className='p-0 sm:p-2 md:p-2 lg:p-3 2xl:p-4 xl:p-4 text-[8px] text-center text-white sm:text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[15px] xl:text-[15px]' >
              {speakersData[1]['description']}
            </p>
          </div> */}
        </div>
        <div className='w-full'>
        <div className='top-[230px] sm:top-[375px] md:top-[445px] lg:top-[41%] 2xl:top-[46.3%] xl:top-[46.3%] left-[5%] sm:left-[5%] md:left-[5%] lg:left-[6%] 2xl:left-[15%] xl:left-[9%] absolute flex justify-center items-center w-[170px] sm:w-[200px] md:w-[250px] lg:w-[300px] 2xl:w-[400px] xl:w-[400px] h-[170px] sm:h-[200px] md:h-[250px] lg:h-[300px] 2xl:h-[400px] xl:h-[400px]' style={{backgroundImage: `url(${speakerBorder})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', transform: 'translateX(-50%)'}}>
            <div className='mt-[65px] sm:mt-[75px] md:mt-[95px] lg:mt-[110px] 2xl:mt-[150px] xl:mt-[150px] ml-[30px] sm:ml-[35px] md:ml-[40px] lg:ml-[50px] 2xl:ml-[65px] xl:ml-[65px] rounded-[50%] w-[80px] sm:w-[95px] md:w-[120px] lg:w-[140px] 2xl:w-[190px] xl:w-[190px] h-[75px] sm:h-[90px] md:h-[115px] lg:h-[130px] 2xl:h-[180px] xl:h-[180px]' 
            // style={{backgroundImage:`url(${speakersData[2]['image']})`, backgroundPosition:'center', backgroundSize:'cover'}}
            >
              
            </div>
          </div>
          {/* <div className='flex flex-col justify-center items-center bg-gray-900 mt-[170px] sm:mt-[300px] md:mt-[360px] lg:mt-[590px] xl:mt-[650px] ml-[-14%] sm:ml-[-13%] md:ml-[-13%] lg:ml-[-70px] xl:ml-[-50px] 2xl:ml-[55px] rounded-xl sm:rounded-3xl w-[160px] sm:w-[220px] md:w-[270px] lg:w-[300px] 2xl:w-[380px] xl:w-[380px] h-[80px] sm:h-[120px] md:h-[120px] lg:h-[150px] xl:h-[200px] 2xl:h-[200px]' style={{border: '0.5px solid rgba(45, 45, 45, 1)', backgroundColor:'rgb(52, 52, 52)'}}>
            <h1 className='font-bold text-white sm:text-xl md:text-xl lg:text-3xl 2xl:text-4xl xl:text-4xl' style={{ fontFamily: 'SpaceGrotesk'}}>{speakersData[2]['name']}</h1>
            <p className='p-0 sm:p-2 md:p-2 lg:p-3 2xl:p-4 xl:p-4 text-[8px] text-center text-white sm:text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[15px] xl:text-[15px]'>
              {speakersData[2]['description']}
            </p>
          </div> */}
        </div>
        <div className='w-full'>
          <div className='top-[365px] sm:top-[583px] md:top-[700px] lg:top-[63.0%] 2xl:top-[72%] xl:top-[72%] right-[-30%] sm:right-[-20%] md:right-[-21.5%] lg:right-[-13%] 2xl:right-[-4%] xl:right-[-14%] absolute flex justify-center items-center w-[170px] sm:w-[200px] md:w-[250px] lg:w-[300px] 2xl:w-[400px] xl:w-[400px] h-[170px] sm:h-[200px] md:h-[250px] lg:h-[300px] 2xl:h-[400px] xl:h-[400px]' style={{backgroundImage: `url(${speakerBorder})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'top', transform: 'translateX(-50%) rotateY(180deg)'}}>
            <div className='mt-[65px] sm:mt-[75px] md:mt-[95px] lg:mt-[110px] 2xl:mt-[150px] xl:mt-[150px] ml-[30px] sm:ml-[35px] md:ml-[40px] lg:ml-[50px] 2xl:ml-[65px] xl:ml-[65px] rounded-[50%] w-[80px] sm:w-[95px] md:w-[120px] lg:w-[140px] 2xl:w-[190px] xl:w-[190px] h-[75px] sm:h-[90px] md:h-[115px] lg:h-[130px] 2xl:h-[180px] xl:h-[180px]' 
            // style={{backgroundImage:`url(${speakersData[3]['image']})`, backgroundPosition:'center', backgroundSize:'cover'}}
            >
              

            </div>
          </div>
          {/* <div className='float-right flex flex-col justify-center items-center bg-gray-900 mt-[60px] sm:mt-[90px] md:mt-[130px] lg:mt-[24%] xl:mt-[240px] 2xl:mt-[240px] mr-[-0%] sm:mr-[2%] md:mr-[2%] lg:mr-[6%] xl:mr-[7%] 2xl:mr-[14%] rounded-xl sm:rounded-3xl w-[160px] sm:w-[220px] md:w-[270px] lg:w-[300px] 2xl:w-[380px] xl:w-[380px] h-[80px] sm:h-[120px] md:h-[120px] lg:h-[150px] xl:h-[200px] 2xl:h-[200px]' style={{border: '0.5px solid rgba(45, 45, 45, 1)', backgroundColor:'rgb(52, 52, 52)'}}>
            <h1 className='text-white 2xl:text-4xl xl:text:4xl font-bold sm:text-xl md:text-xl lg:text-3xl' style={{ fontFamily: 'SpaceGrotesk'}}>{speakersData[3]['name']}</h1>
            <p className='p-0 sm:p-2 md:p-2 lg:p-3 2xl:p-4 xl:p-4 text-[8px] text-center text-white sm:text-[10px] md:text-[11px] lg:text-[13px] 2xl:text-[15px] xl:text-[15px]'>
              {speakersData[3]['description']}
            </p>
          </div> */}
        </div>
      </div>
      <h1 className="absolute font-fogLighten md:top-[1000px] top-[450px] left-[50%] translate-x-[-50%] text-white text-3xl lg:text-[80px] md:text-7xl ml-[7px] lg:ml-0 ">
        Coming Soon...
      </h1>

    </section>
  )
}

export default Speakers
