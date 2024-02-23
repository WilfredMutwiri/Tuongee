import earlyMarriage from '../images/1707249699031.webp'
const EarlyMarriages = () => {
    return (
        <div>
        <div  class="w-full pt-10 pb-10" id='earlyMarriages'>
        <div class="w-11/12 pt-10 block md:flex m-auto">
        <div class="pt-10 md: pt-0ml-0 md:mr-10 bg-gray-300 p-3 w-full">
        <h2 class="text-xl md:text-2xl pt-3 pb-3 pl-2 font-semibold">Early Marriages</h2>
          <p class="text-normal md:text-lg pt-3">
          I have grown up in a community where child marriages are a common thing.
          In most cases these marriages are as a result of unintended pregnancy
          and pressure of the ladies to prove their fertility.<br/> Most of these
          marriages come to an end within very short period due to continued violence
          within the marriage.Across the globe 12 million girls are married under
          the age of 18years which trickles down to around 2 girls in every second!!!
          </p>
          </div>
        <div>
          <img src={earlyMarriage} alt='earlyMarriagesImg'/>
        </div>
        </div>
        </div>
        </div>
    );
}
 
export default EarlyMarriages;