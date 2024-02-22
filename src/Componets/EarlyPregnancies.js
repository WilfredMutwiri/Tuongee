import earlyPregnancy from '../images/ac234c0cc52b7375cd965ef8600171d5.webp'
const EarlyPregancies = () => {
    return (
        <div class=" bg-gray-100">
            <div class="w-full pt-14 pb-10" id='earlyPregnancy'>
            <h1 class="text-blue-900 text-xl md:text-2xl pt-3 pb-3 pl-2 font-semibold text-center">Early Pregnancies</h1>
        <div class="w-11/12 pt-10 block md:flex m-auto">
        <div>
          <img class="w-96" src={earlyPregnancy}/>
        </div>
        <div class="ml-0 md:ml-10 p-3 w-full md:w-[70%]">
          <p class="text-normal md:text-lg pt-3">
          It is estimated that in the low and middle income countries there 
          are 21 million pregnancies each year of which 50% are unintended. 
          These pregnancies occur to adolescent ladies between the age of 15-19
          years old. Most of these pregnancies ends into unsafe abortion.<br/>
          From the statistics it’s clear that adolescent pregnancies are a global
          issue though it mostly occurs in poorer and marginalised communities.
          It has a great health issues, social and economic consequences.<br/>
          </p>
        </div>
        </div>
        <div class="w-11/12 m-auto pt-5">
          <p class="p-3">
          In most cases when the young girls have early pregnancies are subjected
          to a considerable pressure to marry early and as a result they end up being
          mothers at a very young age when they are not event ready.<br/>
          The teenage pregnancies increase when the adolescent girls are not allowed
          to make informed decisions about their sexual and reproductive health.
          To prevent the early pregnancies girls should be allowed to make informed
          decision about their bodies and futures, have access to the right healthcare
          services and comprehensive sexuality education. 
            </p>
        </div>
        </div>
        </div>
    );
}
 
export default EarlyPregancies;